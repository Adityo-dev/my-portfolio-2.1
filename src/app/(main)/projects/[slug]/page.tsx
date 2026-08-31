import { PROJECTS } from "../_data/projects";
import { notFound } from "next/navigation";
import { ProjectHero } from "./_components/ProjectHero/ProjectHero";
import { ProjectImage } from "./_components/ProjectImage/ProjectImage";
import { ProjectMetadata } from "./_components/ProjectMetadata/ProjectMetadata";
import { ProjectOverview } from "./_components/ProjectOverview/ProjectOverview";
import { ProjectFeaturesArch } from "./_components/ProjectFeaturesArch/ProjectFeaturesArch";
import { ProjectTechStack } from "./_components/ProjectTechStack/ProjectTechStack";
import { ProjectChallenges } from "./_components/ProjectChallenges/ProjectChallenges";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.id,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.id === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background font-sans">
      <ProjectHero project={project} />
      <ProjectImage project={project} />
      <ProjectMetadata project={project} />
      <ProjectOverview project={project} />
      <ProjectFeaturesArch project={project} />
      <ProjectTechStack project={project} />
      <ProjectChallenges project={project} />
    </main>
  );
}
