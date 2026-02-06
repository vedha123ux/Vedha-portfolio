"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Linkedin } from "lucide-react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const links = [
        { name: "Home", href: "#" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Education", href: "#education" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    const navVariants = {
        hidden: { y: -100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <motion.nav
            variants={navVariants}
            initial="hidden"
            animate="visible"
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${scrolled
                    ? "py-3 bg-black/40 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
                    : "py-6 bg-transparent"
                }`}
        >
            <div className={`container mx-auto px-6 flex justify-between items-center transition-all duration-500 ${scrolled ? 'max-w-7xl' : 'max-w-7xl'}`}>
                {/* Logo with Spin Effect */}
                <motion.div variants={itemVariants}>
                    <Link href="#" className="relative group flex items-center gap-2">
                        <motion.img
                            src="/logo.png"
                            alt="Vedha Logo"
                            className="w-10 h-10 object-contain"
                            whileHover={{ rotate: 180, scale: 1.1 }}
                            transition={{ duration: 0.5 }}
                        />
                    </Link>
                </motion.div>

                {/* Desktop Links with Glass Pill Design */}
                <motion.div
                    variants={itemVariants}
                    className={`hidden md:flex gap-1 items-center px-2 py-1.5 rounded-full transition-all duration-500 ${scrolled ? "bg-white/5 border border-white/5 backdrop-blur-md" : "bg-transparent border-transparent"
                        }`}
                >
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="relative px-5 py-2 text-gray-300 hover:text-white text-sm font-medium tracking-wide transition-colors group rounded-full hover:bg-white/5"
                        >
                            {link.name}
                            {/* Hover Glow Dot */}
                            <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-neon-cyan rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-[0_0_10px_#00f3ff]" />
                        </Link>
                    ))}
                </motion.div>

                {/* CTA & Mobile Toggle */}
                <motion.div variants={itemVariants} className="flex items-center gap-4">
                    <motion.a
                        href="https://www.linkedin.com/in/vedha-dharshini-545baa246/"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full text-sm font-bold shadow-[0_0_20px_rgba(0,243,255,0.3)] hover:shadow-[0_0_30px_rgba(0,243,255,0.5)] transition-all duration-300 border border-white/10"
                    >
                        <Linkedin size={16} />
                        <span>Connect</span>
                    </motion.a>

                    {/* Mobile Menu Button with Rotation */}
                    <button
                        className="md:hidden text-white p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={mobileMenuOpen ? "close" : "open"}
                                initial={{ opacity: 0, rotate: -90 }}
                                animate={{ opacity: 1, rotate: 0 }}
                                exit={{ opacity: 0, rotate: 90 }}
                                transition={{ duration: 0.2 }}
                            >
                                {mobileMenuOpen ? <X /> : <Menu />}
                            </motion.div>
                        </AnimatePresence>
                    </button>
                </motion.div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-black/95 backdrop-blur-2xl border-t border-white/10 absolute top-full left-0 w-full overflow-hidden"
                    >
                        <div className="flex flex-col p-8 gap-6 items-center">
                            {links.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        className="text-2xl font-light tracking-wider text-gray-300 hover:text-neon-cyan hover:scale-110 transition-all duration-300 block"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.a
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                href="https://www.linkedin.com/in/vedha-dharshini-545baa246/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full text-white w-full text-center font-bold shadow-lg"
                            >
                                Connect on LinkedIn
                            </motion.a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
