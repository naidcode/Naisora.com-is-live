import AnimatedSection from "@/components/AnimatedSection";
import BlogGrid from "@/components/BlogGrid";

export default function Blog() {
  return (
    <main style={{ minHeight: "100vh", paddingTop: "40px", backgroundColor: "var(--color-bg)" }}>
      {/* Hero */}
      <section className="section-padding" style={{ paddingBottom: "0px" }}>
        <div className="container" style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <AnimatedSection>
            <span className="section-tag" style={{ fontFamily: "var(--font-dm-sans)" }}>NAISORA BLOG</span>
            <h1 className="hero-h1" style={{ fontSize: "48px", fontFamily: "var(--font-syne)", marginBottom: "24px", color: "var(--color-white)" }}>
              Tips & Guides for Restaurant Owners
            </h1>
            <p className="body-large" style={{ fontFamily: "var(--font-dm-sans)", color: "#666666" }}>
              Learn how to get more customers online without paying Zomato commissions.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding">
        <div className="container">
          <BlogGrid />
        </div>
      </section>
    </main>
  );
}
