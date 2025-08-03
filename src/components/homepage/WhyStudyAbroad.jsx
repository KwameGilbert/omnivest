import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Globe, BookOpen, Users, Trophy } from 'lucide-react';

const WhyStudyAbroad = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.3 });

    const benefits = [
        {
            icon: <Globe className="w-8 h-8" />,
            title: "Global Perspective",
            description: "Gain international exposure and develop a global mindset that employers value."
        },
        {
            icon: <BookOpen className="w-8 h-8" />,
            title: "Quality Education",
            description: "Access world-class universities with cutting-edge research and facilities."
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Cultural Exchange",
            description: "Immerse yourself in new cultures and build lifelong international connections."
        },
        {
            icon: <Trophy className="w-8 h-8" />,
            title: "Career Advancement",
            description: "Enhance your career prospects with internationally recognized qualifications."
        }
    ];

    return (
        <section ref={ref} className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <motion.h2 
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6"
                    >
                        Why Study{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                            Abroad?
                        </span>
                    </motion.h2>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl text-gray-600 max-w-3xl mx-auto"
                    >
                        Studying abroad is more than just getting a degree—it's a transformative 
                        experience that shapes your future and opens doors to endless possibilities.
                    </motion.p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow"
                        >
                            <motion.div
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-6"
                            >
                                {benefit.icon}
                            </motion.div>
                            
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                {benefit.title}
                            </h3>
                            
                            <p className="text-gray-600">
                                {benefit.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action */}
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-center mt-16"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-shadow"
                    >
                        Start Your Journey Today
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default WhyStudyAbroad;
