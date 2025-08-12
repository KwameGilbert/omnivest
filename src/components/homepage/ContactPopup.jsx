import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const ContactPopup = ({ showDelay = 10000 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
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

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send this data to your backend or a CRM
        console.log('Contact Info Submitted:', { name, phone, email });
        alert('Thank you for your interest! We will get back to you shortly.'); // Using alert for demo, replace with custom modal
        setIsVisible(false); // Close popup after submission
        setName(''); // Clear form fields
        setPhone('');
        setEmail('');
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

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone (Optional)</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                                    placeholder="e.g., +1234567890"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email (Optional)</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                                    placeholder="your.email@example.com"
                                />
                            </div>
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02, boxShadow: "0 5px 15px -3px rgba(79, 70, 229, 0.4)" }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-gradient-to-r from-orange-600 to-yellow-600 text-white py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                            >
                                Submit
                            </motion.button>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ContactPopup;