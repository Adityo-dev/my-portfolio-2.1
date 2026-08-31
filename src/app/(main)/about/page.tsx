import { PageHero } from "@/components/shared/PageHero";
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
      {/* Content will go here */}
    </div>
  );
}
