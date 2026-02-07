"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Eye } from "lucide-react";

export default function Hero() {
    return (
        <section className="min-h-screen w-full flex flex-col justify-center items-center relative overflow-hidden bg-black selection:bg-purple-500/30 py-20">

            {/* Background: Radiant Aurora Gradients */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[70vw] h-[70vw] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow delay-1000" />
                <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[50vw] h-[50vw] bg-pink-500/10 rounded-full blur-[100px] mix-blend-screen animate-pulse-slow delay-2000" />
            </div>

            {/* Glass Overlay for Depth */}
            <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-[1px] z-0" />

            <div className="container mx-auto px-4 md:px-6 relative z-10 w-full max-w-5xl flex flex-col items-center text-center">

                {/* Profile Picture */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-8 relative"
                >
                    <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-white/20 p-1 bg-white/5 backdrop-blur-sm shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                        <img
                            src="/profile-pic.png"
                            alt="Vedha Dharshini R"
                            className="w-full h-full rounded-full object-cover"
                        />
                    </div>
                </motion.div>

                {/* Elegant Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="mb-6"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        <span className="text-white/70 font-outfit text-sm tracking-widest uppercase">
                            Available for Hire
                        </span>
                    </div>
                </motion.div>

                {/* Main Title: Clean & Massive */}
                <div className="mb-8 relative">
                    <motion.h1
                        className="text-6xl sm:text-7xl md:text-9xl font-bold text-white font-outfit tracking-tighter leading-tight"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.2, 0.65, 0.3, 0.9] }}
                    >
                        <span className="block text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                            VEDHA
                        </span>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-white to-blue-300 pb-2">
                            DHARSHINI R
                        </span>
                    </motion.h1>

                    {/* Subtle line decoration */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 1.2, duration: 1 }}
                        className="absolute -bottom-2 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    />
                </div>

                {/* Subtitle: Refined & Readable */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-xl md:text-2xl text-white/60 font-light leading-relaxed max-w-2xl font-outfit mb-12"
                >
                    Crafting <span className="text-white font-medium">immersive digital experiences</span> where logic meets artistry.
                </motion.p>

                {/* Buttons: Sophisticated Glassmorphism */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
                >
                    <motion.a
                        href="#projects"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] flex items-center justify-center gap-2"
                    >
                        <Eye className="w-5 h-5" />
                        <span>View Work</span>
                    </motion.a>

                    <motion.a
                        href="/resume.pdf"
                        download="Vedha_Dharshini_Resume.pdf"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-8 py-4 bg-white/5 text-white font-semibold rounded-full border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all flex items-center justify-center gap-2 backdrop-blur-md"
                    >
                        <Download className="w-5 h-5" />
                        <span>Resume</span>
                    </motion.a>
                </motion.div>
            </div>

            {/* Scroll Indicator: Minimal */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white/30"
            >
                <span className="text-[10px] uppercase tracking-[0.2em]">Explore</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                    <ArrowDown size={18} />
                </motion.div>
            </motion.div>
        </section>
    );
}
