"use client";

import { PROJECTS } from "../../../_data/projects";

type ProjectType = typeof PROJECTS[0];

export const ProjectMetadata = ({ project }: { project: ProjectType }) => {
  return (
    <section className="relative w-full bg-[#131419] border-t border-white/[0.08] py-16 sm:py-20 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xs font-mono font-semibold tracking-widest text-primary uppercase mb-3">
              ROLE
            </h3>
            <p className="text-base sm:text-lg font-semibold text-foreground">
              {project.role || "Developer"}
            </p>
          </div>
          
          <div>
            <h3 className="text-xs font-mono font-semibold tracking-widest text-primary uppercase mb-3">
              YEAR
            </h3>
            <p className="text-base sm:text-lg font-semibold text-foreground">
              {project.year}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-mono font-semibold tracking-widest text-primary uppercase mb-3">
              STACK
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag: string) => (
                <span 
                  key={tag} 
                  className="px-3.5 py-1.5 rounded-sm border border-white/10 bg-white/5 text-xs font-mono font-semibold tracking-widest text-muted-foreground hover:text-foreground transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
