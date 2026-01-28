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
  Monitor,
  AppWindow,
  PanelTop,
  MousePointerClick,
  EyeOff,
  GitBranch,
  Timer,
  Cpu,
  Bug,
  Server,
  Eye,
  FileText,
  Target,
  SlidersHorizontal,
  Video,
} from "lucide-react";
import { motion } from "framer-motion";

export function Features() {
  // Platform data for All Platforms section
  const platforms = [
    "Zoom",
    "Google Meet",
    "Microsoft Teams",
    "Webex",
    "Slack",
    "Discord",
    "Skype",
    "Amazon Chime",
    "GoToMeeting",
    "BlueJeans",
  ];

  return (
    <section
      id="features"
      className="py-24 md:py-32 relative overflow-hidden bg-secondary border-y border-border/70"
    >
      {/* Background Gradients */}
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

        {/* BENTO GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 max-w-7xl mx-auto">
          
          {/* ═══════════════════════════════════════════════════════════════ */}
          {/* 1. 100% Private & Undetectable (3 cols) */}
          {/* ═══════════════════════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3 rounded-[1.5rem] sm:rounded-[2rem] border border-border/80 bg-card p-5 sm:p-8 flex flex-col justify-between shadow-md hover:shadow-lg transition-all duration-300 group hover:border-green-500/30"
          >
            <div className="mb-4 sm:mb-6">
              {/* Header with Icon and Badge */}
              <div className="flex items-start justify-between mb-4 sm:mb-5">
                <div className="inline-flex p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 text-emerald-600 dark:text-emerald-400 shadow-sm border border-emerald-500/10">
                  <ShieldOff className="w-5 sm:w-6 h-5 sm:h-6" />
                </div>
                <Badge className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2 py-1">
                  Stealth Mode
                </Badge>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 tracking-tight">
                100% Undetectable
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-2 font-medium">
                Zero trace. Zero evidence.
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground/80 leading-relaxed">
                Completely invisible to screen sharing, task manager.
              </p>
            </div>
            
            {/* Feature Pills with Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mt-auto">
              {[
                { icon: Monitor, text: "Hidden in Screen Share" },
                { icon: AppWindow, text: "Hidden in Task Manager" },
                { icon: PanelTop, text: "No Dock/Taskbar Icon" },
                { icon: MousePointerClick, text: "No Tab Switch Alerts" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  className="flex items-center gap-2 sm:gap-2.5 text-[11px] sm:text-xs font-semibold text-foreground/80 bg-secondary/70 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg border border-border/50 group-hover:border-emerald-500/20 transition-colors"
                >
                  <item.icon className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-emerald-500 shrink-0" />
                  {item.text}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ═══════════════════════════════════════════════════════════════ */}
          {/* 2. Live Transcription (3 cols) */}
          {/* ═══════════════════════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-3 rounded-[1.5rem] sm:rounded-[2rem] border border-border/80 bg-card p-5 sm:p-8 flex flex-col justify-between shadow-md hover:shadow-lg transition-all duration-300 group hover:border-blue-500/30"
          >
            <div className="mb-4 sm:mb-6">
              {/* Header with Icon and Stats */}
              <div className="flex items-start justify-between mb-4 sm:mb-5">
                <div className="inline-flex p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10 text-blue-600 dark:text-blue-400 shadow-sm border border-blue-500/10">
                  <AudioLines className="w-5 sm:w-6 h-5 sm:h-6" />
                </div>
                {/* Stats */}
                <div className="flex gap-2 text-center">
                  <div className="px-3 sm:px-3.5 py-2 sm:py-2.5 bg-secondary/70 rounded-2xl border border-transparent group-hover:border-blue-500/20 transition-colors">
                    <div className="text-base sm:text-lg font-bold text-blue-600 dark:text-blue-400 leading-none mb-1">
                      300ms
                    </div>
                    <div className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground">
                      Latency
                    </div>
                  </div>
                  <div className="px-3 sm:px-3.5 py-2 sm:py-2.5 bg-secondary/70 rounded-2xl border border-transparent group-hover:border-blue-500/20 transition-colors">
                    <div className="text-base sm:text-lg font-bold text-blue-600 dark:text-blue-400 leading-none mb-1">
                      99%
                    </div>
                    <div className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground">
                      Accuracy
                    </div>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 tracking-tight">Live Transcription</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-2 font-medium">
                Real-time speech-to-text.
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground/80 leading-relaxed">
                Handles accents, filters noise, and tracks multiple speakers.
              </p>
            </div>
            
            {/* Animated Wave Visual */}
            <div className="flex items-end gap-1 h-12 mt-auto">
              {[
                40, 65, 50, 80, 55, 90, 45, 70, 35, 75, 50, 85, 60, 95, 40, 70,
              ].map((height, i) => (
                <motion.div
                  key={i}
                  className="w-2 bg-gradient-to-t from-blue-500 to-indigo-400 rounded-full"
                  animate={{
                    height: [`${height * 0.3}%`, `${height}%`, `${height * 0.3}%`],
                  }}
                  transition={{
                    duration: 1.5 + (i % 4) * 0.2,
                    delay: i * 0.08,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* ═══════════════════════════════════════════════════════════════ */}
          {/* 3. Smart AI Answers (6 cols - Full Width) */}
          {/* ═══════════════════════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-6 rounded-[1.5rem] sm:rounded-[2rem] border border-border/80 bg-gradient-to-br from-card to-muted dark:from-card dark:to-secondary/60 p-5 sm:p-8 flex flex-col md:flex-row gap-6 sm:gap-8 items-start md:items-center group hover:border-amber-500/30 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <div className="flex-1 w-full md:w-auto">
              <div className="mb-4 sm:mb-5 inline-flex p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/40 dark:to-orange-900/20 text-amber-600 dark:text-amber-400 shadow-sm border border-amber-500/10">
                <Sparkles className="w-5 sm:w-6 h-5 sm:h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 tracking-tight">Smart AI Answers</h3>
              <p className="text-sm sm:text-base md:text-lg font-medium text-foreground mb-2">
                Answers that get you hired.
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground/80 max-w-xl mb-5 sm:mb-6 leading-relaxed">
                Interview-ready answers powered by GPT-4o. Structured, concise, and tailored to your experience.
              </p>
              <div className="flex flex-wrap gap-2">
                {["STAR Format", "Auto-Detect Questions", "One-Click Regenerate"].map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-amber-50 dark:bg-amber-400/10 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-500/20 text-[10px] sm:text-xs font-semibold"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Chat Preview */}
            <div className="w-full md:w-auto md:max-w-[400px] lg:max-w-[500px] bg-background shadow-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-border/80 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-orange-400" />
              <div className="space-y-3 sm:space-y-5">
                <motion.div
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="bg-secondary p-3 sm:p-4 rounded-xl sm:rounded-2xl rounded-tl-sm text-xs sm:text-sm text-muted-foreground shadow-md border border-border/80"
                >
                  Q: &quot;Describe a complex challenge you faced...&quot;
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="bg-accent border border-border/80 p-3 sm:p-4 rounded-xl sm:rounded-2xl rounded-br-sm text-xs sm:text-sm text-foreground/90 ml-auto w-[92%] sm:w-[90%] shadow-md relative"
                >
                  <div className="absolute -top-2.5 sm:-top-3 right-3 sm:right-4 bg-amber-100 dark:bg-amber-900/80 text-[8px] sm:text-[9px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 px-1.5 sm:px-2 py-0.5 rounded-full border border-amber-200 dark:border-amber-500/20">
                    STAR Response
                  </div>
                  &quot;Here's your answer based on your experience in STAR format...&quot;
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* ═══════════════════════════════════════════════════════════════ */}
          {/* 4. Screen Vision (2 cols) */}
          {/* ═══════════════════════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 rounded-[1.5rem] sm:rounded-[2rem] border border-border/80 bg-card p-5 sm:p-8 hover:border-purple-500/30 transition-colors flex flex-col shadow-md hover:shadow-lg group"
          >
            <div className="mb-4 sm:mb-6">
              <div className="inline-flex p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-500/10 to-violet-500/10 text-purple-600 dark:text-purple-400 shadow-sm border border-purple-500/10 mb-4 sm:mb-5">
                <ScanEye className="w-5 sm:w-6 h-5 sm:h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 tracking-tight">Screen Vision</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-2 font-medium">
                Sees what you see.
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground/80 leading-relaxed">
                Captures coding problems, diagrams, and slides directly from your screen.
              </p>
            </div>
            <div className="mt-auto pt-4 sm:pt-5 border-t border-border/70 space-y-2.5">
              {[
                { icon: Code, text: "Problem Detection" },
                { icon: Eye, text: "Diagram Reading" },
                { icon: Monitor, text: "Screen Analysis" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="text-[11px] sm:text-xs font-medium text-muted-foreground flex items-center gap-2"
                >
                  <item.icon className="w-3.5 h-3.5 text-purple-500" />
                  {item.text}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ═══════════════════════════════════════════════════════════════ */}
          {/* 5. Personalized Context (2 cols) */}
          {/* ═══════════════════════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 rounded-[1.5rem] sm:rounded-[2rem] border border-border/80 bg-card p-5 sm:p-8 hover:border-lime-500/30 transition-colors flex flex-col shadow-md hover:shadow-lg group"
          >
            <div className="mb-4 sm:mb-6">
              <div className="inline-flex p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-gradient-to-br from-lime-500/10 to-green-500/10 text-lime-600 dark:text-lime-400 shadow-sm border border-lime-500/10 mb-4 sm:mb-5">
                <FileUser className="w-5 sm:w-6 h-5 sm:h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 tracking-tight">Personalized Context</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-2 font-medium">
                Answers built around you.
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground/80 leading-relaxed">
                Upload resume, paste JD, set custom rules. AI delivers tailored answers.
              </p>
            </div>
            
            {/* Three Context Types */}
            <div className="mt-auto pt-4 sm:pt-5 border-t border-border/70 space-y-2.5">
              {[
                { icon: FileText, text: "Your Experience", desc: "PDF / DOCX" },
                { icon: Target, text: "Job Target", desc: "Paste JD" },
                { icon: SlidersHorizontal, text: "Custom Rules", desc: "Tone & Style" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-center justify-between text-[11px] sm:text-xs"
                >
                  <div className="flex items-center gap-2 font-medium text-foreground/80">
                    <item.icon className="w-3.5 h-3.5 text-lime-500" />
                    {item.text}
                  </div>
                  <span className="text-muted-foreground/60 text-[10px] sm:text-[11px]">{item.desc}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ═══════════════════════════════════════════════════════════════ */}
          {/* 6. Universal Platform Support (2 cols) - UPDATED SECTION */}
          {/* ═══════════════════════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 rounded-[1.5rem] sm:rounded-[2rem] border border-border/80 bg-card p-5 sm:p-8 hover:border-cyan-500/30 transition-colors flex flex-col shadow-md hover:shadow-lg group overflow-hidden"
          >
            <div className="mb-4 sm:mb-6">
              <div className="flex items-start justify-between mb-4 sm:mb-5">
                <div className="inline-flex p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 text-cyan-600 dark:text-cyan-400 shadow-sm border border-cyan-500/10">
                  <Layers className="w-5 sm:w-6 h-5 sm:h-6" />
                </div>
                <Badge className="bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2 py-1">
                  <Video className="w-3 h-3 mr-1" />
                  10+ Apps
                </Badge>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 tracking-tight">All Platforms</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-2 font-medium">
                Works with everything you use.
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground/80 leading-relaxed">
                Seamless compatibility with all meeting platforms. Any app that plays audio.
              </p>
            </div>
            
            {/* Animated Ticker - Row 1 (Left to Right) */}
            <div className="mt-auto pt-4 sm:pt-5 border-t border-border/70 space-y-2 sm:space-y-3 overflow-hidden">
              <div className="relative">
                <motion.div
                  className="flex gap-1.5 sm:gap-2"
                  animate={{
                    x: [0, -300],
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {[...platforms, ...platforms].map((platform, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.05, y: -1 }}
                      className="text-[9px] sm:text-[11px] font-semibold px-2 sm:px-3 py-1 sm:py-1.5 bg-secondary rounded-md sm:rounded-lg text-muted-foreground border border-border/80 hover:border-cyan-500/40 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-cyan-500/5 transition-all duration-300 cursor-default whitespace-nowrap shadow-sm"
                    >
                      {platform}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
              
              {/* Animated Ticker - Row 2 (Right to Left) */}
              <div className="relative">
                <motion.div
                  className="flex gap-1.5 sm:gap-2"
                  animate={{
                    x: [-300, 0],
                  }}
                  transition={{
                    duration: 14,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {[...platforms.slice().reverse(), ...platforms.slice().reverse()].map((platform, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.05, y: -1 }}
                      className="text-[9px] sm:text-[11px] font-semibold px-2 sm:px-3 py-1 sm:py-1.5 bg-secondary rounded-md sm:rounded-lg text-muted-foreground border border-border/80 hover:border-cyan-500/40 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-cyan-500/5 transition-all duration-300 cursor-default whitespace-nowrap shadow-sm"
                    >
                      {platform}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* ═══════════════════════════════════════════════════════════════ */}
          {/* 7. Technical Interview Copilot (6 cols - Full Width) */}
          {/* ═══════════════════════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-6 rounded-[1.5rem] sm:rounded-[2rem] border border-border/80 bg-card p-5 sm:p-6 lg:p-8 flex flex-col lg:flex-row gap-5 sm:gap-6 lg:gap-8 lg:items-center lg:justify-between group hover:border-rose-500/30 transition-colors shadow-md hover:shadow-lg"
          >
            {/* Header Section */}
            <div className="flex-1">
              {/* Icon - stacked on mobile, inline on lg */}
              <div className="inline-flex p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-gradient-to-br from-rose-500/10 to-pink-500/10 text-rose-500 border border-rose-500/10 shadow-sm mb-4 sm:mb-5 lg:hidden">
                <Code className="w-5 sm:w-6 h-5 sm:h-6" />
              </div>
              
              {/* Desktop: Icon + Text inline */}
              <div className="hidden lg:flex items-start gap-5">
                <div className="p-3.5 rounded-2xl bg-rose-50 dark:bg-rose-900/20 text-rose-500 border border-rose-200 dark:border-rose-500/20 shadow-sm group-hover:bg-rose-100 dark:group-hover:bg-rose-900/30 transition-colors shrink-0">
                  <Code className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 tracking-tight">Technical Interview Copilot</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Specialized support for DSA, system design, and coding rounds. Explains approaches, analyzes complexity, and catches edge cases in real-time.
                  </p>
                </div>
              </div>
              
              {/* Mobile/Tablet: Text below icon */}
              <div className="lg:hidden">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 tracking-tight">Technical Interview Copilot</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-2 font-medium">
                  Built for technical rounds.
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground/80 leading-relaxed">
                  DSA, system design, complexity analysis, and edge cases in real-time.
                </p>
              </div>
            </div>
            
            {/* Feature Tags with Icons */}
            <div className="flex flex-wrap gap-2 sm:gap-2.5 lg:gap-3 lg:justify-end lg:max-w-[50%]">
              {[
                { icon: GitBranch, text: "Algorithm Approach" },
                { icon: Timer, text: "Time Complexity" },
                { icon: Cpu, text: "Space Complexity" },
                { icon: Bug, text: "Edge Cases" },
                { icon: Server, text: "System Design" },
              ].map((item, i) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.08 }}
                  className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 lg:px-4 py-1.5 sm:py-2 lg:py-2.5 bg-background rounded-lg sm:rounded-xl border border-border/80 text-[10px] sm:text-xs lg:text-sm font-medium shadow-sm hover:bg-secondary/70 hover:border-rose-500/30 transition-colors"
                >
                  <item.icon className="w-3 sm:w-3.5 lg:w-4 h-3 sm:h-3.5 lg:h-4 text-rose-500 shrink-0" />
                  {item.text}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ═══════════════════════════════════════════════════════════════ */}
          {/* BOTTOM ROW - 5 Small Feature Cards */}
          {/* ═══════════════════════════════════════════════════════════════ */}
          <div className="md:col-span-6 grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-5">
            
            {/* Global Hotkeys */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl sm:rounded-3xl border border-border/80 bg-card p-5 sm:p-6 flex flex-col hover:border-slate-400/50 dark:hover:border-slate-600/50 transition-all duration-300 h-full shadow-md hover:shadow-lg group"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800/50 flex items-center justify-center mb-4 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700/50 group-hover:bg-slate-200 dark:group-hover:bg-slate-700/50 transition-colors">
                <Command className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm mb-1.5">Global Hotkeys</h4>
              <p className="text-[11px] text-muted-foreground leading-snug">
                Full control without clicking. Toggle, capture, copy.
              </p>
            </motion.div>

            {/* Multiple Profiles */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.55 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl sm:rounded-3xl border border-border/80 bg-card p-5 sm:p-6 flex flex-col hover:border-pink-300 dark:hover:border-pink-700/50 transition-all duration-300 h-full shadow-md hover:shadow-lg group"
            >
              <div className="w-10 h-10 rounded-xl bg-pink-50 dark:bg-pink-900/20 flex items-center justify-center mb-4 text-pink-600 dark:text-pink-400 border border-pink-100 dark:border-pink-500/20 group-hover:bg-pink-100 dark:group-hover:bg-pink-900/30 transition-colors">
                <Users className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm mb-1.5">Multiple Profiles</h4>
              <p className="text-[11px] text-muted-foreground leading-snug">
                Switch: Behavioral, Technical, HR, Sales.
              </p>
            </motion.div>

            {/* Multi-Language */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl sm:rounded-3xl border border-border/80 bg-card p-5 sm:p-6 flex flex-col hover:border-indigo-300 dark:hover:border-indigo-700/50 transition-all duration-300 h-full shadow-md hover:shadow-lg group"
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center mb-4 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-500/20 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/30 transition-colors">
                <Globe className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm mb-1.5">12+ Languages</h4>
              <p className="text-[11px] text-muted-foreground leading-snug">
                English, Hindi, Spanish, Chinese & more.
              </p>
            </motion.div>

            {/* Lightning Performance */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.65 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl sm:rounded-3xl border border-border/80 bg-card p-5 sm:p-6 flex flex-col hover:border-yellow-300 dark:hover:border-yellow-700/50 transition-all duration-300 h-full shadow-md hover:shadow-lg group"
            >
              <div className="w-10 h-10 rounded-xl bg-yellow-50 dark:bg-yellow-900/20 flex items-center justify-center mb-4 text-yellow-600 dark:text-yellow-400 border border-yellow-100 dark:border-yellow-500/20 group-hover:bg-yellow-100 dark:group-hover:bg-yellow-900/30 transition-colors">
                <Zap className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm mb-1.5">Lightning Fast</h4>
              <p className="text-[11px] text-muted-foreground leading-snug">
                Under 100MB. Low CPU. Zero lag.
              </p>
            </motion.div>

            {/* Zero Data Storage */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              whileHover={{ y: -4 }}
              className="col-span-2 md:col-span-1 rounded-2xl sm:rounded-3xl border border-border/80 bg-card p-5 sm:p-6 flex flex-col hover:border-red-300 dark:hover:border-red-700/50 transition-all duration-300 h-full shadow-md hover:shadow-lg group"
            >
              <div className="w-10 h-10 rounded-xl bg-red-50 dark:bg-red-900/20 flex items-center justify-center mb-4 text-red-600 dark:text-red-400 border border-red-100 dark:border-red-500/20 group-hover:bg-red-100 dark:group-hover:bg-red-900/30 transition-colors">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm mb-1.5">Zero Storage</h4>
              <p className="text-[11px] text-muted-foreground leading-snug">
                No logs. No history. Instant deletion.
              </p>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}