import React, { useState, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Target, Users, Globe, Award, Heart, Shield } from 'lucide-react';

// Counter component to animate the stats.
const Counter = ({ end, suffix, label, delay }) => {
    const [count, setCount] = useState(0);
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start({
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, delay: delay }
            });
            let start = 0;
            const duration = 2000; // 2 seconds
            const increment = end / (duration / 16); // 60fps

            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    start = end;
                    clearInterval(timer);
                }
                setCount(Math.floor(start));
            }, 16); // ~60 fps

            return () => clearInterval(timer);
        }
    }, [isInView, controls, end, delay]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            className="text-center"
        >
            <div className="text-5xl font-extrabold mb-2">
                {count}{suffix}
            </div>
            <div className="text-lg font-medium text-indigo-100">
                {label}
            </div>
        </motion.div>
    );
};

const About = () => {
    const values = [
        {
            icon: <Target className="w-8 h-8" />,
            title: "Transparency",
            description: "We believe in clear, honest communication throughout your journey",
            color: "from-blue-500 to-blue-600"
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Expert-Led",
            description: "Our team consists of experienced education consultants and advisors",
            color: "from-green-500 to-green-600"
        },
        {
            icon: <Heart className="w-8 h-8" />,
            title: "Personalized",
            description: "Every student receives customized guidance based on their unique goals",
            color: "from-red-500 to-red-600"
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: "Lifelong Support",
            description: "Our commitment doesn't end at admission - we're here for your entire journey",
            color: "from-purple-500 to-purple-600"
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
                            About{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                                Omnivest
                            </span>
                        </h1>
                        <p className="text-xl text-gray-200 leading-relaxed">
                            Your Journey, Our Mission - Empowering students globally through access to quality education and lifelong support.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="bg-white p-8 rounded-2xl shadow-lg"
                        >
                            <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white mb-6">
                                <Globe className="w-8 h-8" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h2>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                To become the most trusted and impactful educational consulting brand, empowering students globally through access to quality education and lifelong support.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="bg-white p-8 rounded-2xl shadow-lg"
                        >
                            <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center text-white mb-6">
                                <Target className="w-8 h-8" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                To support students at every step of their international education journey — career guidance, school selection, application, visa, accommodation, and settling abroad — using transparent, expert-led, and personalized services.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values */}
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
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
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
                                whileHover={{ y: -10 }}
                                className="text-center"
                            >
                                <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center text-white`}>
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        <Counter
                            end={5000}
                            suffix="+"
                            label="Students Guided"
                            delay={0}
                        />
                        <Counter
                            end={200}
                            suffix="+"
                            label="Universities"
                            delay={0.1}
                        />
                        <Counter
                            end={25}
                            suffix="+"
                            label="Countries"
                            delay={0.2}
                        />
                        <Counter
                            end={95}
                            suffix="%"
                            label="Success Rate"
                            delay={0.3}
                        />
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl mx-auto"
                    >
                        <h2 className="text-4xl font-bold text-gray-800 mb-6">
                            Ready to Start Your Journey?
                        </h2>
                        <p className="text-xl text-gray-600 mb-8">
                            Join thousands of students who have trusted us with their international education dreams.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-shadow"
                        >
                            Book Free Consultation
                        </motion.button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};


export default App;
