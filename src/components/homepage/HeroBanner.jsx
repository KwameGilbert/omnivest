import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const HeroBanner = () => {
    return (
        <section className="relative bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900 text-white min-h-screen flex items-center overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-300 rounded-full blur-3xl"></div>
            </div>
            
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="space-y-8"
                    >
                        <motion.h1 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-5xl lg:text-6xl font-bold leading-tight"
                        >
                            Your Journey,{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                                Our Mission
                            </span>
                        </motion.h1>
                        
                        <motion.p 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-xl lg:text-2xl text-gray-200 leading-relaxed"
                        >
                            Transform your dreams into reality with expert guidance for studying abroad. 
                            We provide comprehensive education consulting and investment solutions.
                        </motion.p>
                        
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 hover:shadow-lg transition-shadow"
                            >
                                Get Started
                                <ArrowRight size={20} />
                            </motion.button>
                            
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 hover:bg-white hover:text-indigo-900 transition-colors"
                            >
                                <Play size={20} />
                                Watch Story
                            </motion.button>
                        </motion.div>
                        
                        {/* Stats */}
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-600"
                        >
                            <div className="text-center">
                                <div className="text-3xl font-bold text-yellow-400">500+</div>
                                <div className="text-gray-300">Students Placed</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-yellow-400">50+</div>
                                <div className="text-gray-300">Universities</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-yellow-400">15+</div>
                                <div className="text-gray-300">Countries</div>
                            </div>
                        </motion.div>
                    </motion.div>
                    
                    {/* Right Content - Hero Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative"
                    >
                        <div className="relative">
                            <motion.div
                                animate={{ 
                                    rotate: [0, 360],
                                }}
                                transition={{ 
                                    duration: 20,
                                    repeat: Infinity,
                                    ease: "linear" 
                                }}
                                className="absolute -top-10 -left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-20"
                            ></motion.div>
                            
                            <motion.div
                                animate={{ 
                                    y: [-10, 10, -10],
                                }}
                                transition={{ 
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut" 
                                }}
                                className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20"
                            >
                                <div className="aspect-square bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
                                    <div className="text-6xl">🎓</div>
                                </div>
                            </motion.div>
                            
                            <motion.div
                                animate={{ 
                                    rotate: [0, -360],
                                }}
                                transition={{ 
                                    duration: 25,
                                    repeat: Infinity,
                                    ease: "linear" 
                                }}
                                className="absolute -bottom-10 -right-10 w-16 h-16 bg-purple-400 rounded-full opacity-20"
                            ></motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
            
            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
                </div>
            </motion.div>
        </section>
    );
};

export default HeroBanner;
