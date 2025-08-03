import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle, Star, ArrowRight } from 'lucide-react';

const PackagesTeaser = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.3 });

    const packages = [
        {
            name: "Basic Consultation",
            price: "$299",
            duration: "1 Month",
            popular: false,
            features: [
                "University Selection Guidance",
                "Application Review",
                "Basic Document Preparation",
                "Email Support",
                "1 Video Consultation"
            ],
            color: "from-gray-500 to-gray-600"
        },
        {
            name: "Premium Package",
            price: "$799",
            duration: "6 Months",
            popular: true,
            features: [
                "Complete Application Support",
                "Visa Assistance",
                "Scholarship Guidance",
                "Interview Preparation",
                "Pre-departure Orientation",
                "24/7 Support",
                "5 Video Consultations"
            ],
            color: "from-indigo-500 to-purple-600"
        },
        {
            name: "VIP Package",
            price: "$1,499",
            duration: "12 Months",
            popular: false,
            features: [
                "End-to-end Support",
                "Guaranteed Admission*",
                "Financial Planning",
                "Accommodation Support",
                "Career Guidance",
                "Alumni Network Access",
                "Unlimited Consultations",
                "Personal Advisor"
            ],
            color: "from-yellow-500 to-orange-500"
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
                            Packages
                        </span>
                    </motion.h2>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl text-gray-600 max-w-3xl mx-auto"
                    >
                        Choose the perfect package that fits your needs and budget. 
                        Each package is designed to provide maximum value and support.
                    </motion.p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {packages.map((pkg, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden ${
                                pkg.popular ? 'ring-4 ring-indigo-500 ring-opacity-50' : ''
                            }`}
                        >
                            {pkg.popular && (
                                <div className="absolute top-0 left-0 right-0">
                                    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-center py-2 text-sm font-semibold">
                                        Most Popular
                                    </div>
                                </div>
                            )}

                            <div className={`${pkg.popular ? 'pt-12' : 'pt-8'} px-8 pb-8`}>
                                {/* Package Header */}
                                <div className="text-center mb-8">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{pkg.name}</h3>
                                    <div className="flex items-center justify-center space-x-2">
                                        <span className="text-4xl font-bold text-gray-800">{pkg.price}</span>
                                        <span className="text-gray-600">/ {pkg.duration}</span>
                                    </div>
                                </div>

                                {/* Features List */}
                                <div className="space-y-4 mb-8">
                                    {pkg.features.map((feature, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                                            transition={{ duration: 0.6, delay: 0.4 + idx * 0.1 }}
                                            className="flex items-center space-x-3"
                                        >
                                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                            <span className="text-gray-700">{feature}</span>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* CTA Button */}
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`w-full bg-gradient-to-r ${pkg.color} text-white py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-shadow flex items-center justify-center space-x-2`}
                                >
                                    <span>Choose Package</span>
                                    <ArrowRight className="w-5 h-5" />
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Info */}
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-center mt-16 space-y-6"
                >
                    <div className="bg-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Not Sure Which Package to Choose?</h3>
                        <p className="text-gray-600 mb-6">
                            Our experts will help you select the perfect package based on your goals, 
                            timeline, and budget. Get a free consultation to discuss your options.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow"
                            >
                                Book Free Consultation
                            </motion.button>
                            
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
                            >
                                Compare Packages
                            </motion.button>
                        </div>
                    </div>

                    <div className="flex items-center justify-center space-x-8 text-gray-600">
                        <div className="flex items-center space-x-2">
                            <Star className="w-5 h-5 text-yellow-500" />
                            <span>4.9/5 Customer Rating</span>
                        </div>
                        <div className="hidden sm:block w-px h-6 bg-gray-300"></div>
                        <div className="flex items-center space-x-2">
                            <CheckCircle className="w-5 h-5 text-green-500" />
                            <span>Money Back Guarantee</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default PackagesTeaser;
