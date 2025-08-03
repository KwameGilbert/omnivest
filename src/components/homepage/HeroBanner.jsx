import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import Typed from 'typed.js';

const HeroBanner = () => {
    const typedRef = useRef(null);

    useEffect(() => {
        const typed = new Typed(typedRef.current, {
            strings: [
                'Your Journey, Our Mission',
                'Your Education, Our Expertise', 
                'Your Future, Our Commitment'
            ],
            typeSpeed: 60,
            backSpeed: 30,
            backDelay: 2000,
            startDelay: 500,
            loop: true,
            showCursor: true,
            cursorChar: '|'
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <section className="relative bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900 text-white min-h-screen flex items-center overflow-hidden">
            {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
                            <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-300 rounded-full blur-3xl"></div>
                        </div>
                        
                        <div className="container mx-auto px-4 relative z-10 py-20">
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
                                        transition={{ duration: 1, delay: 0.4 }}
                                        className="text-4xl lg:text-5xl font-bold leading-tight h-[4.5rem] flex items-start"
                                        >
                                        <span 
                                            ref={typedRef}
                                            className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400"
                                        >
                                        </span>
                                    </motion.h1>

                                    <motion.p 
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8, delay: 0.4 }}
                                        className="text-xl text-gray-200 leading-relaxed min-h-[4.5rem]"
                                    >
                                        Empowering students globally through access to quality education and lifelong support. 
                                        We support you at every step - from career guidance to settling abroad.
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
                                            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 hover:shadow-lg transition-shadow"
                                        >
                                            Get Started
                                            <ArrowRight size={20} />
                                        </motion.button>
                                        
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="border-2 border-white text-white px-6 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 hover:bg-white hover:text-indigo-900 transition-colors"
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
                                        className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-600"
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
                                            className="absolute -top-8 -left-8 w-16 h-16 bg-yellow-400 rounded-full opacity-20"
                                        ></motion.div>
                                        
                                        <motion.div
                                            animate={{ 
                                                y: [-8, 8, -8],
                                            }}
                                            transition={{ 
                                                duration: 3,
                                                repeat: Infinity,
                                                ease: "easeInOut" 
                                            }}
                                            className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-6 border border-white border-opacity-20 overflow-hidden"
                                        >
                                            <div className="aspect-[4/3] bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl overflow-hidden">
                                                <img 
                                                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                                                    alt="Students studying together"
                                                    className="w-full h-full object-cover"
                                                />
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
                                            className="absolute -bottom-8 -right-8 w-14 h-14 bg-purple-400 rounded-full opacity-20"
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
