"use client";

import React from "react";
import { motion } from "framer-motion";

const EXPERIENCES = [
  {
    period: "Jun 2026 — Present",
    company: "Agency",
    role: "Full Stack Developer",
    titleCompany: "Wexlye",
    description: "Running my own web development agency, working directly with clients on complete web applications — from initial scoping through deployment. Handling both frontend and backend architecture, and owning the full delivery process end to end.",
    highlights: [
      "Deliver full-stack web applications for international clients, end to end",
      "Own architecture decisions across frontend, backend, and deployment",
      "Manage client communication, scoping, and project delivery directly"
    ],
    tags: ["React.js","Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit", "shadcn/ui", "React Hook Form", "Zod", "Node.js", "Express.js", "MongoDB"]
  },
  {
    period: "Nov 2025 — Sep 2026 (10 mos)",
    company: "Full-time · Softvence Agency",
    role: "Full Stack Developer",
    titleCompany: "Softvence Agency (part of Betopia Group)",
    description: "Developed modern, scalable, and responsive web applications for international clients using React, Next.js, TypeScript, Node.js, and Express.js. Built reusable UI components, REST APIs, authentication systems, dashboards, and database integrations while collaborating with cross-functional teams to deliver reliable, production-ready applications.",
    highlights: [
      "Built and shipped production features across the full stack for external clients",
      "Implemented authentication systems, dashboards, and REST API integrations",
      "Collaborated with cross-functional teams to deliver production-ready applications"
    ],
    tags: ["React.js","Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit", "shadcn/ui", "React Hook Form", "Zod", "Node.js", "Express.js", "MongoDB"]
  },
  {
    period: "Jan 2023 — Mar 2024 (1 yr 2 mos)",
    company: "Full-time · Ecoysoft",
    role: "Frontend Developer",
    titleCompany: "Ecoysoft",
    description: "Built responsive and user-friendly web interfaces using React and modern JavaScript. Collaborated closely with backend and design teams to implement clean, reusable UI components and deliver features on time. Gained hands-on experience turning designs into functional, production-ready web pages.",
    highlights: [
      "Built responsive, reusable UI components with React and modern JavaScript",
      "Collaborated with backend and design teams to ship features on schedule",
      "Turned design mockups into functional, production-ready interfaces"
    ],
    tags: ["React.js", "Next.js", "Redux", "JavaScript", "HTML", "CSS"]
  }
];

export const ExperienceSection = () => {
  return (
    <section className="relative w-full bg-[#131419] border-t border-white/[0.08] py-24 overflow-hidden">
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
            EXPERIENCE
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.02em] text-[#F7F7F5] leading-[1.1] mb-5"
          >
            Professional journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-[#9B9DA6] leading-relaxed"
          >
            Full-stack delivery across an agency, freelance clients, and independent product builds — three years of shipping production applications.
          </motion.p>
          </div>
        </div>

        {/* Experience List */}
        <div className="w-full flex flex-col border-t border-white/[0.08]">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 * idx }}
              className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12 lg:py-16 border-b border-white/[0.08] hover:bg-[#1A1B21]/50 transition-colors duration-500 px-4 -mx-4 rounded-md"
            >
              {/* Left Column: Dates & Company */}
              <div className="md:col-span-1 flex flex-col gap-1.5 mt-1">
                <div className="text-[11px] font-mono font-semibold tracking-widest text-primary uppercase">
                  {exp.period}
                </div>
                <div className="text-[13px] font-medium text-[#9B9DA6]">
                  {exp.company}
                </div>
              </div>

              {/* Right Column: Role & Details */}
              <div className="md:col-span-3 flex flex-col gap-5 max-w-3xl">
                <h3 className="text-xl sm:text-2xl font-semibold text-[#F7F7F5] tracking-tight">
                  {exp.role} <span className="text-[#9B9DA6] font-normal text-lg sm:text-xl">· {exp.titleCompany}</span>
                </h3>
                
                <p className="text-[15px] leading-relaxed text-[#9B9DA6]">
                  {exp.description}
                </p>

                <ul className="flex flex-col gap-2.5 mt-2">
                  {exp.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-3 text-[14px] leading-relaxed text-[#9B9DA6]">
                      <span className="text-primary mt-[6px] text-[8px]">●</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.tags.map(tag => (
                    <span key={tag} className="px-3 py-1.5 rounded border border-primary/20 bg-primary/10 text-[10px] font-mono tracking-widest text-primary">
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
