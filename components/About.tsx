"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Briefcase, Trophy, Star, Lock, Scan, CheckCircle2 } from "lucide-react";
import { useRef, useState, useEffect } from "react";

// Scramble Text Effect
const ScrambleText = ({ text }: { text: string }) => {
    const [display, setDisplay] = useState(text);
    const chars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    const scramble = () => {
        let iterations = 0;
        const interval = setInterval(() => {
            setDisplay(
                text
                    .split("")
                    .map((letter, index) => {
                        if (index < iterations) {
                            return text[index];
                        }
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join("")
            );

            if (iterations >= text.length) {
                clearInterval(interval);
            }
            iterations += 1 / 3;
        }, 30);
    };

    return (
        <span onMouseEnter={scramble} className="cursor-default font-mono">
            {display}
        </span>
    );
};

// 3D Holographic Card
const HoloCard = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
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

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
            }}
            className={`${className} relative overflow-hidden`}
        >
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none z-50 mix-blend-overlay" />
            {children}
        </motion.div>
    );
};

export default function About() {

    const experiences = [
        {
            company: "Zidio Development",
            role: "Web Developer Intern",
            period: "2025",
            desc: "Engineered high-performance E-commerce microservices and optimized database queries.",
            tech: ["React", "Express", "MongoDB"]
        },
        {
            company: "CodSoft",
            role: "UI/UX Designer Intern",
            period: "2024",
            desc: "Designed intuitive user interfaces and conducted usability testing for mobile apps.",
            tech: ["Figma", "Prototyping", "User Research"]
        },
        {
            company: "Congify",
            role: "Full Stack Developer Intern",
            period: "2023",
            desc: "Developed end-to-end web solutions and integrated secure payment gateways.",
            tech: ["MERN Stack", "REST APIs", "Auth0"]
        },
        {
            company : "Nutz Tech Private Limited",
            role : "FrontEnd Developer",
            period:"2024",
            desc: "Built responsive and interactive user interfaces using modern frontend frameworks and optimized web performance.",
            tech: ["React", "Tailwind CSS", "TypeScript"]

        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -50, filter: "blur(10px)" },
        visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "circOut" } }
    };

    return (
        <section id="about" className="py-24 relative overflow-hidden bg-black perspective-1000">
            {/* Background Grid - Animated */}
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] animate-pulse-slow" />
            </div>

            <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    className="grid lg:grid-cols-2 gap-16 items-start"
                >
                    {/* Left Column: Vision & Identity Card */}
                    <div className="space-y-12 sticky top-24">
                        <motion.div variants={itemVariants}>
                            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 font-outfit">
                                <ScrambleText text="SYSTEM" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-cyan">ARCHITECT</span>
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed mb-6 font-light">
                                Decoding the matrix of <strong className="text-white font-medium">Kongu Engineering College</strong>.
                            </p>
                            <p className="text-gray-400 text-lg leading-relaxed font-light mb-8 border-l-2 border-neon-cyan pl-4">
                                "I don't just write code. I compile <span className="text-neon-cyan">future realities</span>."
                            </p>
                        </motion.div>

                        {/* Holographic Access Card - CMCS Special */}
                        <HoloCard className="relative group cursor-none">
                            {/* Scanning Beam Animation */}
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-yellow-400 shadow-[0_0_20px_#fbbf24] z-50 animate-scan pointer-events-none opacity-50" />

                            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-amber-300 rounded-xl blur opacity-20 group-hover:opacity-60 transition duration-500" />
                            <div className="relative h-64 rounded-xl bg-black/90 border border-yellow-500/30 p-6 flex flex-col justify-between overflow-hidden transform-style-3d">

                                {/* Header */}
                                <div className="flex justify-between items-start translate-z-20">
                                    <div className="flex items-center gap-2">
                                        <Trophy className="text-yellow-400 animate-pulse" size={20} />
                                        <span className="text-[10px] font-mono text-yellow-400 tracking-[0.2em]">PLACEMENT SECURED</span>
                                    </div>
                                    <div className="px-2 py-1 bg-yellow-400/10 border border-yellow-400/50 rounded text-[10px] font-bold text-yellow-400">
                                        ELITE TIER
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="text-center translate-z-30 my-4">
                                    <div className="inline-block p-3 rounded-full bg-yellow-400/10 border border-yellow-400/20 mb-4 group-hover:scale-110 transition-transform duration-500">
                                        <Briefcase size={32} className="text-yellow-100" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-1"><ScrambleText text="CRESCENT MOON" /></h3>
                                    <p className="text-sm text-yellow-500/80 font-mono tracking-widest">CONSULTING SERVICES</p>
                                </div>

                                {/* Footer */}
                                <div className="flex justify-between items-center border-t border-yellow-500/20 pt-4 translate-z-20">
                                    <div className="flex flex-col text-left">
                                        <span className="text-[9px] text-gray-400 uppercase tracking-wider">Designation</span>
                                        <span className="text-xs font-bold text-white">WEB DEVELOPER</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-yellow-400">
                                        <CheckCircle2 size={16} />
                                        <span className="text-[10px] font-bold tracking-wider">OFFER ACCEPTED</span>
                                    </div>
                                </div>

                                {/* Decorative Glitch Lines */}
                                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-yellow-400/10 pointer-events-none" />
                                <div className="absolute top-0 left-1/2 w-[1px] h-full bg-yellow-400/10 pointer-events-none" />
                            </div>
                        </HoloCard>
                    </div>

                    {/* Right Column: Experience Stream */}
                    <div className="relative pt-8">
                        <div className="absolute left-[8px] md:left-[28px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-transparent via-neon-purple/30 to-transparent" />

                        <div className="space-y-12">
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="relative pl-12 md:pl-24 group"
                                >
                                    {/* Glowing Timeline Node */}
                                    <div className="absolute left-[-6px] md:left-[14px] top-0 w-8 h-8 md:w-8 md:h-8 flex items-center justify-center z-10">
                                        <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-neon-cyan shadow-[0_0_10px_#00f3ff] animate-pulse" />
                                    </div>

                                    {/* Tech Card */}
                                    <div className="group/card relative p-6 md:p-8 rounded-xl bg-white/[0.02] border border-white/5 hover:border-neon-cyan/30 transition-all duration-500 backdrop-blur-sm overflow-hidden hover:bg-white/[0.04]">
                                        {/* Hover Gradient */}
                                        <div className="absolute -right-10 -top-10 w-40 h-40 bg-neon-purple/20 rounded-full blur-[50px] group-hover/card:bg-neon-cyan/20 transition-colors duration-500" />

                                        <div className="relative z-10">
                                            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-2 mb-2">
                                                <h4 className="text-xl md:text-2xl font-bold text-white font-outfit">
                                                    {exp.company}
                                                </h4>
                                                <span className="text-xs font-mono text-gray-500">
                                                    [{exp.period}]
                                                </span>
                                            </div>

                                            <h5 className="text-sm text-neon-cyan font-bold mb-4 tracking-wide uppercase">
                                                {exp.role}
                                            </h5>

                                            <p className="text-gray-400 mb-6 text-sm leading-relaxed font-light">
                                                {exp.desc}
                                            </p>

                                            <div className="flex flex-wrap gap-2">
                                                {exp.tech.map((t, i) => (
                                                    <span key={i} className="text-[10px] px-2 py-1 rounded border border-white/10 text-gray-400 uppercase tracking-wider hover:border-neon-cyan/50 hover:text-neon-cyan transition-colors cursor-default">
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>

            <style jsx global>{`
                @keyframes scan {
                    0% { top: 0%; opacity: 0; }
                    50% { opacity: 1; }
                    100% { top: 100%; opacity: 0; }
                }
                .animate-scan {
                    animation: scan 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
                }
            `}</style>
        </section>
    );
}
