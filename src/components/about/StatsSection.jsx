import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

// Counter component to animate the stats
const Counter = ({ end, suffix, label, delay }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start({
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, delay: delay }
            });
            let start = 0;
            const duration = 2000; // 2 seconds
            const increment = end / (duration / 16); // 60fps

            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    start = end;
                    clearInterval(timer);
                }
                setCount(Math.floor(start));
            }, 16); // ~60 fps

            return () => clearInterval(timer);
        }
    }, [isInView, controls, end, delay]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            className="text-center"
        >
            <div className="text-5xl font-extrabold mb-2">
                {count}{suffix}
            </div>
            <div className="text-lg font-medium text-white/90">
                {label}
            </div>
        </motion.div>
    );
};

const StatsSection = () => {
    return (
        <section className="py-20 bg-gray-600 text-gray-100">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    <Counter
                        end={5000}
                        suffix="+"
                        label="Students Guided"
                        delay={0}
                    />
                    <Counter
                        end={200}
                        suffix="+"
                        label="Universities"
                        delay={0.1}
                    />
                    <Counter
                        end={25}
                        suffix="+"
                        label="Countries"
                        delay={0.2}
                    />
                    <Counter
                        end={95}
                        suffix="%"
                        label="Success Rate"
                        delay={0.3}
                    />
                </div>
            </div>
        </section>
    );
};

export default StatsSection;