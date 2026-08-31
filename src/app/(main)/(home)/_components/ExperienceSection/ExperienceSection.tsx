"use client";

import React from "react";
import { motion } from "framer-motion";

const EXPERIENCES = [
  {
    period: "2024 — Present",
    company: "Independent",
    role: "Freelance Full Stack Developer",
    description: "Working directly with small businesses and studios: scoping the requirement, building the application and handing over something they can operate themselves.",
    highlights: [
      "Delivered business websites and dashboards from first call to deployment",
      "Owned data modelling, API design and frontend architecture on each build",
      "Handled deployment, domain setup and post-launch fixes"
    ],
    tags: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"]
  },
  {
    period: "2023 — Present",
    company: "Personal projects",
    role: "Independent Product Builds",
    description: "Building complete products end to end to learn the parts a tutorial skips — authorization, state that survives reloads, and architecture that survives the second feature.",
    highlights: [
      "Built a learning platform with three roles and per-student progress",
      "Extracted a reusable dashboard foundation from repeated client work",
      "Shipped a full commerce flow through to order management"
    ],
    tags: ["React", "REST API", "MongoDB", "Tailwind CSS"]
  },
  {
    period: "2023",
    company: "Self-directed learning",
    role: "Frontend Foundations",
    description: "Started with HTML, CSS and JavaScript, then moved into React and TypeScript by rebuilding real interfaces rather than following along.",
    highlights: [
      "Rebuilt production-grade interfaces to learn layout and accessibility",
      "Moved from JavaScript to TypeScript across all new work"
    ],
    tags: ["HTML", "CSS", "JavaScript", "React"]
  }
];

export const ExperienceSection = () => {
  return (
    <section className="relative w-full bg-background border-t border-white/5 py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto max-w-[1400px] px-6 md:px-12 relative z-10 flex flex-col">
        
        {/* Header Area */}
        <div className="w-full max-w-4xl mb-16 lg:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-xs font-mono tracking-widest text-[#FF5A36] uppercase font-semibold mb-6"
          >
            EXPERIENCE
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.02em] text-foreground leading-[1.1] mb-6"
          >
            Professional journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl"
          >
            Freelance delivery and independent product builds — the work where I owned the decisions, not just the tickets.
          </motion.p>
        </div>

        {/* Experience List */}
        <div className="w-full flex flex-col border-t border-white/10">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 * idx }}
              className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12 lg:py-16 border-b border-white/10 hover:bg-white/[0.02] transition-colors duration-500 px-4 -mx-4 rounded-xl"
            >
              {/* Left Column: Dates & Company */}
              <div className="md:col-span-1 flex flex-col gap-1.5 mt-1">
                <div className="text-[11px] font-mono font-semibold tracking-widest text-[#FF5A36] uppercase">
                  {exp.period}
                </div>
                <div className="text-[13px] font-medium text-muted-foreground">
                  {exp.company}
                </div>
              </div>

              {/* Right Column: Role & Details */}
              <div className="md:col-span-3 flex flex-col gap-5 max-w-3xl">
                <h3 className="text-xl sm:text-2xl font-semibold text-foreground tracking-tight">
                  {exp.role}
                </h3>
                
                <p className="text-[15px] leading-relaxed text-muted-foreground/90">
                  {exp.description}
                </p>

                <ul className="flex flex-col gap-2.5 mt-2">
                  {exp.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-3 text-[14px] leading-relaxed text-muted-foreground/80">
                      <span className="text-[#FF5A36] mt-[6px] text-[8px] opacity-80">●</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.tags.map(tag => (
                    <span key={tag} className="px-3 py-1.5 rounded-md border border-white/10 bg-white/5 text-[10px] font-mono tracking-widest text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
