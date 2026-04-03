import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlobalSpotlight from "@/components/GlobalSpotlight";
import Preloader from "@/components/Preloader";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
  display: "swap",
  variable: "--font-instrument",
});

export const metadata: Metadata = {
  title: "Naisora | Bangalore's AI Web Agency for Restaurants & Cafes",
  description: "AI-powered web design agency based in Bangalore, India that builds websites for restaurants and cafes.",
  icons: {
    icon: "/branding-assets/naisora_icon.svg",
    shortcut: "/branding-assets/naisora_icon.svg",
    apple: "/branding-assets/naisora_icon.svg",
  },
  openGraph: {
    title: "Naisora | Bangalore's AI Web Agency",
    description: "AI-powered web design agency based in Bangalore, India that builds websites for restaurants and cafes.",
    images: [{ 
      url: '/branding-assets/naisora_logo.svg',
      width: 1200,
      height: 630,
      alt: 'Naisora Agency Logo'
    }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable} dark`}>
      <body className="bg-bg text-text-primary font-body">
        <Preloader />
        <SmoothScroll />
        <GlobalSpotlight />
        <Navbar />
        {children}
        <Footer />
        <a id="whatsapp-bot" href="https://wa.me/917975219560" target="_blank" rel="noopener noreferrer" style={{
          position: "fixed",
          bottom: "32px",
          right: "32px",
          backgroundColor: "#25D366", /* WhatsApp Green */
          border: "1px solid #128C7E",
          borderRadius: "50%",
          width: "56px",
          height: "56px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          zIndex: 50,
          animation: "fadeUp 800ms ease forwards",
          animationDelay: "3s",
          opacity: 0,
          boxShadow: "0 4px 12px rgba(37, 211, 102, 0.4)",
          transition: "transform 200ms ease, box-shadow 200ms ease"
        }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="white" stroke="none">
            <path d="M12.012 2C6.486 2 2 6.486 2 12.013c0 1.954.512 3.84 1.488 5.51L2 22l4.634-1.22A9.973 9.973 0 0 0 12.012 22c5.526 0 10.012-4.486 10.012-10.013S17.538 2 12.012 2zm5.72 14.28c-.24.672-1.392 1.272-1.92 1.344-.456.048-1.032.12-3.144-.768-2.544-1.056-4.176-3.648-4.32-3.84-.144-.192-1.032-1.368-1.032-2.616 0-1.248.648-1.872.888-2.136.24-.264.528-.336.72-.336.192 0 .384 0 .552.024.192.024.432-.072.672.504.24.6.84 2.064.912 2.232.072.168.12.36.024.552-.096.192-.144.312-.288.48-.144.168-.312.36-.432.48-.144.144-.288.312-.12.6.168.288.744 1.224 1.608 1.992.984.888 1.92 1.176 2.208 1.32.288.144.456.12.624-.072.168-.192.744-.864.936-1.152.192-.288.384-.24.648-.144.264.096 1.68.816 1.968.96.288.144.48.216.552.336.096.12.096.696-.144 1.368z" />
          </svg>
        </a>
        <div id="mobile-audit-bar" style={{
          position: "fixed",
          bottom: "0",
          left: "0",
          width: "100%",
          backgroundColor: "#FFFFFF",
          padding: "16px",
          textAlign: "center",
          display: "none",
          zIndex: 40,
        }} className="mobile-only-bar">
          <a href="/contact" style={{ color: "#080808", fontWeight: "600", fontSize: "15px" }}>Get Free Audit</a>
        </div>
        <style dangerouslySetInnerHTML={{__html:`
          #whatsapp-bot:hover {
            transform: scale(1.1) !important;
            box-shadow: 0 6px 16px rgba(37, 211, 102, 0.6) !important;
          }
          @media (max-width: 768px) {
            #whatsapp-bot { display: none !important; }
            .mobile-only-bar { display: block !important; }
          }
        `}} />
      </body>
    </html>
  );
}
