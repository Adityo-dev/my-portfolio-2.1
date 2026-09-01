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
            Full Stack Developer building modern, scalable web applications with React, Next.js, TypeScript, Node.js and Express.js. Experienced across authentication systems, REST APIs, admin dashboards, role-based access control and database integrations with an emphasis on maintainable architecture and production-ready applications.
          </p>
        </motion.div>

        {/* 02 - SKILLS */}
        <motion.div {...SECTION_ANIMATION} transition={{ duration: 0.6, delay: 0.1 }} className="mb-12">
          <h2 className="text-[11px] font-mono tracking-widest text-primary uppercase font-bold mb-6">
            02 — SKILLS
          </h2>
          <div className="flex flex-col border-t border-white/5">
            {[
              { label: "Frontend", value: "HTML, CSS, JavaScript, TypeScript, React, Next.js, Redux, Redux Toolkit, Tailwind CSS, shadcn/ui" },
              { label: "UI & Forms", value: "Framer Motion, React Hook Form, Zod" },
              { label: "Backend", value: "Node.js, Express.js, REST API, Authentication" },
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
                  Full Stack Developer <span className="text-muted-foreground font-normal">· Wexlye</span>
                </h3>
                <span className="text-[11px] font-mono tracking-widest text-muted-foreground uppercase">
                  Jun 2026 — Present
                </span>
              </div>
              <p className="text-[15px] text-muted-foreground leading-relaxed mb-3">
                Running my own web development agency, working directly with clients on complete web applications — from initial scoping through deployment. Handling both frontend and backend architecture, and owning the full delivery process end to end.
              </p>
              <ul className="list-disc list-outside ml-4 space-y-1.5 text-[14px] text-muted-foreground leading-relaxed">
                <li>Deliver full-stack web applications for international clients, end to end</li>
                <li>Own architecture decisions across frontend, backend, and deployment</li>
                <li>Manage client communication, scoping, and project delivery directly</li>
              </ul>
            </div>
            
            {/* Job 2 */}
            <div>
              <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-2 mb-4">
                <h3 className="text-[17px] font-semibold text-foreground">
                  Full Stack Developer <span className="text-muted-foreground font-normal">· Softvence Agency (part of Betopia Group)</span>
                </h3>
                <span className="text-[11px] font-mono tracking-widest text-muted-foreground uppercase">
                  Nov 2025 — Sep 2026 (10 mos)
                </span>
              </div>
              <p className="text-[15px] text-muted-foreground leading-relaxed mb-3">
                Developed modern, scalable, and responsive web applications for international clients using React, Next.js, TypeScript, Node.js, and Express.js. Built reusable UI components, REST APIs, authentication systems, dashboards, and database integrations.
              </p>
              <ul className="list-disc list-outside ml-4 space-y-1.5 text-[14px] text-muted-foreground leading-relaxed">
                <li>Built and shipped production features across the full stack for external clients</li>
                <li>Implemented authentication systems, dashboards, and REST API integrations</li>
                <li>Collaborated with cross-functional teams to deliver production-ready applications</li>
              </ul>
            </div>

            {/* Job 3 */}
            <div>
              <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-2 mb-4">
                <h3 className="text-[17px] font-semibold text-foreground">
                  Frontend Developer <span className="text-muted-foreground font-normal">· Ecoysoft</span>
                </h3>
                <span className="text-[11px] font-mono tracking-widest text-muted-foreground uppercase">
                  Jan 2023 — Mar 2024 (1 yr 2 mos)
                </span>
              </div>
              <p className="text-[15px] text-muted-foreground leading-relaxed mb-3">
                Built responsive and user-friendly web interfaces using React and modern JavaScript. Collaborated closely with backend and design teams to implement clean, reusable UI components and deliver features on time.
              </p>
              <ul className="list-disc list-outside ml-4 space-y-1.5 text-[14px] text-muted-foreground leading-relaxed">
                <li>Built responsive, reusable UI components with React and modern JavaScript</li>
                <li>Collaborated with backend and design teams to ship features on schedule</li>
                <li>Turned design mockups into functional, production-ready interfaces</li>
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
                title: "EduNext — Next-Gen Full-Stack LMS Platform",
                description: "A production-ready enterprise EdTech ecosystem featuring dynamic course curriculums, interactive pass-mark quizzes, verified PDF certification, and role-based access control.",
                tags: "Next.js 16 · TypeScript · Tailwind CSS · Node.js · Express.js · MongoDB · REST API"
              },
              {
                title: "Solenne — Luxury Lifestyle & Wellness Membership",
                description: "An exclusive invitation-only digital lifestyle membership platform connecting elite members to luxury wellness and dining destinations across the UAE.",
                tags: "Next.js 16 · TypeScript · Tailwind CSS · shadcn/ui · NestJS · Mapbox · Prisma"
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
