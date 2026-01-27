"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  direction?: "up" | "down";
  format?: (value: number) => string;
  className?: string;
}

export function AnimatedCounter({
  value,
  direction = "up",
  format = (v) => v.toString(),
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionaccessible = useMotionValue(direction === "down" ? value : 0);
  const springValue = useSpring(motionaccessible, {
    damping: 20,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionaccessible.set(direction === "down" ? 0 : value);
    }
  }, [isInView, value, direction, motionaccessible]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = format(latest);
      }
    });
  }, [springValue, format]);

  return <span ref={ref} className={className} />;
}
