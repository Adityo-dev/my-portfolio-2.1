"use client";

import React from "react";
import { motion } from "framer-motion";

const EDUCATION = [
  {
    degree: "Diploma in Computer Science & Technology",
    institution: "Polytechnic Institute",
    period: "2021 — 2025",
    tags: ["Software development", "Web development", "Programming", "Database systems"],
    badge: null
  },
  {
    degree: "B.Sc. in Computer Science (ongoing)",
    institution: "University",
    period: "2025 — Present",
    tags: ["Data structures", "Algorithms", "Software engineering"],
    badge: "CURRENTLY PURSUING"
  }
];

const EXPLORING = [
  "Advanced TypeScript",
  "Backend architecture",
  "System design",
  "Testing strategies",
  "Performance profiling",
  "Database design"
];

export const EducationSection = () => {
  return (
    <section className="relative w-full bg-[#0A0B0D] py-24 overflow-hidden border-t border-white/[0.08]">
      <div className="mx-auto max-w-[1400px] px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column - Education */}
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="text-xs font-mono tracking-widest text-primary uppercase font-semibold mb-4"
            >
              EDUCATION
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.02em] text-[#F7F7F5] leading-[1.1] mb-12"
            >
              Formal background
            </motion.h2>

            <div className="flex flex-col border-t border-white/[0.08]">
              {EDUCATION.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                  className="py-6 sm:py-8 border-b border-white/[0.08] flex flex-col gap-3"
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-[17px] font-semibold text-[#F7F7F5]">
                      {item.degree}
                    </h3>
                    {item.badge && (
                      <span className="px-2 py-1 rounded border border-primary/30 text-primary text-[10px] font-mono tracking-widest uppercase bg-primary/5">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  
                  <div className="text-[15px] leading-relaxed text-[#9B9DA6]">
                    {item.institution} <span className="mx-2">·</span> {item.period}
                  </div>
                  
                  <div className="flex flex-wrap gap-4 sm:gap-6 mt-1">
                    {item.tags.map(tag => (
                      <span key={tag} className="text-[11px] font-mono text-[#9B9DA6] tracking-wide">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column - Growth */}
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="text-xs font-mono tracking-widest text-primary uppercase font-semibold mb-4"
            >
              GROWTH
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.02em] text-[#F7F7F5] leading-[1.1] mb-12"
            >
              Currently exploring
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {EXPLORING.map((topic, idx) => (
                <div 
                  key={idx}
                  className="rounded-md border border-white/[0.08] bg-[#1A1B21] p-5 text-[15px] font-medium text-[#F7F7F5] hover:bg-[#22242C] transition-colors"
                >
                  {topic}
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
