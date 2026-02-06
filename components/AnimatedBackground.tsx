"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Star = ({ delay }: { delay: number }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: delay, repeatDelay: Math.random() * 5 + 2 }}
        className="absolute w-1 h-1 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]"
        style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
        }}
    />
);

export default function AnimatedBackground() {
    const [stars, setStars] = useState<number[]>([]);

    useEffect(() => {
        setStars(Array.from({ length: 30 }, (_, i) => i));
    }, []);

    return (
        <div className="fixed inset-0 -z-30 overflow-hidden bg-[#030014]">

            {/* Deep Space Gradients - Moving Slowly */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                    opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-purple-900/30 rounded-full blur-[120px] mix-blend-screen"
            />

            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    x: [0, 50, 0],
                    opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-blue-900/20 rounded-full blur-[120px] mix-blend-screen"
            />

            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    y: [0, -50, 0],
                    opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 5 }}
                className="absolute top-[40%] left-[30%] w-[40vw] h-[40vw] bg-cyan-900/20 rounded-full blur-[100px] mix-blend-screen"
            />

            {/* Twinkling Stars */}
            {stars.map((s) => (
                <Star key={s} delay={s * 0.2} />
            ))}

            {/* Subtle Texture Overlay */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                }}
            />

            {/* Cinematic Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000_100%)] opacity-60" />
        </div>
    );
}
