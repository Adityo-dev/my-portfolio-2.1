"use client";

import { PROJECTS } from "../../../_data/projects";

type ProjectType = typeof PROJECTS[0];

export const ProjectOverview = ({ project }: { project: ProjectType }) => {
  const sections = [
    { num: "01", label: "Overview", content: project.overview },
    { num: "02", label: "Problem", content: project.problem },
    { num: "03", label: "Solution", content: project.solution },
  ].filter(s => Boolean(s.content));

  if (sections.length === 0) return null;

  return (
    <section className="relative w-full bg-[#0A0B0D] border-t border-white/[0.08] py-24 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-4 relative z-10">
        <div className="w-full">
          {sections.map((section, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col md:flex-row gap-6 md:gap-12 items-start py-10 sm:py-12 ${
                idx !== sections.length - 1 ? "border-b border-white/[0.08]" : ""
              }`}
            >
              <div className="w-full md:w-56 shrink-0 flex items-center gap-2">
                <span className="text-xs font-mono font-semibold tracking-widest text-primary">{section.num}</span>
                <h3 className="text-xl font-semibold text-foreground tracking-tight">{section.label}</h3>
              </div>
              <div className="flex-1">
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-4xl">
                  {section.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
