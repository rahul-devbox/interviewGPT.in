"use client";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, ShieldCheck, Check, Zap, ArrowRight } from "lucide-react";
import { AppleLogo, WindowsLogo } from "../../components/brand-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";

export default function DownloadPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DownloadPageContent />
    </Suspense>
  );
}

function DownloadPageContent() {
  const searchParams = useSearchParams();
  const platformParam = searchParams.get("platform");
  const [activeTab, setActiveTab] = useState("windows");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (platformParam === "mac") {
        setActiveTab("mac");
      } else if (platformParam === "windows") {
        setActiveTab("windows");
      }
    }, 0);
    return () => clearTimeout(timer);
  }, [platformParam]);

  return (
    <div className="min-h-screen pt-20 pb-24 bg-background text-foreground relative overflow-hidden selection:bg-primary/20">
      {/* Dynamic Background - Cleaned up for sharpness */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full pointer-events-none bg-[radial-gradient(closest-side,_color-mix(in_oklab,#2563eb_18%,transparent),_transparent_72%)]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full pointer-events-none bg-[radial-gradient(closest-side,_color-mix(in_oklab,#9333ea_16%,transparent),_transparent_72%)]" />

      <Container className="relative z-10 px-4 md:px-6">
        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8 flex justify-start"
        >
          <Button
            variant="ghost"
            className="group gap-2 pl-2 pr-4 text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-full transition-all duration-300"
            asChild
          >
            <Link href="/">
              <div className="bg-secondary p-1 rounded-full group-hover:bg-background transition-colors border border-border/80 shadow-sm">
                <ArrowRight className="w-3.5 h-3.5 rotate-180" />
              </div>
              <span className="text-sm font-medium">Back to Home</span>
            </Link>
          </Button>
        </motion.div>

        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-background/90 border border-border/80 backdrop-blur-md mb-8 shadow-sm ring-1 ring-border/60">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-bold tracking-wide uppercase text-foreground/80">
                Latest Release v2.1.0
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
              <span className="text-foreground drop-shadow-sm">Your AI Interview</span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-primary to-purple-600 leading-[1.2] pb-1 animate-gradient-x">
                Copilot is Ready
              </span>
            </h1>

            <p className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
              Experience the next generation of interview preparation.
              <br className="hidden md:block" /> Native performance. Unmatched privacy.
            </p>
          </motion.div>
        </div>

        {/* Download Section */}
        <div className="max-w-6xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-center mb-12 md:mb-16">
              <TabsList className="p-1.5 h-auto bg-card/90 border border-border/80 rounded-full backdrop-blur-xl shadow-lg ring-1 ring-black/5 dark:ring-white/5">
                <TabsTrigger
                  value="windows"
                  className="px-6 md:px-8 py-2.5 md:py-3 rounded-full text-sm md:text-base font-medium gap-2 md:gap-3 text-muted-foreground data-[state=active]:text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:via-primary data-[state=active]:to-purple-600 data-[state=active]:shadow-lg data-[state=active]:shadow-primary/20 data-[state=active]:ring-1 data-[state=active]:ring-white/25 data-[state=active]:animate-gradient-x motion-reduce:data-[state=active]:animate-none transition-all duration-300"
                >
                  <WindowsLogo className="w-4 h-4 md:w-5 md:h-5" />
                  Windows
                </TabsTrigger>
                <TabsTrigger
                  value="mac"
                  className="px-6 md:px-8 py-2.5 md:py-3 rounded-full text-sm md:text-base font-medium gap-2 md:gap-3 text-muted-foreground data-[state=active]:text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:via-primary data-[state=active]:to-purple-600 data-[state=active]:shadow-lg data-[state=active]:shadow-primary/20 data-[state=active]:ring-1 data-[state=active]:ring-white/25 data-[state=active]:animate-gradient-x motion-reduce:data-[state=active]:animate-none transition-all duration-300"
                >
                  <AppleLogo className="w-4 h-4 md:w-5 md:h-5" />
                  macOS
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Windows Tab */}
            <TabsContent
              value="windows"
              className="animate-in fade-in slide-in-from-bottom-8 duration-700"
            >
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                {/* Left: Product Card */}
                <div className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-primary to-purple-600 rounded-[2rem] opacity-15 group-hover:opacity-30 transition duration-500 animate-gradient-x"></div>
                  <div className="relative h-full bg-card/95 backdrop-blur-xl border border-border rounded-[1.8rem] p-8 md:p-10 flex flex-col justify-between overflow-hidden shadow-2xl">
                    <div className="relative z-10">
                      <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-100 dark:border-blue-900/30 mb-8">
                        <WindowsLogo className="w-10 h-10 md:w-12 md:h-12 text-blue-600 dark:text-blue-400" />
                      </div>

                      <h2 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight">
                        Windows 10 & 11
                      </h2>
                      <p className="text-muted-foreground font-medium mb-10 text-base md:text-lg">
                        Optimized for x64 architecture
                      </p>

                      <Button
                        size="lg"
                        className="w-full h-16 md:h-20 text-lg md:text-xl font-semibold relative overflow-hidden rounded-xl group/btn bg-gradient-to-r from-blue-600 via-primary to-purple-600 text-white shadow-xl shadow-primary/20 transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] animate-gradient-x"
                      >
                        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent w-1/2 -skew-x-12"
                          animate={{ x: "300%" }}
                          transition={{
                            repeat: Infinity,
                            duration: 3,
                            ease: "easeInOut",
                            repeatDelay: 1,
                          }}
                        />
                        <div className="flex items-center gap-3 md:gap-4 relative z-10">
                          <Download className="w-6 h-6 md:w-7 md:h-7" />
                          Download Installer
                        </div>
                      </Button>

                      <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:gap-6 text-xs md:text-sm font-medium text-muted-foreground">
                        <span className="flex items-center gap-2 px-3 py-1.5 bg-secondary/70 rounded-full border border-border/80 shadow-sm">
                          <ShieldCheck className="w-4 h-4 text-green-500" /> Virus Tested
                        </span>
                        <span className="flex items-center gap-2 px-3 py-1.5 bg-secondary/70 rounded-full border border-border/80 shadow-sm">
                          <Zap className="w-4 h-4 text-amber-500" /> Auto-Updates
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Instructions (Timeline) */}
                <div className="relative pt-4 pl-4 md:pl-8">
                  <h3 className="text-lg md:text-xl font-bold mb-8 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary border border-primary/20">
                      <Download className="w-4 h-4" />
                    </span>
                    Installation Steps
                  </h3>

                  <div className="space-y-0 relative border-l-2 border-border ml-4">
                    {/* Step 1 */}
                    <div className="relative pl-8 md:pl-10 pb-12 group">
                      <div className="absolute left-[-9px] top-0.5 w-4 h-4 rounded-full border-[3px] border-background bg-muted-foreground/30 group-hover:bg-blue-500 transition-colors duration-300 shadow-sm"></div>
                      <h4 className="text-base md:text-lg font-semibold text-foreground mb-2">
                        Download & Run
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Execute the{" "}
                        <code className="px-1.5 py-0.5 rounded bg-secondary/70 font-mono text-foreground text-xs border border-border/80 font-bold">
                          .exe
                        </code>{" "}
                        file safely.
                      </p>
                    </div>

                    {/* Step 2 */}
                    <div className="relative pl-8 md:pl-10 pb-12 group">
                      <div className="absolute left-[-9px] top-0.5 w-4 h-4 rounded-full border-[3px] border-background bg-amber-500/50 group-hover:bg-amber-500 transition-colors duration-300 shadow-sm"></div>
                      <h4 className="text-base md:text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                        Windows Protection
                      </h4>
                      <div className="text-sm text-muted-foreground space-y-3">
                        <p>If you see a &quot;SmartScreen&quot; popup window:</p>
                        <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/30 rounded-lg p-3 inline-flex flex-col sm:flex-row gap-3 sm:items-center w-full sm:w-auto">
                          <span className="flex items-center gap-2">
                            <span className="w-5 h-5 rounded-full bg-amber-200 dark:bg-amber-900 text-amber-700 dark:text-amber-300 flex items-center justify-center text-[10px] font-bold">
                              1
                            </span>
                            Click &quot;More Info&quot;
                          </span>
                          <span className="hidden sm:block text-amber-300">→</span>
                          <span className="flex items-center gap-2">
                            <span className="w-5 h-5 rounded-full bg-amber-200 dark:bg-amber-900 text-amber-700 dark:text-amber-300 flex items-center justify-center text-[10px] font-bold">
                              2
                            </span>
                            Click &quot;Run Anyway&quot;
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="relative pl-8 md:pl-10 group">
                      <div className="absolute left-[-9px] top-0.5 w-4 h-4 rounded-full border-[3px] border-background bg-muted-foreground/30 group-hover:bg-green-500 transition-colors duration-300 shadow-sm"></div>
                      <h4 className="text-base md:text-lg font-semibold text-foreground mb-2">
                        Launch & Ace
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Open the app and sign in. You&apos;re ready to prep.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* macOS Tab */}
            <TabsContent
              value="mac"
              className="animate-in fade-in slide-in-from-bottom-8 duration-700"
            >
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                {/* Left: Product Card */}
                <div className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-primary to-purple-600 rounded-[2rem] opacity-15 group-hover:opacity-30 transition duration-500 animate-gradient-x"></div>
                  <div className="relative h-full bg-card/95 backdrop-blur-xl border border-border rounded-[1.8rem] p-8 md:p-10 flex flex-col justify-between overflow-hidden shadow-2xl">
                    <div className="relative z-10">
                      <div className="inline-flex p-4 rounded-2xl bg-secondary border border-border/80 shadow-sm mb-8">
                        <AppleLogo className="w-10 h-10 md:w-12 md:h-12 text-foreground" />
                      </div>

                      <h2 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight">macOS</h2>
                      <p className="text-muted-foreground font-medium mb-10 text-base md:text-lg">
                        Universal (Intel & Apple Silicon)
                      </p>

                      <Button
                        size="lg"
                        className="w-full h-16 md:h-20 text-lg md:text-xl font-semibold relative overflow-hidden rounded-xl group/btn bg-gradient-to-r from-blue-600 via-primary to-purple-600 text-white shadow-xl shadow-primary/20 transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] animate-gradient-x"
                      >
                        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 dark:via-black/10 to-transparent w-1/2 -skew-x-12"
                          animate={{ x: "300%" }}
                          transition={{
                            repeat: Infinity,
                            duration: 3,
                            ease: "easeInOut",
                            repeatDelay: 1,
                          }}
                        />
                        <div className="flex items-center gap-3 md:gap-4 relative z-10">
                          <Download className="w-6 h-6 md:w-7 md:h-7" />
                          Download DMG
                        </div>
                      </Button>

                      <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:gap-6 text-xs md:text-sm font-medium text-muted-foreground">
                        <span className="flex items-center gap-2 px-3 py-1.5 bg-secondary/70 rounded-full border border-border/80 shadow-sm">
                          <Check className="w-4 h-4 text-green-500" /> macOS 10.15+
                        </span>
                        <span className="flex items-center gap-2 px-3 py-1.5 bg-secondary/70 rounded-full border border-border/80 shadow-sm">
                          <ShieldCheck className="w-4 h-4 text-green-500" /> Signed App
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Instructions (Timeline) */}
                <div className="relative pt-4 pl-4 md:pl-8">
                  <h3 className="text-lg md:text-xl font-bold mb-8 flex items-center gap-2 md:gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-secondary text-foreground border border-border/80 shadow-sm">
                      <Download className="w-4 h-4" />
                    </span>
                    Installation Steps
                  </h3>

                  <div className="space-y-0 relative border-l-2 border-border ml-4">
                    {/* Step 1 */}
                    <div className="relative pl-8 md:pl-10 pb-12 group">
                      <div className="absolute left-[-9px] top-0.5 w-4 h-4 rounded-full border-[3px] border-background bg-muted-foreground/30 group-hover:bg-primary/60 transition-colors duration-300 shadow-sm"></div>
                      <h4 className="text-base md:text-lg font-semibold text-foreground mb-2">
                        Open Disk Image
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Double click the downloaded{" "}
                        <code className="px-1.5 py-0.5 rounded bg-secondary/70 font-mono text-foreground text-xs border border-border/80 font-bold">
                          .dmg
                        </code>{" "}
                        file.
                      </p>
                    </div>

                    {/* Step 2 */}
                    <div className="relative pl-8 md:pl-10 pb-12 group">
                      <div className="absolute left-[-9px] top-0.5 w-4 h-4 rounded-full border-[3px] border-background bg-muted-foreground/30 group-hover:bg-primary/60 transition-colors duration-300 shadow-sm"></div>
                      <h4 className="text-base md:text-lg font-semibold text-foreground mb-2">
                        Drag to Applications
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Drag the InterviewCopilot icon into the{" "}
                        <span className="font-semibold text-foreground">Applications</span> folder.
                      </p>
                    </div>

                    {/* Step 3 */}
                    <div className="relative pl-8 md:pl-10 group">
                      <div className="absolute left-[-9px] top-0.5 w-4 h-4 rounded-full border-[3px] border-background bg-muted-foreground/30 group-hover:bg-primary/60 transition-colors duration-300 shadow-sm"></div>
                      <h4 className="text-base md:text-lg font-semibold text-foreground mb-2">
                        Grant Permissions
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Allow &quot;Screen Recording&quot; &amp; &quot;Accessibility&quot; if asked.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </Container>
    </div>
  );
}
