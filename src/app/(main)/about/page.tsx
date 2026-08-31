import { PageHero } from "@/components/shared/PageHero";
import { ImageSection } from "./_components/ImageSection/ImageSection";
import { AboutDetails } from "./_components/AboutDetails/AboutDetails";
import { CapabilitiesSection } from "./_components/CapabilitiesSection/CapabilitiesSection";
import { ExperienceSection } from "./_components/ExperienceSection/ExperienceSection";
import { EducationSection } from "./_components/EducationSection/EducationSection";
import { Download } from "lucide-react";

export default function AboutPage() {
  return (
    <div>
      <PageHero 
        badge="ABOUT"
        title="A developer who cares about both code and the product."
        description="I build complete web applications end to end — and I judge them by whether they stay fast, understandable and maintainable after launch."
        action={{
          label: (
            <span className="flex items-center gap-2">
              <Download className="w-4 h-4" /> Download Resume
            </span>
          ),
          href: "/resume.pdf",
          variant: "outline",
          showIcon: false
        }}
      />
      <ImageSection />
      <AboutDetails />
      <ExperienceSection />
      <EducationSection />
      <CapabilitiesSection />
    </div>
  );
}
