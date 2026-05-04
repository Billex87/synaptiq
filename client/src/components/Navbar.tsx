/* ============================================================
   SYNAPTIQ BIOCORP — Navbar
   Brand: Nunito Sans Expanded (ALL CAPS nav) + DM Sans (body)
   Logo: Real neural wave mark in #8D745D (Mined) on dark
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

/* Real SynaptIQ logo mark — PNG */
function SynaptiqMark({ size = 40 }: { size?: number }) {
  return (
    <img
      src="/images/logo-mark.png"
      alt="SynaptIQ mark"
      style={{ height: size, width: "auto" }}
    />
  );
}

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
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "glass-nav py-3" : "py-5"
        }`}
      >
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          >
            <SynaptiqMark size={52} />
            <img
              src="/images/logo-wordmark.png"
              alt="SYNAPTIQ BIO CORP"
              style={{ height: 40, width: "auto" }}
            />
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-9">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 300,
                  fontSize: "13px",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "oklch(0.55 0.01 240)",
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.55 0.01 240)")}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("#contact")}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 400,
                fontSize: "12px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#8D745D",
                border: "1px solid #8D745D",
                padding: "12px 28px",
                background: "transparent",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#8D745D";
                e.currentTarget.style.color = "#000000";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#8D745D";
              }}
            >
              Book Now
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            style={{ color: "#8D745D" }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 transition-all duration-500 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "oklch(0.06 0.003 240 / 97%)", backdropFilter: "blur(24px)" }}
      >
        {/* Mobile logo */}
        <div className="flex flex-col items-center gap-3 mb-4">
          <SynaptiqMark size={52} />
        </div>

        {navLinks.map((link) => (
          <button
            key={link.label}
            onClick={() => handleNavClick(link.href)}
            style={{
              fontFamily: "'Nunito Sans', sans-serif",
              fontStretch: "expanded",
              fontWeight: 800,
              fontSize: "22px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#ffffff",
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#8D745D")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#ffffff")}
          >
            {link.label}
          </button>
        ))}
        <button
          onClick={() => handleNavClick("#contact")}
          style={{
            marginTop: "8px",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 400,
            fontSize: "11px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#8D745D",
            border: "1px solid #8D745D",
            padding: "14px 36px",
            background: "transparent",
          }}
        >
          Book Now
        </button>
      </div>
    </>
  );
}
