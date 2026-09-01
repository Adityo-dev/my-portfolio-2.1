"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ActionButton } from "@/components/shared/ActionButton";

const FEATURES = [
  {
    num: "01",
    title: "Product first",
    description: "I start from what the user is trying to accomplish, then decide what the interface and the data model need to be.",
  },
  {
    num: "02",
    title: "Architecture that survives",
    description: "Clear boundaries between UI, data access and business logic, so the second feature is not harder than the first.",
  },
  {
    num: "03",
    title: "Finished, not just working",
    description: "Loading, empty and error states, keyboard access and mobile layout are part of the build, not a later pass.",
  },
];

export const AboutSection = () => {
  return (
    <section className="relative w-full bg-[#0A0B0D] border-t border-white/[0.06] py-24 overflow-hidden">
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
              ABOUT
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.02em] text-[#F7F7F5] leading-[1.1] mb-5"
            >
              A developer who cares about both code and the product.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-[#9B9DA6] leading-relaxed"
            >
              I am a full stack developer working with React, Next.js, TypeScript, Node.js and SQL or NoSQL databases. I build complete applications — authentication, role-based access, dashboards, commerce flows and the APIs behind them — and I care most about the part after it works: whether it stays understandable and fast as it grows.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="shrink-0"
          >
            <ActionButton href="/about" label="More about me" />
          </motion.div>
        </div>

        {/* 3 Column Grid Container */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 rounded-md border border-white/[0.05] bg-[#16171C]/50 overflow-hidden"
        >
          {FEATURES.map((feature, idx) => (
            <div 
              key={idx} 
              className={`p-6 flex flex-col gap-5 ${
                idx !== FEATURES.length - 1 ? "border-b md:border-b-0 md:border-r border-white/[0.05]" : ""
              }`}
            >
              <div className="text-xs font-mono font-semibold tracking-widest text-primary">
                {feature.num}
              </div>
              <h3 className="text-xl font-semibold text-[#F7F7F5]">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-[15px] leading-relaxed text-[#9B9DA6]">
                {feature.description}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
