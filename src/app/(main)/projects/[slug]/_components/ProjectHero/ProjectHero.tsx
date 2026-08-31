"use client";

import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { ActionButton } from "@/components/shared/ActionButton";
import { PROJECTS } from "../../../_data/projects";

type ProjectType = typeof PROJECTS[0];

export const ProjectHero = ({ project }: { project: ProjectType }) => {
  const titleParts = project.title.split("—");
  const mainTitle = titleParts[0].trim();
  const subTitle = titleParts.length > 1 ? `— ${titleParts[1].trim()}` : "";

  return (
    <section className="relative w-full bg-background pt-28 sm:pt-36 pb-12 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-4 relative z-10">
        
        {/* Back Button */}
        <Link 
          href="/projects" 
          className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase font-semibold text-muted-foreground hover:text-[#FF5A36] transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" /> All projects
        </Link>

        <div>
          {/* Category & Year Tag */}
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest font-semibold uppercase mb-4">
            <span className="text-[#FF5A36]">{project.category}</span>
            <span className="text-[#FF5A36]">• {project.subcategory || "Details"}</span>
            <span className="text-white/30">/</span>
            <span className="text-muted-foreground">{project.year}</span>
          </div>

          {/* Heading / Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.02em] text-foreground leading-[1.1] mb-5">
            <span className="font-bold">{mainTitle}</span>{" "}
            <span className="font-medium text-muted-foreground">{subTitle}</span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl mb-10">
            {project.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <ActionButton 
              href={project.links.liveDemo} 
              label="Visit Live Project" 
              variant="primary" 
              icon={<ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />} 
            />
            <ActionButton 
              href={project.links.github} 
              label="View Source Code" 
              variant="outline" 
              icon={<Github className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />} 
            />
          </div>
        </div>

      </div>
    </section>
  );
};
