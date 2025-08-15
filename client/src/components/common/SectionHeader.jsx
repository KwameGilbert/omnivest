import React from 'react';
import { motion } from 'framer-motion';

const SectionHeader = ({ title, highlightText, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
        {title}{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
          {highlightText}
        </span>
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        {description}
      </p>
    </motion.div>
  );
};

export default SectionHeader;