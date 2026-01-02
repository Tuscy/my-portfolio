"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuTrigger,
    NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { theme, systemTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

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

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isMobileMenuOpen]);

    // Determine background and text colors based on scroll and theme
    // When scrolled: opposite of site theme (light site = dark header, dark site = light header)
    const headerBg = isScrolled 
        ? (currentTheme === "dark" ? "bg-white" : "bg-[#161717]")
        : "bg-transparent";
    
    const textColor = isScrolled
        ? (currentTheme === "dark" ? "text-black" : "text-white")
        : "text-foreground";

    const borderColor = isScrolled
        ? (currentTheme === "dark" ? "border-gray-200" : "border-gray-800")
        : "border-transparent";

    // Dropdown background and text colors
    const dropdownBg = isScrolled
        ? (currentTheme === "dark" ? "bg-white" : "bg-[#161717]")
        : "bg-popover";
    
    const dropdownText = isScrolled
        ? (currentTheme === "dark" ? "text-black" : "text-white")
        : "text-popover-foreground";
    
    const dropdownBorder = isScrolled
        ? (currentTheme === "dark" ? "border-gray-200" : "border-gray-800")
        : "border-border";

    const sidebarBg = isScrolled
        ? (currentTheme === "dark" ? "bg-white" : "bg-[#161717]")
        : "bg-background";
    
    const sidebarText = isScrolled
        ? (currentTheme === "dark" ? "text-black" : "text-white")
        : "text-foreground";

    // Determine logo based on effective background color
    // LightLogo.png for dark/black backgrounds, darkLogo.png for light/white backgrounds
    const effectiveBgIsDark = isScrolled 
        ? (currentTheme === "light")  // scrolled + light theme = black bg
        : (currentTheme === "dark");  // not scrolled + dark theme = dark page bg
    
    const headerLogo = effectiveBgIsDark ? "/LightLogo.png" : "/darkLogo.png";

    return (
        <>
            <header className={cn(
                "sticky top-0 z-50 w-full transition-all duration-300",
                headerBg,
                borderColor,
                "border-b"
            )}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center gap-4">
                            {/* Logo */}
                            <Link href="/" className="relative h-10 w-auto sm:h-12 flex-shrink-0">
                                <Image
                                    src={headerLogo}
                                    alt="Logo"
                                    width={120}
                                    height={48}
                                    className="object-contain h-full w-auto"
                                    priority
                                />
                            </Link>
                            
                            {/* Desktop Navigation - Hidden on mobile/tablet */}
                            <NavigationMenu viewport={false} className="hidden lg:flex">
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
                                        <NavigationMenuTrigger 
                                            onClick={(e) => {
                                                e.preventDefault();
                                                router.push("/services");
                                            }}
                                            className={cn(
                                                "group inline-flex h-9 min-h-[44px] w-max items-center justify-center rounded-md px-2 sm:px-4 py-2 text-xs sm:text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
                                                isScrolled
                                                    ? currentTheme === "dark"
                                                        ? "hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black"
                                                        : "hover:bg-gray-800 hover:text-white focus:bg-gray-800 focus:text-white"
                                                    : "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                                                textColor
                                            )}>
                                            Services
                                        </NavigationMenuTrigger>
                                        <NavigationMenuContent className={cn(
                                            isScrolled
                                                ? currentTheme === "dark"
                                                    ? "!bg-white !text-black group-data-[viewport=false]/navigation-menu:!bg-white group-data-[viewport=false]/navigation-menu:!text-black"
                                                    : "!bg-[#161717] !text-white group-data-[viewport=false]/navigation-menu:!bg-[#161717] group-data-[viewport=false]/navigation-menu:!text-white"
                                                : "",
                                            isScrolled
                                                ? currentTheme === "dark"
                                                    ? "!border-gray-200 group-data-[viewport=false]/navigation-menu:!border-gray-200"
                                                    : "!border-gray-800 group-data-[viewport=false]/navigation-menu:!border-gray-800"
                                                : "",
                                            "border shadow-lg"
                                        )}>
                                            <ul className="grid w-[200px] gap-1 p-2">
                                                <li>
                                                    <Link href="/services/wordpress" legacyBehavior passHref>
                                                        <NavigationMenuLink className={cn(
                                                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
                                                            isScrolled
                                                                ? currentTheme === "dark"
                                                                    ? "hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black text-black"
                                                                    : "hover:bg-gray-800 hover:text-white focus:bg-gray-800 focus:text-white text-white"
                                                                : "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-popover-foreground"
                                                        )}>
                                                            <div className={cn(
                                                                "text-sm font-medium leading-none",
                                                                isScrolled
                                                                    ? currentTheme === "dark"
                                                                        ? "text-black"
                                                                        : "text-white"
                                                                    : "text-popover-foreground"
                                                            )}>WordPress</div>
                                                            <p className={cn(
                                                                "line-clamp-2 text-sm leading-snug mt-1",
                                                                isScrolled
                                                                    ? currentTheme === "dark"
                                                                        ? "text-gray-600"
                                                                        : "text-gray-400"
                                                                    : "text-muted-foreground"
                                                            )}>
                                                                WordPress websites & hosting
                                                            </p>
                                                        </NavigationMenuLink>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/services/shopify" legacyBehavior passHref>
                                                        <NavigationMenuLink className={cn(
                                                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
                                                            isScrolled
                                                                ? currentTheme === "dark"
                                                                    ? "hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black text-black"
                                                                    : "hover:bg-gray-800 hover:text-white focus:bg-gray-800 focus:text-white text-white"
                                                                : "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-popover-foreground"
                                                        )}>
                                                            <div className={cn(
                                                                "text-sm font-medium leading-none",
                                                                isScrolled
                                                                    ? currentTheme === "dark"
                                                                        ? "text-black"
                                                                        : "text-white"
                                                                    : "text-popover-foreground"
                                                            )}>Shopify</div>
                                                            <p className={cn(
                                                                "line-clamp-2 text-sm leading-snug mt-1",
                                                                isScrolled
                                                                    ? currentTheme === "dark"
                                                                        ? "text-gray-600"
                                                                        : "text-gray-400"
                                                                    : "text-muted-foreground"
                                                            )}>
                                                                Shopify store development
                                                            </p>
                                                        </NavigationMenuLink>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/services/custom-coded" legacyBehavior passHref>
                                                        <NavigationMenuLink className={cn(
                                                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
                                                            isScrolled
                                                                ? currentTheme === "dark"
                                                                    ? "hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black text-black"
                                                                    : "hover:bg-gray-800 hover:text-white focus:bg-gray-800 focus:text-white text-white"
                                                                : "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-popover-foreground"
                                                        )}>
                                                            <div className={cn(
                                                                "text-sm font-medium leading-none",
                                                                isScrolled
                                                                    ? currentTheme === "dark"
                                                                        ? "text-black"
                                                                        : "text-white"
                                                                    : "text-popover-foreground"
                                                            )}>Custom Coded</div>
                                                            <p className={cn(
                                                                "line-clamp-2 text-sm leading-snug mt-1",
                                                                isScrolled
                                                                    ? currentTheme === "dark"
                                                                        ? "text-gray-600"
                                                                        : "text-gray-400"
                                                                    : "text-muted-foreground"
                                                            )}>
                                                                Custom coded websites
                                                            </p>
                                                        </NavigationMenuLink>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/services/seo" legacyBehavior passHref>
                                                        <NavigationMenuLink className={cn(
                                                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
                                                            isScrolled
                                                                ? currentTheme === "dark"
                                                                    ? "hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black text-black"
                                                                    : "hover:bg-gray-800 hover:text-white focus:bg-gray-800 focus:text-white text-white"
                                                                : "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-popover-foreground"
                                                        )}>
                                                            <div className={cn(
                                                                "text-sm font-medium leading-none",
                                                                isScrolled
                                                                    ? currentTheme === "dark"
                                                                        ? "text-black"
                                                                        : "text-white"
                                                                    : "text-popover-foreground"
                                                            )}>SEO</div>
                                                            <p className={cn(
                                                                "line-clamp-2 text-sm leading-snug mt-1",
                                                                isScrolled
                                                                    ? currentTheme === "dark"
                                                                        ? "text-gray-600"
                                                                        : "text-gray-400"
                                                                    : "text-muted-foreground"
                                                            )}>
                                                                Search engine optimization
                                                            </p>
                                                        </NavigationMenuLink>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </NavigationMenuContent>
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
                                                About Me
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
                        <div className="flex items-center gap-4">
                            <ModeToggle textColor={textColor} borderColor={borderColor} isScrolled={isScrolled} currentTheme={currentTheme} />
                            {/* Hamburger Menu Button - Visible on mobile/tablet, hidden on desktop */}
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className={cn(
                                    "lg:hidden p-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
                                    textColor,
                                    isScrolled
                                        ? currentTheme === "dark"
                                            ? "hover:bg-gray-100 focus:ring-gray-300"
                                            : "hover:bg-gray-800 focus:ring-gray-700"
                                        : "hover:bg-accent focus:ring-accent"
                                )}
                                aria-label="Toggle menu"
                                aria-expanded={isMobileMenuOpen}
                            >
                                {isMobileMenuOpen ? (
                                    <X className="h-6 w-6" />
                                ) : (
                                    <Menu className="h-6 w-6" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Sidebar Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 z-40 bg-[#161717]/50 lg:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-hidden="true"
                />
            )}

            {/* Mobile Sidebar */}
            <aside
                className={cn(
                    "fixed top-0 right-0 z-50 h-full w-80 max-w-[85vw] transform transition-transform duration-300 ease-in-out lg:hidden",
                    sidebarBg,
                    sidebarText,
                    "border-l",
                    isScrolled
                        ? currentTheme === "dark"
                            ? "border-gray-200"
                            : "border-gray-800"
                        : "border-border",
                    isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                <div className="flex h-full flex-col">
                    {/* Sidebar Header */}
                    <div className="flex h-16 items-center justify-between border-b px-6"
                        style={{
                            borderColor: isScrolled
                                ? currentTheme === "dark"
                                    ? "rgb(229 231 235)"
                                    : "rgb(31 41 55)"
                                : undefined
                        }}
                    >
                        <span className="text-lg font-semibold">Menu</span>
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={cn(
                                "p-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
                                sidebarText,
                                isScrolled
                                    ? currentTheme === "dark"
                                        ? "hover:bg-gray-100 focus:ring-gray-300"
                                        : "hover:bg-gray-800 focus:ring-gray-700"
                                    : "hover:bg-accent focus:ring-accent"
                            )}
                            aria-label="Close menu"
                        >
                            <X className="h-6 w-6" />
                        </button>
                    </div>

                    {/* Sidebar Navigation */}
                    <nav className="flex-1 overflow-y-auto px-6 py-4">
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={cn(
                                        "block rounded-md px-4 py-3 text-base font-medium transition-colors",
                                        sidebarText,
                                        isScrolled
                                            ? currentTheme === "dark"
                                                ? "hover:bg-gray-100"
                                                : "hover:bg-gray-800"
                                            : "hover:bg-accent hover:text-accent-foreground"
                                    )}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/services"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={cn(
                                        "block rounded-md px-4 py-3 text-base font-medium transition-colors",
                                        sidebarText,
                                        isScrolled
                                            ? currentTheme === "dark"
                                                ? "hover:bg-gray-100"
                                                : "hover:bg-gray-800"
                                            : "hover:bg-accent hover:text-accent-foreground"
                                    )}
                                >
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/about"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={cn(
                                        "block rounded-md px-4 py-3 text-base font-medium transition-colors",
                                        sidebarText,
                                        isScrolled
                                            ? currentTheme === "dark"
                                                ? "hover:bg-gray-100"
                                                : "hover:bg-gray-800"
                                            : "hover:bg-accent hover:text-accent-foreground"
                                    )}
                                >
                                    About Me
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={cn(
                                        "block rounded-md px-4 py-3 text-base font-medium transition-colors",
                                        sidebarText,
                                        isScrolled
                                            ? currentTheme === "dark"
                                                ? "hover:bg-gray-100"
                                                : "hover:bg-gray-800"
                                            : "hover:bg-accent hover:text-accent-foreground"
                                    )}
                                >
                                    Contact Me
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>
        </>
    );
}