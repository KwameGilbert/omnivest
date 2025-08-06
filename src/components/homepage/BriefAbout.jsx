import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Target, Globe, Briefcase, Check } from 'lucide-react';

const BriefAbout = () => {
    const ref = useRef(null);
    // Trigger animation when 30% of the component is in view
    const isInView = useInView(ref, { once: false, threshold: 0.3 });

    return (
        // Section background with a subtle green gradient overlay for more visual interest
        <section ref={ref} className="py-20 bg-gradient-to-b from-harmony-light to-harmony-green/5 text-harmony-dark">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, type: "spring", stiffness: 100 }}
                    className="max-w-4xl mx-auto text-center space-y-8"
                >
                    {/* Heading: "About" in dark, "Omnivest" with a vibrant green-orange gradient */}
                    <motion.h2
                        initial={{ opacity: 0, x: -40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 1, delay: 0.4, type: "spring", damping: 10 }}
                        className="text-4xl lg:text-5xl font-bold text-harmony-dark"
                    >
                        About{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-harmony-green to-harmony-orange">
                            Omnivest
                        </span>
                    </motion.h2>

                    {/* Enhanced tagline with more green elements and decorated with a subtle line */}
                    <motion.div
                        initial={{ opacity: 0, x: -70 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 1, delay: 0.6, type: "spring", damping: 15 }}
                        className="relative"
                    >
                        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-24 h-1 bg-harmony-green rounded-full"></div>
                        <motion.p className="text-xl text-harmony-dark/90 leading-relaxed mb-6 pt-6">
                            <strong className="text-harmony-green font-bold text-2xl">Your Journey, Our Mission</strong> 
                            <br /><span className="text-harmony-green/80">Omnivest</span> is your trusted partner in international education,
                            empowering students globally through access to quality education and lifelong support.
                        </motion.p>
                    </motion.div>

                    {/* Enhanced Mission Statement Card with more green elements */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.9, delay: 0.6, type: "spring", damping: 10 }}
                        // Card background with green gradient accent on left border
                        className="bg-harmony-light p-6 rounded-xl shadow-md mb-8 border-l-4 border-harmony-green relative overflow-hidden"
                        // Hover effect: Lift and subtle shadow with Harmony Green tint
                        whileHover={{ boxShadow: "0 10px 25px -5px rgba(35, 197, 94, 0.3)", y: -5 }}
                    >
                        {/* Decorative green element in the background */}
                        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-harmony-green/5 rounded-full"></div>
                        
                        {/* Title with enhanced green styling */}
                        <h3 className="text-2xl font-bold text-harmony-green mb-4 flex items-center">
                            <span className="bg-harmony-green/10 p-2 rounded-lg mr-3">
                                <Check className="w-5 h-5 text-harmony-green" />
                            </span>
                            Our Mission
                        </h3>
                        
                        {/* Paragraph text with key phrases highlighted in green */}
                        <p className="text-harmony-dark/90 leading-relaxed relative z-10">
                            To support students at <span className="text-harmony-green font-medium">every step</span> of their international education journey — career guidance,
                            school selection, application, visa, accommodation, and settling abroad — using <span className="text-harmony-green font-medium">transparent,
                            expert-led</span>, and personalized services.
                        </p>
                    </motion.div>

                    {/* Feature Cards Grid with enhanced green styling */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
                        className="grid md:grid-cols-3 gap-8 pt-10 relative"
                    >
                        {/* Decorative elements */}
                        <div className="absolute -left-4 top-1/2 w-2 h-20 bg-harmony-green/20 rounded-full"></div>
                        <div className="absolute -right-4 top-1/3 w-2 h-20 bg-harmony-green/20 rounded-full"></div>
                        {/* Feature Card 1: Expert Guidance - Enhanced with green */}
                        <motion.div
                            // Card background with subtle green gradient
                            className="text-center bg-gradient-to-b from-harmony-light to-harmony-green/5 p-6 rounded-xl shadow-sm border-t-2 border-harmony-green"
                            initial={{ opacity: 0, x: -70 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.7, delay: 0.5, type: "spring", damping: 12 }}
                            // Hover effect: Lift and enhanced green glow
                            whileHover={{ y: -8, boxShadow: "0 10px 20px -5px rgba(35, 197, 94, 0.3)" }}
                        >
                            <motion.div
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                // Icon with enhanced green styling
                                className="w-16 h-16 bg-harmony-green text-white rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg"
                            >
                                <Target className="w-8 h-8" />
                            </motion.div>
                            {/* Title in green, Description in dark */}
                            <h3 className="text-xl font-semibold text-harmony-green mb-3">Expert Guidance</h3>
                            <p className="text-harmony-dark/90">Personalized counseling from certified education consultants</p>
                        </motion.div>

                        {/* Feature Card 2: Global Network - Enhanced with green */}
                        <motion.div
                            // Card background with stronger green accent
                            className="text-center bg-harmony-green/10 p-6 rounded-xl shadow-sm relative overflow-hidden"
                            initial={{ opacity: 0, y: 70 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, delay: 0.7, type: "spring", damping: 12 }}
                            // Hover effect: Enhanced green effect
                            whileHover={{ y: -8, boxShadow: "0 10px 20px -5px rgba(35, 197, 94, 0.4)" }}
                        >
                            {/* Decorative green circle in background */}
                            <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-harmony-green/10 rounded-full"></div>
                            
                            <motion.div
                                whileHover={{ scale: 1.1, rotate: -5 }}
                                // Icon with enhanced green styling
                                className="w-16 h-16 bg-harmony-green/20 text-harmony-green rounded-full flex items-center justify-center mx-auto mb-5 shadow-md border-2 border-harmony-green/30"
                            >
                                <Globe className="w-8 h-8" />
                            </motion.div>
                            {/* Title with green, Description with dark */}
                            <h3 className="text-xl font-semibold text-harmony-green mb-3">Global Network</h3>
                            <p className="text-harmony-dark/90 relative z-10">Partnerships with top universities worldwide</p>
                        </motion.div>

                        {/* Feature Card 3: Investment Solutions - Enhanced with green */}
                        <motion.div
                            // Card with green accent and background design
                            className="text-center bg-harmony-light p-6 rounded-xl shadow-sm relative overflow-hidden border-b-2 border-harmony-green"
                            initial={{ opacity: 0, x: 70 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.7, delay: 0.9, type: "spring", damping: 12 }}
                            // Hover effect with enhanced green
                            whileHover={{ y: -8, boxShadow: "0 10px 20px -5px rgba(35, 197, 94, 0.3)" }}
                        >
                            {/* Decorative diagonal green stripe */}
                            <div className="absolute -left-10 -top-10 w-20 h-40 bg-harmony-green/10 rotate-45"></div>
                            
                            <motion.div
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                // Icon with stronger green presence
                                className="w-16 h-16 bg-gradient-to-br from-harmony-green/30 to-harmony-green text-white rounded-full flex items-center justify-center mx-auto mb-5 shadow-md"
                            >
                                <Briefcase className="w-8 h-8" />
                            </motion.div>
                            {/* Title and description with green accent */}
                            <h3 className="text-xl font-semibold text-harmony-green mb-3">Investment Solutions</h3>
                            <p className="text-harmony-dark/90 relative z-10">Smart <span className="text-harmony-green font-medium">financial planning</span> for your education</p>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default BriefAbout;
