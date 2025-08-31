import React, { useState } from 'react';
import SEO from '../../components/common/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, User, Phone, Mail, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import EmailService from '../../services/EmailService';

const Booking = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        preferredDate: '',
        preferredTime: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [formStep, setFormStep] = useState(1); // 1: Personal Info, 2: Date & Time

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
            // Use the existing email service but create a new function for bookings
            const response = await EmailService.handleBookingSubmission(formData);
            
            if (response.success) {
                setSubmitStatus({ 
                    type: 'success', 
                    message: 'Your booking request has been submitted! We\'ll confirm your consultation time shortly.' 
                });
                
                // Clear form fields
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    preferredDate: '',
                    preferredTime: '',
                    message: ''
                });
            } else {
                setSubmitStatus({ 
                    type: 'error', 
                    message: response.message || 'Failed to submit booking. Please try again.' 
                });
            }
        } catch (error) {
            console.error('Error submitting booking:', error);
            setSubmitStatus({ 
                type: 'error', 
                message: 'Connection error. Please try again later.' 
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    // Generate time slots from 9am to 5pm
    const generateTimeSlots = () => {
        const slots = [];
        for (let hour = 9; hour <= 17; hour++) {
            const formattedHour = hour.toString().padStart(2, '0');
            slots.push(`${formattedHour}:00`);
            if (hour < 17) {
                slots.push(`${formattedHour}:30`);
            }
        }
        return slots;
    };

    // Get tomorrow's date in yyyy-mm-dd format for the min date attribute
    const getTomorrowDate = () => {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        return tomorrow.toISOString().split('T')[0];
    };

    return (
        <section className="min-h-screen bg-gradient-to-b from-orange-50 to-white py-16 md:py-24">
            <SEO
                title="Book a Consultation | Omnivest Educational Consult"
                description="Schedule a free consultation with Omnivest's education experts to discuss your study abroad goals and get personalized advice on university applications."
                keywords="book consultation, free education consultation, study abroad advice, university application help, education counseling, student visa consultation, university admission consultation"
                canonical="https://omnivesteduconsult.co.uk/booking"
            />
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Book Your Free Consultation</h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Schedule a one-on-one consultation with our education experts to discuss your study abroad plans.
                        </p>
                    </motion.div>
                    
                    {/* Form Progress Steps */}
                    <div className="flex justify-center mb-10">
                        <div className="flex items-center max-w-md w-full">
                            <div 
                                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                                    formStep >= 1 ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-600'
                                } font-bold`}
                            >
                                1
                            </div>
                            <div className={`flex-1 h-1 mx-2 ${formStep >= 2 ? 'bg-orange-500' : 'bg-gray-200'}`}></div>
                            <div 
                                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                                    formStep >= 2 ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-600'
                                } font-bold`}
                            >
                                2
                            </div>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-10">
                        {/* Booking Form */}
                        <div className="lg:col-span-2">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100"
                            >
                                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                                    <Calendar className="mr-2" size={24} />
                                    {formStep === 1 ? 'Personal Information' : 'Schedule Your Consultation'}
                                </h2>
                                
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <AnimatePresence mode="wait">
                                        {/* Step 1: Personal Information */}
                                        {formStep === 1 && (
                                            <motion.div
                                                initial={{ opacity: 0, x: -50 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: 50 }}
                                                transition={{ duration: 0.3 }}
                                                key="step1"
                                                className="space-y-6"
                                            >
                                                <div className="grid md:grid-cols-2 gap-6">
                                                    <div>
                                                        <label className="block text-gray-700 font-semibold mb-2 flex items-center">
                                                            <User className="mr-2" size={16} />
                                                            Full Name
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="name"
                                                            value={formData.name}
                                                            onChange={handleInputChange}
                                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent shadow-sm"
                                                            required
                                                            placeholder="Enter your full name"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-gray-700 font-semibold mb-2 flex items-center">
                                                            <Mail className="mr-2" size={16} />
                                                            Email
                                                        </label>
                                                        <input
                                                            type="email"
                                                            name="email"
                                                            value={formData.email}
                                                            onChange={handleInputChange}
                                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent shadow-sm"
                                                            required
                                                            placeholder="your.email@example.com"
                                                        />
                                                    </div>
                                                </div>
                                                
                                                <div>
                                                    <label className="block text-gray-700 font-semibold mb-2 flex items-center">
                                                        <Phone className="mr-2" size={16} />
                                                        Phone Number
                                                    </label>
                                                    <input
                                                        type="tel"
                                                        name="phone"
                                                        value={formData.phone}
                                                        onChange={handleInputChange}
                                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent shadow-sm"
                                                        required
                                                        placeholder="Enter your phone number"
                                                    />
                                                </div>

                                                <div>
                                                    <label className="block text-gray-700 font-semibold mb-2 flex items-center">
                                                        <MessageCircle className="mr-2" size={16} />
                                                        Additional Information (Optional)
                                                    </label>
                                                    <textarea
                                                        name="message"
                                                        value={formData.message}
                                                        onChange={handleInputChange}
                                                        rows={4}
                                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent shadow-sm"
                                                        placeholder="Tell us briefly about your study abroad goals or any specific questions you have..."
                                                    ></textarea>
                                                </div>

                                                <motion.button
                                                    type="button"
                                                    whileHover={{ scale: 1.02 }}
                                                    whileTap={{ scale: 0.98 }}
                                                    className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all flex items-center justify-center gap-2"
                                                    onClick={() => setFormStep(2)}
                                                >
                                                    Continue to Schedule
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                                    </svg>
                                                </motion.button>
                                            </motion.div>
                                        )}

                                        {/* Step 2: Schedule Information */}
                                        {formStep === 2 && (
                                            <motion.div
                                                initial={{ opacity: 0, x: 50 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -50 }}
                                                transition={{ duration: 0.3 }}
                                                key="step2"
                                                className="space-y-6"
                                            >
                                                <div className="grid md:grid-cols-2 gap-6">
                                                    <div>
                                                        <label className="block text-gray-700 font-semibold mb-2 flex items-center">
                                                            <Calendar className="mr-2" size={16} />
                                                            Preferred Date
                                                        </label>
                                                        <input
                                                            type="date"
                                                            name="preferredDate"
                                                            value={formData.preferredDate}
                                                            onChange={handleInputChange}
                                                            min={getTomorrowDate()}
                                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent shadow-sm"
                                                            required
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-gray-700 font-semibold mb-2 flex items-center">
                                                            <Clock className="mr-2" size={16} />
                                                            Preferred Time
                                                        </label>
                                                        <select
                                                            name="preferredTime"
                                                            value={formData.preferredTime}
                                                            onChange={handleInputChange}
                                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent shadow-sm"
                                                            required
                                                        >
                                                            <option value="">Select a time</option>
                                                            {generateTimeSlots().map((time) => (
                                                                <option key={time} value={time}>
                                                                    {time}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                </div>
                                                
                                                <div className="pt-4 flex flex-col sm:flex-row gap-4 sm:gap-6">
                                                    <motion.button
                                                        type="button"
                                                        whileHover={{ scale: 1.02 }}
                                                        whileTap={{ scale: 0.98 }}
                                                        className="sm:flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-all flex items-center justify-center gap-2"
                                                        onClick={() => setFormStep(1)}
                                                        disabled={isSubmitting}
                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                                                        </svg>
                                                        Back
                                                    </motion.button>
                                                    
                                                    <motion.button
                                                        type="submit"
                                                        whileHover={{ scale: 1.02 }}
                                                        whileTap={{ scale: 0.98 }}
                                                        className="sm:flex-1 bg-gradient-to-r from-orange-500 to-amber-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
                                                        disabled={isSubmitting}
                                                    >
                                                        <Calendar className="w-5 h-5" />
                                                        <span>{isSubmitting ? 'Submitting...' : 'Confirm Booking'}</span>
                                                    </motion.button>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </form>
                            </motion.div>
                            {/* The submit status message was moved here to display after the form, regardless of the step */}
                            {submitStatus && (
                                <div className={`mt-4 p-4 rounded-lg text-center ${submitStatus.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                                    {submitStatus.message}
                                </div>
                            )}
                        </div>

                        {/* Booking Info */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <div className="bg-gradient-to-b from-amber-50 to-orange-50 rounded-2xl shadow-xl p-8 sticky top-24 border border-amber-100">
                                <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    What to Expect
                                </h3>
                                
                                <ul className="space-y-5">
                                    <li className="flex items-start">
                                        <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-md">1</div>
                                        <div className="ml-4">
                                            <h4 className="font-semibold text-gray-800 text-lg">30-Minute Call</h4>
                                            <p className="text-gray-600">A focused consultation with our education experts</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-md">2</div>
                                        <div className="ml-4">
                                            <h4 className="font-semibold text-gray-800 text-lg">Personalized Advice</h4>
                                            <p className="text-gray-600">Tailored recommendations for your education journey</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-md">3</div>
                                        <div className="ml-4">
                                            <h4 className="font-semibold text-gray-800 text-lg">Next Steps Plan</h4>
                                            <p className="text-gray-600">Clear action items to move forward with your application</p>
                                        </div>
                                    </li>
                                </ul>
                                
                                <div className="mt-8 pt-6 border-t border-amber-200">
                                    <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        Have Questions?
                                    </h4>
                                    <p className="text-gray-600 mb-4">
                                        If you need immediate assistance, feel free to contact us directly:
                                    </p>
                                    <ul className="space-y-3 text-gray-700">
                                        <li className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                                            <Phone className="w-5 h-5 mr-3 text-orange-500" /> 
                                            <a href="tel:+233552088069" className="font-medium text-gray-800">055 208 8069</a>
                                        </li>
                                        <li className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                                            <Mail className="w-5 h-5 mr-3 text-orange-500" /> 
                                            <span>info@omnivesteduconsult.co.uk</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Booking;