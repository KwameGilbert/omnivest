import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import EmailService from '../../services/EmailService';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
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
                    service: '',
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

    const contactInfo = [
        {
            icon: <Phone className="w-8 h-8" />,
            title: "Phone",
            details: ["+233 XX XXX XXXX", "+1 XXX XXX XXXX"],
            color: "from-blue-500 to-blue-600"
        },
        {
            icon: <Mail className="w-8 h-8" />,
            title: "Email",
            details: ["info@omnivest.com", "support@omnivest.com"],
            color: "from-green-500 to-green-600"
        },
        {
            icon: <MapPin className="w-8 h-8" />,
            title: "Office",
            details: ["Accra, Ghana", "Toronto, Canada"],
            color: "from-purple-500 to-purple-600"
        },
        {
            icon: <Clock className="w-8 h-8" />,
            title: "Hours",
            details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"],
            color: "from-yellow-500 to-orange-500"
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900 text-white py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                            Contact{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                                Us
                            </span>
                        </h1>
                        <p className="text-xl text-gray-200 leading-relaxed">
                            Ready to start your journey? Get in touch with our expert consultants today.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Info */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                            Get in{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                                Touch
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Multiple ways to reach us. Choose what works best for you.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        {contactInfo.map((info, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                            >
                                <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center text-white`}>
                                    {info.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-4">{info.title}</h3>
                                <div className="space-y-2">
                                    {info.details.map((detail, idx) => (
                                        <p key={idx} className="text-gray-600">{detail}</p>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form */}
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
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
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
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                            required
                                        />
                                    </div>
                                </div>
                                
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-gray-700 font-semibold mb-2">Phone</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 font-semibold mb-2">Service Interest</label>
                                        <select
                                            name="service"
                                            value={formData.service}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                        >
                                            <option value="">Select a service</option>
                                            <option value="basic">Basic Package</option>
                                            <option value="standard">Standard Package</option>
                                            <option value="premium">Premium Package</option>
                                            <option value="consultation">Free Consultation</option>
                                        </select>
                                    </div>
                                </div>
                                
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows={6}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                        placeholder="Tell us about your study abroad goals..."
                                        required
                                    ></textarea>
                                </div>
                                
                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-shadow flex items-center justify-center space-x-2"
                                >
                                    <Send className="w-5 h-5" />
                                    <span>Send Message</span>
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
                            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl">
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Omnivest?</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                                        <span className="text-gray-700">Expert guidance from experienced consultants</span>
                                    </li>
                                    <li className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                                        <span className="text-gray-700">Transparent and personalized services</span>
                                    </li>
                                    <li className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                                        <span className="text-gray-700">End-to-end support throughout your journey</span>
                                    </li>
                                    <li className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
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
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow"
                                >
                                    Schedule Free Call
                                </motion.button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
