import React, { useState } from 'react';
import { motion, AnimatePresence, useInView} from 'framer-motion';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.3 });
    const [openFAQ, setOpenFAQ] = useState(null);

    const faqs = [
        {
            question: "Which countries do you support?",
            answer: "We support USA, Canada, UK, Australia, New Zealand, Germany, Ireland, Netherlands, and many other popular study destinations worldwide."
        },
        {
            question: "Do you help with course and country selection?",
            answer: "Yes! We provide personalized counseling to help you choose the right course and country based on your academic background, career goals, and preferences."
        },
        {
            question: "Are your services paid?",
            answer: "No, our services are not paid. We're committed to making education abroad accessible to everyone."
        },
        // {
        //     question: "Do you help with scholarships?",
        //     answer: "Absolutely! We help identify scholarship opportunities and guide you through the application process to maximize your chances of securing financial aid."
        // },
        {
            question: "What visa support do you provide?",
            answer: "We provide comprehensive visa support including document preparation, application submission, interview coaching, and follow-up until visa approval."
        },
        {
            question: "Do you provide essay and SOP writing help?",
            answer: "Yes! We offer both editing services for your drafts and complete writing support for SOPs and essays as part of our packages."
        },
        {
            question: "Do you help with accommodation and flights?",
            answer: "Yes, accommodation assistance and flight booking support are included in our Standard and Premium packages."
        },
        {
            question: "What post-arrival support do you offer?",
            answer: "Our Premium package includes post-arrival support such as airport pickup coordination, SIM/bank setup advice, and ongoing assistance during your initial settling period."
        },
        {
            question: "What's the typical timeline for the application process?",
            answer: "The timeline usually ranges from 3-6 months depending on your chosen destination, course, and when you start the process relative to application deadlines."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    return (
        // Section background: Harmony Light
        <section ref={ref} className="py-20 bg-[#f3f4f6]">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        // Icon background uses the accent orange/yellow gradient
                        className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-[#f59e0b] to-[#f97316] rounded-xl flex items-center justify-center text-white"
                    >
                        <HelpCircle className="w-8 h-8" />
                    </motion.div>
                    
                    <motion.h2 
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        // Heading text is Harmony Dark, with gradient for "Questions"
                        className="text-4xl lg:text-5xl font-bold text-[#111827] mb-6"
                    >
                        Frequently Asked{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] to-[#f97316]">
                            Questions
                        </span>
                    </motion.h2>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl text-[#111827]/85 max-w-3xl mx-auto"
                    >
                        Get answers to the most common questions about our services and the study abroad process.
                    </motion.p>
                </motion.div>

                <div className="max-w-4xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.1 + index * 0.05 }}
                            // FAQ item background is white with a subtle border and shadow
                            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-[#f3f4f6]/50"
                        >
                            <motion.button
                                onClick={() => toggleFAQ(index)}
                                // Button hover background is light gray
                                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-[#f3f4f6] transition-colors"
                                whileHover={{ backgroundColor: "rgb(243, 244, 246)" }}
                            >
                                <span className="text-lg font-semibold text-[#111827] pr-8">
                                    {faq.question}
                                </span>
                                <motion.div
                                    animate={{ rotate: openFAQ === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex-shrink-0"
                                >
                                    <ChevronDown className="w-5 h-5 text-[#111827]/70" />
                                </motion.div>
                            </motion.button>
                            
                            <AnimatePresence>
                                {openFAQ === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-5">
                                            <p className="text-[#111827]/85 leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    // CTA background uses a very subtle gradient from the accent colors
                    className="text-center mt-12 bg-gradient-to-r from-[#f59e0b]/5 to-[#f97316]/5 p-8 rounded-xl"
                >
                    <h3 className="text-2xl font-bold text-[#111827] mb-4">Still Have Questions?</h3>
                    <p className="text-[#111827]/85 mb-6">
                        Our expert consultants are here to help. Book a free consultation to get personalized answers.
                    </p>
                    
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link
                            to="/contact"
                            className="inline-block bg-gradient-to-r from-[#f59e0b] to-[#f97316] text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow"
                        >
                            Book Free Consultation
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default FAQSection;
