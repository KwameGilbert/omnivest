import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Target, Globe, Briefcase } from 'lucide-react';

const BriefAbout = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, threshold: 0.3 });

    return (
        <section ref={ref} className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, type: "spring", stiffness: 100 }}
                    className="max-w-4xl mx-auto text-center space-y-8"
                >
                    <motion.h2 
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.3, type: "spring", damping: 8 }}
                        className="text-4xl lg:text-5xl font-bold text-gray-800"
                    >
                        About{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                            Omnivest
                        </span>
                    </motion.h2>
                    
                    <motion.p 
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.5, type: "spring", damping: 12 }}
                        className="text-xl text-gray-700 leading-relaxed mb-6"
                    >
                        <strong className="text-indigo-700">Your Journey, Our Mission</strong> - Omnivest is your trusted partner in international education, 
                        empowering students globally through access to quality education and lifelong support.
                    </motion.p>
                    
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.9, delay: 0.6, type: "spring", damping: 10 }}
                        className="bg-white p-6 rounded-xl shadow-lg mb-8 border-l-4 border-purple-600"
                        whileHover={{ boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.2)", y: -5 }}
                    >
                        <h3 className="text-2xl font-bold text-indigo-700 mb-4">Our Mission</h3>
                        <p className="text-gray-700 leading-relaxed">
                            To support students at every step of their international education journey — career guidance, 
                            school selection, application, visa, accommodation, and settling abroad — using transparent, 
                            expert-led, and personalized services.
                        </p>
                    </motion.div>
                    
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
                        className="grid md:grid-cols-3 gap-8 pt-10"
                    >
                        <motion.div 
                            className="text-center bg-white p-6 rounded-xl shadow-sm"
                            initial={{ opacity: 0, x: -70 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.7, delay: 0.5, type: "spring", damping: 12 }}
                            whileHover={{ y: -8, boxShadow: "0 10px 20px -5px rgba(79, 70, 229, 0.2)" }}
                        >
                            <motion.div
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                className="w-16 h-16 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center mx-auto mb-5 shadow-md"
                            >
                                <Target className="w-8 h-8" />
                            </motion.div>
                            <h3 className="text-xl font-semibold text-indigo-700 mb-3">Expert Guidance</h3>
                            <p className="text-gray-600">Personalized counseling from certified education consultants</p>
                        </motion.div>
                        
                        <motion.div 
                            className="text-center bg-white p-6 rounded-xl shadow-sm"
                            initial={{ opacity: 0, y: 70 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, delay: 0.7, type: "spring", damping: 12 }}
                            whileHover={{ y: -8, boxShadow: "0 10px 20px -5px rgba(124, 58, 237, 0.2)" }}
                        >
                            <motion.div
                                whileHover={{ scale: 1.1, rotate: -5 }}
                                className="w-16 h-16 bg-purple-100 text-purple-700 rounded-full flex items-center justify-center mx-auto mb-5 shadow-md"
                            >
                                <Globe className="w-8 h-8" />
                            </motion.div>
                            <h3 className="text-xl font-semibold text-purple-700 mb-3">Global Network</h3>
                            <p className="text-gray-600">Partnerships with top universities worldwide</p>
                        </motion.div>
                        
                        <motion.div 
                            className="text-center bg-white p-6 rounded-xl shadow-sm"
                            initial={{ opacity: 0, x: 70 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.7, delay: 0.9, type: "spring", damping: 12 }}
                            whileHover={{ y: -8, boxShadow: "0 10px 20px -5px rgba(79, 70, 229, 0.2)" }}
                        >
                            <motion.div
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                className="w-16 h-16 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center mx-auto mb-5 shadow-md"
                            >
                                <Briefcase className="w-8 h-8" />
                            </motion.div>
                            <h3 className="text-xl font-semibold text-indigo-700 mb-3">Investment Solutions</h3>
                            <p className="text-gray-600">Smart financial planning for your education</p>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default BriefAbout;
