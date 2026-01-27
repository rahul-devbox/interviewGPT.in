"use client";

import { Container } from "@/components/ui/container";
import { AnimatedCounter } from "@/components/ui/animated-counter";

const stats = [
  { label: "Active Members", value: 8742, suffix: "+" },
  { label: "Success Rate", value: 98, suffix: "%" },
  { label: "User Rating", value: 4.8, suffix: "/5", decimals: 1 },
];

export function TrustBar() {
  return (
    <section id="trust" className="py-12 border-y border-border/70 bg-secondary">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">
                <AnimatedCounter
                  value={stat.value}
                  format={(v) =>
                    stat.decimals
                      ? v.toFixed(stat.decimals) + stat.suffix
                      : Math.floor(v).toLocaleString() + stat.suffix
                  }
                />
              </div>
              <p className="text-sm md:text-base text-muted-foreground font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
