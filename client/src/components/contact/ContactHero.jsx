import React from 'react';
import { motion } from 'framer-motion';

const ContactHero = () => {
    return (
        <section className="relative text-white py-20">
            {/* Background image with overlay */}
            <div className="absolute inset-0 z-0">
                <img 
                    src="https://source.unsplash.com/1920x1080/?university,students" 
                    alt="University students on campus" 
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gray-800 bg-opacity-70"></div>
            </div>

            {/* Content */} 
            <div className="container relative z-10 mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-4xl mx-auto"
                >
                    <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                        Contact{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                            Us
                        </span>
                    </h1>
                    <p className="text-xl text-gray-200 leading-relaxed">
                        Ready to start your journey? Get in touch with our expert consultants today.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactHero;
