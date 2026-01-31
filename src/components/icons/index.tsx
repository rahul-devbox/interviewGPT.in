import { cn } from "@/lib/utils";
import Image from "next/image";
// Re-export lucide icons or custom SVGs

export function Logo({
  className,
  textOnly,
  iconOnly,
}: {
  className?: string;
  textOnly?: boolean;
  iconOnly?: boolean;
}) {
  return (
    <div className={cn("flex items-center gap-2 font-bold text-xl", className)}>
      {!textOnly && (
        <div className="relative h-8 w-8">
          <Image
            src="/AppIcon.png"
            alt="InterviewCopilot Logo"
            fill
            sizes="32px"
            className="object-contain rounded-lg"
          />
        </div>
      )}
      {!iconOnly && <span className="font-bold text-xl tracking-tight">InterviewGPT</span>}
    </div>
  );
}

export function GoogleLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={cn("w-6 h-6", className)}>
      {/* Simplified Google Icon Path */}
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

export function AppleLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={cn("w-6 h-6", className)}>
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.48C2.7 15.25 3.51 7.96 9.02 7.31c1.35.17 2.39.77 2.97.77.58 0 1.96-.73 3.52-.59 2.71.2 3.89 1.94 3.89 1.94s-2.19 1.15-2.03 3.56c.15 2.19 2.01 3.03 2.01 3.03s-1.43 3.04-3.33 4.26zM12.03 5.37c.73-.87 1.15-2.05.99-3.23-1.09.06-2.31.72-2.98 1.54-.64.78-1.12 1.98-.94 3.19 1.15.08 2.22-.64 2.93-1.5z" />
    </svg>
  );
}

export function WindowsLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 88 88" fill="currentColor" className={cn("w-6 h-6", className)}>
      <path d="M0 12.402l35.687-4.86.016 34.423-35.67.203L0 12.402zm35.67 33.529l.028 34.453L.028 75.48.024 46.12l35.646-.188zm4.326-37.551L87.974 0v41.527l-47.978.188V8.38zm47.96 36.724l.016 42.896-47.96-6.72V45.29l47.944-.191z" />
    </svg>
  );
}
