"use client";

import { motion } from "framer-motion";
import { Code2, Smartphone, Database, Terminal, Palette, Microscope, Brain, Gamepad2 } from "lucide-react";

const skillCategories = [
    {
        title: "Frontend Engineering",
        icon: <Palette className="w-6 h-6" />,
        skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js", "GSAP"],
        color: "text-blue-500",
        bg: "bg-blue-500/10",
    },
    {
        title: "Mobile Development",
        icon: <Smartphone className="w-6 h-6" />,
        skills: ["Flutter", "React Native", "Expo", "Dart", "Swift (Beginner)", "Android Studio"],
        color: "text-cyan-500",
        bg: "bg-cyan-500/10",
    },
    {
        title: "Backend & Cloud",
        icon: <Database className="w-6 h-6" />,
        skills: ["Node.js", "Express", "Supabase", "Firebase", "PostgreSQL", "Prisma", "AWS", "Docker"],
        color: "text-emerald-500",
        bg: "bg-emerald-500/10",
    },
    {
        title: "Low-Level & Logic",
        icon: <Terminal className="w-6 h-6" />,
        skills: ["C", "C#", "Assembly (x86)", "Kernel Development", "Computer Architecture", "Algorithms"],
        color: "text-amber-500",
        bg: "bg-amber-500/10",
    },
    {
        title: "AI & Data Science",
        icon: <Brain className="w-6 h-6" />,
        skills: ["Python", "YOLOv8", "OpenCV", "TensorFlow", "Scikit-learn", "AI Optimization"],
        color: "text-purple-500",
        bg: "bg-purple-500/10",
    },
    {
        title: "Game & Creative",
        icon: <Gamepad2 className="w-6 h-6" />,
        skills: ["Unity", "C#", "OpenGL", "Shaders", "After Effects", "Figma", "Interaction Design"],
        color: "text-pink-500",
        bg: "bg-pink-500/10",
    },
];

export default function Skills() {
    return (
        <section id="skills" className="py-20 md:py-32 px-4 md:px-10">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 md:mb-20 text-center"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6 text-white tracking-tighter">
                        Technical <span className="text-zinc-600">Depth.</span>
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
                        I specialize in building high-performance systems across the entire stack,
                        from hardware-level logic to premium user interfaces.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group p-8 rounded-3xl bg-zinc-900/30 border border-white/5 hover:border-white/10 hover:bg-zinc-900/50 transition-all duration-500"
                        >
                            <div className={`p-4 rounded-2xl ${category.bg} ${category.color} w-fit mb-6 group-hover:scale-110 transition-transform`}>
                                {category.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-6 tracking-tight">{category.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1.5 rounded-lg bg-black/40 border border-white/5 text-zinc-400 text-xs font-medium hover:border-white/20 hover:text-white transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
