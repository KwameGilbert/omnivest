import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Zap, Crown } from 'lucide-react';
import { Link } from 'react-router-dom';

const PackageCards = () => {
    const packages = [
        {
            name: "Basic",
            subtitle: "Get Me In",
            price: "Contact for Pricing",
            duration: "3-4 Months",
            popular: false,
            features: [
                "Career Counseling",
                "University Selection & Application",
                "SOP/Essay Guidance",
                "Document Checklist",
                "Scholarship Suggestions"
            ],
            color: "from-green-500 to-green-600",
            icon: <CheckCircle className="w-6 h-6" />
        },
        {
            name: "Standard",
            subtitle: "Ready to Fly",
            price: "Contact for Pricing",
            duration: "4-5 Months",
            popular: true,
            features: [
                "Everything in Basic, plus:",
                "Visa Support",
                "Accommodation Help",
                "Pre-departure Briefing",
                "Flight Booking",
                "Basic Test Prep Advice"
            ],
            color: "from-blue-500 to-blue-600",
            icon: <Zap className="w-6 h-6" />
        },
        {
            name: "Premium",
            subtitle: "Settle Me Abroad",
            price: "Contact for Pricing",
            duration: "5-6 Months",
            popular: false,
            features: [
                "Everything in Standard, plus:",
                "Airport Pickup Coordination",
                "SIM/Bank Setup Advice",
                "Post-Arrival Support",
                "Health Insurance Guidance",
                "Alumni Mentorship"
            ],
            color: "from-purple-500 to-purple-600",
            icon: <Crown className="w-6 h-6" />
        }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                        Study Abroad{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                            Packages
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Each package is designed to provide maximum value and support at different stages of your journey.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
                    {packages.map((pkg, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden ${
                                pkg.popular ? 'ring-4 ring-blue-500 ring-opacity-50' : ''
                            }`}
                        >
                            {pkg.popular && (
                                <div className="absolute top-0 left-0 right-0">
                                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white text-center py-2 text-sm font-semibold">
                                        Most Popular
                                    </div>
                                </div>
                            )}

                            <div className={`${pkg.popular ? 'pt-12' : 'pt-8'} px-8 pb-8`}>
                                {/* Package Header */}
                                <div className="text-center mb-8">
                                    <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${pkg.color} rounded-xl flex items-center justify-center text-white`}>
                                        {pkg.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-1">{pkg.name}</h3>
                                    <p className="text-lg text-gray-600 mb-3">"{pkg.subtitle}"</p>
                                    <div className="flex flex-col items-center">
                                        <span className="text-2xl font-bold text-gray-800">{pkg.price}</span>
                                        <span className="text-gray-600">{pkg.duration}</span>
                                    </div>
                                </div>

                                {/* Features List */}
                                <div className="space-y-4 mb-8">
                                    {pkg.features.map((feature, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.6, delay: 0.4 + idx * 0.1 }}
                                            className="flex items-center space-x-3"
                                        >
                                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                            <span className="text-gray-700">{feature}</span>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* CTA Button */}
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Link
                                        to="/contact"
                                        className={`w-full bg-gradient-to-r ${pkg.color} text-white py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-shadow flex items-center justify-center space-x-2`}
                                    >
                                        <span>Choose Package</span>
                                        <ArrowRight className="w-5 h-5" />
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PackageCards;
