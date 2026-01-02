"use client"

// import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface ModeToggleProps {
  textColor?: string;
  borderColor?: string;
  isScrolled?: boolean;
  currentTheme?: string | undefined;
}

export function ModeToggle({ textColor, borderColor, isScrolled, currentTheme }: ModeToggleProps) {
  const { setTheme } = useTheme()

  // Determine button border and hover colors based on scroll state
  const buttonBorderColor = isScrolled
    ? (currentTheme === "dark" ? "border-gray-200" : "border-gray-600")
    : undefined;

  const buttonHoverBg = isScrolled
    ? (currentTheme === "dark" 
        ? "hover:bg-gray-100" 
        : "hover:bg-gray-800")
    : undefined;

  const buttonBg = isScrolled
    ? (currentTheme === "dark" ? "bg-white" : "bg-[#161717]")
    : undefined;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          size="icon" 
          className={cn(
            textColor,
            buttonBg,
            buttonBorderColor,
            buttonHoverBg,
            isScrolled && currentTheme === "dark" && "hover:text-black",
            isScrolled && currentTheme !== "dark" && "hover:text-white",
            "transition-all"
          )}
        >
          <Sun className={cn(
            "h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90",
            textColor
          )} />
          <Moon className={cn(
            "absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0",
            textColor
          )} />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
