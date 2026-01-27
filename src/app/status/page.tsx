"use client";

import { Container } from "@/components/ui/container";
import { ArrowRight, Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

// Mock data for the uptime bars (mostly green with random variations if we wanted, but static green is safer for "All Systems Operational")
const UPTIME_DAYS = 45;

interface UptimeBarProps {
  percentage: number;
  className?: string;
  downtimeIndices?: number[]; // indices of bars that should be red
}

function UptimeBar({ className, downtimeIndices = [] }: UptimeBarProps) {
  return (
    <div className={cn("flex items-end justify-between gap-[3px] h-8 w-full mt-4", className)}>
      {Array.from({ length: UPTIME_DAYS }).map((_, i) => {
        const isDown = downtimeIndices.includes(i);
        return (
          <div
            key={i}
            className={cn(
              "w-full rounded-sm transition-all hover:scale-110 cursor-help relative group",
              isDown ? "bg-red-500 h-full" : "bg-emerald-500 h-full"
            )}
          >
            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-max px-2 py-1 bg-foreground text-background text-xs rounded shadow-lg z-10">
              {isDown ? "Outage" : "Operational"}
            </div>
          </div>
        );
      })}
    </div>
  );
}

const incidents = [
  {
    date: "January 24, 2026",
    title: "AI Inference Latency Spike",
    status: "Resolved",
    description:
      "We experienced a temporary increase in latency for AI responses. The issue was identified as a provider capacity limit and was resolved within 45 minutes.",
  },
  {
    date: "January 18, 2026",
    title: "Partial API Outage",
    status: "Resolved",
    description:
      "Some users reported failures when connecting to the transcription websocket. A fix was deployed immediately.",
  },
  {
    date: "January 05, 2026",
    title: "Scheduled Maintenance",
    status: "Completed",
    description: "Performed successful database upgrades. No customer impact was observed.",
  },
];

export default function StatusPage() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const currentTime = new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short",
  });

  return (
    <div className="min-h-screen pt-24 pb-12 bg-background">
      <Container className="max-w-4xl">
        <div className="mb-8 flex justify-start">
          <Button
            variant="ghost"
            className="gap-2 pl-2 pr-4 text-muted-foreground hover:text-foreground"
            asChild
          >
            <Link href="/">
              <ArrowRight className="w-4 h-4 rotate-180" /> Back to Home
            </Link>
          </Button>
        </div>
        {/* Header Status */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="h-16 w-16 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/20 mb-6">
            <Check className="h-8 w-8 text-white stroke-[3]" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3 tracking-tight">
            Everything is Running Smoothly
          </h1>
          <p className="text-muted-foreground">
            As of {currentDate}, {currentTime}
          </p>
        </div>

        <div className="space-y-8">
          <h2 className="text-xl font-semibold px-1">System Status</h2>

          {/* Service Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Card 1: Dashboard */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <span className="font-semibold text-sm text-emerald-600 dark:text-emerald-400">
                    Operational
                  </span>
                </div>
                <span className="font-bold text-foreground">Interview Dashboard</span>
              </div>

              <UptimeBar percentage={99.9} />

              <div className="flex justify-between items-center mt-3 text-xs text-muted-foreground font-medium">
                <span>90 days ago</span>
                <span>100% uptime</span>
                <span>Today</span>
              </div>
            </Card>

            {/* Card 2: Desktop App */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <span className="font-semibold text-sm text-emerald-600 dark:text-emerald-400">
                    Operational
                  </span>
                </div>
                <span className="font-bold text-foreground">Desktop App (Mac/Win)</span>
              </div>

              <UptimeBar percentage={99.8} />

              <div className="flex justify-between items-center mt-3 text-xs text-muted-foreground font-medium">
                <span>90 days ago</span>
                <span>99.9% uptime</span>
                <span>Today</span>
              </div>
            </Card>

            {/* Card 3: AI Engine */}
            <Card className="p-6 md:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <span className="font-semibold text-sm text-emerald-600 dark:text-emerald-400">
                    Operational
                  </span>
                </div>
                <span className="font-bold text-foreground">AI Inference Engine</span>
              </div>

              <UptimeBar percentage={98} downtimeIndices={[12, 35, 36]} />

              <div className="flex justify-between items-center mt-3 text-xs text-muted-foreground font-medium">
                <span>90 days ago</span>
                <span>98% uptime</span>
                <span>Today</span>
              </div>
            </Card>
          </div>
        </div>

        {/* Incident History - Populated */}
        <div className="mt-16">
          <h2 className="text-xl font-semibold mb-6 px-1">Past Incidents</h2>
          <div className="space-y-6">
            {incidents.map((incident, index) => (
              <div key={index} className="flex flex-col gap-2 p-1">
                <h3 className="text-base font-semibold text-foreground flex items-center gap-2">
                  {incident.title}
                  <span
                    className={cn(
                      "px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wide",
                      incident.status === "Resolved" &&
                        "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400",
                      incident.status === "Completed" &&
                        "bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400"
                    )}
                  >
                    {incident.status}
                  </span>
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {incident.description}
                </p>
                <div className="text-xs text-muted-foreground/60 font-medium">{incident.date}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
