import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Naisora | AI Web Design Agency Bangalore",
  description: "Learn about Naisora, Bangalore's premier AI web agency helping restaurants and cafes scale growth through high-speed websites and automation.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
