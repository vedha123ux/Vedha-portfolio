"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Truck, ShoppingBag, Globe, Map, Cpu, ArrowUpRight } from "lucide-react";

export default function Projects() {
    const projects = [
        {
            title: "Sri Jayamurugan Transport",
            tech: "Next.js, Tailwind CSS",
            desc: "A comprehensive logistics management platform optimizing fleet tracking and shipment handling.",
            period: "July - Aug 2025",
            link: "https://sri-jayamurgan-transport.netlify.app/",
            icon: <Truck className="w-8 h-8 text-cyan-400" />,
            color: "from-cyan-500/20 to-blue-600/20",
            border: "group-hover:border-cyan-500/50"
        },
        {
            title: "Uma Ghee Factory",
            tech: "Full Stack (React, Node, SQL)",
            desc: "Robust e-commerce site handling user authentication, secure transactions, and sales reporting.",
            period: "2023 - 2024",
            link: "https://github.com/vedha123-ux/my-consultancy-project",
            icon: <ShoppingBag className="w-8 h-8 text-yellow-400" />,
            color: "from-yellow-500/20 to-orange-600/20",
            border: "group-hover:border-yellow-500/50"
        },
        {
            title: "Wonders of Handmade",
            tech: "HTML, CSS, Bootstrap",
            desc: "Digital marketplace connecting rural Indian artisans with a global customer base.",
            period: "2022 - 2023",
            link: "https://github.com/vedha123-ux/WEB-TECHPROJECT-",
            icon: <Globe className="w-8 h-8 text-pink-400" />,
            color: "from-pink-500/20 to-rose-600/20",
            border: "group-hover:border-pink-500/50"
        },
        {
            title: "Travel Agency Portal",
            tech: "Vite, React, PHP",
            desc: "Dynamic travel booking portal with itinerary management and backend integration.",
            period: "2024",
            link: "https://github.com/vedha123-ux/Travel-Website-using-Tailwind-css-and-React-js-and-php",
            icon: <Map className="w-8 h-8 text-green-400" />,
            color: "from-green-500/20 to-emerald-600/20",
            border: "group-hover:border-green-500/50"
        }
    ];

    return (
        <section id="projects" className="py-24 relative bg-black overflow-hidden">
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-outfit">
                        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Deployments</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A showcase of engineered solutions, from enterprise-grade logistics to global e-commerce systems.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 ${project.border} hover:shadow-2xl hover:-translate-y-2`}
                        >
                            {/* Inner Background Gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div className="relative p-8 h-full flex flex-col z-10">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 rounded-xl bg-black/40 border border-white/10 backdrop-blur-md group-hover:scale-110 transition-transform duration-300">
                                        {project.icon}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs font-mono text-gray-500 border border-white/10 px-2 py-1 rounded bg-black/20">
                                            {project.period}
                                        </span>
                                        <ArrowUpRight className="text-white/30 group-hover:text-white transition-colors" />
                                    </div>

                                </div>

                                <h3 className="text-2xl font-bold text-white mb-3 font-outfit group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all">
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 mb-6 leading-relaxed flex-grow group-hover:text-gray-300 transition-colors">
                                    {project.desc}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.split(", ").map((t, i) => (
                                        <span key={i} className="text-xs px-3 py-1 rounded-full bg-black/30 border border-white/10 text-gray-400 group-hover:border-white/20 group-hover:text-white transition-colors">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
