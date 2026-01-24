"use client";

import { motion } from "framer-motion";
import { User, Target, Rocket, ShieldCheck, Cpu } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="relative w-full py-32 px-4 md:px-10 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold mb-6 md:mb-8 text-white tracking-tighter">
                            Engineering with <br className="hidden md:block" />
                            <span className="text-zinc-600">Product Intuition.</span>
                        </h2>

                        <motion.div
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            variants={{
                                animate: {
                                    transition: {
                                        staggerChildren: 0.1
                                    }
                                }
                            }}
                            className="space-y-4 md:space-y-6 text-base md:text-xl text-zinc-400 leading-relaxed font-light"
                        >
                            <motion.p variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}>
                                I'm <span className="text-white font-medium underline underline-offset-8 decoration-primary/50">Akram Zekri</span>, a 17-year-old developer who doesn't just write code—I build solutions. My journey started with a curiosity about how things work, which led me from building simple scripts to architecting operating system kernels and large-scale transportation platforms.
                            </motion.p>
                            <motion.p variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}>
                                Based in Morocco, I spent the last few years mastering over 20 programming languages and diving deep into low-level engineering. I believe that being a great engineer requires a blend of technical depth and design-first thinking.
                            </motion.p>
                            <motion.p variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}>
                                My goal is to bridge the gap between complex backend systems and premium, human-centric interfaces.
                            </motion.p>
                        </motion.div>

                        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-10 md:mt-12">
                            <div className="px-6 py-3 rounded-full border border-white/5 bg-white/5 text-zinc-300 text-[10px] md:text-sm font-bold uppercase tracking-widest text-center">
                                1,000+ Contributions
                            </div>
                            <div className="px-6 py-3 rounded-full border border-white/5 bg-white/5 text-zinc-300 text-[10px] md:text-sm font-bold uppercase tracking-widest text-center">
                                20+ Languages
                            </div>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 space-y-4 hover:bg-zinc-900 transition-colors"
                        >
                            <Target className="w-8 h-8 text-blue-500" />
                            <h3 className="text-xl font-bold text-white">Product Focus</h3>
                            <p className="text-sm text-zinc-400">I build products that people actually want to use, focusing on UX and business value.</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 space-y-4 hover:bg-zinc-900 transition-colors"
                        >
                            <Cpu className="w-8 h-8 text-emerald-500" />
                            <h3 className="text-xl font-bold text-white">Tech Depth</h3>
                            <p className="text-sm text-zinc-400">From Assembler to TypeScript, I understand the full stack of modern computing.</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 space-y-4 hover:bg-zinc-900 transition-colors"
                        >
                            <Rocket className="w-8 h-8 text-purple-500" />
                            <h3 className="text-xl font-bold text-white">High Efficiency</h3>
                            <p className="text-sm text-zinc-400">Consistently shipping high-quality code and meeting aggressive deadlines.</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 space-y-4 hover:bg-zinc-900 transition-colors"
                        >
                            <ShieldCheck className="w-8 h-8 text-orange-500" />
                            <h3 className="text-xl font-bold text-white">Reliability</h3>
                            <p className="text-sm text-zinc-400">Trusted by startups and agencies to deliver robust and scalable solutions.</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
