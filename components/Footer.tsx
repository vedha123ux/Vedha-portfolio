"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter, ChevronUp, Heart } from "lucide-react";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const socialLinks = [
        { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/vedha-dharshini-r-b7a488258/", label: "LinkedIn" },
        { icon: <Github size={20} />, href: "https://github.com/vedha123-ux", label: "GitHub" },
        { icon: <Mail size={20} />, href: "mailto:vedha.rajendran22004@gmail.com", label: "Email" },
    ];

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <footer className="relative bg-black pt-20 pb-10 border-t border-white/10 overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-neon-purple/10 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-16">

                    {/* Brand */}
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-bold text-white mb-2 font-outfit tracking-wide">
                            VEDHA <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-cyan">DHARSHINI</span>
                        </h2>
                        <p className="text-gray-400 text-sm">
                            Architecting the digital future, one line of code at a time.
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-4">
                        {socialLinks.map((link, index) => (
                            <motion.a
                                key={index}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ y: -5, color: "#00f3ff" }}
                                className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10 transition-colors"
                            >
                                {link.icon}
                            </motion.a>
                        ))}
                    </div>
                </div>

                <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">

                    {/* Navigation */}
                    <nav className="flex gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm text-gray-400 hover:text-neon-cyan transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    {/* Copyright */}
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span>© 2026 Vedha Dharshini. Made with</span>
                        <Heart size={14} className="text-red-500 fill-red-500 animate-pulse" />
                        <span>in React & Next.js.</span>
                    </div>

                    {/* Back to Top */}
                    <motion.button
                        onClick={scrollToTop}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-neon-cyan/10 border border-neon-cyan/30 rounded-lg text-neon-cyan hover:bg-neon-cyan hover:text-black transition-all"
                    >
                        <ChevronUp size={20} />
                    </motion.button>
                </div>
            </div>
        </footer>
    );
}
