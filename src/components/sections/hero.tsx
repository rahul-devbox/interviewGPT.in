"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Rocket, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { PlatformBadge } from "@/components/ui/platform-badge";
import { ScrollIndicator } from "@/components/ui/scroll-indicator";
import { GradientText, GlowEffect } from "@/components/ui/gradient-text";
import { scrollToSection } from "@/lib/utils";

export function Hero() {
  return (
    <section id="hero" className="relative pt-24 pb-16 md:pt-40 md:pb-32 overflow-hidden">
      <GlowEffect className="top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] opacity-30" />

      <Container className="relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="secondary" className="mb-6 px-4 py-1.5 rounded-full text-sm">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            New v5.1 Released – Faster & Smarter
          </Badge>
        </motion.div>

        <motion.h1
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Ace Every Interview with <GradientText>AI by Your Side</GradientText>
        </motion.h1>

        <motion.p
          className="text-xl text-muted-foreground mb-8 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Real-time transcription and instant answer suggestions. Your invisible AI copilot for
          Meetings and Interviews.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button
            size="lg"
            className="h-12 px-6 text-sm md:text-base font-semibold rounded-full bg-gradient-to-r from-blue-600 via-primary to-purple-600 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all hover:scale-105 active:scale-95 border-0 relative overflow-hidden group animate-gradient-x"
            asChild
          >
            <Link href="/download" className="gap-2.5">
              <motion.div
                className="absolute inset-0 top-0 block h-full w-full -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                initial={{ left: "-100%" }}
                animate={{ left: "200%" }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "linear",
                  repeatDelay: 0.5,
                }}
              />
              <div className="relative flex items-center justify-center gap-2.5">
                <Rocket className="w-4 h-4 fill-white/20" />
                Download App
              </div>
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-12 px-6 text-sm md:text-base font-medium rounded-full hover:bg-secondary/50 hover:scale-105 active:scale-95 transition-all border-2 shadow-sm hover:shadow-md"
            asChild
          >
            <Link href="#demo" className="gap-2.5" onClick={(e) => scrollToSection(e, "#demo")}>
              <div className="flex items-center justify-center gap-2.5">
                <Play className="w-4 h-4 fill-current" />
                Watch Demo
              </div>
            </Link>
          </Button>
        </motion.div>

        <motion.div
          className="flex flex-col items-center gap-3 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-sm text-muted-foreground font-medium">Available for</p>
          <div className="flex items-center gap-4">
            <Link href="/download?platform=mac">
              <PlatformBadge
                platform="mac"
                className="cursor-pointer hover:border-primary/50 transition-colors"
              />
            </Link>
            <Link href="/download?platform=windows">
              <PlatformBadge
                platform="windows"
                className="cursor-pointer hover:border-primary/50 transition-colors"
              />
            </Link>
          </div>
        </motion.div>

        {/* App Preview Placeholder - Using a styled div instead of image for now/placeholder */}
        <motion.div
          className="relative w-full max-w-5xl aspect-video rounded-xl border bg-background shadow-2xl overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-muted/50 to-muted/10 flex items-center justify-center">
            <p className="text-muted-foreground font-medium">App Preview Screenshot</p>
          </div>
        </motion.div>

        <ScrollIndicator
          className="mt-12"
          onClick={() => document.getElementById("trust")?.scrollIntoView({ behavior: "smooth" })}
        />
      </Container>
    </section>
  );
}
