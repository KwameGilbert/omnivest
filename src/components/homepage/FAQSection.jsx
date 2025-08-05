import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
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
            answer: "Yes, our packages are affordable and flexible. We offer different service levels to match your budget and needs. Contact us for detailed pricing."
        },
        {
            question: "Do you help with scholarships?",
            answer: "Absolutely! We help identify scholarship opportunities and guide you through the application process to maximize your chances of securing financial aid."
        },
        {
            question: "What visa support do you provide?",
            answer: "We provide comprehensive visa support including document preparation, application submission, interview coaching, and follow-up until visa approval."
        },
        {
            question: "Do you help with language tests like IELTS/TOEFL?",
            answer: "Yes, we provide IELTS/TOEFL preparation materials and guidance. We also help identify universities that accept alternative English proficiency tests."
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
        <section ref={ref} className="py-20 bg-white">
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
                        className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center text-white"
                    >
                        <HelpCircle className="w-8 h-8" />
                    </motion.div>
                    
                    <motion.h2 
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6"
                    >
                        Frequently Asked{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                            Questions
                        </span>
                    </motion.h2>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl text-gray-600 max-w-3xl mx-auto"
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
                            className="bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                        >
                            <motion.button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                                whileHover={{ backgroundColor: "rgb(249, 250, 251)" }}
                            >
                                <span className="text-lg font-semibold text-gray-800 pr-8">
                                    {faq.question}
                                </span>
                                <motion.div
                                    animate={{ rotate: openFAQ === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex-shrink-0"
                                >
                                    <ChevronDown className="w-5 h-5 text-gray-600" />
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
                                            <p className="text-gray-600 leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-center mt-12"
                >
                    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-xl">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Still Have Questions?</h3>
                        <p className="text-gray-600 mb-6">
                            Our expert consultants are here to help. Book a free consultation to get personalized answers.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow"
                        >
                            Book Free Consultation
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FAQSection;
