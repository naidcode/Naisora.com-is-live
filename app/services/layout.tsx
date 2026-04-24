import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Design & SEO for Restaurants | Naisora Bangalore",
  description: "Explore Naisora's AI-powered web design and local SEO services designed specifically for restaurants and cafes in Bangalore to increase direct bookings and revenue.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
