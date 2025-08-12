import React from 'react';
import { motion } from 'framer-motion';

const AboutHero = () => {
    return (
        <section className="bg-gray-600 text-white py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-4xl mx-auto"
                >
                    <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                        About{' '}
                        <span className="text-orange-400">
                            Omnivest
                        </span>
                    </h1>
                    <p className="text-xl text-gray-200 leading-relaxed">
                        Your Journey, Our Mission - Empowering students globally through access to quality education and lifelong support.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutHero;