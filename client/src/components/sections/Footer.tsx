/* ============================================================
   SYNAPTIQ — Footer
   Design: Minimal dark footer with brand identity
   ============================================================ */

import { Instagram, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="py-16 border-t"
      style={{
        background: "oklch(0.07 0.004 240)",
        borderColor: "oklch(1 0 0 / 6%)",
      }}
    >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <div
                className="font-display text-2xl font-light tracking-[0.15em] text-foreground"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                SYNAPTIQ
              </div>
              <div
                className="text-gold text-[9px] tracking-[0.35em] uppercase font-body mt-0.5"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                BioCorp
              </div>
            </div>
            <p
              className="font-body text-sm text-muted-foreground leading-relaxed max-w-xs"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Contrast therapy for performance &amp; longevity.
              Science-backed recovery — Fort St. John, BC.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4
              className="font-body text-[10px] tracking-[0.3em] uppercase text-gold mb-5"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Services
            </h4>
            <ul className="space-y-3">
              {["Cold Plunge", "Dry Sauna", "Red Light Therapy", "Compression Recovery"].map(
                (s) => (
                  <li key={s}>
                    <span
                      className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-default"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {s}
                    </span>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Location & Social */}
          <div>
            <h4
              className="font-body text-[10px] tracking-[0.3em] uppercase text-gold mb-5"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Find Us
            </h4>
            <div className="flex items-start gap-3 mb-6">
              <MapPin size={14} className="text-muted-foreground mt-0.5 shrink-0" />
              <p
                className="font-body text-sm text-muted-foreground leading-relaxed"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Fort St. John, BC
                <br />
                <span className="text-cold">Opening Soon</span>
              </p>
            </div>

            <a
              href="https://www.instagram.com/synaptiqbiocorp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-200 group"
            >
              <Instagram size={16} />
              <span
                className="font-body text-sm"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                @synaptiqbiocorp
              </span>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="gold-rule mb-8" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="font-body text-xs text-muted-foreground"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            © {currentYear} Synaptiq BioCorp. All rights reserved.
          </p>
          <p
            className="font-body text-xs text-muted-foreground tracking-[0.1em]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Recover with purpose.
          </p>
        </div>
      </div>
    </footer>
  );
}
