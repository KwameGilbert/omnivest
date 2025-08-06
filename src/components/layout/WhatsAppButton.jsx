import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = ({ phoneNumber = '+233541436414' }) => {
  // Construct the WhatsApp link with the provided phone number.
  // The '233' is Ghana's country code, used as the default example.
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  return (
    <motion.a
      href={whatsappLink}
      target="_blank" // Opens the link in a new browser tab.
      rel="noopener noreferrer" // Security best practice for links with target="_blank".
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-lg flex items-center justify-center cursor-pointer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.5 }}
      whileHover={{ scale: 1.1, boxShadow: "0 10px 20px -5px rgba(37, 211, 102, 0.6)" }}
      whileTap={{ scale: 0.9 }}
      aria-label="Chat on WhatsApp"
    >
      {/* This is the new Lucide React icon component.
        It replaces the original inline SVG.
        The size and color are controlled by props and the parent element's CSS classes.
      */}
      <MessageCircle size={28} />
    </motion.a>
  );
};

export default WhatsAppButton;
