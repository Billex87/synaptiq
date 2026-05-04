/* ============================================================
   SYNAPTIQ — Navbar Component
   Design: Dark Sanctum — glass nav with gold accent
   ============================================================ */

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Science", href: "#science" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "glass-nav py-4" : "py-6"
        }`}
      >
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          >
            {/* Geometric mark */}
            <svg viewBox="0 0 56 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
              <rect x="1" y="1" width="54" height="34" rx="1" stroke="white" strokeWidth="1.8" fill="none"/>
              <polyline points="4,33 18,5 32,33" stroke="white" strokeWidth="1.8" fill="none" strokeLinejoin="round"/>
              <polyline points="24,33 38,5 52,33" stroke="white" strokeWidth="1.8" fill="none" strokeLinejoin="round"/>
            </svg>
            {/* Wordmark */}
            <div className="flex flex-col leading-none">
              <span
                className="text-foreground text-[13px] tracking-[0.3em] uppercase font-light"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                SYNAPTIQ
              </span>
              <span
                className="text-gold text-[8px] tracking-[0.35em] uppercase font-light mt-0.5"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                BIO CORP
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="font-body text-sm tracking-[0.12em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("#contact")}
              className="font-body text-sm tracking-[0.12em] uppercase px-6 py-2.5 border border-gold text-gold hover:bg-gold hover:text-background transition-all duration-300"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Book Now
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "oklch(0.08 0.005 240 / 97%)", backdropFilter: "blur(20px)" }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-10">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="font-display text-4xl font-light tracking-[0.1em] text-foreground hover:text-gold transition-colors duration-300"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("#contact")}
            className="mt-4 font-body text-sm tracking-[0.15em] uppercase px-10 py-4 border border-gold text-gold hover:bg-gold hover:text-background transition-all duration-300"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Book Now
          </button>
        </div>
      </div>
    </>
  );
}
