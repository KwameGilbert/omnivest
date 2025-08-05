import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Target, Globe, Briefcase } from 'lucide-react';

const BriefAbout = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, threshold: 0.3 });

    return (
        <section ref={ref} className="py-20 bg-gray-900 text-gray-100"> {/* Changed background and text color */}
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, type: "spring", stiffness: 100 }}
                    className="max-w-4xl mx-auto text-center space-y-8"
                >
                    <motion.h2
                        initial={{ opacity: 0, x: -40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 1, delay: 0.4, type: "spring", damping: 10 }}
                        className="text-4xl lg:text-5xl font-bold text-gray-100" // Changed text color
                    >
                        About{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300"> {/* Updated gradient */}
                            Omnivest
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, x: -70 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 1, delay: 0.6, type: "spring", damping: 15 }}
                        className="text-xl text-gray-300 leading-relaxed mb-6" // Changed text color
                    >
                        <strong className="text-yellow-400">Your Journey, Our Mission</strong> - Omnivest is your trusted partner in international education,
                        empowering students globally through access to quality education and lifelong support.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.9, delay: 0.6, type: "spring", damping: 10 }}
                        className="bg-gray-800 p-6 rounded-xl shadow-lg mb-8 border-l-4 border-orange-500" // Changed background, shadow, and border color
                        whileHover={{ boxShadow: "0 10px 25px -5px rgba(251, 146, 60, 0.2)", y: -5 }} // Updated shadow color
                    >
                        <h3 className="text-2xl font-bold text-orange-400 mb-4">Our Mission</h3> {/* Changed text color */}
                        <p className="text-gray-300 leading-relaxed"> {/* Changed text color */}
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
                            className="text-center bg-gray-800 p-6 rounded-xl shadow-sm" // Changed background
                            initial={{ opacity: 0, x: -70 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.7, delay: 0.5, type: "spring", damping: 12 }}
                            whileHover={{ y: -8, boxShadow: "0 10px 20px -5px rgba(251, 146, 60, 0.2)" }} // Updated shadow color
                        >
                            <motion.div
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                className="w-16 h-16 bg-orange-200 text-orange-700 rounded-full flex items-center justify-center mx-auto mb-5 shadow-md" // Updated icon colors
                            >
                                <Target className="w-8 h-8" />
                            </motion.div>
                            <h3 className="text-xl font-semibold text-orange-400 mb-3">Expert Guidance</h3> {/* Changed text color */}
                            <p className="text-gray-300">Personalized counseling from certified education consultants</p> {/* Changed text color */}
                        </motion.div>

                        <motion.div
                            className="text-center bg-gray-800 p-6 rounded-xl shadow-sm" // Changed background
                            initial={{ opacity: 0, y: 70 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, delay: 0.7, type: "spring", damping: 12 }}
                            whileHover={{ y: -8, boxShadow: "0 10px 20px -5px rgba(253, 224, 71, 0.2)" }} // Updated shadow color
                        >
                            <motion.div
                                whileHover={{ scale: 1.1, rotate: -5 }}
                                className="w-16 h-16 bg-yellow-200 text-yellow-700 rounded-full flex items-center justify-center mx-auto mb-5 shadow-md" // Updated icon colors
                            >
                                <Globe className="w-8 h-8" />
                            </motion.div>
                            <h3 className="text-xl font-semibold text-yellow-400 mb-3">Global Network</h3> {/* Changed text color */}
                            <p className="text-gray-300">Partnerships with top universities worldwide</p> {/* Changed text color */}
                        </motion.div>

                        <motion.div
                            className="text-center bg-gray-800 p-6 rounded-xl shadow-sm" // Changed background
                            initial={{ opacity: 0, x: 70 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.7, delay: 0.9, type: "spring", damping: 12 }}
                            whileHover={{ y: -8, boxShadow: "0 10px 20px -5px rgba(251, 146, 60, 0.2)" }} // Updated shadow color
                        >
                            <motion.div
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                className="w-16 h-16 bg-orange-200 text-orange-700 rounded-full flex items-center justify-center mx-auto mb-5 shadow-md" // Updated icon colors
                            >
                                <Briefcase className="w-8 h-8" />
                            </motion.div>
                            <h3 className="text-xl font-semibold text-orange-400 mb-3">Investment Solutions</h3> {/* Changed text color */}
                            <p className="text-gray-300">Smart financial planning for your education</p> {/* Changed text color */}
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default BriefAbout;
