"use client";

import React from "react";
import { motion } from "framer-motion";
import { ActionButton } from "@/components/shared/ActionButton";

export const HeroSection = () => {
  return (
    <section aria-label="Introduction" className="relative min-h-[calc(100vh-80px)] sm:min-h-screen w-full bg-background flex flex-col justify-center pt-28 sm:pt-36 pb-12 sm:pb-16 overflow-hidden selection:bg-foreground selection:text-background">
      
      <div className="mx-auto max-w-[1400px] px-4 relative z-10 flex flex-col justify-center h-full grow">
        
        {/* Top Tags */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full flex flex-wrap md:flex-row justify-between items-center gap-y-2 gap-x-4 sm:gap-x-6 text-[10px] sm:text-[11px] font-mono tracking-widest text-muted-foreground uppercase mb-8 sm:mb-16 md:mb-20 lg:mb-24"
        >
          <div><span className="text-white/40">{"{ "}</span>FULL STACK DEVELOPER<span className="text-white/40">{" }"}</span></div>
          <div><span className="text-white/40">{"{ "}</span>BANGLADESH &rarr; GLOBAL<span className="text-white/40">{" }"}</span></div>
          <div><span className="text-white/40">{"{ "}</span>EST. 2026<span className="text-white/40">{" }"}</span></div>
        </motion.div>

        {/* Main Composition */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 sm:gap-12 lg:gap-8 w-full">
          
          {/* Left: Typography */}
          <div className="w-full lg:w-[55%] flex flex-col uppercase">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.1 }}
            >
              <h1 className="text-[2rem] sm:text-5xl md:text-6xl lg:text-[5rem] font-medium leading-[1.1] tracking-[-0.03em] text-foreground">
                <span className="block overflow-hidden pb-1"><motion.span className="block" initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>I Build Digital</motion.span></span>
                <span className="block overflow-hidden pb-1"><motion.span className="block text-muted-foreground" initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}>Products That</motion.span></span>
                <span className="block overflow-hidden pb-1"><motion.span className="block" initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}>Move Businesses</motion.span></span>
                <span className="block overflow-hidden pb-1"><motion.span className="block" initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}>Forward.</motion.span></span>
              </h1>
            </motion.div>
          </div>

          {/* Right: Bio & CTA */}
          <div className="w-full lg:w-[45%] flex flex-col lg:pl-12 xl:pl-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-sm sm:text-base leading-relaxed text-muted-foreground mb-8 sm:mb-10">
                &ldquo;I craft modern, user-friendly, and high-performance web applications by blending creativity with cutting-edge technology. My focus is on building seamless digital experiences that help brands grow and leave a lasting impact.&rdquo;
              </p>
              
              <ActionButton href="/contact" label="Let's Connect" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
