import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
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
                    transition={{ duration: 1 }}
                    className="max-w-4xl mx-auto text-center space-y-8"
                >
                    <motion.h2 
                        initial={{ opacity: 0, y: -30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="text-4xl lg:text-5xl font-bold text-gray-800"
                    >
                        About{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                            Omnivest
                        </span>
                    </motion.h2>
                    
                    <motion.p 
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="text-xl text-gray-700 leading-relaxed mb-6"
                    >
                        <strong className="text-indigo-600">Your Journey, Our Mission</strong> - Omnivest is your trusted partner in international education, 
                        empowering students globally through access to quality education and lifelong support.
                    </motion.p>
                    
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 1, delay: 0.7 }}
                        className="bg-white p-6 rounded-xl shadow-lg mb-8 border-l-4 border-indigo-500"
                    >
                        <h3 className="text-2xl font-bold text-purple-600 mb-4">Our Mission</h3>
                        <p className="text-gray-700 leading-relaxed">
                            To support students at every step of their international education journey — career guidance, 
                            school selection, application, visa, accommodation, and settling abroad — using transparent, 
                            expert-led, and personalized services.
                        </p>
                    </motion.div>
                    
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="grid md:grid-cols-3 gap-8 pt-8"
                    >
                        <motion.div 
                            className="text-center"
                            initial={{ opacity: 0, x: -30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <motion.div
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md"
                            >
                                <Target className="w-8 h-8" />
                            </motion.div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Expert Guidance</h3>
                            <p className="text-gray-600">Personalized counseling from certified education consultants</p>
                        </motion.div>
                        
                        <motion.div 
                            className="text-center"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.7 }}
                        >
                            <motion.div
                                whileHover={{ scale: 1.1, rotate: -5 }}
                                className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md"
                            >
                                <Globe className="w-8 h-8" />
                            </motion.div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Global Network</h3>
                            <p className="text-gray-600">Partnerships with top universities worldwide</p>
                        </motion.div>
                        
                        <motion.div 
                            className="text-center"
                            initial={{ opacity: 0, x: 30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            <motion.div
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md"
                            >
                                <Briefcase className="w-8 h-8" />
                            </motion.div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Investment Solutions</h3>
                            <p className="text-gray-600">Smart financial planning for your education</p>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default BriefAbout;
