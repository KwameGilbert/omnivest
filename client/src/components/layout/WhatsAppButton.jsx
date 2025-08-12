import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = ({ phoneNumber = '+233541436414' }) => {
  const [isHovered, setIsHovered] = useState(false);
  // Construct the WhatsApp link with the provided phone number.
  // The '233' is Ghana's country code, used as the default example.
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center">
      {/* WhatsApp Label - Shows on hover */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.2 }}
            className="mr-3 bg-white text-[#25D366] font-medium px-4 py-2 rounded-lg shadow-md"
          >
            WhatsApp us
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Button */}
      <motion.a
        href={whatsappLink}
        target="_blank" // Opens the link in a new browser tab.
        rel="noopener noreferrer" // Security best practice for links with target="_blank".
        className="bg-[#25D366] text-white p-4 rounded-full shadow-lg flex items-center justify-center cursor-pointer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.5 }}
        whileHover={{ scale: 1.1, boxShadow: "0 10px 20px -5px rgba(37, 211, 102, 0.6)" }}
        whileTap={{ scale: 0.9 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Chat on WhatsApp"
      >
        {/* This is the new Lucide React icon component.
          It replaces the original inline SVG.
          The size and color are controlled by props and the parent element's CSS classes.
        */}
        <MessageCircle size={28} />
      </motion.a>
    </div>
  )
};
  

export default WhatsAppButton;
