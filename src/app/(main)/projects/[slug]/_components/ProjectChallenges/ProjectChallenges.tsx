"use client";

import { PROJECTS } from "../../../_data/projects";

type ProjectType = typeof PROJECTS[0];

export const ProjectChallenges = ({ project }: { project: ProjectType }) => {
  const hasChallenges = project.challenges && project.challenges.length > 0;
  const hasResults = project.results && project.results.length > 0;

  if (!hasChallenges && !hasResults) return null;

  return (
    <section className="relative w-full bg-background border-t border-white/5 py-24 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Challenges & how I solved them */}
          {hasChallenges && (
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.02em] text-foreground leading-[1.1] mb-8">
                Challenges & how I solved them
              </h2>
              <div className="space-y-6">
                {project.challenges?.map((item, idx) => (
                  <div 
                    key={idx}
                    className="rounded-md border border-white/10 bg-white/[0.02] p-6 sm:p-8 space-y-4 hover:bg-white/[0.04] transition-colors"
                  >
                    <div>
                      <h3 className="text-xs font-mono font-semibold tracking-widest text-[#FF5A36] uppercase mb-2">
                        CHALLENGE
                      </h3>
                      <p className="text-foreground text-base sm:text-lg font-semibold leading-relaxed">
                        {item.challenge}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xs font-mono font-semibold tracking-widest text-[#FF5A36] uppercase mb-2">
                        SOLUTION
                      </h3>
                      <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
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
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.02em] text-foreground leading-[1.1] mb-8">
                Result
              </h2>
              <div className="space-y-6">
                {project.results?.map((result, idx) => (
                  <div 
                    key={idx}
                    className="border-l-2 border-[#FF5A36] pl-6 py-3"
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
