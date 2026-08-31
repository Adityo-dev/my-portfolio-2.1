"use client";

import { PROJECTS } from "../../../_data/projects";

type ProjectType = typeof PROJECTS[0];

export const ProjectTechStack = ({ project }: { project: ProjectType }) => {
  if (!project.technologyMatrix || project.technologyMatrix.length === 0) return null;

  return (
    <section className="relative w-full bg-background border-t border-white/5 py-24 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-4 relative z-10">
        
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.02em] text-foreground leading-[1.1] mb-8">
          Technology
        </h2>

        <div className="rounded-md border border-white/10 bg-white/[0.02] overflow-hidden p-6 sm:p-8 md:p-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {project.technologyMatrix.map((col, idx) => (
              <div key={idx} className={idx > 0 ? "md:border-l md:border-white/10 md:pl-8" : ""}>
                <h3 className="text-xs font-mono font-semibold tracking-widest text-[#FF5A36] uppercase mb-4">
                  {col.category}
                </h3>
                <ul className="space-y-3">
                  {col.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="text-base font-medium text-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
