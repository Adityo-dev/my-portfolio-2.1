"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const featuredProjectImage = "https://cdn.magicpatterns.com/patterns/generated-images/dae1e7b2-a1d4-4e7c-9707-23fb5ab961f7.jpg";

export const HeroSection = () => {
  return (
    <section aria-label="Introduction" className="relative min-h-screen w-full bg-background flex flex-col pt-32 pb-12 overflow-hidden selection:bg-foreground selection:text-background">
      
      {/* Editorial Grid Lines */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute left-[5%] top-0 bottom-0 w-[1px] bg-white/[0.03]"></div>
        <div className="absolute left-[50%] top-0 bottom-0 w-[1px] bg-white/[0.03] hidden md:block"></div>
        <div className="absolute right-[5%] top-0 bottom-0 w-[1px] bg-white/[0.03]"></div>
        <div className="absolute top-[20%] left-0 right-0 h-[1px] bg-white/[0.03]"></div>
      </div>

      <div className="container mx-auto max-w-[1400px] px-6 md:px-12 relative z-10 flex flex-col h-full grow">
        
        {/* Main Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 flex-1 mt-8 lg:mt-12">
          
          {/* Left: Typography & Brand */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.1 }}
              className="flex flex-col uppercase"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-medium leading-[1.1] tracking-[-0.03em] text-foreground">
                <span className="block overflow-hidden pb-1"><motion.span className="block" initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>I Build Digital</motion.span></span>
                <span className="block overflow-hidden pb-1"><motion.span className="block text-muted-foreground" initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}>Products That</motion.span></span>
                <span className="block overflow-hidden pb-1"><motion.span className="block" initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}>Move Businesses</motion.span></span>
                <span className="block overflow-hidden pb-1"><motion.span className="block" initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}>Forward.</motion.span></span>
              </h1>
            </motion.div>

            {/* Left Bottom: Metadata */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-16 lg:mt-0 flex flex-col sm:flex-row justify-between items-start sm:items-end border-t border-white/10 lg:border-t-0 pt-6 lg:pt-0 pb-4"
            >
              <div className="flex flex-col gap-1 text-[11px] font-mono tracking-widest text-muted-foreground uppercase leading-relaxed mb-4 sm:mb-0">
                <span className="text-foreground">Full Stack Developer</span>
                <span>Bangladesh &rarr; Global</span>
              </div>
              <div className="text-[11px] font-mono tracking-widest text-muted-foreground uppercase">
                [ EST. 2026 ]
              </div>
            </motion.div>
          </div>

          {/* Right: Featured Project Ecosystem */}
          <div className="lg:col-span-5 flex flex-col justify-end lg:pl-8 xl:pl-12 pb-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-6"
            >
              {/* Project Header */}
              <div className="flex justify-between items-end border-b border-white/10 pb-4">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Featured Project</span>
                  <span className="text-sm font-medium tracking-wide">Enterprise Dashboard</span>
                </div>
                <span className="text-[10px] font-mono text-white/40 tracking-widest">01 / 05</span>
              </div>

              {/* Project Visual Composition */}
              <Link href="/projects/enterprise-dashboard" className="group relative block w-full aspect-[4/3] bg-secondary border border-white/5 overflow-hidden">
                {/* Image */}
                <div className="absolute inset-0 bg-background mix-blend-color z-10 group-hover:opacity-0 transition-opacity duration-700"></div>
                <img 
                  src={featuredProjectImage} 
                  alt="Enterprise Dashboard Preview" 
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                />
                
                {/* Floating UI Elements (Simulating product ecosystem) */}
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-md border border-white/10 px-3 py-2 text-[10px] font-mono text-muted-foreground uppercase tracking-widest z-20 shadow-2xl">
                  Live Preview
                </div>
                <div className="absolute bottom-4 left-4 flex gap-2 z-20">
                  <div className="h-1.5 w-12 bg-white/20 backdrop-blur-md rounded-full overflow-hidden">
                    <div className="h-full w-2/3 bg-white"></div>
                  </div>
                  <div className="h-1.5 w-8 bg-white/10 backdrop-blur-md rounded-full"></div>
                </div>
              </Link>

              {/* Project Metadata & CTA */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-2">
                <div className="flex flex-col gap-1 text-[10px] font-mono tracking-widest text-muted-foreground uppercase">
                  <span>Full Stack Platform</span>
                  <span className="text-white/40">Next.js + TypeScript</span>
                </div>
                
                <Link 
                  href="/projects/enterprise-dashboard"
                  className="group/cta flex items-center gap-2 text-[11px] font-mono tracking-widest text-foreground uppercase relative overflow-hidden pb-1"
                >
                  <span>View Case Study</span>
                  <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
                  <span className="absolute left-0 bottom-0 w-full h-[1px] bg-foreground/30 transform origin-right scale-x-100 transition-transform duration-500 group-hover/cta:scale-x-0"></span>
                  <span className="absolute left-0 bottom-0 w-full h-[1px] bg-foreground transform origin-left scale-x-0 transition-transform duration-500 group-hover/cta:scale-x-100 delay-100"></span>
                </Link>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
