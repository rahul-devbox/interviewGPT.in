import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Twitter, Mail, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/80 bg-background/80 backdrop-blur-sm">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center py-8 gap-6">
          {/* Left: Copyright & Status */}
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} InterviewCopilot. All rights reserved.
            </p>

            <div className="hidden md:block h-4 w-px bg-border" />

            <Link
              href="/status"
              className="flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500/20 transition-colors cursor-pointer"
            >
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-semibold">
                All systems operational
              </span>
            </Link>
          </div>

          {/* Right: Legal & Socials */}
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <nav className="flex items-center gap-4 text-sm font-medium text-muted-foreground">
              <Link href="/privacy" className="hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-foreground transition-colors">
                Terms of Service
              </Link>
              <Link href="/refund" className="hover:text-foreground transition-colors">
                Refund Policy
              </Link>
            </nav>

            <div className="flex items-center gap-4 md:border-l md:pl-8 border-border/70">
              <a
                href="https://instagram.com/interviewgpt_in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com/interviewgpt_in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="mailto:support@interviewgpt.in"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
