"use client";

import { motion } from "framer-motion";

const STATS = [
  {
    num: "30",
    symbol: "+",
    title: "Projects Built",
    description: "Personal, freelance and client work",
  },
  {
    num: "100",
    symbol: "%",
    title: "Code Ownership",
    description: "Full transfer of code & accounts",
  },
  {
    num: "12",
    symbol: "+",
    title: "Core Technologies",
    description: "Used in production projects",
  },
  {
    num: "22",
    symbol: "+",
    title: "Delivered to Clients",
    description: "Live and in use today",
  },
];

export const StatsSection = () => {
  return (
    <section className="relative w-full bg-[#111216] border-t border-white/[0.05] py-16 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="rounded-md border border-white/[0.08] bg-white/[0.08] overflow-hidden"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-[1px]">
            {STATS.map((stat, idx) => (
              <div
                key={idx}
                className="bg-[#111216] hover:bg-[#16171C] transition-colors p-6 sm:p-8 flex flex-col justify-between"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold font-mono tracking-tight mb-3">
                  <span className="text-[#F7F7F5]">{stat.num}</span>
                  <span className="text-primary">{stat.symbol}</span>
                </div>
                <div>
                  <div className="text-sm font-semibold tracking-wide text-[#F7F7F5] mb-1">
                    {stat.title}
                  </div>
                  <div className="text-xs text-[#9B9DA6] leading-relaxed">
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
