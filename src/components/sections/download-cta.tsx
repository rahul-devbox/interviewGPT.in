"use client";

import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export function DownloadCTA() {
  return (
    <section id="download" className="py-12 relative overflow-hidden bg-[#070A13]">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/35 via-transparent to-transparent opacity-70" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-pink-500/14 via-transparent to-transparent opacity-50" />

      <Container className="relative z-10 flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-white">
          Ready to Ace Your Next Interview?
        </h2>
        <p className="text-lg text-white/70 mb-8 max-w-2xl font-light">
          Download now and get 7 minutes completely free. No credit card required.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full mb-8">
          <Button
            size="lg"
            className="h-14 min-w-[220px] text-base bg-white text-black hover:bg-white/90 hover:scale-105 transition-all font-semibold rounded-full border-0 gap-2.5"
            asChild
          >
            <Link href="/login?package=mac-download">
              <svg viewBox="0 0 814 1000" fill="currentColor" className="w-5 h-5 pb-0.5">
                <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z" />
              </svg>
              Download for Mac
            </Link>
          </Button>
          <Button
            size="lg"
            className="h-14 min-w-[220px] text-base bg-white/10 text-white hover:bg-white/15 hover:scale-105 transition-all font-semibold rounded-full border border-white/15 shadow-lg gap-2.5"
            asChild
          >
            <Link href="/login?package=windows-download">
              <svg viewBox="0 0 448 512" fill="currentColor" className="w-5 h-5">
                <path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180h244.2V32L203.8 65.7z" />
              </svg>
              Download for Windows
            </Link>
          </Button>
        </div>

        <p className="text-xs text-white/40 mb-6 font-mono">Version 1.0.0 • ~85 MB</p>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-xs font-medium text-white/70">
          <div className="flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-primary" /> Free 7 min trial
          </div>
          <div className="flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-primary" /> No credit card
          </div>
          <div className="flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-primary" /> Secure & Private
          </div>
        </div>
      </Container>
    </section>
  );
}
