"use client";

import { PROJECTS } from "../../../_data/projects";

type ProjectType = typeof PROJECTS[0];

export const ProjectTechStack = ({ project }: { project: ProjectType }) => {
  if (!project.technologyMatrix || project.technologyMatrix.length === 0) return null;

  return (
    <section className="relative w-full bg-[#0A0B0D] border-t border-white/[0.08] py-24 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-4 relative z-10">
        
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.02em] text-[#F7F7F5] leading-[1.1] mb-8">
          Technology
        </h2>

        <div className="rounded-md border border-white/[0.08] bg-[#1A1B21] overflow-hidden p-6 sm:p-8 md:p-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {project.technologyMatrix.map((col, idx) => (
              <div key={idx} className={idx > 0 ? "md:border-l md:border-white/[0.08] md:pl-8" : ""}>
                <h3 className="text-xs font-mono font-semibold tracking-widest text-primary uppercase mb-4">
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
