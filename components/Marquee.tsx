"use client";

export default function Marquee() {
  const items = [
    "Next.js", "React", "Node.js", "Firebase", "Supabase", "Elementor", "AI", "Tailwind CSS", "Wordpress", "SEO" , "HTML" , "CSS" , "Javascript" , "PHP" 
  ];
  
  // Double the list for infinite scroll effect
  const displayItems = [...items, ...items, ...items];

  return (
    <div style={{
      width: "100%",
      backgroundColor: "#0C0C0C",
      borderTop: "1px solid #1A1A1A",
      borderBottom: "1px solid #1A1A1A",
      overflow: "hidden",
      padding: "24px 0",
      position: "relative"
    }}>
      <div className="animate-marquee" style={{
        display: "flex",
        alignItems: "center",
        gap: "48px",
        whiteSpace: "nowrap"
      }}>
        {displayItems.map((item, index) => (
          <div key={index} style={{
            display: "flex",
            alignItems: "center",
            gap: "48px",
            color: "#FFFFFF",
            fontFamily: "var(--font-dm-sans)",
            fontSize: "15px",
            fontWeight: 500,
            whiteSpace: "nowrap",
            transform: "translateZ(0)"
          }}>
            {item}
            {index < displayItems.length - 1 && (
              <span style={{ color: "#333333" }}>•</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
