"use client";

import React from "react";
import { motion } from "framer-motion";

const CAPABILITIES = [
  {
    title: "Full-stack web applications",
    desc: "Complete web apps with React/Next.js frontend, typed REST API and database integration."
  },
  {
    title: "Role-based dashboards & auth",
    desc: "Admin portals with role permissions, data tables, state management and secure access rules."
  },
  {
    title: "Commerce & booking flows",
    desc: "Product catalogues, persistent carts, streamlined checkout and slot scheduling workflows."
  },
  {
    title: "Responsive component systems",
    desc: "Modular UI components built with Tailwind CSS, TypeScript and Framer Motion."
  },
  {
    title: "API design & integration",
    desc: "Connecting frontends to third-party or custom APIs with error handling and loading states."
  },
  {
    title: "Performance & SEO optimization",
    desc: "Fast initial loads, clean HTML structure, image optimization and search engine fundamentals."
  }
];

export const CapabilitiesSection = () => {
  return (
    <section className="relative w-full bg-[#131419] py-24 overflow-hidden border-t border-white/[0.08]">
      <div className="mx-auto max-w-[1400px] px-4 relative z-10">
        
        {/* Header Area */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-12">
          <div className="max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-xs font-mono tracking-widest text-[#5C5F68] uppercase font-semibold mb-4"
          >
            CAPABILITIES
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.02em] text-[#F7F7F5] leading-[1.1] mb-5"
          >
            Not just the tools — the outcomes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-[#9B9DA6] leading-relaxed"
          >
            The specific capabilities I bring to a project, team or client engagement.
          </motion.p>
          </div>
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CAPABILITIES.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 * idx }}
              className="flex flex-col gap-3 border-l-2 border-l-primary border border-white/[0.08] bg-[#1A1B21] hover:bg-[#22242C] transition-colors p-5 rounded-md"
            >
              <h3 className="text-[17px] font-semibold text-[#F7F7F5]">
                {item.title}
              </h3>
              <p className="text-[14px] leading-relaxed text-[#9B9DA6]">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
