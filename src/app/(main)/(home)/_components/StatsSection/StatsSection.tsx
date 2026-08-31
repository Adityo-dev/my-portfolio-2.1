"use client";

import { motion } from "framer-motion";

const STATS = [
  {
    value: "30+",
    title: "Projects Built",
    description: "Personal, freelance and client work",
  },
  {
    value: "100%",
    title: "Code Ownership",
    description: "Full transfer of code & accounts",
  },
  {
    value: "12+",
    title: "Core Technologies",
    description: "Used in production projects",
  },
  {
    value: "22+",
    title: "Delivered to Clients",
    description: "Live and in use today",
  },
];

export const StatsSection = () => {
  return (
    <section className="relative w-full bg-background border-t border-white/5 py-16 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="rounded-md border border-white/10 bg-white/10 overflow-hidden"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-[1px]">
            {STATS.map((stat, idx) => (
              <div
                key={idx}
                className="bg-background hover:bg-white/[0.02] transition-colors p-6 sm:p-8 flex flex-col justify-between"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold font-mono tracking-tight text-foreground mb-3">
                  {stat.value}
                </div>
                <div>
                  <div className="text-sm font-semibold tracking-wide text-foreground mb-1">
                    {stat.title}
                  </div>
                  <div className="text-xs text-muted-foreground leading-relaxed">
                    {stat.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
