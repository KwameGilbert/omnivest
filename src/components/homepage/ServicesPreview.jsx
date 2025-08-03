import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, FileText, Plane, DollarSign, Users, HeadphonesIcon } from 'lucide-react';

const ServicesPreview = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.3 });

    const services = [
        {
            icon: <GraduationCap className="w-8 h-8" />,
            title: "University Selection",
            description: "Expert guidance in choosing the right university and program for your goals.",
            color: "from-blue-500 to-blue-600"
        },
        {
            icon: <FileText className="w-8 h-8" />,
            title: "Application Support",
            description: "Complete assistance with application processes and documentation.",
            color: "from-green-500 to-green-600"
        },
        {
            icon: <Plane className="w-8 h-8" />,
            title: "Visa Assistance",
            description: "Streamlined visa application process with high success rates.",
            color: "from-purple-500 to-purple-600"
        },
        {
            icon: <DollarSign className="w-8 h-8" />,
            title: "Financial Planning",
            description: "Smart investment solutions and scholarship guidance.",
            color: "from-yellow-500 to-orange-500"
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Pre-Departure",
            description: "Comprehensive orientation and preparation for your journey.",
            color: "from-red-500 to-pink-500"
        },
        {
            icon: <HeadphonesIcon className="w-8 h-8" />,
            title: "Ongoing Support",
            description: "Continuous support throughout your academic journey abroad.",
            color: "from-indigo-500 to-purple-500"
        }
    ];

    return (
        <section ref={ref} className="py-20 bg-gray-50">
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
                        Our{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                            Services
                        </span>
                    </motion.h2>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl text-gray-600 max-w-3xl mx-auto"
                    >
                        From initial consultation to graduation, we provide comprehensive support 
                        at every step of your international education journey.
                    </motion.p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <motion.div
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                className={`w-16 h-16 bg-gradient-to-r ${service.color} text-white rounded-full flex items-center justify-center mb-6`}
                            >
                                {service.icon}
                            </motion.div>
                            
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                {service.title}
                            </h3>
                            
                            <p className="text-gray-600 mb-6">
                                {service.description}
                            </p>
                            
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="text-indigo-600 font-semibold hover:text-indigo-800 transition-colors"
                            >
                                Learn More →
                            </motion.button>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-center mt-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-12 rounded-2xl"
                >
                    <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
                    <p className="text-xl mb-8 opacity-90">
                        Let our experts help you plan your perfect study abroad experience.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                        >
                            Book Free Consultation
                        </motion.button>
                        
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
                        >
                            View All Services
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesPreview;
