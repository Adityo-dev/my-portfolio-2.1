"use client";

import React from "react";
import { motion } from "framer-motion";
import { ActionButton } from "@/components/shared/ActionButton";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section aria-label="Introduction" className="relative w-full bg-background pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden font-sans">
      <div className="mx-auto max-w-[1400px] px-4 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Typography & CTAs (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col">
            
            {/* Category Tag */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xs font-mono tracking-widest text-[#FF5A36] uppercase font-semibold mb-4"
            >
              FULL STACK DEVELOPER
            </motion.div>

            {/* Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[2.25rem] sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground leading-[1.08] mb-6"
            >
              Building <span className="text-[#FF5A36]">Digital Experiences</span> That Scale.
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8"
            >
              I design and build high-performance web applications with React, Next.js, and TypeScript. Transforming complex ideas into seamless, production-ready software.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-row items-center gap-3 mb-8"
            >
              <ActionButton href="/contact" label="Let's Connect" variant="primary" />
              <ActionButton href="/projects" label="Explore Projects" variant="outline" showIcon={false} />
            </motion.div>

            {/* Value Propositions / Key Promises */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-6 border-t border-white/10 text-xs font-mono text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A36]" />
                <span>Production-Ready Code</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A36]" />
                <span>Scalable Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A36]" />
                <span>100% Code Handover</span>
              </div>
            </motion.div>



          </div>

          {/* Right Column: Visual Framed Profile/Work Image (5 Columns) */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-md aspect-[4/5] rounded-xl overflow-hidden border border-white/10 bg-white/[0.02] p-2 shadow-2xl group"
            >
              <div className="relative w-full h-full rounded-lg overflow-hidden border border-white/10 bg-[#0A0A0A]">
                <Image 
                  src="/about.jpeg" 
                  alt="Koushik Barmon" 
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover group-hover:scale-105 transition-all duration-700"
                />

                {/* Floating Glassmorphism Badge */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-md bg-black/80 border border-white/15 backdrop-blur-md flex items-center justify-between shadow-xl">
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5A36] animate-pulse" />
                    <div>
                      <div className="text-[10px] font-mono tracking-widest text-[#FF5A36] uppercase font-semibold">STATUS</div>
                      <div className="text-sm font-semibold text-white">Available for Contracts</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold font-mono text-[#FF5A36]">03+</div>
                    <div className="text-[10px] font-mono text-muted-foreground uppercase">Yrs Exp</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
