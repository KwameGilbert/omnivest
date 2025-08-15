import React from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

const AddOnServices = () => {
    const addOnServices = [
        { name: "Full SOP/Essay Writing", price: "From $150" },
        { name: "IELTS/TOEFL Materials", price: "From $75" },
        { name: "Application Fee Waivers", price: "Success-based" },
        { name: "Document Translation", price: "From $25/doc" },
        { name: "Webinars & Workshops", price: "Free" },
        { name: "Immigration Guidance", price: "From $200" }
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
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center text-white">
                        <Plus className="w-8 h-8" />
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                        Add-On{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">
                            Services
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Enhance any package with our specialized add-on services.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    {addOnServices.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl hover:shadow-lg transition-shadow"
                        >
                            <h3 className="font-semibold text-gray-800 mb-2">{service.name}</h3>
                            <p className="text-orange-600 font-bold">{service.price}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AddOnServices;
