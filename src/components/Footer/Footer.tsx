"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="w-full border-t border-white/[0.08] bg-[#131419] pt-16 pb-8 font-sans">
      <div className="mx-auto max-w-[1400px] px-4 flex flex-col gap-16">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Brand */}
          <div className="md:col-span-2 flex flex-col gap-5">
            <Link href="/" className="text-2xl font-bold tracking-tight text-[#F7F7F5]">
              Koushik Barmon.
            </Link>
            <p className="text-[15px] text-[#9B9DA6] leading-relaxed max-w-sm">
              Full-stack developer focused on building digital products with solid architecture and refined interfaces.
            </p>
          </div>
          
          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <div className="text-xs font-mono tracking-widest text-[#5C5F68] uppercase font-semibold mb-2">
              PAGES
            </div>
            <Link href="/projects" className="text-[15px] font-medium text-[#9B9DA6] hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="/about" className="text-[15px] font-medium text-[#9B9DA6] hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/services" className="text-[15px] font-medium text-[#9B9DA6] hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="/contact" className="text-[15px] font-medium text-[#9B9DA6] hover:text-primary transition-colors">
              Contact
            </Link>
          </div>
          
          {/* Connect */}
          <div className="flex flex-col gap-4">
            <div className="text-xs font-mono tracking-widest text-[#5C5F68] uppercase font-semibold mb-2">
              ELSEWHERE
            </div>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="group flex items-center gap-1.5 text-[15px] font-medium text-[#9B9DA6] hover:text-primary transition-colors">
              <span>GitHub</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-[#9B9DA6] group-hover:text-primary transition-colors" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="group flex items-center gap-1.5 text-[15px] font-medium text-[#9B9DA6] hover:text-primary transition-colors">
              <span>LinkedIn</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-[#9B9DA6] group-hover:text-primary transition-colors" />
            </a>
            <a href="https://fiverr.com" target="_blank" rel="noreferrer" className="group flex items-center gap-1.5 text-[15px] font-medium text-[#9B9DA6] hover:text-primary transition-colors">
              <span>Fiverr</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-[#9B9DA6] group-hover:text-primary transition-colors" />
            </a>
            <a href="mailto:hello@example.com" className="group flex items-center gap-1.5 text-[15px] font-medium text-[#9B9DA6] hover:text-primary transition-colors">
              <span>Email</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-[#9B9DA6] group-hover:text-primary transition-colors" />
            </a>
          </div>

        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-white/[0.08] text-[13px] font-medium text-[#9B9DA6] gap-4">
          <p>© {new Date().getFullYear()} Koushik Barmon. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-[#F7F7F5] transition-colors cursor-pointer">Privacy</span>
            <span className="hover:text-[#F7F7F5] transition-colors cursor-pointer">Terms</span>
          </div>
        </div>
        
      </div>
    </footer>
  );
};
