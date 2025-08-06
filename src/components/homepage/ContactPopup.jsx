import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const ContactPopup = ({ showDelay = 30000 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const popupRef = useRef(null);

    // Effect to show the popup after a delay
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, showDelay); // Popup appears after 'showDelay' milliseconds

        // Cleanup the timer if the component unmounts
        return () => clearTimeout(timer);
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
                        className="relative bg-[#f3f4f6] text-[#111827] rounded-xl shadow-2xl p-6 w-full max-w-md mx-auto border border-[#111827]/10"
                    >
                        {/* Close Button */}
                        <button
                            onClick={handleClose}
                            className="absolute top-3 right-3 p-2 rounded-full hover:bg-[#111827]/10 transition-colors text-[#111827] focus:outline-none"
                            aria-label="Close popup"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="text-center mb-6">
                            <h2 className="text-2xl font-bold text-[#111827] mb-2">Need More Information?</h2>
                            <p className="text-[#111827]/85">Leave your contact details, and we'll call you back!</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-[#111827]/90 mb-1">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full px-4 py-2 border border-[#111827]/20 rounded-lg bg-white text-[#111827] placeholder-[#111827]/50 focus:ring-2 focus:ring-[#f59e0b] focus:border-transparent transition-all"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-[#111827]/90 mb-1">Phone (Optional)</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className="w-full px-4 py-2 border border-[#111827]/20 rounded-lg bg-white text-[#111827] placeholder-[#111827]/50 focus:ring-2 focus:ring-[#f59e0b] focus:border-transparent transition-all"
                                    placeholder="e.g., +1234567890"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-[#111827]/90 mb-1">Email (Optional)</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-4 py-2 border border-[#111827]/20 rounded-lg bg-white text-[#111827] placeholder-[#111827]/50 focus:ring-2 focus:ring-[#f59e0b] focus:border-transparent transition-all"
                                    placeholder="your.email@example.com"
                                />
                            </div>
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02, boxShadow: "0 5px 15px -3px rgba(245, 158, 11, 0.4)" }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-gradient-to-r from-[#f59e0b] to-[#f97316] text-white py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-[#f59e0b] focus:ring-offset-2"
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
