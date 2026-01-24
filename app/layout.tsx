import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
    display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-mono",
    display: "swap",
});

import Script from "next/script";

export const metadata: Metadata = {
    metadataBase: new URL("https://zekri.xyz"),
    title: {
        default: "Akram Zekri | Full-Stack Developer & Product Builder",
        template: "%s | Akram Zekri",
    },
    description: "17-year-old Full-Stack Developer from Morocco specializing in Next.js, Flutter, and Low-Level Engineering. Building high-performance digital products and elite user experiences.",
    keywords: [
        "Akram Zekri",
        "Full Stack Developer Morocco",
        "17 year old developer",
        "Next.js Developer",
        "Flutter Developer",
        "Zekri OS",
        "Software Engineer Portfolio",
        "React Native Developer",
        "Low-level C programming",
        "UI/UX Design Morocco"
    ],
    authors: [{ name: "Akram Zekri", url: "https://zekri.xyz" }],
    creator: "Akram Zekri",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://zekri.xyz",
        siteName: "Akram Zekri Portfolio",
        title: "Akram Zekri | Full-Stack Developer & Product Builder",
        description: "Explore the work of Akram Zekri, a 17-year-old engineer building everything from OS kernels to high-end web applications.",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Akram Zekri - Full-Stack Developer Portfolio",
            },
        ],
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    },
    manifest: "/site.webmanifest",
    alternates: {
        canonical: "/",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Akram Zekri",
    "url": "https://zekri.xyz",
    "image": "https://zekri.xyz/og-image.png",
    "sameAs": [
        "https://github.com/ZekriDev1",
        "https://ma.linkedin.com/in/akram-zekri",
        "https://instagram.com/z3kri"
    ],
    "jobTitle": "Full-Stack Developer",
    "description": "17-year-old Full-Stack Developer from Morocco building premium digital products.",
    "knowsAbout": [
        "Full-Stack Development",
        "Mobile App Development",
        "Low-Level Engineering",
        "UI/UX Design",
        "Next.js",
        "Flutter",
        "C/C++"
    ]
};

import { Analytics } from "@vercel/analytics/react";

export const viewport: Viewport = {
    themeColor: "#0a0a0a",
    width: "device-width",
    initialScale: 1,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning className="scroll-smooth">
            <head>
                <Script
                    id="json-ld"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body
                className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-black text-foreground overflow-x-hidden selection:bg-primary/20 selection:text-primary transition-colors duration-500`}
            >
                <div className="fixed inset-0 z-[100] pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
                <Providers>{children}</Providers>
                <Analytics />
            </body>
        </html>
    );
}
