"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useScrollPosition } from "@/hooks/use-scroll-position";

interface DynamicIslandProps {
  children: React.ReactNode;
  className?: string;
}

export function DynamicIsland({ children, className }: DynamicIslandProps) {
  const scrollPosition = useScrollPosition();
  const isScrolled = scrollPosition > 100;

  return (
    <motion.div
      className={cn(
        "fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300",
        isScrolled ? "w-auto" : "w-full max-w-7xl px-4",
        className
      )}
      initial={false}
      animate={{
        y: 0,
        width: isScrolled ? "fit-content" : "100%",
        borderRadius: isScrolled ? "9999px" : "0px", // we manage this via inner container mostly
      }}
    >
      <div
        className={cn(
          "bg-white/90 dark:bg-black/80 backdrop-blur-md border border-black/10 dark:border-white/15 shadow-md ring-1 ring-black/10 dark:ring-white/10 transition-all duration-300",
          isScrolled ? "rounded-full px-6 py-2" : "rounded-xl px-6 py-4 w-full"
        )}
      >
        {children}
      </div>
    </motion.div>
  );
}
