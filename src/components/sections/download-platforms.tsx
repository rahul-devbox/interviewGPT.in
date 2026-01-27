"use client";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { AppleLogo, WindowsLogo } from "../brand-icons";
import { PlatformBadge } from "@/components/ui/platform-badge";
import { Check, Download, Info } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function DownloadPlatforms() {
  return (
    <section className="py-24 relative overflow-hidden">
      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Download InterviewCopilot
          </h1>
          <p className="text-xl text-muted-foreground">
            Get the desktop app for the best experience. Secure, fast, and always ready to help you
            ace your interview.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* macOS Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative rounded-3xl border border-border/80 bg-card p-8 shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="absolute top-6 right-6">
              <PlatformBadge platform="mac" />
            </div>

            <div className="mb-8">
              <div className="h-16 w-16 bg-foreground text-background rounded-2xl flex items-center justify-center mb-6">
                <AppleLogo className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold mb-2">macOS</h2>
              <p className="text-muted-foreground">For MacBook Air, Pro, and iMac</p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-sm">
                <div className="h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>macOS 11.0 (Big Sur) or later</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Support for Intel & Apple Silicon (M1/M2/M3)</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Universal Binary</span>
              </div>
            </div>

            <Button size="lg" className="w-full h-14 text-lg gap-2" asChild>
              <Link href="/download">
                <Download className="w-5 h-5" />
                Download for Mac
              </Link>
            </Button>

            <p className="text-center text-xs text-muted-foreground mt-4">
              Version 1.0.0 • .dmg file • ~85MB
            </p>
          </motion.div>

          {/* Windows Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group relative rounded-3xl border border-border/80 bg-card p-8 shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="absolute top-6 right-6">
              <PlatformBadge platform="windows" />
            </div>

            <div className="mb-8">
              <div className="h-16 w-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-6">
                <WindowsLogo className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold mb-2">Windows</h2>
              <p className="text-muted-foreground">For Windows 10 and 11</p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-sm">
                <div className="h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Windows 10 (64-bit) or later</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Requires 4GB RAM minimum</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Auto-updates included</span>
              </div>
            </div>

            <Button size="lg" className="w-full h-14 text-lg gap-2" asChild>
              <Link href="/download">
                <Download className="w-5 h-5" />
                Download for Windows
              </Link>
            </Button>

            <p className="text-center text-xs text-muted-foreground mt-4">
              Version 1.0.0 • .exe file • ~92MB
            </p>
          </motion.div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border/80 shadow-sm text-sm text-muted-foreground">
            <Info className="w-4 h-4" />
            <span>
              Need help with installation? Check out our{" "}
              <Link href="/#how-it-works" className="underline hover:text-foreground">
                setup guide
              </Link>
              .
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
