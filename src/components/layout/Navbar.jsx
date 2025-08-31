import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#f3f4f6]/95 text-[#111827] shadow-lg backdrop-blur-lg border-b border-[#111827]/10"
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-3">
            <Link to="/" className="flex items-center space-x-3">
              <div className="flex items-center space-x-3">
                {logoError ? (
                  // Fallback logo uses a gradient of accent colors
                  <div className="w-10 h-10 bg-gradient-to-br from-[#f59e0b] to-[#f97316] rounded-lg flex items-center justify-center font-bold text-white text-lg">
                    O
                  </div>
                ) : (
                  <img
                    src="/images/omnivest_favicon.png"
                    alt="Omnivest Logo"
                    className="w-10 h-10 object-contain"
                    onError={() => setLogoError(true)}
                  />
                )}
                <div className="flex flex-col">
                  <p className="text-xl font-bold">
                    {/* "Omni" in primary text color, "vest" with a vibrant gradient */}
                    <span className="text-[#111827]">Omni</span>
                    <span className="bg-gradient-to-r from-[#f59e0b] to-[#f97316] bg-clip-text text-transparent">
                      vest 
                    </span> Educational Consult
                  </p>
                  {/* Tagline in a slightly muted primary text color */}
                  <p className="text-xs text-[#111827]/70 italic">Your Journey, Our Mission</p>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-8 font-medium">
            {["Home", "About", "Services", "Packages", "Contact"].map((item, i) => {
              // Handle 'Home' special case for root path
              const path = item.toLowerCase() === 'home' ? '' : item.toLowerCase();
              const isActive = location.pathname === `/${path}`;
              
              return (
                <li key={i}>
                  <motion.div whileHover={{ y: -2 }}>
                    <Link
                      to={`/${path}`}
                      className={`transition-colors duration-300 relative group ${
                        isActive 
                          ? "text-[#f59e0b] font-semibold" 
                          : "text-[#111827]/90 hover:text-[#f59e0b]"
                      }`}
                    >
                      {item}
                      {/* Underline active or hover state */}
                      <span 
                        className={`absolute -bottom-1 left-0 h-0.5 bg-[#f59e0b] transition-all duration-300 ${
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      ></span>
                    </Link>
                  </motion.div>
                </li>
              );
            })}
            <li>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to="/booking"
                  className={`px-5 py-2 rounded-lg font-semibold transition-all duration-300 border shadow-sm block ${
                    location.pathname === '/booking'
                      ? "bg-gray-600 text-white border-gray-700"
                      : "bg-orange-500 text-white hover:bg-gray-600 border-orange-600"
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleMenu}
            // Icon color is primary dark, subtle hover background
            className="md:hidden focus:outline-none p-2 rounded-lg hover:bg-[#111827]/10 transition-colors text-[#111827]"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            // Mobile menu background is light, slightly transparent, with subtle border
            className="md:hidden bg-[#f3f4f6]/95 border-t border-[#111827]/10"
          >
            <ul className="flex flex-col px-4 py-6 space-y-4 font-medium">
              {["Home", "About", "Services", "Packages", "Contact"].map((item, i) => {
                // Handle 'Home' special case for root path
                const path = item.toLowerCase() === 'home' ? '' : item.toLowerCase();
                const isActive = location.pathname === `/${path}`;
                
                return (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                  >
                    <Link
                      to={`/${path}`}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block py-3 px-4 rounded-lg hover:bg-[#111827]/10 transition-all duration-300 ${
                        isActive 
                          ? "bg-orange-100/70 text-[#f59e0b] font-semibold border-l-4 border-[#f59e0b]" 
                          : "text-[#111827] hover:text-[#f59e0b]"
                      }`}
                    >
                      {item}
                    </Link>
                  </motion.li>
                );
              })}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-2"
              >
                <Link
                  to="/booking"
                  onClick={() => setIsMenuOpen(false)}
                  className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 block text-center ${
                    location.pathname === '/booking'
                      ? "bg-[#111827] text-[#f3f4f6] border border-[#111827]"
                      : "bg-[#f59e0b] text-[#f3f4f6] hover:bg-[#111827] border border-[#f59e0b]"
                  }`}
                >
                  Get Started
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
