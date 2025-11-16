"use client";

import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export default function Header() {
    return (
        <header className="w-full border-b">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <NavigationMenu>
                        <NavigationMenuList className="gap-1 sm:gap-2">
                            <NavigationMenuItem>
                                <Link href="/" legacyBehavior passHref>
                                    <NavigationMenuLink className={cn(
                                        "group inline-flex h-9 min-h-[44px] w-max items-center justify-center rounded-md px-2 sm:px-4 py-2 text-xs sm:text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                                    )}>
                                        Home
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/about" legacyBehavior passHref>
                                    <NavigationMenuLink className={cn(
                                        "group inline-flex h-9 min-h-[44px] w-max items-center justify-center rounded-md px-2 sm:px-4 py-2 text-xs sm:text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                                    )}>
                                        About
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/portfolio" legacyBehavior passHref>
                                    <NavigationMenuLink className={cn(
                                        "group inline-flex h-9 min-h-[44px] w-max items-center justify-center rounded-md px-2 sm:px-4 py-2 text-xs sm:text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                                    )}>
                                        Portfolio
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/contact" legacyBehavior passHref>
                                    <NavigationMenuLink className={cn(
                                        "group inline-flex h-9 min-h-[44px] w-max items-center justify-center rounded-md px-2 sm:px-4 py-2 text-xs sm:text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                                    )}>
                                        Contact
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                    <ModeToggle />
                </div>
            </div>
        </header>
    );
}