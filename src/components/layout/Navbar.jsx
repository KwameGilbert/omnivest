import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <motion.nav 
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-indigo-800 via-indigo-700 to-purple-800 text-white shadow-lg backdrop-blur-lg border-b border-white border-opacity-10"
        >
            <div className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center space-x-2"
                    >
                        <Link to="/" className="flex items-center space-x-2">
                            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center font-bold text-black text-lg">
                                O
                            </div>
                            <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                                Omnivest
                            </h1>
                        </Link>
                    </motion.div>
                    
                    {/* Desktop Menu */}
                    <ul className="hidden md:flex items-center space-x-8 font-medium">
                        <li>
                            <motion.div whileHover={{ y: -2 }}>
                                <Link 
                                    to="/" 
                                    className="hover:text-yellow-300 transition-colors duration-300 relative group"
                                >
                                    Home
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
                                </Link>
                            </motion.div>
                        </li>
                        <li>
                            <motion.div whileHover={{ y: -2 }}>
                                <Link 
                                    to="/about" 
                                    className="hover:text-yellow-300 transition-colors duration-300 relative group"
                                >
                                    About
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
                                </Link>
                            </motion.div>
                        </li>
                        <li>
                            <motion.div whileHover={{ y: -2 }}>
                                <Link 
                                    to="/services" 
                                    className="hover:text-yellow-300 transition-colors duration-300 relative group"
                                >
                                    Services
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
                                </Link>
                            </motion.div>
                        </li>
                        <li>
                            <motion.div whileHover={{ y: -2 }}>
                                <Link 
                                    to="/packages" 
                                    className="hover:text-yellow-300 transition-colors duration-300 relative group"
                                >
                                    Packages
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
                                </Link>
                            </motion.div>
                        </li>
                        <li>
                            <motion.div whileHover={{ y: -2 }}>
                                <Link 
                                    to="/contact" 
                                    className="hover:text-yellow-300 transition-colors duration-300 relative group"
                                >
                                    Contact
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
                                </Link>
                            </motion.div>
                        </li>
                        <li>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-shadow duration-300"
                            >
                                Get Started
                            </motion.button>
                        </li>
                    </ul>
                    
                    {/* Mobile Menu Button */}
                    <motion.button 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={toggleMenu} 
                        className="md:hidden focus:outline-none p-2 rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </motion.button>
                </div>
            </div>
            
            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-indigo-900 bg-opacity-95 backdrop-blur-lg border-t border-white border-opacity-10"
                    >
                        <ul className="flex flex-col px-4 py-6 space-y-4 font-medium">
                            <motion.li
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 }}
                            >
                                <Link 
                                    to="/" 
                                    onClick={() => setIsMenuOpen(false)}
                                    className="block py-3 px-4 rounded-lg hover:bg-white hover:bg-opacity-10 hover:text-yellow-300 transition-all duration-300"
                                >
                                    Home
                                </Link>
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <Link 
                                    to="/about" 
                                    onClick={() => setIsMenuOpen(false)}
                                    className="block py-3 px-4 rounded-lg hover:bg-white hover:bg-opacity-10 hover:text-yellow-300 transition-all duration-300"
                                >
                                    About
                                </Link>
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                <Link 
                                    to="/services" 
                                    onClick={() => setIsMenuOpen(false)}
                                    className="block py-3 px-4 rounded-lg hover:bg-white hover:bg-opacity-10 hover:text-yellow-300 transition-all duration-300"
                                >
                                    Services
                                </Link>
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                <Link 
                                    to="/packages" 
                                    onClick={() => setIsMenuOpen(false)}
                                    className="block py-3 px-4 rounded-lg hover:bg-white hover:bg-opacity-10 hover:text-yellow-300 transition-all duration-300"
                                >
                                    Packages
                                </Link>
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                <Link 
                                    to="/contact" 
                                    onClick={() => setIsMenuOpen(false)}
                                    className="block py-3 px-4 rounded-lg hover:bg-white hover:bg-opacity-10 hover:text-yellow-300 transition-all duration-300"
                                >
                                    Contact
                                </Link>
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.6 }}
                            >
                                <button
                                    onClick={() => setIsMenuOpen(false)}
                                    className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black py-3 px-4 rounded-lg font-semibold hover:shadow-lg transition-shadow duration-300"
                                >
                                    Get Started
                                </button>
                            </motion.li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
