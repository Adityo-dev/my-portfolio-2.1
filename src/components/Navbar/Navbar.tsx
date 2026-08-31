"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { num: "01", label: "Home", href: "/" },
  { num: "02", label: "About", href: "/about" },
  { num: "03", label: "Projects", href: "/projects" },
  { num: "04", label: "Services", href: "/services" },
  { num: "05", label: "Resume", href: "/resume" },
  { num: "06", label: "Contact", href: "/contact" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled ? "bg-background/95 backdrop-blur-md border-b border-white/5 py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 flex items-center justify-between">
        {/* Left: Wordmark */}
        <div className="w-1/4">
          <Link
            href="/"
            className="text-[11px] font-mono tracking-widest text-foreground uppercase hover:opacity-70 transition-opacity"
          >
            Koushik Barmon
          </Link>
        </div>

        {/* Center: Editorial Navigation */}
        <nav aria-label="Main navigation" className="hidden md:flex justify-center w-2/4">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-baseline gap-1.5"
                  >
                    <span className="text-[9px] font-mono text-muted-foreground group-hover:text-foreground transition-colors">
                      {link.num}
                    </span>
                    <span className={`text-[13px] tracking-wide transition-colors duration-300 ${
                      isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                    }`}>
                      {link.label}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right: Availability & CTA */}
        <div className="hidden md:flex w-1/4 justify-end items-center gap-6">
          <div className="flex items-center gap-2 text-[11px] font-mono tracking-wider text-muted-foreground uppercase">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500/50 animate-ping" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
            Available
          </div>
          
          <Link 
            href="/contact"
            className="group flex items-center gap-1.5 text-[13px] tracking-wide text-foreground relative overflow-hidden"
          >
            <span>Start a project</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            <span className="absolute left-0 bottom-0 w-full h-[1px] bg-foreground/30 transform origin-right scale-x-100 transition-transform duration-500 group-hover:scale-x-0"></span>
            <span className="absolute left-0 bottom-0 w-full h-[1px] bg-foreground transform origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100 delay-100"></span>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          className="md:hidden flex h-10 w-10 items-center justify-end text-foreground"
        >
          {open ? <X className="h-5 w-5" strokeWidth={1} /> : <Menu className="h-5 w-5" strokeWidth={1} />}
        </button>
      </div>

      {/* Mobile Navigation Panel */}
      <div 
        className={`absolute top-full left-0 w-full bg-background border-b border-white/5 transition-all duration-500 ease-in-out origin-top overflow-hidden md:hidden ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-8 flex flex-col gap-6">
          <ul className="flex flex-col space-y-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="flex items-baseline gap-3 text-lg tracking-wide"
                >
                  <span className="text-xs font-mono text-muted-foreground">{link.num}</span>
                  <span className={pathname === link.href ? "text-foreground" : "text-muted-foreground"}>
                    {link.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="mt-4 pt-6 border-t border-white/5 flex flex-col gap-4">
            <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-muted-foreground uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Available for work
            </div>
            <Link 
              href="/contact"
              className="flex items-center gap-2 text-sm text-foreground underline underline-offset-4 decoration-white/30"
            >
              Start a project <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
