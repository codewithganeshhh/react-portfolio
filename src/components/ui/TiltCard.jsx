import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export const TiltCard = ({ children, className = "", maxTilt = 14, enableGlare = true }) => {
    const ref = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
    const mouseXSpring = useSpring(x, springConfig);
    const mouseYSpring = useSpring(y, springConfig);

    // Dynamic 3D rotation angles
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [`${maxTilt}deg`, `-${maxTilt}deg`]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [`-${maxTilt}deg`, `${maxTilt}deg`]);

    // Glare position calculation
    const glareX = useTransform(mouseXSpring, [-0.5, 0.5], [0, 100]);
    const glareY = useTransform(mouseYSpring, [-0.5, 0.5], [0, 100]);

    const handleMouseMove = (e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        x.set(0);
        y.set(0);
    };

    return (
        <div style={{ perspective: "1200px" }} className={`relative inline-block w-full ${className}`}>
            <motion.div
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                animate={{
                    scale: isHovered ? 1.02 : 1,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative w-full h-full transform-gpu"
            >
                {children}

                {/* 3D Dynamic Holographic / Specular Glare */}
                {enableGlare && (
                    <motion.div
                        style={{
                            background: useTransform(
                                [glareX, glareY],
                                ([gx, gy]) =>
                                    `radial-gradient(circle at ${gx}% ${gy}%, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.03) 40%, transparent 80%)`
                            ),
                            transform: "translateZ(30px)",
                        }}
                        className={`absolute inset-0 rounded-[inherit] pointer-events-none transition-opacity duration-300 ${
                            isHovered ? "opacity-100" : "opacity-0"
                        }`}
                    />
                )}
            </motion.div>
        </div>
    );
};

export default TiltCard;
