/* ============================================================
   SYNAPTIQ BIOCORP — Footer
   Brand: Nunito Sans Expanded (ALL CAPS) + DM Sans (body)
   Logo: Real neural wave mark in #8D745D (Mined)
   ============================================================ */

import { Instagram, MapPin } from "lucide-react";

/* Full stacked logo PNG for footer */
function SynaptiqMark({ size = 80 }: { size?: number }) {
  return (
    <img
      src="/images/logo-stacked.png"
      alt="SynaptIQ BioCorp"
      style={{ height: size, width: "auto", objectFit: "contain" }}
    />
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="py-8 lg:py-12 border-t"
      style={{
        background: "oklch(0.05 0.002 240)",
        borderColor: "oklch(1 0 0 / 6%)",
      }}
    >
      <div className="container">
        {/* Brand section — centered at top */}
        <div className="text-center mb-10 lg:mb-14">
          <div className="flex justify-center mb-4">
            <SynaptiqMark size={60} />
          </div>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              fontSize: "13px",
              color: "oklch(0.48 0.01 240)",
              lineHeight: "1.7",
              maxWidth: "400px",
              margin: "0 auto",
            }}
          >
            Contrast therapy for performance + longevity.
            Science-backed recovery — Fort St. John, BC.
          </p>
        </div>

        {/* Services and Find Us — side by side */}
        <div className="grid grid-cols-2 gap-8 lg:gap-16 mb-8 lg:mb-10">
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
                marginBottom: "16px",
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
                      color: "#ffffff",
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
                marginBottom: "16px",
              }}
            >
              Find Us
            </h4>
            <div className="flex items-start gap-3 mb-6">
              <MapPin size={14} style={{ color: "#ffffff", marginTop: "2px", flexShrink: 0 }} />
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 300,
                  fontSize: "13px",
                  color: "#ffffff",
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
              style={{ color: "#ffffff", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#ffffff")}
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
        <div className="gold-rule mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              fontSize: "11px",
              color: "#ffffff",
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
              background: "linear-gradient(135deg, #8D745D 0%, #8D5027 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Recover With Purpose.
          </p>
        </div>
      </div>
    </footer>
  );
}
