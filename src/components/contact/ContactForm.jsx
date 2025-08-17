import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import EmailService from '../../services/EmailService';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);
        
        try {
            const response = await EmailService.handleContactFormSubmission(formData);
            
            if (response.success) {
                setSubmitStatus({ 
                    type: 'success', 
                    message: 'Thank you for your message! We\'ll get back to you shortly.' 
                });
                
                // Clear form fields
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    message: ''
                });
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
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl font-bold text-gray-800 mb-8">Send us a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                                        required
                                    />
                                </div>
                            </div>
                            
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">Phone</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                                />
                            </div>
                            
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows={6}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                                    placeholder="Tell us about your study abroad goals..."
                                    required
                                ></textarea>
                            </div>
                            
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full bg-gradient-to-r from-gray-500 to-gray-600 text-white py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-shadow flex items-center justify-center space-x-2"
                                disabled={isSubmitting}
                            >
                                <Send className="w-5 h-5" />
                                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                            </motion.button>

                            {submitStatus && (
                                <div className={`mt-4 p-3 rounded-lg text-center ${submitStatus.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                                    {submitStatus.message}
                                </div>
                            )}
                        </form>
                    </motion.div>

                    {/* Additional Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Omnivest?</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                                    <span className="text-gray-700">Expert guidance from experienced consultants</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                                    <span className="text-gray-700">Transparent and personalized services</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                                    <span className="text-gray-700">End-to-end support throughout your journey</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                                    <span className="text-gray-700">High success rate with visa applications</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl">
                            <div className="flex items-center space-x-3 mb-4">
                                <MessageCircle className="w-8 h-8 text-yellow-600" />
                                <h3 className="text-2xl font-bold text-gray-800">Book a Free Consultation</h3>
                            </div>
                            <p className="text-gray-700 mb-6">
                                Not sure where to start? Book a free 30-minute consultation with our experts 
                                to discuss your goals and learn about our services.
                            </p>
                            <Link to="/booking">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow"
                                >
                                    Schedule Free Call
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
