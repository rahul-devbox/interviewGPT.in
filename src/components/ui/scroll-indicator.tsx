"use client";

import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollIndicatorProps {
  text?: string;
  className?: string;
  onClick?: () => void;
}

export function ScrollIndicator({
  text = "Scroll to explore",
  className,
  onClick,
}: ScrollIndicatorProps) {
  return (
    <motion.div
      className={cn("flex flex-col items-center gap-2 cursor-pointer", className)}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      onClick={onClick}
    >
      {text && <span className="text-sm text-muted-foreground font-medium">{text}</span>}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="h-6 w-6 text-muted-foreground" />
      </motion.div>
    </motion.div>
  );
}
