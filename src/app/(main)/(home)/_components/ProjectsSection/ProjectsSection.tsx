"use client";

import { motion } from "framer-motion";
import { ActionButton } from "@/components/shared/ActionButton";
import { PROJECTS } from "../../../projects/_data/projects";
import { ProjectCard } from "../../../projects/_components/ProjectCard";

export const ProjectsSection = () => {
  const featuredProject = PROJECTS[0];
  const regularProjects = PROJECTS.slice(1);

  return (
    <section className="relative w-full bg-[#0A0B0D] border-t border-white/[0.05] py-24 overflow-hidden">
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
              SELECTED WORK
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.02em] text-[#F7F7F5] leading-[1.1] mb-5"
            >
              Here is what I have built.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-[#9B9DA6] leading-relaxed"
            >
              Four projects, strongest first — each with the stack it actually runs on and a way to see it for yourself.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="shrink-0"
          >
            <ActionButton href="/projects" label="All projects" />
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="flex flex-col gap-6">
          {/* Featured Project (Full Width) */}
          <ProjectCard project={featuredProject} />

          {/* Regular Projects (3 Columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
