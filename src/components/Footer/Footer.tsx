"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="w-full border-t border-white/10 bg-background pt-16 pb-8">
      <div className="container mx-auto max-w-[1400px] px-6 md:px-12 flex flex-col gap-16">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Brand */}
          <div className="md:col-span-2 flex flex-col gap-5">
            <Link href="/" className="text-2xl font-bold tracking-tight text-foreground">
              Aditto Dev.
            </Link>
            <p className="text-[15px] text-muted-foreground leading-relaxed max-w-sm">
              Full-stack developer focused on building digital products with solid architecture and refined interfaces.
            </p>
          </div>
          
          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <div className="text-[10px] font-mono tracking-widest text-[#FF5A36] uppercase font-semibold mb-2">
              NAVIGATION
            </div>
            <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Home
            </Link>
            <Link href="/projects" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Selected Work
            </Link>
            <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              About Me
            </Link>
            <Link href="/resume" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Resume
            </Link>
          </div>
          
          {/* Connect */}
          <div className="flex flex-col gap-4">
            <div className="text-[10px] font-mono tracking-widest text-[#FF5A36] uppercase font-semibold mb-2">
              CONNECT
            </div>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="group flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              GitHub <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="group flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              LinkedIn <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="group flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Twitter <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
            </a>
            <a href="mailto:hello@example.com" className="group flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              hello@example.com
            </a>
          </div>

        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-white/10 text-[13px] font-medium text-muted-foreground/60 gap-4">
          <p>© {new Date().getFullYear()} Aditto Dev. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-foreground transition-colors cursor-pointer">Privacy</span>
            <span className="hover:text-foreground transition-colors cursor-pointer">Terms</span>
          </div>
        </div>
        
      </div>
    </footer>
  );
};
