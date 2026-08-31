"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const CASE_STUDIES = [
  {
    id: "fikiara",
    title: "Fikiara",
    subtitle: "Online Learning Platform",
    problem: "Small course creators were running lessons through scattered video links, spreadsheets and chat groups.",
    solution: "I modelled courses as modules and lessons with an explicit progress record per student, then built a role-aware Next.js frontend on top of a typed REST API.",
    result: "A learner can resume any course in one click instead of hunting through links."
  },
  {
    id: "nexus",
    title: "Nexus Admin",
    subtitle: "Analytics & Role-Based Dashboard",
    problem: "Every dashboard project restarted the same work — auth, table state, permission handling — and each rebuild introduced slightly different behaviour and its own bugs.",
    solution: "I extracted the recurring parts into a typed, composable layer: one table primitive that owns sorting, filtering and pagination state, one permission hook that drives both navigation and action visibility, and a chart wrapper with consistent loading, empty and error states.",
    result: "New dashboard projects start with auth, tables and permissions already solved."
  },
  {
    id: "kravu",
    title: "Kravu Store",
    subtitle: "Modern E-commerce Experience",
    problem: "The brief was a store that would not lose customers between the product page and the confirmation screen — the cart had to survive reloads and the checkout had to be legible on a phone.",
    solution: "I kept cart state server-authoritative with a local mirror so it persists across devices and reloads, and reduced checkout to a single scrollable step with inline validation instead of a multi-page wizard.",
    result: "Cart contents survive reloads, so returning customers keep their selection."
  }
];

export const CaseStudiesSection = () => {
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
            CASE STUDIES
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.02em] text-foreground leading-[1.1] mb-6"
          >
            Problem, solution, result
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-muted-foreground leading-relaxed"
          >
            Three projects broken down the way a client or reviewer would want to read them.
          </motion.p>
        </div>

        {/* Case Studies List */}
        <div className="w-full flex flex-col border-t border-white/10">
          {CASE_STUDIES.map((study, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 * idx }}
              className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12 lg:py-16 border-b border-white/10 hover:bg-white/[0.02] transition-colors duration-500 px-4 -mx-4 rounded-xl"
            >
              {/* Column 1: Project Info */}
              <div className="md:col-span-1 flex flex-col">
                <h3 className="text-xl font-semibold text-foreground tracking-tight mb-1">
                  {study.title}
                </h3>
                <p className="text-[13px] text-muted-foreground mb-8">
                  {study.subtitle}
                </p>
                
                <Link 
                  href={`/projects/${study.id}`}
                  className="group flex items-center gap-2 text-sm font-semibold text-foreground hover:text-[#FF5A36] transition-colors mt-auto"
                >
                  Read case study <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>

              {/* Column 2: Problem */}
              <div className="md:col-span-1 flex flex-col gap-3">
                <div className="text-[10px] font-mono tracking-widest text-[#FF5A36] uppercase font-semibold">
                  PROBLEM
                </div>
                <p className="text-[14px] leading-relaxed text-muted-foreground/90">
                  {study.problem}
                </p>
              </div>

              {/* Column 3: Solution */}
              <div className="md:col-span-1 flex flex-col gap-3">
                <div className="text-[10px] font-mono tracking-widest text-[#FF5A36] uppercase font-semibold">
                  SOLUTION
                </div>
                <p className="text-[14px] leading-relaxed text-muted-foreground/90">
                  {study.solution}
                </p>
              </div>

              {/* Column 4: Result */}
              <div className="md:col-span-1 flex flex-col gap-3">
                <div className="text-[10px] font-mono tracking-widest text-[#FF5A36] uppercase font-semibold">
                  RESULT
                </div>
                <p className="text-[14px] leading-relaxed text-muted-foreground/90">
                  {study.result}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
