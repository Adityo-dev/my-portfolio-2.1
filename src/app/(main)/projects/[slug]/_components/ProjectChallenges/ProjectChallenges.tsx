"use client";

import { PROJECTS } from "../../../_data/projects";

type ProjectType = typeof PROJECTS[0];

export const ProjectChallenges = ({ project }: { project: ProjectType }) => {
  const hasChallenges = project.challenges && project.challenges.length > 0;
  const hasResults = project.results && project.results.length > 0;

  if (!hasChallenges && !hasResults) return null;

  return (
    <section className="relative w-full bg-[#131419] border-t border-white/[0.08] py-24 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Challenges & how I solved them */}
          {hasChallenges && (
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.02em] text-[#F7F7F5] leading-[1.1] mb-8">
                Challenges & how I solved them
              </h2>
              <div className="space-y-6">
                {project.challenges?.map((item, idx) => (
                  <div 
                    key={idx}
                    className="rounded-md border border-white/[0.08] bg-[#1A1B21] p-6 sm:p-8 space-y-4 hover:bg-[#22242C] transition-colors"
                  >
                    <div>
                      <h3 className="text-xs font-mono font-semibold tracking-widest text-primary uppercase mb-2">
                        CHALLENGE
                      </h3>
                      <p className="text-[#F7F7F5] text-base sm:text-lg font-semibold leading-relaxed">
                        {item.challenge}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xs font-mono font-semibold tracking-widest text-primary uppercase mb-2">
                        SOLUTION
                      </h3>
                      <p className="text-[#9B9DA6] text-base sm:text-lg leading-relaxed">
                        {item.solution}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Right Column: Result */}
          {hasResults && (
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.02em] text-[#F7F7F5] leading-[1.1] mb-8">
                Result
              </h2>
              <div className="space-y-6">
                {project.results?.map((result, idx) => (
                  <div 
                    key={idx}
                    className="border-l-2 border-primary pl-6 py-3"
                  >
                    <p className="text-muted-foreground text-base sm:text-lg leading-relaxed font-normal">
                      {result}
                    </p>
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
