"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink, Code2, Monitor, Cpu, Brain } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const projects = [
    {
        title: "Etude De Fonction",
        type: "Executable Program",
        description: "A custom program that studies functions and their properties.",
        tech: ["Python", "sympy", "tkinter"],
        github: "https://github.com/ZekriDev1/-tude-des-fonctions",
        image: "/EtudeDe.jpg",
        color: "from-emerald-500 to-teal-500",
        icon: <Cpu className="w-6 h-6" />,
        problem: "Understanding how Programing can realy help us to study functions.",
        solution: "Built a full programm that give me the answer of any function with full steps.",
    },
    {
        title: "Déplace Toi",
        type: "Full-Stack / Mobile",
        description: "A smart transportation platform for Morocco. Features real-time driver discovery, automated fare calculation, and trip safety sharing. A production-ready solution for local logistics.",
        tech: ["Flutter", "Node.js", "Supabase", "PostgreSQL", "Google Maps"],
        github: "https://github.com/ZekriDev1/DepalceToi-Main-APP-code",
        image: "/deplacetoi_mockup.webp",
        color: "from-blue-500 to-indigo-500",
        icon: <Monitor className="w-6 h-6" />,
        problem: "Fragmented and inefficient transportation services in urban Morocco.",
        solution: "A dual-sided ecosystem connecting passengers and drivers with real-time tracking.",
    },
    {
        title: "Windows 11 Web",
        type: "Frontend / Experience",
        description: "A high-fidelity recreation of the Windows 11 desktop experience in the browser. Features pixel-perfect UI, window management, and integrated web apps.",
        tech: ["React", "Tailwind CSS", "Framer Motion", "Redux"],
        github: "https://github.com/ZekriDev1/Windows-11",
        image: "/windows11_web_mockup.webp",
        color: "from-sky-400 to-blue-600",
        icon: <Code2 className="w-6 h-6" />,
        problem: "Pushing the limits of web-based desktop environments.",
        solution: "Implemented a complex windowing system and state management to mimic a local OS experience.",
    },
    {
        title: "Detection AI",
        type: "AI / Computer Vision",
        description: "Real-time object and animal detection system optimized for performance. Uses YOLOv8 for high-accuracy inference on varied hardware.",
        tech: ["Python", "YOLOv8", "OpenCV", "PyTorch"],
        github: "https://github.com/ZekriDev1/Detection",
        image: "/AI.jpg",
        color: "from-purple-500 to-pink-500",
        icon: <Brain className="w-6 h-6" />,
        problem: "Latency and accuracy trade-offs in real-time vision systems.",
        solution: "Fine-tuned YOLO models for specific detection tasks with optimized preprocessing pipelines.",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-32 px-4 md:px-10 bg-zinc-950/30">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 md:mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6 text-white tracking-tighter">
                        Selected <span className="text-zinc-600">Works.</span>
                    </h2>
                    <p className="text-zinc-400 max-w-2xl text-base md:text-lg">
                        A curation of projects that demonstrate technical depth, architectural thinking, and a focus on solving real-world challenges.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9, y: 50 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{
                                duration: 1.2,
                                delay: index * 0.1,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="group relative flex flex-col space-y-6"
                        >
                            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-white/5 bg-zinc-900">
                                <Image
                                    src={project.image}
                                    alt={`${project.title} - ${project.type} by Akram Zekri`}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

                                <div className="absolute top-6 left-6">
                                    <div className={`p-3 rounded-2xl bg-black/50 backdrop-blur-xl border border-white/10 text-white shadow-2xl`}>
                                        {project.icon}
                                    </div>
                                </div>

                                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                    <div className="flex gap-2">
                                        <Link href={project.github} target="_blank" className="p-3 rounded-full bg-white text-black hover:bg-zinc-200 transition-colors">
                                            <Github size={20} />
                                        </Link>
                                        <Link href={project.github} target="_blank" className="p-3 rounded-full bg-white text-black hover:bg-zinc-200 transition-colors">
                                            <ExternalLink size={20} />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-mono text-zinc-500 uppercase tracking-widest">{project.type}</span>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.slice(0, 3).map((t) => (
                                            <span key={t} className="text-[10px] px-2 py-1 rounded-md bg-white/5 border border-white/5 text-zinc-400 uppercase font-bold">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="grid grid-cols-2 gap-4 pt-4">
                                    <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                                        <span className="text-[10px] text-zinc-500 uppercase font-black block mb-1">Challenge</span>
                                        <p className="text-xs text-zinc-300 leading-tight">{project.problem}</p>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                                        <span className="text-[10px] text-zinc-500 uppercase font-black block mb-1">Solution</span>
                                        <p className="text-xs text-zinc-300 leading-tight">{project.solution}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
