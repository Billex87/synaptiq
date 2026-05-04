/* ============================================================
   SYNAPTIQ — Photo Gallery Section
   Design: Masonry-style lifestyle photo strip from brand guide
   Placed between Testimonials and CTA
   ============================================================ */

import { useEffect, useRef } from "react";

const photos = [
  { src: "/images/gallery-man-sauna.jpg", alt: "Man in sauna", span: "col-span-1 row-span-2" },
  { src: "/images/gallery-woman-shower.jpg", alt: "Woman under cold shower", span: "col-span-1" },
  { src: "/images/gallery-woman-sauna.jpg", alt: "Woman relaxing in sauna", span: "col-span-1" },
  { src: "/images/gallery-woman-cold-plunge.jpg", alt: "Woman in cold plunge", span: "col-span-1 row-span-2" },
  { src: "/images/gallery-man-cold-plunge.jpg", alt: "Man in cold plunge", span: "col-span-1" },
  { src: "/images/gallery-red-light.jpg", alt: "Red light therapy", span: "col-span-1" },
  { src: "/images/branded-towel.jpg", alt: "SynaptIQ branded towel", span: "col-span-1" },
  { src: "/images/gallery-spa-corridor.jpg", alt: "Luxury spa corridor", span: "col-span-1" },
];

export default function PhotoGallerySection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll(".gallery-item");
            items.forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 80);
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
      className="py-16 lg:py-24 overflow-hidden"
      ref={sectionRef}
      style={{ background: "oklch(0.06 0.003 240)" }}
    >
      <div className="container mb-8 lg:mb-14">
        <div className="gold-rule mb-12" />
        <div className="flex items-center justify-between">
          <div>
            <p
              className="text-[10px] tracking-[0.4em] uppercase mb-3"
              style={{ color: "#8D745D", fontFamily: "'DM Sans', sans-serif" }}
            >
              The Experience
            </p>
            <h2
              style={{
                fontFamily: "'Nunito Sans', sans-serif",
                fontStretch: "expanded",
                fontWeight: 800,
                fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)",
                lineHeight: "1.05",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                color: "#ffffff",
              }}
            >
              FEEL IT BEFORE
              <br />
              <span style={{ color: "#8D745D" }}>YOU ARRIVE.</span>
            </h2>
          </div>
          <a
            href="https://www.instagram.com/synaptiqbiocorp"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase transition-opacity hover:opacity-70"
            style={{ color: "#8D745D", fontFamily: "'DM Sans', sans-serif" }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
            @synaptiqbiocorp
          </a>
        </div>
      </div>

      {/* Gallery grid */}
      <div className="container">
        <div
          className="grid gap-2"
          style={{
            gridTemplateColumns: "repeat(4, 1fr)",
            gridAutoRows: "220px",
          }}
        >
          {/* Row 1 */}
          <div
            className="gallery-item fade-in overflow-hidden rounded-sm"
            style={{ gridRow: "span 2" }}
          >
            <img
              src="/images/gallery-man-sauna.jpg"
              alt="Man in sauna"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="gallery-item fade-in overflow-hidden rounded-sm">
            <img
              src="/images/gallery-woman-shower.jpg"
              alt="Woman under cold shower"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="gallery-item fade-in overflow-hidden rounded-sm">
            <img
              src="/images/gallery-red-light.jpg"
              alt="Red light therapy"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div
            className="gallery-item fade-in overflow-hidden rounded-sm"
            style={{ gridRow: "span 2" }}
          >
            <img
              src="/images/sauna-interior.jpg"
              alt="Luxury sauna interior"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Row 2 */}
          <div className="gallery-item fade-in overflow-hidden rounded-sm">
            <img
              src="/images/gallery-woman-sauna.jpg"
              alt="Woman relaxing in sauna"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="gallery-item fade-in overflow-hidden rounded-sm">
            <img
              src="/images/gallery-woman-cold-plunge.jpg"
              alt="Woman in cold plunge"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Row 3 */}
          <div
            className="gallery-item fade-in overflow-hidden rounded-sm"
            style={{ gridRow: "span 2" }}
          >
            <img
              src="/images/gallery-man-cold-plunge.jpg"
              alt="Man in cold plunge"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="gallery-item fade-in overflow-hidden rounded-sm">
            <img
              src="/images/gallery-spa-corridor.jpg"
              alt="Luxury spa corridor"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="gallery-item fade-in overflow-hidden rounded-sm">
            <img
              src="/images/gallery-hand-water.jpg"
              alt="Hand in cold plunge water"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="gallery-item fade-in overflow-hidden rounded-sm">
            <img
              src="/images/branded-towel.jpg"
              alt="SynaptIQ branded towel"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Row 4 */}
          <div className="gallery-item fade-in overflow-hidden rounded-sm">
            <img
              src="/images/gallery-women-cold-plunge.jpg"
              alt="Women in cold plunge"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="gallery-item fade-in overflow-hidden rounded-sm">
            <img
              src="/images/gallery-couple-rain.jpg"
              alt="Couple in contrast therapy"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="gallery-item fade-in overflow-hidden rounded-sm">
            <img
              src="/images/brand-signage.jpg"
              alt="SynaptIQ BioCorp signage"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* Mobile: horizontal scroll strip */}
      <style>{`
        @media (max-width: 768px) {
          .gallery-grid-desktop { display: none; }
        }
      `}</style>
    </section>
  );
}
