import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
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
      
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full"
      >
        <Link 
          to="/intake-form"
          className={`w-full mt-6 bg-gradient-to-r ${service.color} text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow flex items-center justify-center space-x-2`}
        >
          <span>Get Started</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default ServiceCard;