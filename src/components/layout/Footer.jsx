import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    const socialLinks = [
        { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
        { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
        { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
        { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
        { icon: <Youtube className="w-5 h-5" />, href: "#", label: "YouTube" }
    ];

    const quickLinks = [
        { name: "About Us", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Packages", href: "/packages" },
        { name: "Book Consultation", href: "/booking" },
        { name: "Application Form", href: "/intake-form" },
        { name: "FAQs", href: "/faqs" },
        { name: "Success Stories", href: "/success-stories" },
        { name: "Contact", href: "/contact" }
    ];

    const services = [
        { name: "University Selection", href: "/services" },
        { name: "Application Support", href: "/services" },
        { name: "Visa Assistance", href: "/services" },
        { name: "Financial Planning", href: "/services" },
        { name: "Pre-departure", href: "/services" },
        { name: "Ongoing Support", href: "/services" }
    ];

    return (
        <footer className="bg-gray-600 text-white">
            <div className="container mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold text-gradient bg-gradient-to-r from-orange-400 to-orange-400 bg-clip-text text-transparent mb-4">
                            Omnivest
                        </h3>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Your trusted partner for international education and investment opportunities. 
                            We help students achieve their dreams of studying abroad.
                        </p>
                        
                        {/* Social Links */}
                        <div className="flex space-x-4">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-gray-600 p-3 rounded-full hover:bg-orange-600 transition-colors"
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <motion.div
                                        whileHover={{ x: 5 }}
                                    >
                                        <Link
                                            to={`${link.href}`}
                                            className="text-gray-300 hover:text-orange-400 transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Services */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-xl font-semibold mb-6">Our Services</h4>
                        <ul className="space-y-3">
                            {services.map((service, index) => (
                                <li key={index}>
                                    <motion.div
                                       whileHover={{ x: 5 }}
                                    >
                                        <Link to={service.href}  className="text-gray-300 hover:text-orange-400 transition-colors" >
                                        {service.name}
                                        </Link>
                                    </motion.div>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-xl font-semibold mb-6">Contact Info</h4>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                                <MapPin className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                                <div>
                                    <p className="text-gray-300">
                                        123 Education Street,<br />
                                        Academic District,<br />
                                        New York, NY 10001
                                    </p>
                                </div>
                            </div>
                            
                            <div className="flex items-center space-x-3">
                                <Phone className="w-5 h-5 text-orange-400" />
                                <a href="tel:+15551234567" className="text-gray-300 hover:text-orange-400 transition-colors">
                                    +1 (555) 123-4567
                                </a>
                            </div>
                            
                            <div className="flex items-center space-x-3">
                                <Mail className="w-5 h-5 text-orange-400" />
                                <a href="mailto:info@omnivest.com" className="text-gray-300 hover:text-orange-400 transition-colors">
                                    info@omnivest.com
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
                >
                    <p className="text-gray-400 text-center md:text-left">
                        &copy; {new Date().getFullYear()} Omnivest Education Consult. All rights reserved.
                    </p>
                    
                <div>
    <div className="flex space-x-6 text-sm">
        <motion.div whileHover={{ y: -2 }}>
            <Link
                to="/privacy-policy"
                className="text-gray-400 hover:text-orange-400 transition-colors"
            >
                Privacy Policy
            </Link>
        </motion.div>
        <motion.div whileHover={{ y: -2 }}>
            <Link
                to="/terms"
                className="text-gray-400 hover:text-orange-400 transition-colors"
            >
                Terms of Service
            </Link>
        </motion.div>
        <motion.div whileHover={{ y: -2 }}>
            <Link
                to="/cookies"
                className="text-gray-400 hover:text-orange-400 transition-colors"
            >
                Cookie Policy
            </Link>
        </motion.div>
    </div>
</div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
