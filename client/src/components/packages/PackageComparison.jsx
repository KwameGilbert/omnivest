import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const PackageComparison = () => {
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
    );
};

export default PackageComparison;
