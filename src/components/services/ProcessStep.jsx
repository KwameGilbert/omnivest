import React from 'react';
import { motion } from 'framer-motion';

const ProcessStep = ({ item, index }) => {
  return (
    <motion.div
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
  );
};

export default ProcessStep;