/* ============================================================
   SYNAPTIQ BIOCORP — Home Page
   Design: "Dark Sanctum" — Dark Luxury Minimalism × Biophilic Noir
   Sections: Hero, Services, About, Science, Pricing, Testimonials, CTA, Footer
   ============================================================ */

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import AboutSection from "@/components/sections/AboutSection";
import ScienceSection from "@/components/sections/ScienceSection";
import PricingSection from "@/components/sections/PricingSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ScienceSection />
      <PricingSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
