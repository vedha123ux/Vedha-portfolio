"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Send, X } from "lucide-react";

export default function ChatBot() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [messages, setMessages] = useState<{ role: 'user' | 'ai', text: string }[]>([
        { role: 'ai', text: "Hello! I am Vedha's automated assistant. Ask me anything about her projects, skills, or experience." }
    ]);
    const [input, setInput] = useState("");
    const scrollRef = useRef<HTMLDivElement>(null);

    // Auto-scroll
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    // Speech Function
    const speak = (text: string) => {
        if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(text);

            // Voice preference
            const voices = window.speechSynthesis.getVoices();
            const preferredVoice = voices.find(v => v.name.includes("Google US English") || v.name.includes("Samantha"));
            if (preferredVoice) utterance.voice = preferredVoice;

            utterance.onstart = () => setIsSpeaking(true);
            utterance.onend = () => setIsSpeaking(false);

            window.speechSynthesis.speak(utterance);
        }
    };

    const handleSend = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMsg = input;
        setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
        setInput("");

        // Enhanced AI Logic
        setTimeout(() => {
            let response = "I do not have data on that specific topic yet. Try asking about 'Projects' or 'Skills'.";
            const lower = userMsg.toLowerCase();

            if (lower.includes("hello") || lower.includes("hi") || lower.includes("hey")) {
                response = "Greetings! I am online and ready to assist you. What would you like to know about Vedha?";
            }
            else if (lower.includes("skill") || lower.includes("stack") || lower.includes("tech")) {
                response = "Vedha is an expert in the MERN stack (MongoDB, Express, React, Node.js), Next.js 14, and Flutter for mobile development. She also utilizes Firebase and standard DevOps tools.";
            }
            else if (lower.includes("project") || lower.includes("work")) {
                response = "Her portfolio includes 'Sri Jayamurugan Transport' (a logistics platform), an E-commerce site for 'Uma Ghee', and a 'Wonders of Handmade' marketplace for artisans.";
            }
            else if (lower.includes("experience") || lower.includes("job") || lower.includes("intern")) {
                response = "She is currently a Web Developer at Crescent Moon Consulting. Previously, she interned as a UI/UX Designer at CodSoft and a Full Stack Developer at Congify.";
            }
            else if (lower.includes("education") || lower.includes("college") || lower.includes("degree")) {
                response = "She is pursuing a 5-year Integrated Master's in Software Systems at Kongu Engineering College.";
            }
            else if (lower.includes("contact") || lower.includes("email") || lower.includes("hire")) {
                response = "You can contact her directly via email at vedha.rajendran22004@gmail.com or connect on LinkedIn.";
            }
            else if (lower.includes("who are you") || lower.includes("what are you")) {
                response = "I am a custom-built AI interface designed to showcase Vedha's professional capabilities.";
            }

            setMessages(prev => [...prev, { role: 'ai', text: response }]);
            speak(response); // Trigger Voice
        }, 600);
    };

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="fixed bottom-24 right-6 w-80 md:w-96 h-[500px] bg-black/90 backdrop-blur-xl border border-neon-cyan/30 rounded-2xl shadow-[0_0_40px_rgba(0,243,255,0.2)] z-50 flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-4 bg-gradient-to-r from-neon-purple/20 to-neon-cyan/20 border-b border-white/10 flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <span className={`w-2 h-2 rounded-full ${isSpeaking ? 'bg-neon-cyan animate-pulse' : 'bg-green-500'}`} />
                                <span className="text-white font-bold font-orbitron tracking-wide">AI Interface</span>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                                <X size={20} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div ref={scrollRef} className="flex-1 p-4 overflow-y-auto space-y-4">
                            {messages.map((m, i) => (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    key={i}
                                    className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${m.role === 'user'
                                            ? 'bg-neon-cyan text-black rounded-tr-none font-medium'
                                            : 'bg-white/10 text-gray-200 rounded-tl-none border border-white/5'
                                        }`}>
                                        {m.text}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Input */}
                        <form onSubmit={handleSend} className="p-3 border-t border-white/10 bg-black/50">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Execute command..."
                                    className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-neon-cyan/50 focus:bg-white/10 transition-all placeholder:text-gray-600"
                                />
                                <button type="submit" className="bg-neon-cyan text-black p-2 rounded-xl hover:bg-white transition-colors">
                                    <Send size={18} />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            {!isOpen && (
                <motion.button
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(true)}
                    className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-tr from-neon-purple to-neon-cyan rounded-full shadow-[0_0_20px_rgba(0,243,255,0.4)] flex items-center justify-center z-50 group border border-white/20"
                >
                    <MessageSquare className="text-white w-6 h-6 group-hover:scale-110 transition-transform" />
                </motion.button>
            )}
        </>
    );
}
