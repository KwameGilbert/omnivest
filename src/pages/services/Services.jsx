import React from 'react';
import { motion } from 'framer-motion';
import { Users, GraduationCap, Plane, Home, FileText, MapPin, ArrowRight } from 'lucide-react';

const Services = () => {
    const coreServices = [
        {
            icon: <Users className="w-12 h-12" />,
            title: "Career Counseling",
            description: "Helping students identify the right path based on passion, strength, and goals.",
            features: [
                "Personality assessment",
                "Career path mapping",
                "Goal setting sessions",
                "Industry insights"
            ],
            color: "from-blue-500 to-blue-600"
        },
        {
            icon: <GraduationCap className="w-12 h-12" />,
            title: "University Application",
            description: "School selection, documentation, and deadline management.",
            features: [
                "University selection guidance",
                "Application strategy",
                "Document preparation",
                "Deadline management"
            ],
            color: "from-green-500 to-green-600"
        },
        {
            icon: <Plane className="w-12 h-12" />,
            title: "Visa Application",
            description: "End-to-end visa support, including coaching and paperwork help.",
            features: [
                "Visa documentation",
                "Interview preparation",
                "Application submission",
                "Follow-up support"
            ],
            color: "from-purple-500 to-purple-600"
        },
        {
            icon: <Home className="w-12 h-12" />,
            title: "Accommodation",
            description: "Safe and budget-friendly housing options arranged before departure.",
            features: [
                "Housing research",
                "Booking assistance",
                "Safety verification",
                "Budget optimization"
            ],
            color: "from-yellow-500 to-orange-500"
        },
        {
            icon: <FileText className="w-12 h-12" />,
            title: "Pre-Departure Briefing",
            description: "Travel checklists, cultural insights, and settling-in guidance.",
            features: [
                "Travel preparation",
                "Cultural orientation",
                "Document checklists",
                "Local area guidance"
            ],
            color: "from-red-500 to-pink-500"
        },
        {
            icon: <MapPin className="w-12 h-12" />,
            title: "Flight Arrangement",
            description: "Booking assistance with student-friendly pricing.",
            features: [
                "Flight comparison",
                "Student discounts",
                "Booking support",
                "Travel insurance"
            ],
            color: "from-indigo-500 to-purple-500"
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900 text-white py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                            Our{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                                Services
                            </span>
                        </h1>
                        <p className="text-xl text-gray-200 leading-relaxed">
                            Comprehensive support for every step of your international education journey.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Core Services */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                            Core{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                                Services
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Our comprehensive suite of services covers every aspect of your study abroad journey.
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {coreServices.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center text-white mb-6`}>
                                    {service.icon}
                                </div>
                                
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                                
                                <div className="space-y-3">
                                    {service.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center space-x-3">
                                            <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full`}></div>
                                            <span className="text-gray-700">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                                
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`w-full mt-6 bg-gradient-to-r ${service.color} text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow flex items-center justify-center space-x-2`}
                                >
                                    <span>Learn More</span>
                                    <ArrowRight className="w-4 h-4" />
                                </motion.button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                            How We{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                                Work
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Our proven process ensures you get the best support at every step.
                        </p>
                    </motion.div>

                    <div className="max-w-4xl mx-auto">
                        <div className="space-y-8">
                            {[
                                { step: "01", title: "Initial Consultation", description: "We start with a comprehensive consultation to understand your goals, preferences, and background." },
                                { step: "02", title: "Personalized Planning", description: "Based on your profile, we create a customized roadmap for your study abroad journey." },
                                { step: "03", title: "Application Process", description: "We guide you through university selection, application preparation, and submission." },
                                { step: "04", title: "Visa Support", description: "Complete visa application support including documentation and interview preparation." },
                                { step: "05", title: "Pre-Departure", description: "Comprehensive preparation including accommodation, flights, and cultural orientation." },
                                { step: "06", title: "Ongoing Support", description: "Continued support even after you reach your destination to ensure smooth settling." }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: index * 0.1 }}
                                    className="flex items-center space-x-6"
                                >
                                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                        {item.step}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                                        <p className="text-gray-600">{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl mx-auto"
                    >
                        <h2 className="text-4xl font-bold mb-6">
                            Ready to Get Started?
                        </h2>
                        <p className="text-xl mb-8 text-blue-100">
                            Book a free consultation to discuss your study abroad goals and learn how we can help.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-shadow"
                            >
                                Book Free Consultation
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-colors"
                            >
                                View Packages
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>
            
        </div>
    );
};

export default Services;
