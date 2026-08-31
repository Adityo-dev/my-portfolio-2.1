import { PageHero } from "@/components/shared/PageHero";
import { ContactSection } from "./_components/ContactSection/ContactSection";

export default function ContactPage() {
  return (
    <div>
      <PageHero 
        badge="CONTACT"
        title="Let's build something great."
        description="Tell me what you are building and what success looks like. I reply within one working day."
      />
      <ContactSection />
    </div>
  );
}
