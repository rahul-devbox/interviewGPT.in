"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/utils";
import { Logo } from "@/components/icons";
import Link from "next/link";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={toggleOpen}>
        {isOpen ? <X /> : <Menu />}
      </Button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
              onClick={toggleOpen}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20 }}
              className="fixed right-0 top-0 bottom-0 w-[300px] bg-background border-l border-border/80 z-50 p-6 shadow-xl"
            >
              <div className="flex justify-between items-center mb-8">
                <Logo />
                <Button variant="ghost" size="icon" onClick={toggleOpen}>
                  <X />
                </Button>
              </div>

              <nav className="flex flex-col gap-4">
                <Link
                  href="#how-it-works"
                  className="text-lg font-medium hover:text-primary transition-colors"
                  onClick={(e) => {
                    toggleOpen();
                    scrollToSection(e, "#how-it-works");
                  }}
                >
                  How It Works
                </Link>
                <Link
                  href="#features"
                  className="text-lg font-medium hover:text-primary transition-colors"
                  onClick={(e) => {
                    toggleOpen();
                    scrollToSection(e, "#features");
                  }}
                >
                  Features
                </Link>
                <Link
                  href="#pricing"
                  className="text-lg font-medium hover:text-primary transition-colors"
                  onClick={(e) => {
                    toggleOpen();
                    scrollToSection(e, "#pricing");
                  }}
                >
                  Pricing
                </Link>
                <Link
                  href="#faq"
                  className="text-lg font-medium hover:text-primary transition-colors"
                  onClick={(e) => {
                    toggleOpen();
                    scrollToSection(e, "#faq");
                  }}
                >
                  FAQ
                </Link>
                <div className="pt-4">
                  <Button className="w-full" asChild onClick={toggleOpen}>
                    <Link href="/download">Download Free</Link>
                  </Button>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
