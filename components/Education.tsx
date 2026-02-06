"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, Star } from "lucide-react";

export default function Education() {
    const certificates = [
        {
            title: "Introduction to Gen AI",
            issuer: "Google",
            date: "September 2024",
            color: "from-yellow-400 to-orange-500"
        },
        {
            title: "Oracle MySQL Certification",
            issuer: "Oracle",
            date: "July 2024",
            color: "from-blue-400 to-indigo-500"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.4 } }
    };

    return (
        <section id="education" className="py-24 relative bg-black overflow-hidden">
            {/* Background Atmosphere */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-outfit">
                        Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-cyan">Milestones</span>
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-neon-purple to-neon-cyan mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Education Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative group h-full"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-60 transition duration-500" />
                        <div className="relative h-full bg-black/90 border border-white/10 p-8 rounded-2xl flex flex-col items-center text-center justify-center overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -z-10" />

                            <div className="p-4 rounded-full bg-white/5 border border-white/10 mb-6 group-hover:scale-110 transition-transform duration-300">
                                <GraduationCap size={40} className="text-white" />
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-2 font-outfit">Master of Science</h3>
                            <p className="text-neon-purple font-medium tracking-wide mb-1">Software Systems</p>
                            <p className="text-gray-400 text-sm mb-6">5-Year Integrated Course</p>

                            <div className="w-full h-[1px] bg-white/10 mb-6" />

                            <h4 className="text-xl font-bold text-white group-hover:text-neon-cyan transition-colors">
                                Kongu Engineering College
                            </h4>
                            <p className="text-gray-500 text-sm mt-2">Perundurai, Erode</p>
                        </div>
                    </motion.div>

                    {/* Certifications List */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <Award className="text-neon-cyan" />
                            <span>Certifications</span>
                        </h3>

                        {certificates.map((cert, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ scale: 1.02, x: 10 }}
                                className="group relative p-6 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20 hover:bg-white/[0.06] transition-all cursor-default overflow-hidden"
                            >
                                <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${cert.color}`} />
                                <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Award size={60} />
                                </div>

                                <div className="relative z-10">
                                    <h4 className="text-xl font-black text-white mb-2 tracking-wide group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                                        {cert.title}
                                    </h4>
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-gray-300 font-medium flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-pulse" />
                                            {cert.issuer}
                                        </span>
                                        <span className="text-gray-500 font-mono">{cert.date}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
