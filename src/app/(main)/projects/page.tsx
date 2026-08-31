import { PageHero } from "@/components/shared/PageHero";
import { ProjectsGallery } from "./_components/ProjectsGallery";

export default function ProjectsPage() {
  return (
    <div>
      <PageHero 
        badge="PROJECTS"
        title="Everything I have built and shipped."
        description="Filter by the kind of work you care about. Each project lists its real stack, and links to a live demo, a case study or the source where available."
      />
      <ProjectsGallery />
    </div>
  );
}
