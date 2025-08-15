import React from 'react';
import { motion } from 'framer-motion';

const PackagesHero = () => {
    return (
        <section className="bg-gray-500 text-white py-20">
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
    );
};

export default PackagesHero;
