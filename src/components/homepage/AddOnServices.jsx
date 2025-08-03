import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FileText, BookOpen, CreditCard, Languages, Video, Shield } from 'lucide-react';

const AddOnServices = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.3 });

    const addOnServices = [
        {
            icon: <FileText className="w-8 h-8" />,
            title: "Full SOP/Essay Writing",
            description: "Professional writing service for statements of purpose and essays",
            color: "from-blue-500 to-blue-600",
            price: "From $150"
        },
        {
            icon: <BookOpen className="w-8 h-8" />,
            title: "IELTS/TOEFL Materials",
            description: "Comprehensive test preparation materials and practice tests",
            color: "from-green-500 to-green-600",
            price: "From $75"
        },
        {
            icon: <CreditCard className="w-8 h-8" />,
            title: "Application Fee Waivers",
            description: "Help securing application fee waivers from universities",
            color: "from-purple-500 to-purple-600",
            price: "Success-based"
        },
        {
            icon: <Languages className="w-8 h-8" />,
            title: "Document Translation",
            description: "Official translation and notarization of documents",
            color: "from-yellow-500 to-orange-500",
            price: "From $25/doc"
        },
        {
            icon: <Video className="w-8 h-8" />,
            title: "Webinars & Workshops",
            description: "Expert-led webinars on immigration and study abroad guidance",
            color: "from-red-500 to-pink-500",
            price: "Free"
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: "Immigration Guidance",
            description: "Post-graduation immigration and work permit assistance",
            color: "from-indigo-500 to-purple-500",
            price: "From $200"
        }
    ];

    return (
        <section ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center text-white"
                    >
                        ⭐
                    </motion.div>
                    
                    <motion.h2 
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6"
                    >
                        Add-On{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">
                            Services
                        </span>
                    </motion.h2>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl text-gray-600 max-w-3xl mx-auto"
                    >
                        Enhance your study abroad experience with our specialized add-on services 
                        designed to give you extra support where you need it most.
                    </motion.p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {addOnServices.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.1 + index * 0.1 }}
                            whileHover={{ y: -10, scale: 1.03 }}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={isInView ? { scale: 1 } : {}}
                                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                                className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center text-white`}
                            >
                                {service.icon}
                            </motion.div>
                            
                            <motion.h3
                                initial={{ opacity: 0 }}
                                animate={isInView ? { opacity: 1 } : {}}
                                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                                className="text-xl font-bold text-gray-800 mb-3 text-center"
                            >
                                {service.title}
                            </motion.h3>
                            
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={isInView ? { opacity: 1 } : {}}
                                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                                className="text-gray-600 mb-4 text-center leading-relaxed"
                            >
                                {service.description}
                            </motion.p>
                            
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={isInView ? { opacity: 1 } : {}}
                                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                                className="text-center"
                            >
                                <span className={`text-lg font-semibold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                                    {service.price}
                                </span>
                            </motion.div>
                            
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`w-full mt-6 bg-gradient-to-r ${service.color} text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow`}
                            >
                                Learn More
                            </motion.button>
                        </motion.div>
                    ))}
                </div>

                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-center mt-16"
                >
                    <div className="bg-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto border border-yellow-200">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Need Multiple Add-On Services?</h3>
                        <p className="text-gray-600 mb-6">
                            Contact us to create a custom package that combines multiple add-on services 
                            at a discounted rate tailored to your specific needs.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow"
                            >
                                Get Custom Quote
                            </motion.button>
                            
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="border-2 border-yellow-500 text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-50 transition-colors"
                            >
                                View All Services
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AddOnServices;
