import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Target, Globe, Briefcase, Check } from 'lucide-react';

const BriefAbout = () => {
    const ref = useRef(null);
    // Trigger animation when 30% of the component is in view
    const isInView = useInView(ref, { once: false, threshold: 0.3 });

    return (
        // Section background: Harmony Light, Text: Harmony Dark
        // Subtle background gradient for depth, from light to a very light accent color
        <section ref={ref} className="py-20 bg-gradient-to-b from-[#f3f4f6] to-[#f59e0b]/5 text-[#111827]">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, type: "spring", stiffness: 100 }}
                    className="max-w-4xl mx-auto text-center space-y-8"
                >
                    {/* Heading: "About" in dark, "Omnivest" with a vibrant orange gradient */}
                    <motion.h2
                        initial={{ opacity: 0, x: -40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 1, delay: 0.4, type: "spring", damping: 10 }}
                        className="text-4xl lg:text-5xl font-bold text-[#111827]"
                    >
                        About{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] to-[#f97316]">
                            Omnivest
                        </span>
                    </motion.h2>

                    {/* Tagline with accent orange and a subtle line */}
                    <motion.div
                        initial={{ opacity: 0, x: -70 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 1, delay: 0.6, type: "spring", damping: 15 }}
                        className="relative"
                    >
                        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-24 h-1 bg-[#f59e0b] rounded-full"></div>
                        <motion.p className="text-xl text-[#111827]/90 leading-relaxed mb-6 pt-6">
                            <strong className="text-[#f59e0b] font-bold text-2xl">Your Journey, Our Mission</strong>
                            <br /><span className="text-[#f59e0b]/80">Omnivest</span> is your trusted partner in international education,
                            empowering students globally through access to quality education and lifelong support.
                        </motion.p>
                    </motion.div>

                    {/* Mission Statement Card with orange gradient accent */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.9, delay: 0.6, type: "spring", damping: 10 }}
                        // Card background is light, with orange accent on left border
                        className="bg-[#f3f4f6] p-6 rounded-xl shadow-md mb-8 border-l-4 border-[#f59e0b] relative overflow-hidden"
                        // Hover effect: Lift and subtle shadow with Harmony Orange tint
                        whileHover={{ boxShadow: "0 10px 25px -5px rgba(245, 158, 11, 0.3)", y: -5 }}
                    >
                        {/* Decorative orange element in the background */}
                        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#f59e0b]/5 rounded-full"></div>
                        
                        {/* Title with enhanced orange styling */}
                        <h3 className="text-2xl font-bold text-[#f59e0b] mb-4 flex items-center">
                            <span className="bg-[#f59e0b]/10 p-2 rounded-lg mr-3">
                                <Check className="w-5 h-5 text-[#f59e0b]" />
                            </span>
                            Our Mission
                        </h3>
                        
                        {/* Paragraph text with key phrases highlighted in orange */}
                        <p className="text-[#111827]/90 leading-relaxed relative z-10">
                            To support students at every step of their international education journey — career guidance,
                            school selection, application, visa, accommodation, and settling abroad — using transparent,
                            expert-led, and personalized services.
                        </p>
                    </motion.div>

                    {/* Feature Cards Grid with enhanced orange styling */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
                        className="grid md:grid-cols-3 gap-8 pt-10 relative"
                    >
                        {/* Decorative elements */}
                        <div className="absolute -left-4 top-1/2 w-2 h-20 bg-[#f59e0b]/20 rounded-full"></div>
                        <div className="absolute -right-4 top-1/3 w-2 h-20 bg-[#f59e0b]/20 rounded-full"></div>

                        {/* Feature Card 1: Expert Guidance - Enhanced with orange */}
                        <motion.div
                            // Card background with subtle orange gradient
                            className="text-center bg-gradient-to-b from-[#f3f4f6] to-[#f59e0b]/5 p-6 rounded-xl shadow-sm border-t-2 border-[#f59e0b]"
                            initial={{ opacity: 0, x: -70 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.7, delay: 0.5, type: "spring", damping: 12 }}
                            // Hover effect: Lift and enhanced orange glow
                            whileHover={{ y: -8, boxShadow: "0 10px 20px -5px rgba(245, 158, 11, 0.3)" }}
                        >
                            <motion.div
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                // Icon with enhanced orange styling
                                className="w-16 h-16 bg-[#f59e0b] text-[#f3f4f6] rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg"
                            >
                                <Target className="w-8 h-8" />
                            </motion.div>
                            {/* Title in orange, Description in dark */}
                            <h3 className="text-xl font-semibold text-[#f59e0b] mb-3">Expert Guidance</h3>
                            <p className="text-[#111827]/90">Personalized counseling from certified education consultants</p>
                        </motion.div>

                        {/* Feature Card 2: Global Network - Enhanced with orange */}
                        <motion.div
                            // Card background with stronger orange accent
                            className="text-center bg-[#f59e0b]/10 p-6 rounded-xl shadow-sm relative overflow-hidden"
                            initial={{ opacity: 0, y: 70 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, delay: 0.7, type: "spring", damping: 12 }}
                            // Hover effect: Enhanced orange effect
                            whileHover={{ y: -8, boxShadow: "0 10px 20px -5px rgba(245, 158, 11, 0.4)" }}
                        >
                            {/* Decorative orange circle in background */}
                            <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-[#f59e0b]/10 rounded-full"></div>
                            
                            <motion.div
                                whileHover={{ scale: 1.1, rotate: -5 }}
                                // Icon with enhanced orange styling
                                className="w-16 h-16 bg-[#f59e0b]/20 text-[#f59e0b] rounded-full flex items-center justify-center mx-auto mb-5 shadow-md border-2 border-[#f59e0b]/30"
                            >
                                <Globe className="w-8 h-8" />
                            </motion.div>
                            {/* Title with orange, Description with dark */}
                            <h3 className="text-xl font-semibold text-[#f59e0b] mb-3">Global Network</h3>
                            <p className="text-[#111827]/90 relative z-10">Partnerships with top universities worldwide</p>
                        </motion.div>

                        {/* Feature Card 3: Investment Solutions - Enhanced with orange */}
                        <motion.div
                            // Card with orange accent and background design
                            className="text-center bg-[#f3f4f6] p-6 rounded-xl shadow-sm relative overflow-hidden border-b-2 border-[#f59e0b]"
                            initial={{ opacity: 0, x: 70 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.7, delay: 0.9, type: "spring", damping: 12 }}
                            // Hover effect with enhanced orange
                            whileHover={{ y: -8, boxShadow: "0 10px 20px -5px rgba(245, 158, 11, 0.3)" }}
                        >
                            {/* Decorative diagonal orange stripe */}
                            <div className="absolute -left-10 -top-10 w-20 h-40 bg-[#f59e0b]/10 rotate-45"></div>
                            
                            <motion.div
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                // Icon with stronger orange presence
                                className="w-16 h-16 bg-gradient-to-br from-[#f59e0b]/30 to-[#f97316] text-[#f3f4f6] rounded-full flex items-center justify-center mx-auto mb-5 shadow-md"
                            >
                                <Briefcase className="w-8 h-8" />
                            </motion.div>
                            {/* Title and description with orange accent */}
                            <h3 className="text-xl font-semibold text-[#f59e0b] mb-3">Investment Solutions</h3>
                            <p className="text-[#111827]/90 relative z-10">Smart <span className="text-[#f59e0b] font-medium">financial planning</span> for your education</p>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default BriefAbout;