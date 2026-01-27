import { cn } from "@/lib/utils";

export function GradientText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-primary to-purple-600 animate-gradient-x",
        className
      )}
    >
      {children}
    </span>
  );
}

export function GlowEffect({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "absolute -z-10 rounded-full mix-blend-multiply dark:mix-blend-screen bg-[radial-gradient(closest-side,_color-mix(in_oklab,var(--primary)_22%,transparent),_transparent_72%)]",
        className
      )}
    />
  );
}
