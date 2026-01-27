"use client";

import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { VideoPlayer } from "@/components/ui/video-player";

export function VideoDemo() {
  return (
    <section id="demo" className="py-24 bg-background border-y border-border/70">
      <Container>
        <SectionHeader
          title="See It In Action"
          subtitle="See how InterviewGPT empowers your preparation"
        />

        <div className="max-w-4xl mx-auto aspect-video">
          <VideoPlayer
            poster="/images/hero/app-preview.png" // Placeholder poster, ideally we have a specific one
            className="w-full h-full shadow-2xl"
          />
        </div>
      </Container>
    </section>
  );
}
