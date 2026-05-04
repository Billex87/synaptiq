/* ============================================================
   SYNAPTIQ — Science Section
   Design: Dark editorial layout with protocol steps
   ============================================================ */

import { useEffect, useRef } from "react";

const protocols = [
  {
    step: "01",
    title: "The Contrast Protocol",
    description:
      "Alternating between heat and cold creates a vascular pump effect — dilating and constricting blood vessels to flush metabolic waste and deliver oxygen-rich blood to recovering tissue.",
    color: "oklch(0.72 0.12 192)",
  },
  {
    step: "02",
    title: "Nervous System Reset",
    description:
      "Chronic stress keeps the body in a constant 'on' state. Intentional cold exposure activates the parasympathetic nervous system, bringing your body back into balance and out of the recovery gap.",
    color: "oklch(0.72 0.12 55)",
  },
  {
    step: "03",
    title: "Cellular Photobiomodulation",
    description:
      "Red and near-infrared light at specific wavelengths (660nm–850nm) stimulate mitochondrial cytochrome c oxidase, boosting ATP production and accelerating cellular repair.",
    color: "oklch(0.65 0.22 25)",
  },
  {
    step: "04",
    title: "Lymphatic Clearance",
    description:
      "Sequential pneumatic compression mimics the natural muscle pump, accelerating lymphatic drainage to reduce inflammation, clear metabolic byproducts, and restore tissue homeostasis.",
    color: "oklch(0.72 0.12 192)",
  },
];

const stats = [
  { value: "23%", label: "Reduction in muscle soreness with contrast therapy" },
  { value: "34%", label: "Improvement in sleep quality with regular sauna use" },
  { value: "2×", label: "Faster recovery with combined modality protocols" },
  { value: "↑68%", label: "Norepinephrine release from cold exposure" },
];

export default function ScienceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animatables = entry.target.querySelectorAll(".fade-up");
            animatables.forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 120);
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
    <section
      id="science"
      className="py-32"
      style={{ background: "oklch(0.10 0.005 240)" }}
      ref={sectionRef}
    >
      <div className="container">
        {/* Section header */}
        <div className="mb-20 max-w-3xl">
          <div className="fade-up flex items-center gap-4 mb-6">
            <span
              className="text-gold text-[10px] tracking-[0.4em] uppercase font-body"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              The Science
            </span>
            <div className="h-px w-12 bg-gold opacity-40" />
          </div>
          <h2
            className="fade-up font-display text-5xl md:text-6xl lg:text-7xl font-light text-foreground leading-[1.05]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Recovery Isn't Rest.
            <br />
            <em className="italic text-muted-foreground">It's a Protocol.</em>
          </h2>
        </div>

        {/* Protocol steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border mb-20">
          {protocols.map((p, idx) => (
            <div
              key={p.step}
              className="fade-up bg-background p-8 lg:p-10 relative group"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div
                className="font-display text-6xl font-light mb-4 opacity-15"
                style={{ fontFamily: "'Cormorant Garamond', serif", color: p.color }}
              >
                {p.step}
              </div>
              <h3
                className="font-display text-2xl font-light text-foreground mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {p.title}
              </h3>
              <p
                className="font-body text-sm text-muted-foreground leading-relaxed"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {p.description}
              </p>
              {/* Hover accent */}
              <div
                className="absolute top-0 left-0 w-px h-0 group-hover:h-full transition-all duration-500"
                style={{ background: p.color }}
              />
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="gold-rule mb-16" />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className="fade-up text-center"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div
                className="font-display text-4xl md:text-5xl font-light text-gold mb-3"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {stat.value}
              </div>
              <p
                className="font-body text-xs text-muted-foreground leading-relaxed"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
