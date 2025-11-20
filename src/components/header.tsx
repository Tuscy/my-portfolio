"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { ModeToggle } from "./mode-toggle";
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const { theme, systemTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Get the actual theme (resolved from system if needed)
    const currentTheme = mounted ? (theme === "system" ? systemTheme : theme) : "light";

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        // Check initial scroll position
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Determine background and text colors based on scroll and theme
    // When scrolled: opposite of site theme (light site = dark header, dark site = light header)
    const headerBg = isScrolled 
        ? (currentTheme === "dark" ? "bg-white" : "bg-black")
        : "bg-transparent";
    
    const textColor = isScrolled
        ? (currentTheme === "dark" ? "text-black" : "text-white")
        : "text-foreground";

    const borderColor = isScrolled
        ? (currentTheme === "dark" ? "border-gray-200" : "border-gray-800")
        : "border-transparent";

    return (
        <header className={cn(
            "sticky top-0 z-50 w-full transition-all duration-300",
            headerBg,
            borderColor,
            "border-b"
        )}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center gap-4">
                        {/* Circular Profile Picture */}
                        <Link href="/" className="relative h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0">
                            <Image
                                src="/headPic.png"
                                alt="Profile"
                                fill
                                className="rounded-full object-cover"
                                priority
                            />
                        </Link>
                        
                        <NavigationMenu>
                            <NavigationMenuList className={cn("gap-1 sm:gap-2", textColor)}>
                                <NavigationMenuItem>
                                    <Link href="/" legacyBehavior passHref>
                                        <NavigationMenuLink className={cn(
                                            "group inline-flex h-9 min-h-[44px] w-max items-center justify-center rounded-md px-2 sm:px-4 py-2 text-xs sm:text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                                            isScrolled
                                                ? currentTheme === "dark"
                                                    ? "hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black"
                                                    : "hover:bg-gray-800 hover:text-white focus:bg-gray-800 focus:text-white"
                                                : "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                                            textColor
                                        )}>
                                            Home
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link href="/about" legacyBehavior passHref>
                                        <NavigationMenuLink className={cn(
                                            "group inline-flex h-9 min-h-[44px] w-max items-center justify-center rounded-md px-2 sm:px-4 py-2 text-xs sm:text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                                            isScrolled
                                                ? currentTheme === "dark"
                                                    ? "hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black"
                                                    : "hover:bg-gray-800 hover:text-white focus:bg-gray-800 focus:text-white"
                                                : "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                                            textColor
                                        )}>
                                            About
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link href="/portfolio" legacyBehavior passHref>
                                        <NavigationMenuLink className={cn(
                                            "group inline-flex h-9 min-h-[44px] w-max items-center justify-center rounded-md px-2 sm:px-4 py-2 text-xs sm:text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                                            isScrolled
                                                ? currentTheme === "dark"
                                                    ? "hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black"
                                                    : "hover:bg-gray-800 hover:text-white focus:bg-gray-800 focus:text-white"
                                                : "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                                            textColor
                                        )}>
                                            Portfolio
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link href="/contact" legacyBehavior passHref>
                                        <NavigationMenuLink className={cn(
                                            "group inline-flex h-9 min-h-[44px] w-max items-center justify-center rounded-md px-2 sm:px-4 py-2 text-xs sm:text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                                            isScrolled
                                                ? currentTheme === "dark"
                                                    ? "hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black"
                                                    : "hover:bg-gray-800 hover:text-white focus:bg-gray-800 focus:text-white"
                                                : "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                                            textColor
                                        )}>
                                            Contact
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                    <ModeToggle textColor={textColor} borderColor={borderColor} isScrolled={isScrolled} currentTheme={currentTheme} />
                </div>
            </div>
        </header>
    );
}