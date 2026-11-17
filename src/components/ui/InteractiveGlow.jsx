import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const InteractiveGlow = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 35, stiffness: 90, mass: 0.8 };
    const smoothX = useSpring(mouseX, springConfig);
    const smoothY = useSpring(mouseY, springConfig);

    useEffect(() => {
        // Only animate on non-touch devices
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        if (isTouchDevice) return;

        const handleMouseMove = (e) => {
            // Get percentages of screen
            const xPct = (e.clientX / window.innerWidth) - 0.5;
            const yPct = (e.clientY / window.innerHeight) - 0.5;

            // Move by max 25vw/vh
            mouseX.set(xPct * window.innerWidth * 0.45);
            mouseY.set(yPct * window.innerHeight * 0.45);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Top-center radial beam */}
            <div
                aria-hidden="true"
                className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-blue-500/20 via-indigo-500/10 to-transparent blur-[120px] rounded-full pointer-events-none"
            />

            {/* Base static ambient light - Deep Blue & Electric Violet */}
            <div
                aria-hidden="true"
                className="absolute -top-[10%] -left-[10%] h-[550px] w-[550px] rounded-full bg-cyan-500/12 blur-[140px] pointer-events-none"
            />
            <div
                aria-hidden="true"
                className="absolute top-[40%] -right-[10%] h-[500px] w-[500px] rounded-full bg-violet-600/15 blur-[150px] pointer-events-none"
            />
            <div
                aria-hidden="true"
                className="absolute -bottom-[10%] left-[20%] h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[130px] pointer-events-none"
            />

            {/* Interactive mouse-following neon spotlight */}
            <motion.div
                aria-hidden="true"
                className="absolute top-1/2 left-1/2 -ml-[250px] -mt-[250px] h-[500px] w-[500px] rounded-full opacity-60 blur-[130px] pointer-events-none bg-gradient-to-tr from-cyan-400/25 via-blue-500/20 to-purple-500/20 hidden md:block"
                style={{
                    x: smoothX,
                    y: smoothY,
                }}
            />

            {/* Subtle Cyber Grid with radial vignette mask */}
            <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none opacity-[0.12]"
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
                    backgroundSize: '48px 48px',
                    maskImage: 'radial-gradient(ellipse 70% 70% at 50% 40%, black 20%, transparent 80%)',
                    WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 50% 40%, black 20%, transparent 80%)'
                }}
            />
        </div>
    );
};

