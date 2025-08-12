import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Target } from 'lucide-react';

const VisionMission = () => {
    return (
        <section className="py-20 bg-gray-100">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="bg-white p-8 rounded-xl shadow-md border border-gray-100"
                    >
                        <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center text-white mb-6">
                            <Globe className="w-8 h-8" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h2>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            To become the most trusted and impactful educational consulting brand, empowering students globally through access to quality education and lifelong support.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="bg-white p-8 rounded-xl shadow-md border border-gray-100"
                    >
                        <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center text-white mb-6">
                            <Target className="w-8 h-8" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            To support students at every step of their international education journey — career guidance, school selection, application, visa, accommodation, and settling abroad — using transparent, expert-led, and personalized services.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default VisionMission; 