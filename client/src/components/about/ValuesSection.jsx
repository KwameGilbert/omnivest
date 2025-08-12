import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Heart, Shield } from 'lucide-react';

const ValuesSection = () => {
    const values = [
        {
            icon: <Target className="w-8 h-8" />,
            title: "Transparency",
            description: "We believe in clear, honest communication throughout your journey",
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Expert-Led",
            description: "Our team consists of experienced education consultants and advisors",
        },
        {
            icon: <Heart className="w-8 h-8" />,
            title: "Personalized",
            description: "Every student receives customized guidance based on their unique goals",
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: "Lifelong Support",
            description: "Our commitment doesn't end at admission - we're here for your entire journey",
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                        Our{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">
                            Values
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        These core values guide everything we do and define how we serve our students.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            whileHover={{ y: -10, boxShadow: "0 10px 25px -5px rgba(251, 146, 60, 0.2)" }}
                            className="text-center p-6 rounded-xl shadow-sm bg-gray-50"
                        >
                            <div className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center ${index === 0 || index === 3 ? 'bg-orange-200 text-orange-700 shadow-orange-700/20' : 'bg-yellow-200 text-yellow-700 shadow-yellow-700/20'}`}>
                                {value.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{value.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ValuesSection;