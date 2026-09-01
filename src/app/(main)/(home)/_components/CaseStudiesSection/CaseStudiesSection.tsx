"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const CASE_STUDIES = [
  {
    id: "edunext-lms-platform",
    title: "EduNext",
    subtitle: "Next-Gen Full-Stack LMS Platform",
    problem: "Legacy e-learning platforms suffered from sluggish data fetching, clunky course builders, and unverified pass metrics.",
    solution: "Developed a clean UI powered by TipTap rich text rendering, dynamic server-side category pagination, and strict backend quiz validation workflows.",
    result: "Automated PDF certificates unlock only upon scoring pass marks, with sub-100ms API latency."
  },
  {
    id: "solenne-luxury-membership",
    title: "Solenne",
    subtitle: "Luxury Lifestyle & Wellness Membership",
    problem: "High-end concierge platforms relied on fragmented physical cards and cluttered portals that detracted from a luxury experience.",
    solution: "Architected a minimalist Next.js frontend with interactive geolocation mapping, multi-filters, and an encrypted digital member pass.",
    result: "Achieved 98+ Lighthouse score with 60fps smooth map filtering across 60+ luxury Dubai partners."
  },
  {
    id: "xstore-modern-ecommerce",
    title: "XStore",
    subtitle: "Modern High-Performance E-Commerce",
    problem: "Traditional e-commerce platforms suffered from sluggish page reloads during filtering and cart state desynchronization across tabs.",
    solution: "Architected a lightweight Next.js storefront with Zustand client state, LocalStorage hydration, and zero-latency product search.",
    result: "Sub-second interaction response with 96+ mobile performance rating and 100% cart sync."
  },
  {
    id: "dinisoft-hosting-landing",
    title: "Dinisoft",
    subtitle: "Cloud Hosting & IT Infrastructure",
    problem: "Broad server service catalogs suffered from navigation clutter, slow mobile rendering, and confusing pricing grids.",
    solution: "Engineered a multi-tier mega navbar, interactive domain lookup hero, and structured hosting plan comparison matrixes.",
    result: "Achieved 95+ mobile usability score with sub-second landing render and intuitive service discovery pathways."
  },
  {
    id: "xtra-vision-dynamic-platform",
    title: "Xtra-Vision",
    subtitle: "Enterprise Storefront & Custom CMS",
    problem: "Frequent promotional updates required developer intervention for minor text and image revisions.",
    solution: "Engineered a dynamic frontend with Next.js and REST APIs connected to a granular admin portal.",
    result: "80% reduction in maintenance time with 100% dynamic landing section control."
  },
  {
    id: "transform-to-liberation",
    title: "Transform To Liberation",
    subtitle: "Coaching, Community & Event Hub",
    problem: "Needed a serene brand presence combined with automated session bookings and event management.",
    solution: "Delivered a responsive web app with custom booking funnels, event schedules, and full admin portal.",
    result: "Streamlined consultation booking operations with 98+ mobile accessibility."
  },
  {
    id: "knowmyslots-analytics",
    title: "KnowMySlots",
    subtitle: "Interactive Casino & Slot Analytics",
    problem: "Intricate dark-mode Figma mockups with detailed slot cards needed precise 1:1 responsive execution.",
    solution: "Converted Figma views into clean React & Tailwind CSS components with instant search filters.",
    result: "Achieved 100% design accuracy match with sub-second client-side navigation."
  }
];

export const CaseStudiesSection = () => {
  return (
    <section className="relative w-full bg-[#0A0B0D] border-t border-white/[0.08] py-24 overflow-hidden">
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
            CASE STUDIES
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.02em] text-[#F7F7F5] leading-[1.1] mb-5"
          >
            Problem, solution, result
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-[#9B9DA6] leading-relaxed"
          >
            Featured real-world projects broken down the way a client or reviewer would want to read them.
          </motion.p>
          </div>
        </div>

        {/* Case Studies List */}
        <div className="w-full flex flex-col gap-12">
          {CASE_STUDIES.map((study, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 * idx }}
              className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-8 border-t border-white/[0.08]"
            >
              {/* Column 1: Project Info */}
              <div className="md:col-span-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-[#F7F7F5] tracking-tight mb-1">
                    {study.title}
                  </h3>
                  <p className="text-[13px] text-[#9B9DA6] mb-6">
                    {study.subtitle}
                  </p>
                </div>
                
                <Link 
                  href={`/projects/${study.id}`}
                  className="group flex items-center gap-2 text-sm font-semibold text-[#F7F7F5] hover:text-primary transition-colors mt-auto"
                >
                  Read case study <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>

              {/* Column 2: Problem */}
              <div className="md:col-span-1 flex flex-col gap-3">
                <div className="text-[10px] font-mono tracking-widest text-[#5C5F68] uppercase font-semibold">
                  PROBLEM
                </div>
                <p className="text-[14px] leading-relaxed text-[#9B9DA6]">
                  {study.problem}
                </p>
              </div>

              {/* Column 3: Solution */}
              <div className="md:col-span-1 flex flex-col gap-3">
                <div className="text-[10px] font-mono tracking-widest text-[#5C5F68] uppercase font-semibold">
                  SOLUTION
                </div>
                <p className="text-[14px] leading-relaxed text-[#9B9DA6]">
                  {study.solution}
                </p>
              </div>

              {/* Column 4: Result */}
              <div className="md:col-span-1 flex flex-col gap-3">
                <div className="text-[10px] font-mono tracking-widest text-[#5C5F68] uppercase font-semibold">
                  RESULT
                </div>
                <p className="text-[14px] leading-relaxed text-[#9B9DA6]">
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
