"use client";

import { motion } from "framer-motion";
import {
    SiReact, SiNextdotjs, SiFlutter, SiTailwindcss, SiFramer,
    SiNodedotjs, SiExpress, SiFirebase, SiMongodb, SiPostgresql, SiPhp,
    SiGit, SiGithub, SiVercel, SiFigma, SiPostman,
    SiJavascript, SiDart, SiTypescript, SiPython, SiMysql, SiHtml5, SiCss3
} from "react-icons/si";
import { FaLaptopCode, FaServer, FaTools, FaCode, FaJava } from "react-icons/fa";
import { TbBrandVscode } from "react-icons/tb";
import { useMemo } from "react";

// Skill Data with Icons
const getSkillIcon = (skillName: string) => {
    const icons: { [key: string]: React.ReactNode } = {
        "React.js": <SiReact className="text-[#61DAFB]" />,
        "Next.js 14": <SiNextdotjs className="text-white" />,
        "Flutter": <SiFlutter className="text-[#02569B]" />,
        "Tailwind CSS": <SiTailwindcss className="text-[#06B6D4]" />,
        

        "Node.js": <SiNodedotjs className="text-[#339933]" />,
        "Express": <SiExpress className="text-white" />,
        "Firebase": <SiFirebase className="text-[#FFCA28]" />,
        "MongoDB": <SiMongodb className="text-[#47A248]" />,
         "PHP": <SiPhp className="text-[#777BB4]" />,

        "Git": <SiGit className="text-[#F05032]" />,
        "GitHub": <SiGithub className="text-white" />,
        "VS Code": <TbBrandVscode className="text-[#007ACC]" />,
        "Vercel": <SiVercel className="text-white" />,
        "Figma": <SiFigma className="text-[#F24E1E]" />,
        "Postman": <SiPostman className="text-[#FF6C37]" />,

        "JavaScript": <SiJavascript className="text-[#F7DF1E]" />,
        "Dart": <SiDart className="text-[#0175C2]" />,
        "TypeScript": <SiTypescript className="text-[#3178C6]" />,
        "Python": <SiPython className="text-[#3776AB]" />,
        "Java": <FaJava className="text-[#007396]" />,
        "SQL": <SiMysql className="text-[#4479A1]" />,
    };

    return icons[skillName] || <FaCode className="text-gray-400" />;
};

const SkillCard = ({ skill, index }: { skill: string; index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.5, type: "spring" }}
            whileHover={{ y: -8, scale: 1.1, rotate: 2 }}
            animate={{ y: [0, -5, 0] }} // Floating animation
            // @ts-ignore - transition prop for ease of animate
            transition={{
                y: { repeat: Infinity, duration: 2 + Math.random() * 2, ease: "easeInOut" },
                default: { duration: 0.2 }
            }}
            className="group relative flex flex-col items-center justify-center p-4 rounded-xl bg-white/5 border border-white/10 hover:border-neon-cyan/50 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm cursor-pointer shadow-lg hover:shadow-neon-cyan/20"
        >
            <div className="text-4xl mb-3 filter drop-shadow-[0_0_10px_rgba(255,255,255,0.1)] group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300 transform group-hover:scale-110">
                {getSkillIcon(skill)}
            </div>
            <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                {skill}
            </span>

            {/* Hover Glow Effect */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-neon-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </motion.div>
    );
};

export default function Skills() {
    const categories = [
        {
            title: "Frontend & Mobile",
            icon: <FaLaptopCode className="text-neon-cyan" />,
            skills: ["React.js", "Next.js 14", "Flutter", "Tailwind CSS",]
        },
        {
            title: "Backend & Cloud",
            icon: <FaServer className="text-neon-purple" />,
            skills: ["Node.js", "Express", "Firebase", "MongoDB",  "PHP"]
        },
        {
            title: "Dev Tools",
            icon: <FaTools className="text-pink-500" />,
            skills: ["Git", "GitHub", "VS Code", "Vercel", "Figma", "Postman"]
        },
        {
            title: "Languages",
            icon: <FaCode className="text-yellow-400" />,
            skills: ["JavaScript", "Dart", "TypeScript", "Python", "Java", "SQL"]
        }
    ];

    return (
        <section id="skills" className="py-24 relative bg-black overflow-hidden">
            {/* Dynamic Background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black" />

            <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-4 font-outfit"
                    >
                        Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-cyan">Stack</span>
                    </motion.h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A powerful array of modern technologies I leverage to build scalable solutions.
                    </p>
                </div>

                <div className="space-y-16">
                    {categories.map((category, idx) => (
                        <div key={idx} className="relative">
                            {/* Category Header */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-3 mb-8"
                            >
                                <div className="p-3 rounded-full bg-white/5 border border-white/10 text-2xl">
                                    {category.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white font-outfit">{category.title}</h3>
                                <div className="h-[1px] flex-grow bg-gradient-to-r from-white/10 to-transparent ml-4" />
                            </motion.div>

                            {/* Skills Grid */}
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                                {category.skills.map((skill, sIdx) => (
                                    <SkillCard key={sIdx} skill={skill} index={sIdx} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
