"use client";

import React from "react";
import { motion } from "framer-motion";

const STATS = [
  {
    value: "10+",
    title: "Projects built",
    description: "Personal, freelance and client work",
  },
  {
    value: "3+",
    title: "Years building",
    description: "Learning and shipping since 2023",
  },
  {
    value: "12",
    title: "Core technologies",
    description: "Used in production projects",
  },
  {
    value: "6",
    title: "Delivered to clients",
    description: "Live and in use today",
  },
];

export const StatsSection = () => {
  return (
    <section className="relative w-full bg-background border-t border-white/5 py-12 lg:py-16 overflow-hidden">
      <div className="container mx-auto max-w-[1400px] px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 lg:gap-8">
          {STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col gap-1.5"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-foreground">
                {stat.value}
              </div>
              <div className="text-sm font-medium tracking-wide text-foreground mt-1">
                {stat.title}
              </div>
              <div className="text-[11px] text-muted-foreground leading-relaxed">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
