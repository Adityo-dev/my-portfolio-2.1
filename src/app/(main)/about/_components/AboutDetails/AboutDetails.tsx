"use client";

import React from "react";
import { motion } from "framer-motion";

const ABOUT_CONTENT = [
  {
    title: "What I build",
    description: "Full-stack web applications: authenticated products with roles and permissions, admin dashboards with real data tables, commerce flows through to order management, and the marketing sites that sit in front of them."
  },
  {
    title: "How I work",
    description: "I start with the data and the user flow before the interface. Then I keep the layers separated — UI, data access, business logic — so a change stays a contained edit. I ship with loading, empty and error states covered, because those are the states users actually meet."
  },
  {
    title: "What I solve",
    description: "Manual processes running on spreadsheets and chat threads, interfaces that fall apart on a phone, and codebases where each new feature costs more than the last one."
  }
];

const AT_A_GLANCE = [
  { label: "Role", value: "Full Stack Developer" },
  { label: "Core stack", value: "React · Next.js · TypeScript · Node.js" },
  { label: "Databases", value: "PostgreSQL · MongoDB" },
  { label: "Location", value: "Dhaka, Bangladesh — working remotely" },
  { label: "Availability", value: "Available for freelance & full-time opportunities" },
  { label: "Education", value: "Diploma in CSE · B.Sc. ongoing" },
];

export const AboutDetails = () => {
  return (
    <section className="relative w-full bg-[#0A0B0D] py-24 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Column - Text Content */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            {ABOUT_CONTENT.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <h3 className="text-[17px] font-semibold text-[#F7F7F5] mb-3">
                  {item.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-[#9B9DA6]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right Column - At a Glance Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-5"
          >
            <div className="rounded-md border border-white/[0.08] bg-[#1A1B21] p-8 sm:p-10 h-fit">
              <div className="text-[10px] font-mono tracking-widest text-[#5C5F68] uppercase font-semibold mb-8">
                AT A GLANCE
              </div>
              
              <div className="flex flex-col">
                {AT_A_GLANCE.map((item, idx) => (
                  <div 
                    key={idx} 
                    className={`flex flex-col sm:flex-row sm:items-start py-5 gap-2 sm:gap-4 ${idx !== AT_A_GLANCE.length - 1 ? 'border-b border-white/5' : ''}`}
                  >
                    <span className="text-[15px] text-muted-foreground sm:w-1/3 shrink-0">
                      {item.label}
                    </span>
                    <span className="text-[15px] text-foreground font-medium">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
