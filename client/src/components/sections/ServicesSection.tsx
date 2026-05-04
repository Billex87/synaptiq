/* ============================================================
   SYNAPTIQ — Services Section
   Design: Tri-color service cards with imagery
   Services: Cold Plunge, Dry Sauna, Red Light Therapy, Compression
   ============================================================ */

import { useEffect, useRef } from "react";
import { Snowflake, Flame, Zap, Wind } from "lucide-react";

const services = [
  {
    id: "01",
    name: "Cold Plunge",
    tagline: "Reset your nervous system.",
    description:
      "Short, controlled cold immersion reduces inflammation, boosts circulation, and sharpens mental resilience. Your body's most powerful reset.",
    image: "/images/cold-plunge-hero.jpg",
    icon: Snowflake,
    color: "cold",
    colorValue: "oklch(0.72 0.12 192)",
    glowClass: "glow-cold",
    benefits: ["Reduces inflammation", "Boosts circulation", "Mental clarity"],
  },
  {
    id: "02",
    name: "Dry Sauna",
    tagline: "Intentional heat exposure.",
    description:
      "Not just relaxation — intentional recovery. Heat exposure triggers cellular repair, improves cardiovascular health, and deepens sleep quality.",
    image: "/images/sauna-hero.jpg",
    icon: Flame,
    color: "heat",
    colorValue: "oklch(0.72 0.12 55)",
    glowClass: "glow-heat",
    benefits: ["Cellular repair", "Cardiovascular health", "Deep sleep"],
  },
  {
    id: "03",
    name: "Red Light Therapy",
    tagline: "Cellular energy, restored.",
    description:
      "Targeted wavelengths penetrate deep into tissue, stimulating mitochondrial function. Accelerate recovery, reduce pain, and improve skin health.",
    image: "/images/red-light-hero.jpg",
    icon: Zap,
    color: "light-therapy",
    colorValue: "oklch(0.65 0.22 25)",
    glowClass: "glow-light",
    benefits: ["Mitochondrial boost", "Pain reduction", "Skin health"],
  },
  {
    id: "04",
    name: "Compression",
    tagline: "Clear the recovery gap.",
    description:
      "Pneumatic compression stimulates lymphatic flow and improves circulation — clearing buildup, reducing pressure, and accelerating the way your body actually recovers.",
    image: "/images/compression-hero.jpg",
    icon: Wind,
    color: "cold",
    colorValue: "oklch(0.72 0.12 192)",
    glowClass: "glow-cold",
    benefits: ["Lymphatic drainage", "Reduces swelling", "Faster recovery"],
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animatables = entry.target.querySelectorAll(".fade-up");
            animatables.forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 150);
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-32 bg-background" ref={sectionRef}>
      <div className="container">
        {/* Section header */}
        <div className="mb-20">
          <div className="fade-up flex items-center gap-4 mb-6">
            <span
              className="text-gold text-[10px] tracking-[0.4em] uppercase font-body"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              What We Offer
            </span>
            <div className="h-px flex-1 max-w-[60px] bg-gold opacity-40" />
          </div>
          <h2
            className="fade-up font-display text-5xl md:text-6xl lg:text-7xl font-light text-foreground leading-[1.05]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Science-Backed
            <br />
            <em className="italic text-muted-foreground">Recovery Modalities</em>
          </h2>
        </div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="fade-up group relative overflow-hidden bg-surface rounded-sm"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {/* Image */}
                <div className="relative h-64 md:h-72 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Gradient overlay on image */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(180deg, transparent 40%, oklch(0.12 0.005 240 / 95%) 100%)`,
                    }}
                  />
                  {/* Service number */}
                  <span
                    className="absolute top-5 right-5 font-display text-5xl font-light opacity-20 text-foreground"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {service.id}
                  </span>
                  {/* Icon */}
                  <div
                    className="absolute bottom-5 left-5 w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ background: `${service.colorValue}20`, border: `1px solid ${service.colorValue}50` }}
                  >
                    <Icon size={16} style={{ color: service.colorValue }} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3
                        className="font-display text-2xl font-light text-foreground mb-1"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      >
                        {service.name}
                      </h3>
                      <p
                        className="text-xs tracking-[0.2em] uppercase font-body"
                        style={{ color: service.colorValue, fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {service.tagline}
                      </p>
                    </div>
                  </div>

                  <p
                    className="font-body text-sm text-muted-foreground leading-relaxed mb-5"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {service.description}
                  </p>

                  {/* Benefits */}
                  <div className="flex flex-wrap gap-2">
                    {service.benefits.map((b) => (
                      <span
                        key={b}
                        className="text-[10px] tracking-[0.15em] uppercase px-3 py-1.5 rounded-full font-body"
                        style={{
                          background: `${service.colorValue}12`,
                          border: `1px solid ${service.colorValue}30`,
                          color: service.colorValue,
                          fontFamily: "'DM Sans', sans-serif",
                        }}
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-px transition-all duration-500 group-hover:opacity-100 opacity-0"
                  style={{ background: `linear-gradient(90deg, transparent, ${service.colorValue}, transparent)` }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
