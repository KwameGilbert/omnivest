import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Star, ArrowRight, Zap, Crown, Plus } from 'lucide-react';

const Packages = () => {
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

    const addOnServices = [
        { name: "Full SOP/Essay Writing", price: "From $150" },
        { name: "IELTS/TOEFL Materials", price: "From $75" },
        { name: "Application Fee Waivers", price: "Success-based" },
        { name: "Document Translation", price: "From $25/doc" },
        { name: "Webinars & Workshops", price: "Free" },
        { name: "Immigration Guidance", price: "From $200" }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900 text-white py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                            Our{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                                Packages
                            </span>
                        </h1>
                        <p className="text-xl text-gray-200 leading-relaxed">
                            Choose the perfect package that fits your needs and budget. Transparent, affordable, and flexible.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Packages */}
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
                </div>
            </section>

            {/* Add-On Services */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center text-white">
                            <Plus className="w-8 h-8" />
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                            Add-On{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">
                                Services
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Enhance any package with our specialized add-on services.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {addOnServices.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl hover:shadow-lg transition-shadow"
                            >
                                <h3 className="font-semibold text-gray-800 mb-2">{service.name}</h3>
                                <p className="text-yellow-600 font-bold">{service.price}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                            Package{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                                Comparison
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Compare features across all packages to find the perfect fit.
                        </p>
                    </motion.div>

                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-4xl mx-auto">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                                    <tr>
                                        <th className="px-6 py-4 text-left">Features</th>
                                        <th className="px-6 py-4 text-center">Basic</th>
                                        <th className="px-6 py-4 text-center">Standard</th>
                                        <th className="px-6 py-4 text-center">Premium</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {[
                                        "Career Counseling",
                                        "University Selection",
                                        "Application Support",
                                        "Visa Support",
                                        "Accommodation Help",
                                        "Flight Booking",
                                        "Post-Arrival Support",
                                        "Alumni Mentorship"
                                    ].map((feature, index) => (
                                        <tr key={index} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 font-medium text-gray-800">{feature}</td>
                                            <td className="px-6 py-4 text-center">
                                                {index < 4 ? (
                                                    <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                                                ) : (
                                                    <span className="text-gray-400">-</span>
                                                )}
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                {index < 6 ? (
                                                    <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                                                ) : (
                                                    <span className="text-gray-400">-</span>
                                                )}
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl mx-auto"
                    >
                        <h2 className="text-4xl font-bold mb-6">
                            Ready to Start Your Journey?
                        </h2>
                        <p className="text-xl mb-8 text-blue-100">
                            Book a free consultation to discuss which package is right for you.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-shadow"
                            >
                                Book Free Consultation
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-colors"
                            >
                                Get Custom Quote
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Packages;
