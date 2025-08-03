import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Users, Star } from 'lucide-react';

const PopularDestinations = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.3 });

    const destinations = [
        {
            country: "United States",
            flag: "🇺🇸",
            universities: "450+",
            students: "2,500+",
            rating: 4.9,
            image: "bg-gradient-to-br from-blue-500 to-red-500",
            highlights: ["Top Universities", "Research Opportunities", "Tech Hub"]
        },
        {
            country: "United Kingdom",
            flag: "🇬🇧",
            universities: "150+",
            students: "1,800+",
            rating: 4.8,
            image: "bg-gradient-to-br from-blue-600 to-red-600",
            highlights: ["Historic Universities", "Quality Education", "Cultural Diversity"]
        },
        {
            country: "Canada",
            flag: "🇨🇦",
            universities: "200+",
            students: "2,200+",
            rating: 4.9,
            image: "bg-gradient-to-br from-red-500 to-red-600",
            highlights: ["Immigration Friendly", "Safe Environment", "Quality of Life"]
        },
        {
            country: "Australia",
            flag: "🇦🇺",
            universities: "120+",
            students: "1,500+",
            rating: 4.7,
            image: "bg-gradient-to-br from-blue-500 to-green-500",
            highlights: ["Work Opportunities", "Beautiful Landscape", "Multicultural"]
        },
        {
            country: "Germany",
            flag: "🇩🇪",
            universities: "180+",
            students: "1,200+",
            rating: 4.6,
            image: "bg-gradient-to-br from-yellow-500 to-red-600",
            highlights: ["Engineering Excellence", "Low Tuition", "Strong Economy"]
        },
        {
            country: "Ireland",
            flag: "🇮🇪",
            universities: "60+",
            students: "600+",
            rating: 4.7,
            image: "bg-gradient-to-br from-green-500 to-orange-500",
            highlights: ["Tech Hub", "English Speaking", "EU Access"]
        },
        {
            country: "Netherlands",
            flag: "🇳🇱",
            universities: "75+",
            students: "700+",
            rating: 4.8,
            image: "bg-gradient-to-br from-orange-500 to-red-500",
            highlights: ["Innovation Hub", "Bicycle Culture", "International Environment"]
        },
        {
            country: "New Zealand",
            flag: "🇳🇿",
            universities: "80+",
            students: "800+",
            rating: 4.8,
            image: "bg-gradient-to-br from-blue-500 to-blue-600",
            highlights: ["Adventure Sports", "Innovation", "Peaceful Environment"]
        }
    ];

    return (
        <section ref={ref} className="py-20 bg-white">
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
                        Popular{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                            Destinations
                        </span>
                    </motion.h2>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl text-gray-600 max-w-3xl mx-auto"
                    >
                        Explore the world's top study destinations where thousands of our students 
                        have successfully built their careers and achieved their dreams.
                    </motion.p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {destinations.map((destination, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
                        >
                            {/* Header with Flag and Country */}
                            <div className={`${destination.image} p-6 text-white relative overflow-hidden`}>
                                <div className="absolute top-0 right-0 text-6xl opacity-20">
                                    {destination.flag}
                                </div>
                                <h3 className="text-2xl font-bold mb-2">{destination.country}</h3>
                                <div className="flex items-center space-x-4 text-sm">
                                    <div className="flex items-center">
                                        <Star className="w-4 h-4 fill-current mr-1" />
                                        {destination.rating}
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                {/* Stats */}
                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-indigo-600">
                                            {destination.universities}
                                        </div>
                                        <div className="text-gray-600 text-sm">Universities</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-indigo-600">
                                            {destination.students}
                                        </div>
                                        <div className="text-gray-600 text-sm">Students Placed</div>
                                    </div>
                                </div>

                                {/* Highlights */}
                                <div className="mb-6">
                                    <h4 className="font-semibold text-gray-800 mb-3">Key Highlights:</h4>
                                    <div className="space-y-2">
                                        {destination.highlights.map((highlight, idx) => (
                                            <div key={idx} className="flex items-center text-gray-600">
                                                <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></div>
                                                {highlight}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* CTA Button */}
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow"
                                >
                                    Explore Programs
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View All Destinations CTA */}
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-center mt-16"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-12 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-shadow"
                    >
                        View All Destinations
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default PopularDestinations;
