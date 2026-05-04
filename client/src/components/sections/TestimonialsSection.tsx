/* ============================================================
   SYNAPTIQ — Testimonials Section
   Design: Dark cards with editorial quotes
   ============================================================ */

import { useEffect, useRef } from "react";

const testimonials = [
  {
    quote:
      "The contrast protocol completely changed how I recover between training sessions. I sleep deeper, feel sharper, and my inflammation markers are down significantly.",
    name: "Marcus T.",
    role: "Strength Athlete",
    initial: "M",
    color: "#8D745D",
  },
  {
    quote:
      "I was skeptical about red light therapy until I tried it consistently for three weeks. The difference in my joint pain and energy levels was undeniable.",
    name: "Sarah K.",
    role: "CrossFit Coach",
    initial: "S",
    color: "#9C530D",
  },
  {
    quote:
      "As a nurse working long shifts, the compression therapy has been a game-changer for my legs. The lymphatic drainage effect is real and immediate.",
    name: "James R.",
    role: "Healthcare Professional",
    initial: "J",
    color: "#8D5027",
  },
];

export default function TestimonialsSection() {
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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-32 bg-background" ref={sectionRef}>
      <div className="container">
        {/* Section header */}
        <div className="mb-16 text-center">
          <div className="fade-up flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-gold opacity-40" />
            <span
              className="text-gold text-[10px] tracking-[0.4em] uppercase font-body"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Early Adopters
            </span>
            <div className="h-px w-12 bg-gold opacity-40" />
          </div>
          <h2
            className="fade-up"
            style={{
              fontFamily: "'Nunito Sans', sans-serif",
              fontStretch: "expanded",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
              lineHeight: "1.05",
              letterSpacing: "0.03em",
              textTransform: "uppercase",
              color: "#ffffff",
            }}
          >
            RESULTS THEY CAN <span style={{ color: "#8D745D" }}>FEEL.</span>
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={t.name}
              className="fade-up bg-surface p-8 relative flex flex-col"
              style={{
                background: "oklch(0.12 0.005 240)",
                transitionDelay: `${idx * 150}ms`,
              }}
            >
              {/* Quote mark */}
              <div
                style={{
                  fontFamily: "'Nunito Sans', sans-serif",
                  fontStretch: "expanded",
                  fontWeight: 900,
                  fontSize: "5rem",
                  lineHeight: 1,
                  marginBottom: "16px",
                  opacity: 0.2,
                  color: t.color,
                }}
              >
                "
              </div>

              <p
                className="font-body text-sm text-muted-foreground leading-relaxed flex-1 mb-8"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {t.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{
                    background: `${t.color}20`,
                    border: `1px solid ${t.color}40`,
                    color: t.color,
                    fontFamily: "'Nunito Sans', sans-serif",
                  }}
                >
                  {t.initial}
                </div>
                <div>
                  <div
                    className="font-body text-sm text-foreground font-medium"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {t.name}
                  </div>
                  <div
                    className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground font-body"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {t.role}
                  </div>
                </div>
              </div>

              {/* Bottom accent */}
              <div
                className="absolute bottom-0 left-0 right-0 h-px"
                style={{ background: `linear-gradient(90deg, ${t.color}60, transparent)` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
