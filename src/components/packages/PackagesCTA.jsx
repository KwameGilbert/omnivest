
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PackagesCTA = () => {
    return (
        <section className="py-20 bg-gradient-to-r from-gray-400 to-gray-600 text-white">
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
                    <p className="text-xl mb-8 text-gray-200">
                        Book a free consultation to discuss which package is right for you.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link
                                to="/intake-form"
                                className="bg-white text-gray-600 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-shadow block"
                            >
                                Start Application
                            </Link>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link
                                to="/contact"
                                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-orange-600 transition-colors block"
                            >
                                Get Custom Quote
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default PackagesCTA;
