"use client";

import React from "react";
import { motion } from "framer-motion";

const CAPABILITIES = [
  {
    title: "Frontend architecture",
    description: "Reusable components and a scalable UI structure that stays readable as a project grows.",
  },
  {
    title: "API integration",
    description: "REST endpoints, typed responses, authentication and predictable data handling.",
  },
  {
    title: "Authentication",
    description: "Login, registration, session handling and protected routes on both client and server.",
  },
  {
    title: "Role-based systems",
    description: "Admin, instructor, practitioner and customer roles with permissions enforced server side.",
  },
  {
    title: "Responsive development",
    description: "Layouts that hold from a 320px phone to a 1440px desktop without compromise.",
  },
  {
    title: "Performance",
    description: "Optimized images, sensible rendering strategies and a lean JavaScript footprint.",
  }
];

export const CapabilitiesSection = () => {
  return (
    <section className="relative w-full bg-background border-t border-white/5 py-24 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-4 relative z-10">
        
        {/* Header Area */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-12">
          <div className="max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-xs font-mono tracking-widest text-[#FF5A36] uppercase font-semibold mb-4"
          >
            CAPABILITIES
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.02em] text-foreground leading-[1.1] mb-5"
          >
            Not just the tools — what I can do with them.
          </motion.h2>
          </div>
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {CAPABILITIES.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 * idx }}
              className="flex flex-col gap-3 border-l border-white/10 pl-5 py-1"
            >
              <h3 className="text-[17px] font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-muted-foreground/80">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
