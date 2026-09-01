"use client";

import { motion } from "framer-motion";

const SECTION_ANIMATION = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 }
};

export const ResumeDocument = () => {
  return (
    <section className="relative w-full bg-[#131419] border-t border-white/[0.08] pb-32 pt-12">
      <div className="mx-auto max-w-6xl px-4  relative z-10 font-sans">
        
        {/* 01 - SUMMARY */}
        <motion.div {...SECTION_ANIMATION} className="mb-12">
          <h2 className="text-[11px] font-mono tracking-widest text-primary uppercase font-bold mb-6">
            01 — SUMMARY
          </h2>
          <p className="text-[16px] sm:text-[17px] leading-relaxed text-muted-foreground">
            Full Stack Developer building modern, scalable web applications with React, Next.js, TypeScript and Node.js. Experienced across authentication, role-based systems, admin dashboards, commerce flows and REST API integration, with an emphasis on maintainable architecture and responsive, accessible interfaces.
          </p>
        </motion.div>

        {/* 02 - SKILLS */}
        <motion.div {...SECTION_ANIMATION} transition={{ duration: 0.6, delay: 0.1 }} className="mb-12">
          <h2 className="text-[11px] font-mono tracking-widest text-primary uppercase font-bold mb-6">
            02 — SKILLS
          </h2>
          <div className="flex flex-col border-t border-white/5">
            {[
              { label: "Frontend", value: "HTML, CSS, JavaScript, TypeScript, React, Next.js, Tailwind CSS" },
              { label: "UI", value: "shadcn/ui, Framer Motion, Headless UI" },
              { label: "Backend", value: "Node.js, Express, REST API, Authentication" },
              { label: "Database", value: "PostgreSQL, MongoDB" },
              { label: "Tools", value: "Git, GitHub, VS Code, Figma, Vercel, pnpm" }
            ].map((skill, idx) => (
              <div key={idx} className="grid grid-cols-1 sm:grid-cols-[220px_1fr] py-5 border-b border-white/5 gap-2 sm:gap-4">
                <span className="text-[15px] font-semibold text-foreground">{skill.label}</span>
                <span className="text-[15px] text-muted-foreground">{skill.value}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 03 - EXPERIENCE */}
        <motion.div {...SECTION_ANIMATION} transition={{ duration: 0.6, delay: 0.2 }} className="mb-12">
          <h2 className="text-[11px] font-mono tracking-widest text-primary uppercase font-bold mb-6">
            03 — EXPERIENCE
          </h2>
          <div className="flex flex-col gap-12">
            {/* Job 1 */}
            <div>
              <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-2 mb-4">
                <h3 className="text-[17px] font-semibold text-foreground">
                  Freelance Full Stack Developer <span className="text-muted-foreground font-normal">· Independent</span>
                </h3>
                <span className="text-[11px] font-mono tracking-widest text-muted-foreground uppercase">
                  2024 — Present
                </span>
              </div>
              <ul className="list-disc list-outside ml-4 space-y-2 text-[15px] text-muted-foreground leading-relaxed">
                <li>Delivered business websites and dashboards from first call to deployment</li>
                <li>Owned data modelling, API design and frontend architecture on each build</li>
                <li>Handled deployment, domain setup and post-launch fixes</li>
              </ul>
            </div>
            
            {/* Job 2 */}
            <div>
              <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-2 mb-4">
                <h3 className="text-[17px] font-semibold text-foreground">
                  Independent Product Builds <span className="text-muted-foreground font-normal">· Personal projects</span>
                </h3>
                <span className="text-[11px] font-mono tracking-widest text-muted-foreground uppercase">
                  2023 — Present
                </span>
              </div>
              <ul className="list-disc list-outside ml-4 space-y-2 text-[15px] text-muted-foreground leading-relaxed">
                <li>Built a learning platform with three roles and per-student progress</li>
                <li>Extracted a reusable dashboard foundation from repeated client work</li>
                <li>Shipped a full commerce flow through to order management</li>
              </ul>
            </div>

            {/* Job 3 */}
            <div>
              <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-2 mb-4">
                <h3 className="text-[17px] font-semibold text-foreground">
                  Frontend Foundations <span className="text-muted-foreground font-normal">· Self-directed learning</span>
                </h3>
                <span className="text-[11px] font-mono tracking-widest text-muted-foreground uppercase">
                  2023
                </span>
              </div>
              <ul className="list-disc list-outside ml-4 space-y-2 text-[15px] text-muted-foreground leading-relaxed">
                <li>Rebuilt production-grade interfaces to learn layout and accessibility</li>
                <li>Moved from JavaScript to TypeScript across all new work</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 04 - PROJECTS */}
        <motion.div {...SECTION_ANIMATION} transition={{ duration: 0.6, delay: 0.3 }} className="mb-12">
          <h2 className="text-[11px] font-mono tracking-widest text-primary uppercase font-bold mb-6">
            04 — PROJECTS
          </h2>
          <div className="flex flex-col border-t border-white/5">
            {[
              {
                title: "Fikiara — Online Learning Platform",
                description: "A full-stack learning platform where instructors publish structured courses and students track lesson-by-lesson progress.",
                tags: "Next.js · TypeScript · Tailwind CSS · Node.js · PostgreSQL · REST API"
              },
              {
                title: "Nexus Admin — Analytics & Role-Based Dashboard",
                description: "An admin dashboard with data tables, charts, permissions and audit-friendly activity views, built as a reusable foundation.",
                tags: "React · TypeScript · Tailwind CSS · Recharts · REST API"
              },
              {
                title: "Kravu Store — Modern E-commerce Experience",
                description: "A storefront covering catalogue browsing, cart, checkout and order history with a clean, conversion-focused product flow.",
                tags: "Next.js · TypeScript · Tailwind CSS · Node.js · MongoDB"
              },
              {
                title: "Practi — Practitioner Booking SaaS",
                description: "A scheduling application where practitioners manage availability and clients book confirmed slots without back-and-forth messaging.",
                tags: "Next.js · TypeScript · Node.js · PostgreSQL · REST API"
              },
              {
                title: "Aura Interiors — Studio Business Website",
                description: "A fast, editorial marketing site for a design studio, built for lead capture and strong search visibility.",
                tags: "Next.js · TypeScript · Tailwind CSS · Framer Motion"
              },
              {
                title: "API Lab — Request & Response Playground",
                description: "An experimental in-browser client for exploring REST endpoints, inspecting responses and saving request collections.",
                tags: "React · TypeScript · Tailwind CSS"
              }
            ].map((project, idx) => (
              <div key={idx} className="py-8 border-b border-white/5">
                <h3 className="text-[17px] font-semibold text-foreground mb-3">
                  {project.title.split('—').map((part, i) => i === 0 ? <span key={i}>{part} —</span> : <span key={i} className="font-normal text-muted-foreground">{part}</span>)}
                </h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="text-[11px] font-mono tracking-widest text-muted-foreground/80 uppercase">
                  {project.tags}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 05 - EDUCATION */}
        <motion.div {...SECTION_ANIMATION} transition={{ duration: 0.6, delay: 0.4 }}>
          <h2 className="text-[11px] font-mono tracking-widest text-primary uppercase font-bold mb-6">
            05 — EDUCATION
          </h2>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-2">
              <h3 className="text-[17px] font-semibold text-foreground">
                Diploma in Computer Science & Technology <span className="text-muted-foreground font-normal">· Polytechnic Institute</span>
              </h3>
              <span className="text-[11px] font-mono tracking-widest text-muted-foreground uppercase">
                2021 — 2025
              </span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-2">
              <h3 className="text-[17px] font-semibold text-foreground">
                B.Sc. in Computer Science (ongoing) <span className="text-muted-foreground font-normal">· University</span>
              </h3>
              <span className="text-[11px] font-mono tracking-widest text-muted-foreground uppercase">
                2025 — Present
              </span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
