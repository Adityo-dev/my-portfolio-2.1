"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const CTA = () => {
  return (
    <section className="relative w-full bg-background py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto max-w-[1400px] px-6 md:px-12 relative z-10 flex justify-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-5xl rounded-3xl border border-white/10 bg-white/[0.02] p-12 md:p-20 flex flex-col items-center text-center gap-6 md:gap-8 relative overflow-hidden"
        >
          {/* Subtle glow effect behind the text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#FF5A36]/5 blur-[100px] rounded-full pointer-events-none"></div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.02em] text-foreground relative z-10">
            Have a project in mind?
          </h2>
          
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl relative z-10">
            Whether you need a business website, a dashboard or a full-stack web application, let's build something useful, fast and scalable.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-4 relative z-10">
            <Button 
              asChild
              className="rounded-full h-12 px-8 bg-[#FF5A36] hover:bg-[#FF5A36]/90 text-white font-medium gap-2 transition-all duration-300"
            >
              <Link href="/contact">
                Start a Project <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            
            <Button 
              asChild
              variant="outline" 
              className="rounded-full h-12 px-8 bg-transparent border-white/20 hover:bg-white/5 text-foreground font-medium transition-all duration-300"
            >
              <Link href="/resume">
                View Resume
              </Link>
            </Button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
