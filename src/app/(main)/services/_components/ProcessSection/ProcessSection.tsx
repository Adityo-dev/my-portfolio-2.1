"use client";

import { motion } from "framer-motion";

const JOURNEY_STEPS = [
  {
    num: "01",
    phase: "STEP 01",
    title: "Discovery & Alignment",
    description: "A short call to understand the outcome you need, target audience, and technical constraints. You get a written scope with clear deliverables.",
    details: ["Goal definition", "Constraint mapping", "Scope document"]
  },
  {
    num: "02",
    phase: "STEP 02",
    title: "Architecture & Data Model",
    description: "Screens and database schemas are agreed upon before feature work starts, so we build with zero wasted effort or mid-way redesigns.",
    details: ["Data schema", "API endpoints", "Component tree"]
  },
  {
    num: "03",
    phase: "STEP 03",
    title: "UI & System Design",
    description: "Crafting a high-contrast luxury interface with modern typography, dark mode aesthetics, and responsive layout systems.",
    details: ["Design system", "Interactive UI", "Responsive layouts"]
  },
  {
    num: "04",
    phase: "STEP 04",
    title: "Build in Slices",
    description: "Working, reviewable slices delivered iteratively instead of one silent launch. You can test and give feedback as features are built.",
    details: ["Iterative builds", "Live preview link", "Feedback loops"]
  },
  {
    num: "05",
    phase: "STEP 05",
    title: "Testing & Performance",
    description: "Cross-device responsiveness, image optimization, keyboard access, and security audits to ensure a fast, bug-free product.",
    details: ["Lighthouse audit", "Cross-browser test", "Security checks"]
  },
  {
    num: "06",
    phase: "STEP 06",
    title: "Launch & Handover",
    description: "Production deployment, complete account & code transfer, detailed walkthrough, and post-launch support window.",
    details: ["Live deployment", "Full code delivery", "Support window"]
  },
];

export const ProcessSection = () => {
  return (
    <section className="relative w-full bg-[#0A0B0D] border-t border-white/[0.08] py-24 overflow-hidden font-sans">
      <div className="mx-auto max-w-[1400px] px-4 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-xs font-mono tracking-widest text-primary uppercase font-semibold mb-4"
          >
            PROJECT PROCESS & JOURNEY
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.02em] text-[#F7F7F5] leading-[1.1] mb-5"
          >
            How a project runs — step by step.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-[#9B9DA6] leading-relaxed"
          >
            From initial strategy call to final production deployment, here is how we bring your vision to life across 6 structured journey steps.
          </motion.p>
        </div>

        {/* 6-Step Journey Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {JOURNEY_STEPS.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative bg-[#1A1B21] border border-white/[0.08] hover:border-white/[0.18] rounded-md p-5 flex flex-col justify-between transition-all duration-300 hover:bg-[#22242C]"
            >
              <div>
                {/* Step Header Badge */}
                <div className="flex items-center justify-between mb-5 border-b border-white/10 pb-3">
                  <span className="text-xs font-mono font-semibold tracking-widest text-primary">
                    {step.phase}
                  </span>
                  <span className="text-2xl font-mono font-bold text-white/20 group-hover:text-primary/60 transition-colors">
                    {step.num}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-foreground tracking-tight mb-4 group-hover:text-white transition-colors">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-[15px] leading-relaxed text-muted-foreground mb-6">
                  {step.description}
                </p>
              </div>

              {/* Step Key Points */}
              <div className="pt-4 border-t border-white/5">
                <div className="flex flex-wrap gap-2">
                  {step.details.map((detail, dIdx) => (
                    <span 
                      key={dIdx} 
                      className="px-2.5 py-1 rounded-sm bg-white/5 border border-white/10 text-[11px] font-mono text-muted-foreground/80 group-hover:text-muted-foreground transition-colors"
                    >
                      {detail}
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
