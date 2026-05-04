/* ============================================================
   SYNAPTIQ — Hero Section
   Design: Full-viewport dark luxury hero with parallax overlay
   ============================================================ */

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToServices = () => {
    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background image with parallax */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          transform: `translateY(${scrollY * 0.35}px)`,
          willChange: "transform",
        }}
      >
        <img
          src="/images/hero-bg.jpg"
          alt="Synaptiq luxury wellness spa"
          className="w-full h-full object-cover"
          style={{ transform: "scale(1.1)", transformOrigin: "center center" }}
        />
      </div>

      {/* Gradient overlays */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.08 0.005 240 / 70%) 0%, oklch(0.08 0.005 240 / 45%) 40%, oklch(0.08 0.005 240 / 75%) 80%, oklch(0.08 0.005 240 / 100%) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container flex flex-col items-center text-center">
        {/* Pre-headline label */}
        <div
          className={`flex items-center gap-4 mb-8 transition-all duration-1000 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <div className="h-px w-12 bg-gold opacity-60" />
          <span
            className="text-gold text-[10px] tracking-[0.4em] uppercase font-body"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Fort St. John, BC &nbsp;·&nbsp; Launching Soon
          </span>
          <div className="h-px w-12 bg-gold opacity-60" />
        </div>

        {/* Main headline */}
        <h1
          className={`font-display text-6xl md:text-8xl lg:text-[7rem] xl:text-[9rem] font-light leading-[0.92] tracking-tight text-foreground mb-8 transition-all duration-1000 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            transitionDelay: "400ms",
          }}
        >
          Recover
          <br />
          <em className="italic text-cold">With Purpose.</em>
        </h1>

        {/* Subheadline */}
        <p
          className={`font-body text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed mb-12 transition-all duration-1000 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{
            fontFamily: "'DM Sans', sans-serif",
            transitionDelay: "600ms",
          }}
        >
          Contrast therapy for performance &amp; longevity.
          <br />
          Science-backed recovery — Cold Plunge, Sauna, Red Light &amp; More.
        </p>

        {/* CTA buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="font-body text-sm tracking-[0.15em] uppercase px-10 py-4 bg-cold text-background font-medium hover:bg-opacity-90 transition-all duration-300"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Join the Waitlist
          </button>
          <button
            onClick={scrollToServices}
            className="font-body text-sm tracking-[0.15em] uppercase px-10 py-4 border border-foreground/30 text-foreground hover:border-gold hover:text-gold transition-all duration-300"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Explore Services
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToServices}
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-all duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: "1200ms" }}
        aria-label="Scroll down"
      >
        <span
          className="text-[9px] tracking-[0.3em] uppercase"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Scroll
        </span>
        <ChevronDown size={16} className="animate-bounce" />
      </button>
    </section>
  );
}
