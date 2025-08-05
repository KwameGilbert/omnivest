import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Typed from 'typed.js';

const HeroBanner = () => {
    const typedRef = useRef(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [imagesLoaded, setImagesLoaded] = useState(false);

    const backgroundImages = [
        {
            url: "/images/ominivest.png",
            alt: "University Building"
        },
        {
            url: "/images/student_abroad.jpg",
            alt: "Students studying together"
        },
        {
            url: "/images/university.avif",
            alt: "University campus"
        }
    ];

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
        })

        return () => {
            typed.destroy();
        }
    }, []);

    useEffect(() => {
        let loadedCount = 0;
        const totalImages = backgroundImages.length;

        const handleImageLoad = () => {
            loadedCount += 1;
            if (loadedCount === totalImages) {
                setImagesLoaded(true);
            }
        };

        backgroundImages.forEach(image => {
            const img = new Image();
            img.src = image.url;
            img.onload = handleImageLoad;
            img.onerror = () => {
                console.error(`Failed to load image: ${image.url}`);
                loadedCount += 1;
                if (loadedCount === totalImages) {
                    setImagesLoaded(true);
                }
            };
        });
    }, [backgroundImages]);

    useEffect(() => {
        if (!imagesLoaded) return;

        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                (prevIndex + 1) % backgroundImages.length
            );
        }, 8000); // Increased interval to 8 seconds

        return () => clearInterval(interval);
    }, [imagesLoaded, backgroundImages.length]);

    return (
        <section className="relative bg-gray-50 text-white min-h-[80vh] flex items-center overflow-hidden">
            {/* Multiple Background Images with Blending Transition and Pan/Zoom */}
            <div className="absolute inset-0 z-0">
                <AnimatePresence>
                    {backgroundImages.map((image, index) => (
                        index === currentImageIndex && (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0.2, scale: 1, x: 0, y: 0 }} // Start at scale 1 and initial position
                                animate={{ opacity: 1, scale: 1.3, x: [0, -10, 0], y: [0, 5, 0] }} // Pan and zoom over the duration
                                exit={{ opacity: 0.0, scale: 1.0 }}
                                transition={{
                                    opacity: { duration: 2 },
                                    scale: { duration: 8, ease: "easeInOut" }, // Match scale duration to interval
                                    x: { duration: 8, ease: "easeInOut" }, // Match pan duration to interval
                                    y: { duration: 8, ease: "easeInOut" }, // Match pan duration to interval
                                }}
                                className="absolute inset-0 overflow-hidden" // Add overflow-hidden to prevent animation from spilling
                            >
                                <img
                                    src={image.url}
                                    alt={image.alt}
                                    className="w-full h-full object-cover object-center"
                                />
                            </motion.div>
                        )
                    ))}
                </AnimatePresence>
                <div className="absolute inset-0" style={{ 
                    background: 'linear-gradient(135deg, rgba(79, 70, 229, 0.30) 0%, rgba(124, 58, 237, 0.30) 100%)' 
                }}></div>
            </div>

            <div className="container mx-auto px-4 relative z-10 py-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-3xl mx-auto space-y-6"
                >
                    <motion.h1
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, type: "spring", stiffness: 100 }}
                        className="text-4xl lg:text-5xl font-bold leading-tight h-[4.5rem]"
                    >
                        <span ref={typedRef} className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-purple-100"></span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2, delay: 0.3, type: "spring", damping: 10 }}
                        className="text-base md:text-lg text-gray-100 leading-relaxed max-w-2xl mx-auto"
                    >
                        Omnivest guides the brightest minds to world-class universities and elite destinations.
                        We're dedicated to helping students access premier education opportunities
                        through personalized support and expert guidance at every step.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="flex flex-col sm:flex-row justify-center gap-4 pt-6"
                    >
                        <motion.button
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.7, type: "spring" }}
                            whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(124, 58, 237, 0.3)" }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all"
                        >
                            Our services
                        </motion.button>

                        <motion.button
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.9, type: "spring" }}
                            whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(168, 85, 247, 0.3)" }}
                            whileTap={{ scale: 0.95 }}
                            className="border-2 border-purple-400 bg-transparent text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-purple-600 hover:border-purple-600 transition-all"
                        >
                            Learn more <ArrowRight className="w-4 h-4" />
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroBanner;