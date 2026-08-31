import { PageHero } from "@/components/shared/PageHero";
import { Download } from "lucide-react";

export default function ResumePage() {
  return (
    <div>
      <PageHero 
        badge="RESUME"
        title="The short version, in one page."
        description="Same information as the rest of the site, condensed for a quick read or a hiring pipeline."
        action={{
          label: (
            <span className="flex items-center gap-2">
              <Download className="w-4 h-4" /> Download PDF
            </span>
          ),
          href: "/resume.pdf",
          variant: "primary",
          showIcon: false
        }}
      />
      {/* Content will go here */}
    </div>
  );
}
