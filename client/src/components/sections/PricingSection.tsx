/* ============================================================
   SYNAPTIQ — Pricing / Founding Member Section
   Design: 3-tier membership cards with founding member emphasis
   Tiers: Drop-In · Monthly · Annual (Founding Member)
   ============================================================ */

import { Check, Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const tiers = [
  {
    name: "Drop-In",
    tagline: "Try it once. Feel the difference.",
    price: "$35",
    unit: "per visit",
    description:
      "Access to a single modality per session. Perfect for first-timers or occasional recovery.",
    features: [
      "Choose one modality per visit",
      "Cold Plunge, Sauna, Red Light, or Compression",
      "Towel & locker included",
      "No commitment required",
    ],
    cta: "Book a Session",
    featured: false,
    accent: "oklch(0.72 0.12 192)", // cold teal
    badge: null,
  },
  {
    name: "Monthly",
    tagline: "Build the habit. Feel the results.",
    price: "$149",
    unit: "per month",
    description:
      "Unlimited access to all four modalities. Designed for consistent recovery and performance.",
    features: [
      "Unlimited all-modality access",
      "Cold Plunge + Sauna + Red Light + Compression",
      "Priority booking",
      "Guest pass (1/month)",
      "Cancel anytime",
    ],
    cta: "Join Monthly",
    featured: false,
    accent: "oklch(0.72 0.12 55)", // amber
    badge: null,
  },
  {
    name: "Founding Member",
    tagline: "Lock in the lowest rate. Forever.",
    price: "$99",
    unit: "per month",
    description:
      "Exclusive pre-launch pricing for early believers. This rate is locked in for life — it will never be offered again after opening day.",
    features: [
      "Everything in Monthly",
      "Founding Member rate — locked for life",
      "First access on opening day",
      "2 guest passes per month",
      "Founding Member recognition",
      "Priority rebooking & scheduling",
    ],
    cta: "Claim Founding Rate",
    featured: true,
    accent: "oklch(0.75 0.12 85)", // gold
    badge: "Limited Spots",
  },
];

export default function PricingSection() {
  const sectionRef = useScrollAnimation();

  const scrollToWaitlist = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="pricing"
      className="py-32"
      style={{ background: "oklch(0.09 0.005 240)" }}
      ref={sectionRef}
    >
      <div className="container">
        {/* Section header */}
        <div className="mb-20 max-w-3xl">
          <div className="fade-up flex items-center gap-4 mb-6">
            <span
              className="text-gold text-[10px] tracking-[0.4em] uppercase"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Membership
            </span>
            <div className="h-px w-12 bg-gold opacity-40" />
          </div>
          <h2
            className="fade-up font-display text-5xl md:text-6xl lg:text-7xl font-light text-foreground leading-[1.05]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Invest in
            <br />
            <em className="italic" style={{ color: "oklch(0.75 0.12 85)" }}>
              Your Recovery.
            </em>
          </h2>
          <p
            className="fade-up mt-6 font-body text-base text-muted-foreground leading-relaxed max-w-xl"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Founding Member pricing is available exclusively during our
            pre-launch phase. Join the waitlist to secure your rate before we
            open.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {tiers.map((tier, idx) => (
            <div
              key={tier.name}
              className={`fade-up relative flex flex-col border transition-all duration-500 group ${
                tier.featured
                  ? "border-gold/60 bg-foreground/[0.03]"
                  : "border-foreground/10 bg-foreground/[0.02]"
              }`}
              style={{ transitionDelay: `${idx * 120}ms` }}
            >
              {/* Featured badge */}
              {tier.badge && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1 text-background text-[10px] tracking-[0.2em] uppercase font-medium"
                  style={{
                    background: tier.accent,
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  <Star size={10} fill="currentColor" />
                  {tier.badge}
                </div>
              )}

              {/* Top accent line */}
              <div
                className="h-px w-full"
                style={{
                  background: tier.featured
                    ? tier.accent
                    : `${tier.accent}40`,
                }}
              />

              <div className="p-8 lg:p-10 flex flex-col flex-1">
                {/* Tier name */}
                <div className="mb-6">
                  <h3
                    className="font-display text-2xl font-light text-foreground mb-1"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {tier.name}
                  </h3>
                  <p
                    className="font-body text-xs text-muted-foreground tracking-[0.05em]"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {tier.tagline}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-6 pb-6 border-b border-foreground/10">
                  <div className="flex items-end gap-2">
                    <span
                      className="font-display text-5xl font-light"
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        color: tier.accent,
                      }}
                    >
                      {tier.price}
                    </span>
                    <span
                      className="font-body text-xs text-muted-foreground mb-2"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {tier.unit}
                    </span>
                  </div>
                  {tier.featured && (
                    <p
                      className="mt-2 font-body text-xs"
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        color: "oklch(0.75 0.12 85)",
                      }}
                    >
                      vs. $149/mo after launch
                    </p>
                  )}
                </div>

                {/* Description */}
                <p
                  className="font-body text-sm text-muted-foreground leading-relaxed mb-6"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {tier.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 font-body text-sm text-foreground/80"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      <Check
                        size={14}
                        className="mt-0.5 shrink-0"
                        style={{ color: tier.accent }}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  onClick={scrollToWaitlist}
                  className="w-full py-4 font-body text-sm tracking-[0.12em] uppercase font-medium transition-all duration-300"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    background: tier.featured ? tier.accent : "transparent",
                    color: tier.featured
                      ? "oklch(0.08 0.005 240)"
                      : tier.accent,
                    border: tier.featured
                      ? "none"
                      : `1px solid ${tier.accent}60`,
                  }}
                  onMouseEnter={(e) => {
                    if (!tier.featured) {
                      (e.currentTarget as HTMLButtonElement).style.background =
                        `${tier.accent}15`;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!tier.featured) {
                      (e.currentTarget as HTMLButtonElement).style.background =
                        "transparent";
                    }
                  }}
                >
                  {tier.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p
          className="fade-up mt-10 text-center font-body text-xs text-muted-foreground"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          All memberships begin on opening day. Founding Member spots are
          limited — join the waitlist to reserve yours.
        </p>
      </div>
    </section>
  );
}
