"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import Link from "next/link";
import Scene from "../Scene";

export default function Hero() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

    return (
        <section ref={containerRef} className="relative flex min-h-screen w-full flex-col items-center justify-center px-4 md:px-10 overflow-hidden">
            {/* Background 3D Scene */}
            <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
                <Scene />
            </motion.div>

            {/* Background 3D-like depth */}
            <motion.div style={{ opacity }} className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 h-[400px] w-[400px] bg-primary/20 blur-[120px] rounded-full animate-pulse" />
                <div className="absolute top-1/4 left-1/4 h-[400px] w-[400px] bg-primary/20 blur-[120px] rounded-full animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] bg-secondary/20 blur-[120px] rounded-full animate-pulse [animation-delay:2s]" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
            </motion.div>

            <motion.div style={{ opacity, scale }} className="z-10 flex max-w-6xl flex-col items-center text-center space-y-8">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center space-x-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm backdrop-blur-md"
                >
                    <Sparkles className="h-4 w-4 text-primary" />
                    <span className="text-zinc-400">Pushing the boundaries of digital products</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-5xl font-bold tracking-tighter text-white sm:text-8xl md:text-9xl lg:text-[10rem] leading-[0.9]"
                >
                    AKRAM <span className="text-zinc-600 block sm:inline">ZEKRI.</span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="space-y-4"
                >
                    <p className="max-w-2xl text-base text-zinc-400 md:text-2xl leading-relaxed px-4 md:px-0">
                        A 17-year-old <span className="text-white font-medium">Full-Stack / Mobile Engineer</span> from Morocco.
                        Building high-performance systems and elite user experiences.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col gap-4 sm:flex-row pt-4 w-full sm:w-auto px-4 sm:px-0"
                >
                    <Link
                        href="#projects"
                        className="group flex items-center justify-center gap-2 rounded-full bg-white px-8 md:px-10 py-4 md:py-5 text-black transition-all hover:bg-zinc-200 font-bold text-base md:text-lg hover:scale-105 active:scale-95"
                    >
                        View Projects
                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <Link
                        href="#contact"
                        className="group flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 md:px-10 py-4 md:py-5 text-white transition-all hover:bg-white/10 font-bold text-base md:text-lg hover:scale-105 active:scale-95 backdrop-blur-sm"
                    >
                        Let's Talk
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="flex gap-8 mt-12 pt-8 border-t border-white/5 w-full justify-center"
                >
                    <Link href="https://github.com/ZekriDev1" target="_blank" className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors">
                        <Github size={20} />
                        <span className="text-sm font-medium">GITHUB</span>
                    </Link>
                    <Link href="https://ma.linkedin.com/in/akram-zekri" target="_blank" className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors">
                        <Linkedin size={20} />
                        <span className="text-sm font-medium">LINKEDIN</span>
                    </Link>
                    <Link href="mailto:contact@zekri.xyz" className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors">
                        <Mail size={20} />
                        <span className="text-sm font-medium">EMAIL</span>
                    </Link>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-10 flex flex-col items-center gap-2"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-600">Scroll</span>
            </motion.div>
        </section>
    );
}
