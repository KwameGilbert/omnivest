import React from 'react';
import { motion } from 'framer-motion';

const AboutCTA = () => {
    return (
        <section className="py-20 bg-gray-100">
            <div className="container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mx-auto"
                >
                    <h2 className="text-4xl font-bold text-gray-800 mb-6">
                        Ready to Start Your Journey?
                    </h2>
                    <p className="text-xl text-gray-600 mb-8">
                        Join thousands of students who have trusted us with their international education dreams.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(251, 146, 60, 0.4)" }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-md hover:shadow-lg transition-all"
                    >
                        Book Free Consultation
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutCTA;