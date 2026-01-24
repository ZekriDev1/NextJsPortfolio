export default function Footer() {
    return (
        <footer className="py-20 px-6 border-t border-white/5 bg-black">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="space-y-2 text-center md:text-left">
                    <p className="text-white font-bold tracking-tight text-xl">Akram Zekri<span className="text-primary">.</span></p>
                    <p className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.3em]">Built with Next.js & Passion</p>
                </div>

                <p className="text-zinc-600 text-xs font-medium">
                    © {new Date().getFullYear()} — Designed & Developed with elite intentions.
                </p>

                <div className="flex gap-8">
                    {["GitHub", "LinkedIn", "Instagram"].map((item) => (
                        <a
                            key={item}
                            href={item === 'Instagram' ? 'https://instagram.com/z3kri' : `https://${item.toLowerCase()}.com/${item === 'LinkedIn' ? 'in/akram-zekri' : 'ZekriDev1'}`}
                            target="_blank"
                            className="text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-white transition-colors"
                        >
                            {item}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}
