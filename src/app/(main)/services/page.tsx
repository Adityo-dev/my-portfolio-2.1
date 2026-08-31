import { PageHero } from "@/components/shared/PageHero";
import { ServicesSection } from "./_components/ServicesSection/ServicesSection";
import { ProcessSection } from "./_components/ProcessSection/ProcessSection";

export default function ServicesPage() {
  return (
    <div>
      <PageHero 
        badge="SERVICES"
        title="What can I build for your business?"
        description="Six areas of work, one process. Everything is built to be handed over — you own the code, the deployment and the accounts."
      />
      <ServicesSection />
      <ProcessSection />
    </div>
  );
}
