"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const ImageSection = () => {
  return (
    <section className="relative w-full bg-[#131419] pt-12 pb-24 border-y border-white/[0.08] overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-4 relative z-10 flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative w-full max-w-sm aspect-[4/5] rounded-md overflow-hidden border border-white/10 bg-white/[0.02]"
        >
          <Image 
            src="/about.jpeg" 
            alt="Koushik Barmon"
            fill 
            className="object-cover object-top opacity-90 hover:opacity-100 hover:scale-[1.02] transition-all duration-700 ease-out"
            priority
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 text-center"
        >
          <h2 className="text-2xl font-semibold text-[#F7F7F5] tracking-tight">Koushik Barmon</h2>
          <p className="text-primary text-sm font-mono tracking-widest uppercase mt-2">Full Stack Web Developer</p>
        </motion.div>
      </div>
    </section>
  );
};
