import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactInfo = () => {
    const contactInfo = [
        {
            icon: <Phone className="w-8 h-8" />,
            title: "Phone",
            details: ["+233 XX XXX XXXX", "+1 XXX XXX XXXX"],
            color: "from-blue-500 to-blue-600"
        },
        {
            icon: <Mail className="w-8 h-8" />,
            title: "Email",
            details: ["info@omnivest.com", "support@omnivest.com"],
            color: "from-green-500 to-green-600"
        },
        {
            icon: <MapPin className="w-8 h-8" />,
            title: "Office",
            details: ["Accra, Ghana", "Toronto, Canada"],
            color: "from-amber-400 to-orange-600"
        },
        {
            icon: <Clock className="w-8 h-8" />,
            title: "Hours",
            details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"],
            color: "from-yellow-500 to-orange-500"
        }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                        Get in{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
                            Touch
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Multiple ways to reach us. Choose what works best for you.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {contactInfo.map((info, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                        >
                            <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center text-white`}>
                                {info.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">{info.title}</h3>
                            <div className="space-y-2">
                                {info.details.map((detail, idx) => (
                                    <p key={idx} className="text-gray-600">{detail}</p>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ContactInfo;
