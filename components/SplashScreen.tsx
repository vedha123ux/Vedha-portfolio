"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(false);
            setTimeout(onComplete, 800);
        }, 4500); // 4.5s total duration
        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-[linear-gradient(to_bottom,#020202,#080815)] overflow-hidden"
                >
                    <div className="relative w-full h-full flex flex-col items-center justify-center">
                        {/* 3D-Style Robot Animation */}
                        <motion.div
                            initial={{ x: "-100vw" }}
                            animate={{ x: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 40,
                                damping: 12,
                                duration: 1.5
                            }}
                            className="relative z-10 flex flex-col items-center"
                        >
                            <motion.div
                                className="w-64 h-64 md:w-80 md:h-80 relative z-20"
                                animate={{
                                    y: [-10, 10, -10],
                                    rotate: [-1, 1, -1]
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 4,
                                    ease: "easeInOut"
                                }}
                            >
                                <img
                                    src="/robot.png"
                                    alt="Robot"
                                    className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(0,243,255,0.4)]"
                                />
                            </motion.div>

                            {/* Welcome Text */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.5, duration: 0.8 }}
                                className="mt-8"
                            >
                                <p className="font-medium text-lg tracking-widest text-neon-cyan drop-shadow-[0_0_10px_rgba(0,243,255,0.5)] uppercase">
                                    Welcome to my Portfolio
                                </p>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
