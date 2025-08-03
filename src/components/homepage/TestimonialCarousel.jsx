import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const TestimonialCarousel = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.3 });
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            name: "Sarah Johnson",
            country: "USA",
            university: "Harvard University",
            program: "MBA",
            image: "🇺🇸",
            rating: 5,
            text: "Omnivest made my dream of studying at Harvard a reality. Their guidance through the application process was invaluable, and the financial planning advice helped my family manage the costs effectively.",
            year: "2023"
        },
        {
            name: "Priya Sharma",
            country: "Canada",
            university: "University of Toronto",
            program: "Computer Science",
            image: "🇨🇦",
            rating: 5,
            text: "The team at Omnivest went above and beyond to help me secure admission and scholarships. Their visa assistance was thorough and stress-free. I couldn't have done it without them!",
            year: "2023"
        },
        {
            name: "James Chen",
            country: "Australia",
            university: "University of Melbourne",
            program: "Engineering",
            image: "🇦🇺",
            rating: 5,
            text: "From university selection to pre-departure orientation, Omnivest supported me every step of the way. Their expertise and personal attention made all the difference in my journey.",
            year: "2022"
        },
        {
            name: "Maria Rodriguez",
            country: "UK",
            university: "Oxford University",
            program: "Medicine",
            image: "🇬🇧",
            rating: 5,
            text: "Getting into Oxford seemed impossible until I found Omnivest. Their strategic approach to applications and interview preparation was exceptional. Highly recommended!",
            year: "2023"
        },
        {
            name: "Ahmed Hassan",
            country: "Germany",
            university: "Technical University Munich",
            program: "Mechanical Engineering",
            image: "🇩🇪",
            rating: 5,
            text: "Omnivest's knowledge of German universities and scholarship opportunities saved me thousands of dollars. Their ongoing support even after arrival has been incredible.",
            year: "2022"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => 
                prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(timer);
    }, [testimonials.length]);

    const nextTestimonial = () => {
        setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
    };

    const prevTestimonial = () => {
        setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
    };

    return (
        <section ref={ref} className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <motion.h2 
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6"
                    >
                        What Our{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                            Students Say
                        </span>
                    </motion.h2>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl text-gray-600 max-w-3xl mx-auto"
                    >
                        Don't just take our word for it. Here's what our successful students 
                        have to say about their journey with Omnivest.
                    </motion.p>
                </motion.div>

                {/* Carousel Container */}
                <div className="relative max-w-4xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                            className="bg-white rounded-2xl shadow-lg p-8 md:p-12 relative"
                        >
                            {/* Quote Icon */}
                            <div className="absolute top-6 left-6 text-indigo-200">
                                <Quote className="w-12 h-12" />
                            </div>

                            <div className="grid md:grid-cols-3 gap-8 items-center">
                                {/* Student Info */}
                                <div className="text-center md:text-left">
                                    <div className="text-6xl mb-4">{testimonials[currentIndex].image}</div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                                        {testimonials[currentIndex].name}
                                    </h3>
                                    <p className="text-indigo-600 font-semibold mb-2">
                                        {testimonials[currentIndex].program}
                                    </p>
                                    <p className="text-gray-600 mb-4">
                                        {testimonials[currentIndex].university}
                                    </p>
                                    <div className="flex justify-center md:justify-start items-center space-x-1 mb-2">
                                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                                        ))}
                                    </div>
                                    <p className="text-gray-500 text-sm">Class of {testimonials[currentIndex].year}</p>
                                </div>

                                {/* Testimonial Text */}
                                <div className="md:col-span-2">
                                    <blockquote className="text-lg text-gray-700 leading-relaxed italic">
                                        "{testimonials[currentIndex].text}"
                                    </blockquote>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevTestimonial}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:shadow-xl transition-shadow text-gray-600 hover:text-indigo-600"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    
                    <button
                        onClick={nextTestimonial}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:shadow-xl transition-shadow text-gray-600 hover:text-indigo-600"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center space-x-3 mt-8">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full transition-colors ${
                                index === currentIndex
                                    ? 'bg-indigo-600'
                                    : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                        />
                    ))}
                </div>

                {/* Stats Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="grid md:grid-cols-4 gap-8 mt-16 text-center"
                >
                    <div>
                        <div className="text-3xl font-bold text-indigo-600 mb-2">98%</div>
                        <div className="text-gray-600">Success Rate</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-indigo-600 mb-2">4.9/5</div>
                        <div className="text-gray-600">Average Rating</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-indigo-600 mb-2">2500+</div>
                        <div className="text-gray-600">Happy Students</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-indigo-600 mb-2">50+</div>
                        <div className="text-gray-600">Partner Universities</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default TestimonialCarousel;
