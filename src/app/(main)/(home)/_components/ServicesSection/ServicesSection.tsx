"use client";

import React from "react";
import { motion } from "framer-motion";

const SERVICES = [
  {
    num: "01",
    title: "Full Stack Development",
    description: "Complete web applications with a modern frontend, an API layer and a database behind it.",
    tags: ["Data modelling", "API design", "Frontend build", "Deployment"],
  },
  {
    num: "02",
    title: "Frontend Development",
    description: "High-quality React and Next.js interfaces built as reusable, maintainable component systems.",
    tags: ["Component architecture", "Responsive UI", "State management"],
  },
  {
    num: "03",
    title: "Business Websites",
    description: "Fast, responsive and conversion-focused websites that load quickly and rank well.",
    tags: ["Marketing pages", "Lead capture", "SEO fundamentals"],
  },
  {
    num: "04",
    title: "Admin Dashboards",
    description: "Dashboards with data tables, charts, authentication and role-based access control.",
    tags: ["Tables and filters", "Charts", "Roles and permissions"],
  },
  {
    num: "05",
    title: "E-commerce",
    description: "Product, cart, order and payment workflows designed to hold onto customers through checkout.",
    tags: ["Catalogue", "Cart and checkout", "Order management"],
  },
  {
    num: "06",
    title: "API Integration",
    description: "REST API integration, authentication flows and data-driven interfaces on top of existing backends.",
    tags: ["Endpoint integration", "Auth flows", "Error and loading states"],
  },
];

export const ServicesSection = () => {
  return (
    <section className="relative w-full bg-background py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto max-w-[1400px] px-6 md:px-12 relative z-10">
        
        {/* Header Area */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-xs font-mono tracking-widest text-[#FF5A36] uppercase font-semibold mb-6"
          >
            SERVICES
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.02em] text-foreground leading-[1.1] mb-6"
          >
            How I can help
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-muted-foreground leading-relaxed"
          >
            Six kinds of work I take on — scoped, built and deployed end to end.
          </motion.p>
        </div>

        {/* 3x2 Grid Container */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="rounded-2xl border border-white/10 bg-white/10 overflow-hidden"
        >
          {/* Internal Grid with 1px gap for perfect borders */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px]">
            {SERVICES.map((service, idx) => (
              <div 
                key={idx} 
                className="bg-background hover:bg-white/[0.02] transition-colors duration-500 p-8 lg:p-10 flex flex-col h-full"
              >
                <div className="text-xs font-mono font-semibold tracking-widest text-[#FF5A36] mb-5">
                  {service.num}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-[15px] leading-relaxed text-muted-foreground flex-1 mb-8">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-[10px] font-mono text-muted-foreground/70 uppercase">
                  {service.tags.map((tag, tagIdx) => (
                    <span key={tagIdx}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
