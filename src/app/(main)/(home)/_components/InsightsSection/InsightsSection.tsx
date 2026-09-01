"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const INSIGHTS = [
  {
    category: "Architecture",
    readTime: "6 min read",
    title: "How I structure a scalable Next.js application",
    description: "The folder layout, boundaries and naming rules I settle on before writing the first feature.",
    slug: "#"
  },
  {
    category: "Frontend",
    readTime: "4 min read",
    title: "React or Next.js: choosing without overthinking it",
    description: "A practical decision path based on rendering needs, SEO and who owns the backend.",
    slug: "#"
  },
  {
    category: "Security",
    readTime: "7 min read",
    title: "Building role-based dashboards that stay secure",
    description: "Why hiding buttons is not authorization, and how to keep UI and server permissions in agreement.",
    slug: "#"
  },
  {
    category: "Process",
    readTime: "5 min read",
    title: "Lessons from shipping a full-stack application alone",
    description: "What I got wrong about state, migrations and scope on the way to a working product.",
    slug: "#"
  }
];

export const InsightsSection = () => {
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
            INSIGHTS
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.02em] text-[#F7F7F5] leading-[1.1] mb-5"
          >
            Notes on how I build
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-[#9B9DA6] leading-relaxed"
          >
            Short write-ups on the decisions behind the projects above.
          </motion.p>
          </div>
        </div>

        {/* 2x2 Grid Container with distinct Tier 3 cards (#1A1B21) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {INSIGHTS.map((insight, idx) => (
            <div
              key={idx}
              className="bg-[#1A1B21] border border-white/[0.08] hover:border-white/[0.18] hover:bg-[#22242C] transition-all duration-300 rounded-md overflow-hidden "
            >
              <Link 
                href={insight.slug}
                className="group p-6 flex flex-col h-full w-full"
              >
                <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest mb-6">
                  <span className="text-primary font-semibold uppercase">{insight.category}</span>
                  <span className="text-white/30">/</span>
                  <span className="text-[#9B9DA6]">{insight.readTime}</span>
                </div>
                
                <h3 className="text-lg md:text-xl font-semibold text-[#F7F7F5] mb-4 transition-colors duration-300">
                  {insight.title}
                </h3>
                
                <p className="text-[14px] sm:text-[15px] leading-relaxed text-[#9B9DA6]">
                  {insight.description}
                </p>
              </Link>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
