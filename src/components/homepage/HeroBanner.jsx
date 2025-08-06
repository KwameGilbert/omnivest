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
        }, 7500);

        return () => clearInterval(interval);
    }, [imagesLoaded, backgroundImages.length]);

    return (
        <section className="relative bg-[#111827] text-[#f3f4f6] min-h-[80vh] flex items-center overflow-hidden font-['Inter']">
            {/* Background Images with Dark Overlay */}
            <div className="absolute inset-0 z-0">
                <AnimatePresence>
                    {imagesLoaded && backgroundImages.map((image, index) => (
                        index === currentImageIndex && (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0.2, scale: 1, x: 0, y: 0 }}
                                animate={{ opacity: 1, scale: 1.3, x: [0, -10, 0], y: [0, 5, 0] }}
                                exit={{ opacity: 0.0, scale: 1.0 }}
                                transition={{
                                    opacity: { duration: 2 },
                                    scale: { duration: 8, ease: "easeInOut" },
                                    x: { duration: 8, ease: "easeInOut" },
                                    y: { duration: 8, ease: "easeInOut" },
                                }}
                                className="absolute inset-0 overflow-hidden"
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
                {/* Gradient Overlay for better text readability */}
                <div className="absolute inset-0" style={{
                    // Gradient from a subtle dark to a more opaque dark with harmony-yellow tones
                    background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.5) 0%, rgba(245, 158, 11, 0.5) 50%, rgba(17, 24, 39, 0.5) 100%)'
                }}></div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-4 relative z-10 py-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-3xl mx-auto space-y-6"
                >
                    {/* Dynamic Heading with Gradient */}
                    <motion.h1
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, type: "spring", stiffness: 100 }}
                        className="text-4xl lg:text-4xl font-bold leading-tight h-[4.5rem]"
                    >
                        {/* Text uses gradient from harmony-dark to harmony-yellow */}
                        <span ref={typedRef} className="text-transparent bg-clip-text bg-[#111827]"></span>
                    </motion.h1>

                    {/* Descriptive Paragraph */}
                    <motion.p
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2, delay: 0.3, type: "spring", damping: 10 }}
                        // Paragraph text is harmony-light for contrast, with slight transparency
                        className="text-base md:text-lg text-[#f3f4f6]/85 leading-relaxed max-w-2xl mx-auto"
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
                        {/* Primary Button: Yellow background, Light text */}
                        <motion.button
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.7, type: "spring" }}
                            whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(245, 158, 11, 0.4)" }} // Shadow matches yellow
                            whileTap={{ scale: 0.95 }}
                            className="bg-[#f59e0b] text-[hsl(220,14%,96%)] px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all hover:bg-[#111827] border-2 border-[#f59e0b]"
                        >
                            Our services
                        </motion.button>

                        {/* Secondary Button: Dark background, Orange text, Orange border */}
                        <motion.button
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.9, type: "spring" }}
                            whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(249, 115, 22, 0.4)" }} // Shadow matches harmony-orange
                            whileTap={{ scale: 0.95 }}
                            className="border-2 border-[#f59e0b] bg-[#111827] text-[#f59e0b] px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-[#f59e0b] hover:text-[#f3f4f6] transition-all"
                        >
                            Learn more <ArrowRight className="w-4 h-4 text-current" />
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroBanner;
