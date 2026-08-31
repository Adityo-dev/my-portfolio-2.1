import React from "react";
import { Navbar } from "@/components/Navbar/Navbar";
import { Footer } from "@/components/Footer/Footer";
import { CTA } from "@/components/CTA/CTA";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <CTA />
      <Footer />
    </div>
  );
};

export default MainLayout;

