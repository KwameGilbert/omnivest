import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import EmailService from '../../services/EmailService';

const ContactPopup = ({ showDelay = 60000 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const popupRef = useRef(null);
    const hasShownRef = useRef(false);

    // Effect to show the popup after a delay, but only once
    useEffect(() => {
        // Check if popup has been shown before in this session
        const hasShownBefore = sessionStorage.getItem('contactPopupShown');
        
        if (!hasShownBefore && !hasShownRef.current) {
            const timer = setTimeout(() => {
                setIsVisible(true);
                // Mark as shown in this session
                sessionStorage.setItem('contactPopupShown', 'true');
                hasShownRef.current = true;
            }, showDelay); // Popup appears after 1 minute (60000ms)

            // Cleanup the timer if the component unmounts
            return () => clearTimeout(timer);
        }
    }, [showDelay]);

    // Effect to close the popup if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                setIsVisible(false);
            }
        };

        if (isVisible) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isVisible]);

    const handleClose = () => {
        setIsVisible(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);
        
        try {
            const formData = { name, phone, email };
            const response = await EmailService.sendContactPopupNotification(formData);
            
            if (response.success) {
                setSubmitStatus({ 
                    type: 'success', 
                    message: 'Thank you! We\'ll contact you shortly.' 
                });
                
                // Clear form fields
                setName('');
                setPhone('');
                setEmail('');
                
                // Close popup after a delay
                setTimeout(() => {
                    setIsVisible(false);
                    setSubmitStatus(null);
                }, 3000);
            } else {
                setSubmitStatus({ 
                    type: 'error', 
                    message: response.message || 'Failed to submit. Please try again.' 
                });
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus({ 
                type: 'error', 
                message: 'Connection error. Please try again later.' 
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-white/5 p-4"
                >
                    <motion.div
                        ref={popupRef}
                        initial={{ scale: 0.9, y: 50 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.9, y: 50 }}
                        transition={{ duration: 0.4, type: "spring", stiffness: 200, damping: 20 }}
                        className="relative bg-white text-gray-800 rounded-xl shadow-2xl p-6 w-full max-w-md mx-auto border border-gray-200"
                    >
                        {/* Close Button */}
                        <button
                            onClick={handleClose}
                            className="absolute top-3 right-3 p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-600 focus:outline-none"
                            aria-label="Close popup"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="text-center mb-6">
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">Need More Information?</h2>
                            <p className="text-gray-600">Leave your contact details, and we'll call you back!</p>
                        </div>

                        {/* Status Message */}
                        {submitStatus && (
                            <div 
                                className={`mb-6 p-3 rounded-lg text-center ${
                                    submitStatus.type === 'success' 
                                        ? 'bg-green-50 text-green-800' 
                                        : 'bg-red-50 text-red-800'
                                }`}
                            >
                                {submitStatus.message}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:ring-1 focus:ring-orange-500 focus:border-transparent transition-all"
                                    placeholder="Your Name"
                                    required
                                    disabled={isSubmitting}
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone (Optional)</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:ring-1 focus:ring-orange-500 focus:border-transparent transition-all"
                                    placeholder="e.g., +1234567890"
                                    disabled={isSubmitting}
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email (Optional)</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:ring-1 focus:ring-orange-500 focus:border-transparent transition-all"
                                    placeholder="your.email@example.com"
                                    disabled={isSubmitting}
                                />
                            </div>
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02, boxShadow: "0 5px 15px -3px rgba(79, 70, 229, 0.4)" }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-orange-400 text-white py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all focus:outline-none focus:ring-1 focus:ring-orange-600 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed mb-3"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Submitting...' : 'Submit'}
                            </motion.button>
                            
                            <Link to="/booking" className="block text-center">
                                <motion.button
                                    type="button"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full bg-gray-100 text-gray-800 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                                >
                                    <Calendar className="w-4 h-4" />
                                    Book a Consultation
                                </motion.button>
                            </Link>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ContactPopup;