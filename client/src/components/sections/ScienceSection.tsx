/* ============================================================
   SYNAPTIQ — Science Section
   Design: Dark editorial layout with protocol steps + video embed
   ============================================================ */

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Play } from "lucide-react";
import { useState } from "react";

const protocols = [
  {
    step: "01",
    title: "The Contrast Protocol",
    description:
      "Alternating between heat and cold creates a vascular pump effect — dilating and constricting blood vessels to flush metabolic waste and deliver oxygen-rich blood to recovering tissue.",
    color: "#8D745D",
  },
  {
    step: "02",
    title: "Nervous System Reset",
    description:
      "Chronic stress keeps the body in a constant 'on' state. Intentional cold exposure activates the parasympathetic nervous system, bringing your body back into balance and out of the recovery gap.",
    color: "#8D5027",
  },
  {
    step: "03",
    title: "Cellular Photobiomodulation",
    description:
      "Red and near-infrared light at specific wavelengths (660nm–850nm) stimulate mitochondrial cytochrome c oxidase, boosting ATP production and accelerating cellular repair.",
    color: "#9C530D",
  },
  {
    step: "04",
    title: "Lymphatic Clearance",
    description:
      "Sequential pneumatic compression mimics the natural muscle pump, accelerating lymphatic drainage to reduce inflammation, clear metabolic byproducts, and restore tissue homeostasis.",
    color: "#8D745D",
  },
];

const stats = [
  { value: "23%", label: "Reduction in muscle soreness with contrast therapy" },
  { value: "34%", label: "Improvement in sleep quality with regular sauna use" },
  { value: "2×", label: "Faster recovery with combined modality protocols" },
  { value: "↑68%", label: "Norepinephrine release from cold exposure" },
];

export default function ScienceSection() {
  const sectionRef = useScrollAnimation();
  const [videoActive, setVideoActive] = useState(false);

  // YouTube Shorts — 9:16 vertical format
  const videoId = "OdrFZRXhyUg";

  return (
    <section
      id="science"
      className="py-20 lg:py-32"
      style={{ background: "oklch(0.10 0.005 240)" }}
      ref={sectionRef}
    >
      <div className="container">
        {/* Section header */}
        <div className="mb-12 lg:mb-20 max-w-3xl">
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
            className="fade-up text-foreground"
            style={{
              fontFamily: "'Nunito Sans', sans-serif",
              fontStretch: "expanded",
              fontWeight: 800,
              fontSize: "clamp(2.2rem, 5vw, 4rem)",
              lineHeight: "1.05",
              letterSpacing: "0.03em",
              textTransform: "uppercase",
            }}
          >
            RECOVERY ISN'T REST.
            <br />
            <span style={{ color: "#8D745D" }}>IT'S A PROTOCOL.</span>
          </h2>
        </div>

        {/* Protocol steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border mb-12 lg:mb-20">
          {protocols.map((p, idx) => (
            <div
              key={p.step}
              className="fade-up bg-background p-8 lg:p-10 relative group"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div
                style={{
                  fontFamily: "'Nunito Sans', sans-serif",
                  fontStretch: "expanded",
                  fontWeight: 900,
                  fontSize: "3.5rem",
                  color: p.color,
                  opacity: 0.15,
                  marginBottom: "16px",
                  letterSpacing: "0.05em",
                }}
              >
                {p.step}
              </div>
              <h3
                style={{
                  fontFamily: "'Nunito Sans', sans-serif",
                  fontStretch: "expanded",
                  fontWeight: 800,
                  fontSize: "1rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#ffffff",
                  marginBottom: "16px",
                }}
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
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className="fade-up text-center"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div
                style={{
                  fontFamily: "'Nunito Sans', sans-serif",
                  fontStretch: "expanded",
                  fontWeight: 900,
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  color: "#8D745D",
                  letterSpacing: "0.05em",
                  marginBottom: "12px",
                }}
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

        {/* Video embed */}
        <div className="fade-up">
          {/* Video label */}
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-12 bg-gold opacity-40" />
            <span
              className="text-gold text-[10px] tracking-[0.4em] uppercase"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              The Research
            </span>
            <div className="h-px flex-1 bg-gold opacity-10" />
          </div>

          {/* Copy — centered above the Short */}
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h3
              style={{
                fontFamily: "'Nunito Sans', sans-serif",
                fontStretch: "expanded",
                fontWeight: 800,
                fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                lineHeight: "1.1",
                letterSpacing: "0.03em",
                textTransform: "uppercase",
                color: "#ffffff",
                marginBottom: "16px",
              }}
            >
              THE SCIENCE BEHIND
              <br />
              <span style={{ color: "#8D745D" }}>COLD EXPOSURE.</span>
            </h3>
            <p
              className="font-body text-sm text-muted-foreground leading-relaxed mb-6"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Dr. Andrew Huberman breaks down the neurological and physiological
              mechanisms behind deliberate cold exposure — including the
              norepinephrine response, dopamine elevation, and why the mental
              resilience built in cold water transfers directly to performance
              under stress.
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-1 h-6" style={{ background: "#8D745D" }} />
              <p
                className="font-body text-xs text-muted-foreground"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Huberman Lab · Stanford Neuroscience
              </p>
            </div>
          </div>

          {/* Video player — 9:16 Shorts, centered */}
          <div className="flex justify-center">
            <div
              className="relative overflow-hidden border border-foreground/10 group"
              style={{ width: "100%", maxWidth: "360px", aspectRatio: "9/16" }}
            >
              {!videoActive ? (
                /* Thumbnail with play button */
                <button
                  onClick={() => setVideoActive(true)}
                  className="relative w-full h-full block"
                  aria-label="Play video"
                >
                  <img
                    src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                    alt="Cold exposure science explainer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Dark overlay */}
                  <div
                    className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-60"
                    style={{ background: "oklch(0.08 0.005 240 / 50%)" }}
                  />
                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="flex items-center justify-center w-16 h-16 rounded-full border border-foreground/30 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:border-cold"
                      style={{ background: "oklch(0.08 0.005 240 / 70%)" }}
                    >
                      <Play
                        size={20}
                        className="text-foreground ml-1"
                        fill="currentColor"
                      />
                    </div>
                  </div>
                  {/* Duration label */}
                  <div
                    className="absolute bottom-3 right-3 px-2 py-1 text-[10px] tracking-[0.1em] uppercase text-foreground/70"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      background: "oklch(0.08 0.005 240 / 80%)",
                    }}
                  >
                    Huberman Lab
                  </div>
                </button>
              ) : (
                /* Active iframe */
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&color=white&loop=1&playlist=${videoId}`}
                  title="Cold Exposure Science — Huberman Lab"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
