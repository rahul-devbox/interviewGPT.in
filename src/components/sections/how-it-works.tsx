"use client";

import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Download, Video, Mic, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const steps = [
  {
    number: "01",
    title: "Download & Install",
    description: "Get InterviewCopilot for Mac or Windows. Installation takes less than a minute.",
    icon: Download,
    gradient: "from-blue-500 to-indigo-600",
    shadow: "shadow-blue-500/30",
  },
  {
    number: "02",
    title: "Start the App",
    description: "Launch InterviewCopilot and grant necessary permissions.",
    icon: Sparkles,
    gradient: "from-indigo-500 to-purple-600",
    shadow: "shadow-purple-500/30",
  },
  {
    number: "03",
    title: "Join Your Meeting",
    description: "Join your interview on Zoom, Google Meet, or Teams.",
    icon: Video,
    gradient: "from-pink-500 to-rose-600",
    shadow: "shadow-pink-500/30",
  },
  {
    number: "04",
    title: "Get Smart Answers",
    description: "Receive real-time, context-aware answer suggestions instantly.",
    icon: Mic,
    gradient: "from-indigo-500 to-pink-600",
    shadow: "shadow-pink-500/30",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-background border-y border-border/70">
      <Container>
        <SectionHeader
          title="How It Works"
          subtitle="Start acing Interviews & Meetings in under 2 minutes"
        />

        <div className="relative mt-16 max-w-6xl mx-auto">
          {/* Connecting Line REMOVED */}

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center bg-card p-6 rounded-2xl border border-border/80 shadow-md hover:shadow-lg transition-all duration-300 md:bg-transparent md:border-0 md:shadow-none md:p-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div
                  className={cn(
                    "w-16 h-16 rounded-2xl mb-6 flex items-center justify-center shadow-lg text-white relative group transition-transform hover:scale-110 duration-300 bg-gradient-to-br",
                    step.gradient,
                    step.shadow
                  )}
                >
                  <step.icon className="w-8 h-8 drop-shadow-md" />
                  <span
                    className={cn(
                      "absolute -top-3 -right-3 w-8 h-8 rounded-full bg-card font-bold text-sm flex items-center justify-center border-2 shadow-sm",
                      // Extracting text color roughly from the gradient logic or just using standard text-primary
                      "text-foreground"
                    )}
                  >
                    {step.number}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
