import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Typed from 'typed.js';

const HeroBanner = () => {
  const typedRef = useRef(null);
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        'Global Applications Specialists',
        'Your Journey to Elite Education',
        'Transforming Academic Aspirations',
        'Your Success, Our Priority'
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 500,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    });

    return () => {
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener('loadeddata', () => {
        setVideoLoaded(true);
      });
    }
  }, []);

  // Array of background videos
  const backgroundVideos = [
    "https://assets.mixkit.co/videos/4519/4519-720.mp4",
    "https://video-previews.elements.envatousercontent.com/files/9e170847-97cd-404d-96f3-44956e9d344a/video_preview_h264.mp4",
    "https://assets.mixkit.co/videos/4386/4386-720.mp4"
  ];
  const [currentVideo, setCurrentVideo] = useState(0);
  const [fade, setFade] = useState(true);

  // Handle video change every 10 seconds
  useEffect(() => {
    setFade(false); // Start fade out
    const timeout = setTimeout(() => {
      setCurrentVideo((prev) => (prev + 1) % backgroundVideos.length);
      setFade(true); // Fade in new video
    }, 1000); // Fade out duration

    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentVideo((prev) => (prev + 1) % backgroundVideos.length);
        setFade(true);
      }, 1000);
    }, 10000); // Change video every 10 seconds

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

  // Reset videoLoaded on video change
  useEffect(() => {
    setVideoLoaded(false);
  }, [currentVideo]);

  return (
    <section className="relative bg-[#f3f4f6] text-[#111827] min-h-[80vh] flex items-center overflow-hidden font-['Inter']">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          key={currentVideo}
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          // poster="/images/university.avif"
          style={{
            opacity: videoLoaded && fade ? 1 : 0,
            transition: 'opacity 1s ease-in-out'
          }}
          onLoadedData={() => setVideoLoaded(true)}
        >
          <source src={backgroundVideos[currentVideo]} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {(() => {
          const overlayOpacity = 0.6;
          const overlayColor = '255,255,255';
          return (
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(135deg, rgba(${overlayColor},${overlayOpacity + 0.04}) 0%, rgba(${overlayColor},${overlayOpacity}) 50%, rgba(${overlayColor},${overlayOpacity + 0.05}) 100%)`,
                mixBlendMode: 'normal'
              }}
            ></div>
          );
        })()}
      </div>

     {/* Content Section */}
      <div className="container mx-auto px-4 relative z-10 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto space-y-6"
          style={{ color: '#000', textShadow: '0 2px 8px rgba(255,255,255,0.7), 0 1px 3px rgba(0,0,0,0.2)' }}
        >
          {/* Dynamic Heading with Gradient */}
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
            className="text-4xl lg:text-5xl font-bold leading-tight h-[4.5rem]"
          >
            <span ref={typedRef} className="text-[#000000] font-bold"></span>
          </motion.h1>

          {/* Descriptive Paragraph */}
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.3, type: "spring", damping: 10 }}
            className="text-md md:text-lg text-[#000000] font-medium leading-relaxed max-w-2xl mx-auto"
          >
            Omnivest guides the brightest minds to world-class universities and elite destinations.
            We're dedicated to helping students access premier education opportunities
            through personalized support and expert guidance at every step.
          </motion.p>

          {/* Call-to-Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row justify-center gap-4 pt-6"
          >
            {/* Primary Button: Yellow background, Dark text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7, type: "spring" }}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(245, 158, 11, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#f59e0b] text-[#111827] px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all hover:bg-[#e68a00] hover:text-[#000000] border-2 border-[#f59e0b]"
            >
              <Link to="/booking" className="w-full h-full flex items-center justify-center">
                Book Consultation
              </Link>
            </motion.div>

            {/* Secondary Button: Dark border, Dark text, Yellow hover */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.9, type: "spring" }}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(17, 24, 39, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-[#111827] bg-transparent text-[#111827] px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-[#f59e0b] hover:text-[#111827] hover:border-[#f59e0b] transition-all"
            >
              <Link to="/services" className="w-full h-full flex items-center justify-center gap-2">
                Learn more <ArrowRight className="w-4 h-4 text-current" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroBanner;