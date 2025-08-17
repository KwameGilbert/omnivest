import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Globe, BookOpen, Users, Trophy } from 'lucide-react';

const WhyStudyAbroad = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, threshold: 0.3 }); 

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
        <section ref={ref} className="py-20 bg-gray-600 text-gray-100"> {/* Changed background and default text color */}
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <motion.h2
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.9, delay: 0.3 }}
                        className="text-4xl lg:text-5xl font-bold text-gray-100 mb-6" // Changed text color
                    >
                        Why Study{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300"> {/* Updated gradient */}
                            Abroad?
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl text-gray-300 max-w-3xl mx-auto" // Changed text color
                    >
                        Studying abroad is more than just getting a degree—it's a transformative
                        experience that shapes your future and opens doors to endless possibilities.
                    </motion.p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50, x: index % 2 === 0 ? -80 : 80 }}
                            animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.5 + index * 0.1, type: "spring", stiffness: 100 }} // Diversified animation delay and added spring type
                            whileHover={{ y: -10, boxShadow: "0 10px 25px -5px rgba(251, 146, 60, 0.2)" }} // Updated shadow color
                            className="text-center p-6 rounded-xl hover:shadow-lg transition-all bg-gray-700" // Changed background
                        >
                            <motion.div
                                whileHover={{ scale: 1.1, rotate: index % 2 === 0 ? 5 : -5 }} // Alternating rotation on hover
                                className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md 
                                    ${index === 0 || index === 3 ? 'bg-orange-200 text-orange-700 shadow-orange-700/20' : 'bg-yellow-200 text-yellow-700 shadow-yellow-700/20'}`}
                              
                            >
                                {benefit.icon}
                            </motion.div>

                            <h3 className="text-xl font-semibold text-gray-100 mb-4"> {/* Changed text color */}
                                {benefit.title}
                            </h3>

                            <p className="text-gray-300"> {/* Changed text color */}
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
                     <Link to="/intake-form" className="rounded-lg">
                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(251, 146, 60, 0.4)" }} // Updated shadow color
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-md hover:shadow-lg transition-all" // Updated gradient and shadow
                    >
                        Start Your Journey Today
                    </motion.button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default WhyStudyAbroad;
