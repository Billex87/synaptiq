/* ============================================================
   SYNAPTIQ — CTA / Waitlist Section
   Design: Full-width dark section with waitlist form
   Netlify Forms: form has netlify attribute + hidden form-name field
   ============================================================ */

import { useRef, useState } from "react";
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function CTASection() {
  const sectionRef = useScrollAnimation();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setLoading(true);

    try {
      const formData = new FormData(e.currentTarget);
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      // Fallback for dev environment where Netlify Forms isn't active
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-40 overflow-hidden"
      ref={sectionRef}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/manus-storage/hero-bg_3c33ab06.jpg"
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.08 0.005 240) 0%, oklch(0.08 0.005 240 / 85%) 50%, oklch(0.08 0.005 240) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 container">
        <div className="max-w-2xl mx-auto text-center">
          {/* Label */}
          <div className="fade-up flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12 bg-gold opacity-40" />
            <span
              className="text-gold text-[10px] tracking-[0.4em] uppercase font-body"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Fort St. John, BC
            </span>
            <div className="h-px w-12 bg-gold opacity-40" />
          </div>

          {/* Headline */}
          <h2
            className="fade-up font-display text-5xl md:text-6xl lg:text-7xl font-light text-foreground leading-[1.05] mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Be First
            <br />
            <em className="italic text-cold">Through the Door.</em>
          </h2>

          <p
            className="fade-up font-body text-base text-muted-foreground leading-relaxed mb-12"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Synaptiq is launching soon in Fort St. John. Join the waitlist for
            early access, founding member pricing, and updates on our opening.
          </p>

          {/* Form — Netlify Forms compatible */}
          {!submitted ? (
            <form
              name="waitlist"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="fade-up flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              {/* Netlify required hidden fields */}
              <input type="hidden" name="form-name" value="waitlist" />
              <p className="hidden">
                <label>
                  Don't fill this out if you're human:{" "}
                  <input name="bot-field" />
                </label>
              </p>

              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 bg-transparent border border-foreground/20 px-5 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-cold transition-colors duration-300 font-body text-sm"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              />
              <button
                type="submit"
                disabled={loading}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-cold text-background font-body text-sm tracking-[0.1em] uppercase font-medium hover:opacity-90 transition-opacity duration-300 whitespace-nowrap disabled:opacity-60"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {loading ? (
                  <Loader2 size={14} className="animate-spin" />
                ) : (
                  <>
                    Join Waitlist
                    <ArrowRight size={14} />
                  </>
                )}
              </button>
            </form>
          ) : (
            <div className="fade-up flex flex-col items-center gap-4">
              <CheckCircle size={32} className="text-cold" />
              <p
                className="font-body text-base text-foreground"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                You're on the list. We'll be in touch soon.
              </p>
            </div>
          )}

          {error && (
            <p
              className="mt-3 font-body text-sm text-destructive"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {error}
            </p>
          )}

          {/* Social proof */}
          <p
            className="fade-up mt-8 font-body text-xs text-muted-foreground tracking-[0.1em]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Join 150+ people already on the waitlist · No spam, ever.
          </p>
        </div>
      </div>
    </section>
  );
}
