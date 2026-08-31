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
            INSIGHTS
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.02em] text-foreground leading-[1.1] mb-6"
          >
            Notes on how I build
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-muted-foreground leading-relaxed"
          >
            Short write-ups on the decisions behind the projects above.
          </motion.p>
        </div>

        {/* 2x2 Grid Container */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="rounded-2xl border border-white/10 bg-white/10 overflow-hidden"
        >
          {/* Internal Grid with 1px gap for perfect borders */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px]">
            {INSIGHTS.map((insight, idx) => (
              <Link 
                key={idx} 
                href={insight.slug}
                className="group bg-background hover:bg-white/[0.02] transition-colors duration-500 p-8 lg:p-10 flex flex-col h-full"
              >
                <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest mb-6">
                  <span className="text-[#FF5A36] font-semibold uppercase">{insight.category}</span>
                  <span className="text-white/30">/</span>
                  <span className="text-muted-foreground">{insight.readTime}</span>
                </div>
                
                <h3 className="text-lg md:text-xl font-semibold text-foreground mb-4 group-hover:text-[#FF5A36] transition-colors duration-300">
                  {insight.title}
                </h3>
                
                <p className="text-[14px] sm:text-[15px] leading-relaxed text-muted-foreground/80">
                  {insight.description}
                </p>
              </Link>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
