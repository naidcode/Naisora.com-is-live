"use client";
import AnimatedSection from "./AnimatedSection";

export default function PricingCards() {
  const plans = [
    {
      name: "Starter",
      price: "₹14,999",
      billing: "one-time",
      features: [
        "Landing Page",
        "Mobile Responsive",
        "Google Business Setup",
        "Contact Form",
        "WhatsApp Button"
      ],
      highlight: false,
      btnStyle: "btn-ghost"
    },
    {
      name: "Growth",
      price: "₹29,999",
      billing: "one-time",
      features: [
        "Full Website 5 pages",
        "SEO",
        "Google Business",
        "Menu Page",
        "WhatsApp Automation",
        "1 Month Support"
      ],
      highlight: true,
      btnStyle: "btn-primary",
      tag: "MOST POPULAR"
    },
    {
      name: "Premium",
      price: "₹49,999",
      billing: "one-time",
      features: [
        "Full Website 8 pages",
        "Advanced SEO",
        "AI Automation",
        "Monthly Reports",
        "Branding",
        "3 Months Support"
      ],
      highlight: false,
      btnStyle: "btn-ghost"
    }
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: "var(--color-bg)", borderTop: "1px solid #1A1A1A" }}>
      <div className="container">
        <AnimatedSection>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <h2 className="section-h2" style={{ fontFamily: "var(--font-syne)", color: "var(--color-white)", margin: "0 auto 16px auto", maxWidth: "800px" }}>
              Clear Pricing. No Hidden Costs.
            </h2>
            <p style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "15px",
              color: "#666666",
              maxWidth: "600px",
              margin: "0 auto"
            }}>
              Every package includes a free audit, competitor analysis, and a 100 PageSpeed guarantee.
            </p>
          </div>
        </AnimatedSection>
        
        <div className="grid grid-cols-3 md:grid-cols-1 gap-8" style={{ alignItems: "stretch" }}>
          {plans.map((p, i) => (
            <AnimatedSection key={i} delay={(i + 1) * 80}>
              <div className="card" style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                borderColor: p.highlight ? "#2A2A2A" : "var(--color-border)",
                position: "relative"
              }}>
                {p.highlight && (
                  <div style={{
                    position: "absolute",
                    top: "-12px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    backgroundColor: "#1F1F1F",
                    border: "1px solid #2A2A2A",
                    color: "#888888",
                    padding: "4px 12px",
                    borderRadius: "100px",
                    fontSize: "11px",
                    fontFamily: "var(--font-dm-sans)",
                    fontWeight: 600,
                    letterSpacing: "0.12em",
                    whiteSpace: "nowrap"
                  }}>
                    {p.tag}
                  </div>
                )}
                <div style={{ marginBottom: "32px", flexGrow: 1 }}>
                  <h3 style={{ fontFamily: "var(--font-syne)", fontSize: "20px", fontWeight: 600, color: "var(--color-white)", marginBottom: "16px" }}>
                    {p.name}
                  </h3>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginBottom: "32px" }}>
                    <span style={{ fontFamily: "var(--font-syne)", fontSize: p.highlight ? "40px" : "32px", fontWeight: 700, color: "var(--color-white)", lineHeight: 1 }}>
                      {p.price}
                    </span>
                    <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: "14px", color: "#555555" }}>
                      {p.billing}
                    </span>
                  </div>
                  
                  <ul style={{ listStyleType: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
                    {p.features.map((f, fi) => (
                      <li key={fi} style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontFamily: "var(--font-dm-sans)", fontSize: "14px", color: "#777777" }}>
                        <span style={{ color: "var(--color-white)" }}>✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <a href="/contact" className={`btn ${p.btnStyle} w-full`} style={{ fontFamily: "var(--font-dm-sans)", display: "block", textAlign: "center" }}>
                  Get Started
                </a>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
