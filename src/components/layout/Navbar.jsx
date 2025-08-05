import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

// The harmony colors from your Tailwind config, but with full class names
const harmonyColors = {
  darkGreen: 'bg-harmony-dark-green',
  lightTan: 'bg-harmony-light-tan',
  red: 'bg-harmony-red',
  orange: 'bg-harmony-orange',
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={`bg-harmony-light-tan text-harmony-dark-green shadow-lg backdrop-blur-lg border-b border-harmony-dark-green/10`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-3">
            <Link to="/" className="flex items-center space-x-3">
              <div className="flex items-center space-x-3">
                {logoError ? (
                  <div className={`w-12 h-12 ${harmonyColors.orange} rounded-lg flex items-center justify-center font-bold text-white text-lg`}>
                    O
                  </div>
                ) : (
                  <img
                    src="/omnivest-logo.png"
                    alt="Omnivest Logo"
                    className="w-12 h-12 object-contain"
                    onError={() => setLogoError(true)}
                  />
                )}
                <div className="flex flex-col">
                  <h1 className="text-xl font-bold">
                    <span className="text-harmony-orange">Omni</span>
                    <span className="bg-gradient-to-r from-harmony-orange to-harmony-red bg-clip-text text-transparent">
                      vest
                    </span>
                  </h1>
                  <p className="text-xs text-harmony-dark-green/70 italic">Your Journey, Our Mission</p>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-8 font-medium">
            {["Home", "About", "Services", "Packages", "Contact"].map((item, i) => (
              <li key={i}>
                <motion.div whileHover={{ y: -2 }}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="hover:text-harmony-orange transition-colors duration-300 relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-harmony-orange group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </motion.div>
              </li>
            ))}
            <li>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`bg-gradient-to-r from-harmony-orange to-harmony-red text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-shadow duration-300`}
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
            className="md:hidden focus:outline-none p-2 rounded-lg hover:bg-harmony-dark-green/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6 text-harmony-dark-green" /> : <Menu className="w-6 h-6 text-harmony-dark-green" />}
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
            className={`md:hidden bg-harmony-light-tan border-t border-harmony-dark-green/10`}
          >
            <ul className="flex flex-col px-4 py-6 space-y-4 font-medium">
              {["Home", "About", "Services", "Packages", "Contact"].map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <Link
                    to={`/${item.toLowerCase()}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-3 px-4 rounded-lg hover:bg-harmony-dark-green/10 hover:text-harmony-orange transition-all duration-300"
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className={`w-full bg-gradient-to-r from-harmony-orange to-harmony-red text-white py-3 px-4 rounded-lg font-semibold hover:shadow-lg transition-shadow duration-300`}
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