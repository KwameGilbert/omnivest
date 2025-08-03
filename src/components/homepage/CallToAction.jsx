import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, Phone, Mail, ArrowRight } from 'lucide-react';

const CallToAction = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.3 });

    return (
        <section ref={ref} className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 text-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-300 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-300 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-4xl mx-auto"
                >
                    <motion.h2 
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl lg:text-6xl font-bold mb-6"
                    >
                        Ready to Start Your{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                            Journey?
                        </span>
                    </motion.h2>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl lg:text-2xl text-gray-200 mb-12 leading-relaxed"
                    >
                        Don't let your dreams wait. Book a free consultation today and take the first step 
                        towards your international education journey. Our experts are ready to guide you!
                    </motion.p>

                    {/* Main CTA Button */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="mb-12"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-12 py-6 rounded-xl font-bold text-xl flex items-center gap-3 mx-auto hover:shadow-2xl transition-shadow"
                        >
                            <Calendar className="w-6 h-6" />
                            Book a Free Consultation
                            <ArrowRight className="w-6 h-6" />
                        </motion.button>
                    </motion.div>

                    {/* Contact Options */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="grid md:grid-cols-3 gap-8 mb-12"
                    >
                        <motion.div 
                            whileHover={{ y: -5 }}
                            className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20"
                        >
                            <Phone className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                            <p className="text-gray-300 mb-4">Speak directly with our counselors</p>
                            <p className="text-yellow-400 font-semibold">+1 (555) 123-4567</p>
                        </motion.div>

                        <motion.div 
                            whileHover={{ y: -5 }}
                            className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20"
                        >
                            <Mail className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                            <p className="text-gray-300 mb-4">Get detailed information via email</p>
                            <p className="text-yellow-400 font-semibold">info@omnivest.com</p>
                        </motion.div>

                        <motion.div 
                            whileHover={{ y: -5 }}
                            className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20"
                        >
                            <Calendar className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Schedule Online</h3>
                            <p className="text-gray-300 mb-4">Book at your convenience</p>
                            <p className="text-yellow-400 font-semibold">24/7 Available</p>
                        </motion.div>
                    </motion.div>

                    {/* Additional Benefits */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 1.0 }}
                        className="grid md:grid-cols-3 gap-6 text-center"
                    >
                        <div className="flex items-center justify-center space-x-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            <span className="text-gray-300">Free Consultation</span>
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            <span className="text-gray-300">No Hidden Charges</span>
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            <span className="text-gray-300">Expert Guidance</span>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                    animate={{ 
                        rotate: [0, 360],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear" 
                    }}
                    className="absolute top-20 right-20 w-16 h-16 bg-yellow-400 rounded-full opacity-20"
                ></motion.div>

                <motion.div
                    animate={{ 
                        rotate: [0, -360],
                        y: [-10, 10, -10]
                    }}
                    transition={{ 
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut" 
                    }}
                    className="absolute bottom-20 left-20 w-12 h-12 bg-purple-400 rounded-full opacity-20"
                ></motion.div>
            </div>
        </section>
    );
};

export default CallToAction;
