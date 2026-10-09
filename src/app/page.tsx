import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CommercialModel } from "@/components/CommercialModel";
import { PlatformFeatures } from "@/components/PlatformFeatures";
import { MobileTabletExperience } from "@/components/MobileTabletExperience";
import { ComparisonTable } from "@/components/ComparisonTable";
import { FAQ } from "@/components/FAQ";
import { CTASection } from "@/components/CTASection";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-800 selection:bg-indigo-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <CommercialModel />
        <PlatformFeatures />
        <MobileTabletExperience />
        <ComparisonTable />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
