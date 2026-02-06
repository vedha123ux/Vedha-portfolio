"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import SplashScreen from "@/components/SplashScreen";
import AnimatedBackground from "@/components/AnimatedBackground";
import { useState } from "react";

export default function Home() {
    const [loading, setLoading] = useState(true);

    return (
        <main className="min-h-screen relative">
            {loading ? (
                <SplashScreen onComplete={() => setLoading(false)} />
            ) : (
                <>
                    <Navbar />
                    <Hero />
                    <About />
                    <Skills />
                    <Education />
                    <Projects />
                    <Contact />
                    <Footer />
                    <ChatBot />
                </>
            )}
        </main>
    );
}
