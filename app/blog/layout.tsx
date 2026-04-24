import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Naisora Journal | AI & Marketing Insights for Restaurants",
  description: "Strategic insights on AI, marketing, and technology to help Bangalore food brands scale profitably. Learn how to grow your restaurant with Naisora.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
