"use client";

import React, { useState } from "react";
import { PROJECTS } from "../_data/projects";
import { ProjectCard } from "./ProjectCard";
import { motion, AnimatePresence } from "framer-motion";

const CATEGORIES = ["All", "Full Stack", "Frontend", "Dashboard", "E-commerce", "Business", "Education"];

export const ProjectsGallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = PROJECTS.filter(project => 
    activeCategory === "All" || project.category === activeCategory
  );

  return (
    <section className="relative w-full bg-[#131419] border-t border-white/[0.08] pb-24 pt-12">
      <div className="mx-auto max-w-[1400px] px-4 relative z-10">
        
        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 mb-12">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-sm border text-[13px] font-medium cursor-pointer transition-all duration-300 ${
                activeCategory === category 
                  ? "bg-primary border-primary text-primary-foreground font-semibold" 
                  : "border-white/10 bg-transparent text-[#9B9DA6] hover:bg-white/5 hover:text-[#F7F7F5]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map(project => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={project} forceRegularLayout={true} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-24 text-[#9B9DA6]">
            No projects found in this category.
          </div>
        )}
      </div>
    </section>
  );
};
