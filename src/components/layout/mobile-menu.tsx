"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight } from "lucide-react";
import { scrollToSection } from "@/lib/utils";
import { Logo } from "@/components/icons";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { createPortal } from "react-dom";

const navItems = [
  { name: "How It Works", href: "#how-it-works", id: "how-it-works" },
  { name: "Features", href: "#features", id: "features" },
  { name: "Pricing", href: "#pricing", id: "pricing" },
  { name: "FAQ", href: "#faq", id: "faq" },
];

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  const toggleOpen = () => setIsOpen(!isOpen);

  // Menu panel that will be portaled to body
  const menuPanel = (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop with blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-md"
            style={{ zIndex: 9998 }}
            onClick={toggleOpen}
          />

          {/* Modern Slide-in Menu Panel */}
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 w-[min(320px,85vw)] h-[100dvh] overflow-hidden"
            style={{ zIndex: 9999 }}
          >
            {/* Glassmorphism panel */}
            <div className="h-full bg-white dark:bg-[#0a0f1a] backdrop-blur-2xl border-l border-black/10 dark:border-white/10 shadow-2xl flex flex-col">
              {/* Header */}
              <div className="flex justify-between items-center p-5 border-b border-black/5 dark:border-white/10">
                <Logo />
                <button
                  onClick={toggleOpen}
                  className="w-9 h-9 flex items-center justify-center rounded-xl bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 transition-colors active:scale-95"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 p-5 space-y-2 overflow-y-auto">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 + 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "group flex items-center justify-between px-4 py-3.5 rounded-xl transition-all duration-200",
                        "hover:bg-black/5 dark:hover:bg-white/10 active:scale-[0.98]",
                        "text-base font-medium text-foreground/80"
                      )}
                      onClick={(e) => {
                        toggleOpen();
                        scrollToSection(e, item.href);
                      }}
                    >
                      <span>{item.name}</span>
                      <ChevronRight className="w-4 h-4 text-foreground/40 group-hover:text-foreground/60 group-hover:translate-x-0.5 transition-all" />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Bottom CTA */}
              <div className="p-5 border-t border-black/5 dark:border-white/10">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Link
                    href="/download"
                    onClick={toggleOpen}
                    className={cn(
                      "group relative flex items-center justify-center w-full py-3.5 px-6 rounded-full font-semibold text-white transition-all duration-300 overflow-hidden",
                      "bg-gradient-to-r from-blue-600 via-primary to-purple-600",
                      "shadow-lg shadow-primary/20 active:scale-[0.98]"
                    )}
                  >
                     <motion.div
                        className="absolute inset-0 top-0 block h-full w-full -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        initial={{ left: "-100%" }}
                        animate={{ left: "200%" }}
                        transition={{
                          repeat: Infinity,
                          duration: 2.5,
                          ease: "linear",
                          repeatDelay: 1,
                        }}
                      />
                      <div className="relative flex items-center justify-center gap-2">
                        {/* Rocket Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.1 5-2 5-2"/><path d="M12 15v5s3.03-.55 4-2c1.1-1.62 2-5 2-5"/></svg>
                        Download Free
                      </div>
                  </Link>
                </motion.div>
                
                 <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-xs text-center text-foreground/50 mt-3"
                  >
                    Available for macOS & Windows
                  </motion.p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  return (
    <div className="md:hidden">
      {/* Modern Hamburger Button */}
      <button
        onClick={toggleOpen}
        className={cn(
          "relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-xl transition-all duration-300",
          "bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20",
          "active:scale-95"
        )}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <motion.span
          className="w-5 h-0.5 bg-foreground rounded-full origin-center"
          animate={{
            rotate: isOpen ? 45 : 0,
            y: isOpen ? 4 : 0,
          }}
          transition={{ duration: 0.2 }}
        />
        <motion.span
          className="w-5 h-0.5 bg-foreground rounded-full"
          animate={{
            opacity: isOpen ? 0 : 1,
            scaleX: isOpen ? 0 : 1,
          }}
          transition={{ duration: 0.2 }}
        />
        <motion.span
          className="w-5 h-0.5 bg-foreground rounded-full origin-center"
          animate={{
            rotate: isOpen ? -45 : 0,
            y: isOpen ? -4 : 0,
          }}
          transition={{ duration: 0.2 }}
        />
      </button>

      {/* Portal the menu to body to avoid clipping issues */}
      {mounted && createPortal(menuPanel, document.body)}
    </div>
  );
}
