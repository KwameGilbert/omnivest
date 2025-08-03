import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-indigo-700 text-white shadow-md">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <h1 className="text-xl font-bold">Omnivest</h1>
                
                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-6 font-medium">
                    <li><Link to="/" className="hover:text-yellow-300">Home</Link></li>
                    <li><Link to="/about" className="hover:text-yellow-300">About</Link></li>
                    <li><Link to="/packages" className="hover:text-yellow-300">Packages</Link></li>
                    <li><Link to="/contact" className="hover:text-yellow-300">Contact</Link></li>
                </ul>
                
                {/* Mobile Menu Button */}
                <button 
                    onClick={toggleMenu} 
                    className="md:hidden focus:outline-none"
                    aria-label="Toggle menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
            
            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden">
                    <ul className="flex flex-col px-4 pt-2 pb-4 space-y-2 font-medium">
                        <li><Link to="/" className="block py-2 hover:text-yellow-300">Home</Link></li>
                        <li><Link to="/about" className="block py-2 hover:text-yellow-300">About</Link></li>
                        <li><Link to="/packages" className="block py-2 hover:text-yellow-300">Packages</Link></li>
                        <li><Link to="/contact" className="block py-2 hover:text-yellow-300">Contact</Link></li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
