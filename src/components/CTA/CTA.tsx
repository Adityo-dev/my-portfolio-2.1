"use client";

import React from "react";
import { motion } from "framer-motion";
import { ActionButton } from "@/components/shared/ActionButton";

interface CTAProps {
  bgClass?: string;
}

export const CTA = ({ bgClass = "bg-[#0A0B0D]" }: CTAProps) => {
  return (
    <section className={`relative w-full ${bgClass} border-t border-white/[0.08] py-24 overflow-hidden`}>
      <div className="mx-auto max-w-[1400px] px-4 relative z-10 flex justify-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-5xl rounded-md border border-white/[0.08] bg-[#1A1B21] p-12 md:p-20 flex flex-col items-center text-center gap-6 md:gap-8 relative overflow-hidden"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.02em] text-[#F7F7F5] relative z-10">
            Have a project in mind?
          </h2>
          
          <p className="text-base sm:text-lg text-[#9B9DA6] leading-relaxed max-w-2xl relative z-10">
            Whether you need a business website, a dashboard or a full-stack web application, let's build something useful, fast and scalable.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 mt-4 relative z-10 justify-center">
            <ActionButton href="/contact" label="Start a Project" variant="primary" />
            <ActionButton href="/resume" label="View Resume" variant="outline" showIcon={false} />
          </div>
        </motion.div>

      </div>
    </section>
  );
};
