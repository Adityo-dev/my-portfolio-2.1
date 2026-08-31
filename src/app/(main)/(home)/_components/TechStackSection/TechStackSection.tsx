"use client";

import React from "react";
import { motion } from "framer-motion";
import { LayoutTemplate, Paintbrush, Server, Database, Wrench } from "lucide-react";

const STACK = [
  {
    category: "Frontend",
    icon: LayoutTemplate,
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    category: "UI",
    icon: Paintbrush,
    items: ["shadcn/ui", "Framer Motion", "Headless UI"],
  },
  {
    category: "Backend",
    icon: Server,
    items: ["Node.js", "Express", "REST API", "Authentication"],
  },
  {
    category: "Database",
    icon: Database,
    items: ["PostgreSQL", "MongoDB"],
  },
  {
    category: "Tools",
    icon: Wrench,
    items: ["Git", "GitHub", "VS Code", "Figma", "Vercel", "npm", "pnpm"],
  },
];

export const TechStackSection = () => {
  return (
    <section className="relative w-full bg-background border-t border-white/5 py-24 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-4 relative z-10">
        
        {/* Header Area */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-12">
          <div className="max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-xs font-mono tracking-widest text-[#FF5A36] uppercase font-semibold mb-4"
          >
            TECH STACK
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl  lg:text-5xl font-semibold tracking-[-0.02em] text-foreground leading-[1.1] mb-5"
          >
            What I build with
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-muted-foreground leading-relaxed"
          >
            Grouped by where it sits in the stack, and limited to what I have actually shipped with.
          </motion.p>
          </div>
        </div>

        {/* Stack List */}
        <div className="w-full flex flex-col border-t border-white/10">
          {STACK.map((group, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 * idx }}
              className="grid grid-cols-1 md:grid-cols-4 gap-4 py-8 border-b border-white/10 hover:bg-white/[0.02] transition-colors duration-500 px-4 -mx-4 rounded-md"
            >
              <div className="md:col-span-1">
                <h3 className="text-[15px] font-semibold text-foreground flex items-center gap-2.5">
                  <group.icon className="w-4 h-4 text-[#FF5A36]" />
                  {group.category}
                </h3>
              </div>
              <div className="md:col-span-3 flex flex-wrap gap-x-6 lg:gap-x-10 gap-y-3">
                {group.items.map((item, itemIdx) => (
                  <span 
                    key={itemIdx} 
                    className="text-[15px] text-muted-foreground/80 hover:text-foreground transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
