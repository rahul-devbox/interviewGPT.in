"use client";

import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Badge } from "@/components/ui/badge";
import {
  ShieldOff,
  AudioLines,
  Sparkles,
  ScanEye,
  FileUser,
  Layers,
  Command,
  Users,
  Code,
  Globe,
  Zap,
  ShieldCheck,
  Check,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";

export function Features() {
  return (
    <section
      id="features"
      className="py-24 md:py-32 relative overflow-hidden bg-secondary border-y border-border/70"
    >
      {/* Refined Background Gradients - More professional & subtle */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-12%] left-[-8%] w-[720px] h-[720px] rounded-full bg-[radial-gradient(closest-side,_color-mix(in_oklab,var(--primary)_16%,transparent),_transparent_72%)]" />
        <div className="absolute bottom-[-12%] right-[-8%] w-[720px] h-[720px] rounded-full bg-[radial-gradient(closest-side,_color-mix(in_oklab,#9333ea_14%,transparent),_transparent_72%)]" />
      </div>

      <Container className="relative z-10">
        <SectionHeader
          title="Powerful Features"
          subtitle="Everything you need to ace any meeting or interview"
          className="mb-16"
        />

        {/* MASONRY GRID LAYOUT - Redesigned Aesthetics; Same Content */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 max-w-7xl mx-auto">
          {/* 1. 100% Private & Undetectable (3 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3 rounded-[2rem] border border-border/80 bg-card p-8 flex flex-col justify-between shadow-md hover:shadow-lg transition-all duration-300 group hover:border-green-500/30"
          >
            <div className="mb-6">
              <div className="mb-5 inline-flex p-3.5 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 text-emerald-600 dark:text-emerald-400 shadow-sm border border-emerald-500/10">
                <ShieldOff className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-3 tracking-tight">
                100% Private & Undetectable
              </h3>
              <p className="text-base text-muted-foreground mb-2 font-medium">
                Your secret weapon runs silently.
              </p>
              <p className="text-sm text-muted-foreground/80 leading-relaxed">
                Completely invisible to screen sharing, task manager, and detection systems.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 mt-auto">
              {[
                "Invisible to Screen Share",
                "Hidden in Task Manager",
                "No Dock/Taskbar Icon",
                "No Tab Switch Alerts",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 text-xs font-semibold text-foreground/80 bg-secondary/70 px-3 py-2 rounded-lg"
                >
                  <Check className="w-3.5 h-3.5 text-emerald-500" /> {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* 2. Live Transcription (3 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-3 rounded-[2rem] border border-border/80 bg-card p-8 flex flex-col justify-between shadow-md hover:shadow-lg transition-all duration-300 group hover:border-blue-500/30"
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <div className="mb-5 inline-flex p-3.5 rounded-2xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10 text-blue-600 dark:text-blue-400 shadow-sm border border-blue-500/10">
                  <AudioLines className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-3 tracking-tight">Live Transcription</h3>
                <p className="text-base text-muted-foreground mb-1 font-medium">
                  Hear everything. Miss nothing.
                </p>
              </div>
              {/* Stats - Refined Design */}
              <div className="flex gap-2 text-center">
                <div className="px-3.5 py-2.5 bg-secondary/70 rounded-2xl border border-transparent group-hover:border-blue-500/20 transition-colors">
                  <div className="text-lg font-bold text-blue-600 dark:text-blue-400 leading-none mb-1">
                    300ms
                  </div>
                  <div className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground">
                    Latency
                  </div>
                </div>
                <div className="px-3.5 py-2.5 bg-secondary/70 rounded-2xl border border-transparent group-hover:border-blue-500/20 transition-colors">
                  <div className="text-lg font-bold text-blue-600 dark:text-blue-400 leading-none mb-1">
                    99%
                  </div>
                  <div className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground">
                    Accuracy
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-sm text-muted-foreground/80 leading-relaxed">
                Instant speech-to-text with continuous listening. Handles accents and multiple
                speakers effortlessly.
              </p>
              {/* Refined Wave Visual */}
              <div className="flex items-end gap-[3px] h-8 opacity-60">
                {[
                  35, 60, 45, 75, 50, 85, 40, 65, 30, 70, 45, 80, 55, 90, 35, 65, 40, 75, 50, 85,
                  45, 70, 35, 60,
                ].map((height, i) => (
                  <div
                    key={i}
                    className="w-1.5 bg-gradient-to-t from-blue-500 to-indigo-400 rounded-full transition-all duration-500 group-hover:to-indigo-300"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* 3. Smart AI Answers (6 cols - Wide) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-6 rounded-[2rem] border border-border/80 bg-gradient-to-br from-card to-muted dark:from-card dark:to-secondary/60 p-8 flex flex-col md:flex-row gap-8 items-center group hover:border-amber-500/30 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <div className="flex-1">
              <div className="mb-5 inline-flex p-3.5 rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/40 dark:to-orange-900/20 text-amber-600 dark:text-amber-400 shadow-sm border border-amber-500/10">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-bold mb-3 tracking-tight">Smart AI Answers</h3>
              <p className="text-xl font-medium text-foreground mb-3">
                Answers that Sound Natural.
              </p>
              <p className="text-base text-muted-foreground max-w-xl mb-8 leading-relaxed">
                Get structured, interview-ready responses powered by GPT-4o. Optimized for clarity,
                brevity, and impact.
              </p>
              <div className="flex flex-wrap gap-2.5">
                {["STAR Format", "One-click Regenerate"].map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="px-3.5 py-1.5 rounded-full bg-amber-50 dark:bg-amber-400/10 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-500/20 text-xs font-semibold"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Chat Preview - Enhanced UI */}
            <div className="w-full max-w-[500px] bg-background shadow-lg rounded-2xl p-6 border border-border/80 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-orange-400" />
              <div className="space-y-5">
                <div className="bg-secondary p-4 rounded-2xl rounded-tl-sm text-sm text-muted-foreground shadow-md border border-border/80">
                  Q: &quot;Describe a complex challenge you faced...&quot;
                </div>
                <div className="bg-accent border border-border/80 p-4 rounded-2xl rounded-br-sm text-sm text-foreground/90 ml-auto w-[90%] shadow-md relative">
                  <div className="absolute -top-3 right-4 bg-amber-100 dark:bg-amber-900/80 text-[9px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 px-2 py-0.5 rounded-full border border-amber-200 dark:border-amber-500/20">
                    STAR Response
                  </div>
                  &quot;Here is a structured response highlighting your leadership in the migration
                  project...&quot;
                </div>
              </div>
            </div>
          </motion.div>

          {/* 4. Screen Vision (2 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 rounded-[2rem] border border-border/80 bg-card p-7 hover:border-purple-500/30 transition-colors flex flex-col shadow-md group"
          >
            <div className="mb-auto">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-5 border border-purple-200 dark:border-purple-500/20">
                <ScanEye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Screen Vision</h3>
              <p className="text-sm font-medium text-muted-foreground mb-3">
                Sees what you see.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                Reads coding problems, diagrams, and slides directly from your screen.
              </p>
            </div>
            <div className="mt-4 pt-5 border-t border-border/70 space-y-2">
              <div className="text-xs font-medium text-muted-foreground flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500" /> LeetCode Capture
              </div>
              <div className="text-xs font-medium text-muted-foreground flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500" /> Diagram Reading
              </div>
            </div>
          </motion.div>

          {/* 5. Resume & Job Context (2 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 rounded-[2rem] border border-border/80 bg-card p-7 hover:border-lime-500/30 transition-colors flex flex-col shadow-md group"
          >
            <div className="mb-auto">
              <div className="w-12 h-12 rounded-2xl bg-lime-50 dark:bg-lime-900/20 text-lime-600 dark:text-lime-400 flex items-center justify-center mb-5 border border-lime-200 dark:border-lime-500/20">
                <FileUser className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Resume Context</h3>
              <p className="text-sm font-medium text-muted-foreground mb-3">
                Tailored to your experience.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                Every answer references your real projects and skills. Feels authentic.
              </p>
            </div>
            <div className="flex gap-2.5">
              <Badge
                variant="outline"
                className="rounded-lg px-2.5 py-1 text-[10px] border-lime-500/20 text-lime-700 dark:text-lime-300 bg-lime-50 dark:bg-lime-400/10 font-semibold"
              >
                PDF Ready
              </Badge>
            </div>
          </motion.div>

          {/* 6. Universal Support (2 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 rounded-[2rem] border border-border/80 bg-card p-7 hover:border-indigo-500/30 transition-colors flex flex-col shadow-md group"
          >
            <div className="mb-auto">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-5 border border-indigo-200 dark:border-indigo-500/20">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Universal Support</h3>
              <p className="text-sm font-medium text-muted-foreground mb-3">
                Works with everything.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Seamless compatibility with all meeting and coding platforms.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {["Zoom", "Meet", "Teams", "Webex", "Chime"].map((p) => (
                <span
                  key={p}
                  className="text-[10px] font-semibold px-2 py-1 bg-secondary rounded-md text-muted-foreground border border-border/80"
                >
                  {p}
                </span>
              ))}
            </div>
          </motion.div>

          {/* 9. Technical Interview Copilot (6 cols - Wide) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-6 rounded-[2rem] border border-border/80 bg-card p-8 flex flex-col md:flex-row gap-8 items-center justify-between group hover:border-border transition-colors shadow-md"
          >
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-2xl bg-secondary text-foreground/80 border border-border/80 shadow-md">
                  <Code className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">Technical Interview Copilot</h3>
              </div>
              <p className="text-base text-muted-foreground max-w-2xl leading-relaxed">
                Specialized support for algorithms, system design, and LeetCode-style problems.
                Includes time/space complexity analysis and edge case reminders.
              </p>
            </div>
            <div className="flex gap-4 flex-wrap justify-end">
              {["Algorithm Approach", "Big-O Analysis", "System Design", "Edge Cases"].map(
                (item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 px-4 py-2.5 bg-background rounded-xl border border-border/80 text-sm font-medium shadow-md hover:bg-secondary/70 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-muted-foreground" /> {item}
                  </div>
                )
              )}
            </div>
          </motion.div>

          {/* BOTTOM ROW (5 SMALL CARDS) - Uniform Design */}
          <div className="md:col-span-6 grid grid-cols-2 md:grid-cols-5 gap-5">
            {/* 7. Global Hotkeys */}
            <div className="rounded-3xl border border-border/80 bg-card p-6 flex flex-col justify-between hover:border-border transition-colors h-full shadow-md">
              <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center mb-4 text-foreground/80">
                <Command className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm mb-1.5">Global Hotkeys</h4>
                <p className="text-[11px] text-muted-foreground leading-snug">
                  Control without clicking. Toggle stealth & capture.
                </p>
              </div>
            </div>

            {/* 8. Multiple Profiles */}
            <div className="rounded-3xl border border-border/80 bg-card p-6 flex flex-col justify-between hover:border-pink-300 dark:hover:border-pink-700/50 transition-colors h-full shadow-md">
              <div className="w-10 h-10 rounded-xl bg-pink-50 dark:bg-pink-900/20 flex items-center justify-center mb-4 text-pink-600 dark:text-pink-400 border border-pink-100 dark:border-pink-500/20">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm mb-1.5">Multiple Profiles</h4>
                <p className="text-[11px] text-muted-foreground leading-snug">
                  Switch: Behavioral, Technical, or Sales modes.
                </p>
              </div>
            </div>

            {/* 10. Multi-Language */}
            <div className="rounded-3xl border border-border/80 bg-card p-6 flex flex-col justify-between hover:border-indigo-300 dark:hover:border-indigo-700/50 transition-colors h-full shadow-md">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center mb-4 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-500/20">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm mb-1.5">Multi-Language</h4>
                <p className="text-[11px] text-muted-foreground leading-snug">
                  Interview in 12+ languages. EN, ES, FR, CN.
                </p>
              </div>
            </div>

            {/* 11. Lightning Performance */}
            <div className="rounded-3xl border border-border/80 bg-card p-6 flex flex-col justify-between hover:border-yellow-300 dark:hover:border-yellow-700/50 transition-colors h-full shadow-md">
              <div className="w-10 h-10 rounded-xl bg-yellow-50 dark:bg-yellow-900/20 flex items-center justify-center mb-4 text-yellow-600 dark:text-yellow-400 border border-yellow-100 dark:border-yellow-500/20">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm mb-1.5">Lightning Fast</h4>
                <p className="text-[11px] text-muted-foreground leading-snug">
                  Under 100MB. Low CPU. No audio lag.
                </p>
              </div>
            </div>

            {/* 12. Zero Data Storage */}
            <div className="col-span-2 md:col-span-1 rounded-3xl border border-border/80 bg-card p-6 flex flex-col justify-between hover:border-red-300 dark:hover:border-red-700/50 transition-colors h-full shadow-md">
              <div className="w-10 h-10 rounded-xl bg-red-50 dark:bg-red-900/20 flex items-center justify-center mb-4 text-red-600 dark:text-red-400 border border-red-100 dark:border-red-500/20">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm mb-1.5">Zero Data</h4>
                <p className="text-[11px] text-muted-foreground leading-snug">
                  No logs. No history. Instant deletion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
