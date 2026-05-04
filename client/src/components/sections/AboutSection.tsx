/* ============================================================
   SYNAPTIQ — About Section
   Design: Asymmetric layout with large imagery and editorial text
   ============================================================ */

import { useEffect, useRef } from "react";

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animatables = entry.target.querySelectorAll(".fade-up, .fade-in");
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
    <section id="about" className="py-32 overflow-hidden" ref={sectionRef}>
      {/* Gold rule */}
      <div className="container mb-20">
        <div className="gold-rule" />
      </div>

      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image side */}
          <div className="fade-in relative">
            <div className="relative overflow-hidden rounded-sm">
              <img
                src="/images/sauna-interior.jpg"
                alt="Synaptiq luxury sauna interior"
                className="w-full h-[500px] lg:h-[650px] object-cover"
              />
              {/* Overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.08 0.005 240 / 30%) 0%, transparent 60%)",
                }}
              />
            </div>

            {/* Floating stat card */}
            <div
              className="absolute -bottom-6 -right-4 lg:-right-8 bg-surface-2 border border-gold/20 p-6 min-w-[180px]"
              style={{ background: "oklch(0.16 0.006 240)" }}
            >
              <div
                style={{
                  fontFamily: "'Nunito Sans', sans-serif",
                  fontStretch: "expanded",
                  fontWeight: 900,
                  fontSize: "2.5rem",
                  color: "#8D745D",
                  lineHeight: 1,
                  marginBottom: "4px",
                }}
              >
                4
              </div>
              <div
                className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground font-body"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Recovery
                <br />
                Modalities
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="space-y-8">
            <div className="fade-up flex items-center gap-4">
              <span
                className="text-gold text-[10px] tracking-[0.4em] uppercase font-body"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                About Synaptiq
              </span>
              <div className="h-px w-12 bg-gold opacity-40" />
            </div>

            <h2
              className="fade-up text-foreground"
              style={{
                fontFamily: "'Nunito Sans', sans-serif",
                fontStretch: "expanded",
                fontWeight: 800,
                fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                lineHeight: "1.05",
                letterSpacing: "0.03em",
                textTransform: "uppercase",
              }}
            >
              WHERE SCIENCE
              <br />
              <span style={{ color: "#8D745D" }}>MEETS STILLNESS.</span>
            </h2>

            <p
              className="fade-up font-body text-base text-muted-foreground leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Synaptiq was built on a simple premise: your body already knows how to heal.
              It just needs the right conditions.
            </p>

            <p
              className="fade-up font-body text-base text-muted-foreground leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              We're bringing intentional contrast therapy to Fort St. John — a science-backed
              approach to recovery that combines cold, heat, light, and compression into
              purposeful protocols designed for performance and longevity.
            </p>

            <p
              className="fade-up font-body text-base text-muted-foreground leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              This isn't a spa. It's a recovery system — built for people who take their
              health seriously and want results they can feel.
            </p>

            {/* Stats row */}
            <div className="fade-up grid grid-cols-3 gap-6 pt-4">
              {[
                { value: "10°C", label: "Cold Plunge" },
                { value: "85°C", label: "Sauna Temp" },
                { value: "660nm", label: "Red Light" },
              ].map((stat) => (
                <div key={stat.label} className="border-l border-gold/30 pl-4">
                  <div
                    style={{
                      fontFamily: "'Nunito Sans', sans-serif",
                      fontStretch: "expanded",
                      fontWeight: 800,
                      fontSize: "1.4rem",
                      color: "#8D745D",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-body mt-1"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
