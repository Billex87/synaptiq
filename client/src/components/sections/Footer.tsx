/* ============================================================
   SYNAPTIQ BIOCORP — Footer
   Brand: Nunito Sans Expanded (ALL CAPS) + DM Sans (body)
   Logo: Real neural wave mark in #8D745D (Mined)
   ============================================================ */

import { Instagram, MapPin } from "lucide-react";

function SynaptiqMark({ size = 44 }: { size?: number; color?: string }) {
  return (
    <img
      src="/images/logo-gold.png"
      alt="SynaptIQ BioCorp"
      style={{ height: size, width: "auto", objectFit: "contain" }}
    />
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="py-16 border-t"
      style={{
        background: "oklch(0.05 0.002 240)",
        borderColor: "oklch(1 0 0 / 6%)",
      }}
    >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <SynaptiqMark size={44} color="#8D745D" />
              <div className="flex flex-col leading-none">
                <div
                  style={{
                    fontFamily: "'Nunito Sans', sans-serif",
                    fontStretch: "expanded",
                    fontWeight: 800,
                    fontSize: "14px",
                    letterSpacing: "0.28em",
                    textTransform: "uppercase",
                    color: "#ffffff",
                  }}
                >
                  SYNAPTIQ
                </div>
                <div
                  style={{
                    fontFamily: "'Nunito Sans', sans-serif",
                    fontStretch: "expanded",
                    fontWeight: 400,
                    fontSize: "8px",
                    letterSpacing: "0.32em",
                    textTransform: "uppercase",
                    color: "#8D745D",
                    marginTop: "4px",
                  }}
                >
                  BIO CORP
                </div>
              </div>
            </div>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 300,
                fontSize: "13px",
                color: "oklch(0.48 0.01 240)",
                lineHeight: "1.7",
                maxWidth: "260px",
              }}
            >
              Contrast therapy for performance + longevity.
              Science-backed recovery — Fort St. John, BC.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4
              style={{
                fontFamily: "'Nunito Sans', sans-serif",
                fontStretch: "expanded",
                fontWeight: 700,
                fontSize: "9px",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#8D745D",
                marginBottom: "20px",
              }}
            >
              Services
            </h4>
            <ul className="space-y-3">
              {["Cold Plunge", "Dry Sauna", "Red Light Therapy", "Compression Recovery"].map((s) => (
                <li key={s}>
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 300,
                      fontSize: "13px",
                      color: "oklch(0.48 0.01 240)",
                      cursor: "default",
                    }}
                  >
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Social */}
          <div>
            <h4
              style={{
                fontFamily: "'Nunito Sans', sans-serif",
                fontStretch: "expanded",
                fontWeight: 700,
                fontSize: "9px",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#8D745D",
                marginBottom: "20px",
              }}
            >
              Find Us
            </h4>
            <div className="flex items-start gap-3 mb-6">
              <MapPin size={14} style={{ color: "oklch(0.48 0.01 240)", marginTop: "2px", flexShrink: 0 }} />
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 300,
                  fontSize: "13px",
                  color: "oklch(0.48 0.01 240)",
                  lineHeight: "1.7",
                }}
              >
                Fort St. John, BC
                <br />
                <span style={{ color: "#8D745D" }}>Opening Soon</span>
              </p>
            </div>

            <a
              href="https://www.instagram.com/synaptiqbiocorp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 group"
              style={{ color: "oklch(0.48 0.01 240)", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.48 0.01 240)")}
            >
              <Instagram size={15} />
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 300,
                  fontSize: "13px",
                }}
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
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              fontSize: "11px",
              color: "oklch(0.38 0.008 240)",
              letterSpacing: "0.05em",
            }}
          >
            © {currentYear} Synaptiq BioCorp. All rights reserved.
          </p>
          <p
            style={{
              fontFamily: "'Nunito Sans', sans-serif",
              fontStretch: "expanded",
              fontWeight: 600,
              fontSize: "9px",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#8D745D",
            }}
          >
            Recover With Purpose.
          </p>
        </div>
      </div>
    </footer>
  );
}
