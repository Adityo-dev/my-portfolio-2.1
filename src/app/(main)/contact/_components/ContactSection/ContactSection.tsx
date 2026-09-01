"use client";

import { ContactForm } from "./_components/ContactForm/ContactForm";
import { ContactInfo } from "./_components/ContactInfo/ContactInfo";

export const ContactSection = () => {
  return (
    <section className="relative w-full bg-[#131419] border-t border-white/[0.08] py-16 sm:py-24">
      <div className="mx-auto max-w-[1400px] px-4 relative z-10 font-sans">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </section>
  );
};
