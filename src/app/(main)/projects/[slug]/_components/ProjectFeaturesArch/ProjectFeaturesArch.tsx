"use client";

import { PROJECTS } from "../../../_data/projects";

type ProjectType = typeof PROJECTS[0];

export const ProjectFeaturesArch = ({ project }: { project: ProjectType }) => {
  const hasFeatures = project.keyFeatures && project.keyFeatures.length > 0;
  const hasArch = project.architecture && project.architecture.length > 0;

  if (!hasFeatures && !hasArch) return null;

  return (
    <section className="relative w-full bg-[#131419] border-t border-white/[0.08] py-24 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Key features */}
          {hasFeatures && (
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.02em] text-[#F7F7F5] leading-[1.1] mb-8">
                Key features
              </h2>
              <ul className="space-y-4">
                {project.keyFeatures?.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-base sm:text-lg text-[#9B9DA6] leading-relaxed">
                    <span className="text-primary shrink-0 font-bold">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Right Column: Architecture */}
          {hasArch && (
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.02em] text-[#F7F7F5] leading-[1.1] mb-8">
                Architecture
              </h2>
              <div className="space-y-4">
                {project.architecture?.map((arch, idx) => (
                  <div 
                    key={idx}
                    className="rounded-md border border-white/[0.08] bg-[#1A1B21] p-5 sm:p-6 flex items-start gap-4 hover:bg-[#22242C] transition-colors"
                  >
                    <span className="text-xs font-mono font-semibold tracking-widest text-primary shrink-0 mt-1">
                      {arch.id}
                    </span>
                    <div className="text-base leading-relaxed">
                      <span className="text-foreground font-semibold">{arch.title}</span>
                      {" — "}
                      <span className="text-muted-foreground">{arch.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};
