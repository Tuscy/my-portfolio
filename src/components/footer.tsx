/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

import { Instagram, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Footer() {
    const { theme, systemTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Get the actual theme (resolved from system if needed)
    const currentTheme = mounted ? (theme === "system" ? systemTheme : theme) : "light";

    // Determine logo based on theme
    // LightLogo.png for dark backgrounds, darkLogo.png for light backgrounds
    const footerLogo = currentTheme === "dark" ? "/LightLogo.png" : "/darkLogo.png";

    // Determine "Sites" color based on background
    // Dark theme (black background) → white (#ffffff)
    // Light theme (white background) → #5e6602
    const sitesColor = currentTheme === "dark" ? "#ffffff" : "#5e6602";

    return (
        <footer className="bg-background text-foreground py-8 border-t">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap justify-between items-end">
                    <div className="w-full md:w-1/3 mb-10 md:mb-0 flex items-end">
                        <div className="flex space-x-4">
                            <a href="https://www.linkedin.com/in/rhysesummers/" className="hover:text-accent transition" aria-label="LinkedIn">
                                <Linkedin className="h-6 w-6" />
                            </a>
                            <a href="#" className="hover:text-accent transition" aria-label="Instagram">
                                <Instagram className="h-6 w-6" />
                            </a>
                            <a href="https://github.com/Tuscy" className="hover:text-accent transition" aria-label="GitHub">
                                <Github className="h-6 w-6" />
                            </a>
                        </div>
                    </div>

                    <div className="w-full md:w-1/3 mb-10 md:mb-0 flex flex-col justify-center items-center gap-4">
                        <div className="relative h-24 w-auto md:h-28">
                            <Image
                                src={footerLogo}
                                alt="Logo"
                                width={112}
                                height={112}
                                className="object-contain h-full w-auto"
                            />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold">
                            <span style={{ color: "#bedd2f" }}>Sticky</span>
                            <span style={{ color: sitesColor }}>Sites</span>
                        </h1>
                    </div>

                    <div className="w-full md:w-1/3 flex flex-col md:flex-row gap-8 md:gap-12 md:justify-end">
                        <div>
                            <h3 className="font-semibold mb-4">Menu</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="/" className="hover:text-accent transition">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services" className="hover:text-accent transition">
                                        Services
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/portfolio" className="hover:text-accent transition">
                                        Portfolio
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="hover:text-accent transition">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-4">Legal</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="/privacy-policy" className="hover:text-accent transition">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/terms-of-service" className="hover:text-accent transition">
                                        Terms of Service
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="border-t border-foreground mt-5 pt-5 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} Rhyse Summers Group. All rights reserved.</p>
                    <p className="mt-2">StickySites is a trading name of Rhyse Summers Group Ltd.</p>
                </div>
            </div>
        </footer>
    );
}
