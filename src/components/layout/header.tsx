"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useScrollPosition } from "@/hooks/use-scroll-position";
import { useActiveSection } from "@/hooks/use-active-section";
import { Logo } from "@/components/icons";
import { cn, scrollToSection } from "@/lib/utils";
import { MobileMenu } from "./mobile-menu";
import { DynamicIsland } from "./dynamic-island";

export function Header() {
  const scrollPosition = useScrollPosition();
  const isScrolled = scrollPosition > 100;
  const pathname = usePathname();

  // We can switch between normal header and Dynamic Island based on design preference.
  // PRD requests Dynamic Island style floating header.

  const navItems = [
    { name: "How It Works", href: "#how-it-works", id: "how-it-works" },
    { name: "Features", href: "#features", id: "features" },
    { name: "Pricing", href: "#pricing", id: "pricing" },
    { name: "FAQ", href: "#faq", id: "faq" },
  ];

  const activeSectionRaw = useActiveSection(navItems.map((item) => item.id));
  const activeSection = scrollPosition < 100 ? "" : activeSectionRaw;

  return (
    <DynamicIsland className="hidden md:block">
      <div className="flex items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center gap-2 cursor-pointer"
          onClick={(e) => {
            // Optional: If we want to force a hard reload even if on the same page
            if (pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "instant" });
              window.location.reload();
            }
          }}
        >
          <Logo iconOnly={isScrolled} />
        </Link>

        <nav className="flex items-center gap-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "transition-colors hover:text-primary",
                activeSection === item.id ? "text-blue-600 font-semibold" : "text-muted-foreground"
              )}
              onClick={(e) => scrollToSection(e, item.href)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/download"
            className={cn(
              "transition-colors hover:text-primary",
              pathname === "/download" ? "text-blue-600 font-semibold" : "text-muted-foreground"
            )}
          >
            Download
          </Link>
        </nav>
      </div>
    </DynamicIsland>
  );
}

// Separate component for mobile header or standard header wrapper
export function MainHeader() {
  return (
    <>
      <Header /> {/* Desktop Dynamic Island */}
      {/* Mobile Header (Standard Fixed) */}
      <header className="md:hidden fixed top-0 left-0 right-0 h-16 bg-background/90 backdrop-blur-md border-b border-border/80 shadow-sm z-50 flex items-center px-4 justify-between">
        <Link
          href="/"
          onClick={(e) => {
            if (window.location.pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "instant" });
              window.location.reload();
            }
          }}
        >
          <Logo />
        </Link>
        <MobileMenu />
      </header>
    </>
  );
}
