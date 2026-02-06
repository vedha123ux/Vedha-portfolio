"use client";

import { motion } from "framer-motion";
import { Send, Mail, User, MessageSquare, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export default function Contact() {
    const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

    const [error, setError] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        const formData = new FormData(e.currentTarget);
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;

        // 1. Name check: Should not start with number
        if (/^\d/.test(name)) {
            e.preventDefault();
            setError("Name cannot start with a number.");
            return;
        }

        // 2. Email check: Should not start with number
        if (/^\d/.test(email)) {
            e.preventDefault();
            setError("Email cannot start with a number.");
            return;
        }

        // 3. Email check: Must contain @
        if (!email.includes("@")) {
            e.preventDefault();
            setError("Email must contain an '@' symbol.");
            return;
        }

        // If all good, we allow the form to submit naturally
        setError("");
        setFormStatus("submitting");
    };

    return (
        <section id="contact" className="py-24 relative bg-black overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-neon-purple/20 rounded-full blur-[120px]" />
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-neon-cyan/20 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-outfit">
                        Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-cyan">Connect</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
                        Ready to innovate? Whether you have a groundbreaking idea or a challenging project, I'm here to collaborate.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* Contact Info Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-10"
                    >
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500" />
                            <div className="relative p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
                                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 rounded-full bg-neon-purple/20 text-neon-purple">
                                            <Mail size={24} />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-medium mb-1">Email</h4>
                                            <a href="mailto:vedha.rajendran22004@gmail.com" className="text-gray-400 hover:text-neon-cyan transition-colors">
                                                vedha.rajendran22004@gmail.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="p-3 rounded-full bg-neon-cyan/20 text-neon-cyan">
                                            <MapPin size={24} />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-medium mb-1">Location</h4>
                                            <p className="text-gray-400">Sankari,Tamil Nadu, India</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/10">
                                        <p className="text-gray-500 text-sm">
                                            "Open for freelance opportunities and full-time roles."
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <form
                            action="https://formsubmit.co/vedha.rajendran22004@gmail.com"
                            method="POST"
                            onSubmit={handleSubmit}
                            className="space-y-6"
                        >
                            {/* Honeypot for spam */}
                            <input type="text" name="_honey" className="hidden" />
                            {/* Disable Captcha for cleaner UI (optional) */}
                            <input type="hidden" name="_captcha" value="false" />
                            {/* Redirect to a thank you page or same page */}
                            <input type="hidden" name="_next" value="http://localhost:3000" />

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400 ml-1">Name</label>
                                    <div className="relative">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            placeholder="Your Name"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-neon-cyan/50 focus:bg-white/10 transition-all placeholder:text-gray-600"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400 ml-1">Email</label>
                                    <div className="relative">
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            placeholder="your@email.com"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-neon-cyan/50 focus:bg-white/10 transition-all placeholder:text-gray-600"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400 ml-1">Message</label>
                                <div className="relative">
                                    <MessageSquare className="absolute left-4 top-4 text-gray-500" size={18} />
                                    <textarea
                                        name="message"
                                        required
                                        rows={5}
                                        placeholder="Tell me about your project..."
                                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-neon-cyan/50 focus:bg-white/10 transition-all placeholder:text-gray-600 resize-none"
                                    ></textarea>
                                </div>
                            </div>

                            {error && (
                                <div className="p-3 bg-red-500/10 border border-red-500/50 rounded-xl text-red-200 text-sm flex items-center justify-center">
                                    ⚠️ {error}
                                </div>
                            )}

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full bg-gradient-to-r from-neon-purple to-neon-cyan text-white font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(188,19,254,0.3)] hover:shadow-[0_0_40px_rgba(0,243,255,0.5)] transition-shadow flex items-center justify-center gap-2"
                            >
                                <Send size={20} />
                                <span>Send Message</span>
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
