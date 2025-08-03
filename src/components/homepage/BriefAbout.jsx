import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const BriefAbout = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.3 });

    return (
        <section ref={ref} className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto text-center space-y-8"
                >
                    <motion.h2 
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl lg:text-5xl font-bold text-gray-800"
                    >
                        About{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                            Omnivest
                        </span>
                    </motion.h2>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl text-gray-600 leading-relaxed"
                    >
                        Omnivest Education Consult is your trusted partner in international education. 
                        With over a decade of experience, we've helped thousands of students achieve 
                        their dreams of studying abroad while providing smart investment solutions 
                        for their educational journey.
                    </motion.p>
                    
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="grid md:grid-cols-3 gap-8 pt-8"
                    >
                        <div className="text-center">
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl"
                            >
                                🎯
                            </motion.div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Expert Guidance</h3>
                            <p className="text-gray-600">Personalized counseling from certified education consultants</p>
                        </div>
                        
                        <div className="text-center">
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl"
                            >
                                🌍
                            </motion.div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Global Network</h3>
                            <p className="text-gray-600">Partnerships with top universities worldwide</p>
                        </div>
                        
                        <div className="text-center">
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl"
                            >
                                💼
                            </motion.div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Investment Solutions</h3>
                            <p className="text-gray-600">Smart financial planning for your education</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default BriefAbout;
