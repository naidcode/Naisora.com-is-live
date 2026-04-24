import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Naisora | hey@naisora.com",
  description: "Get in touch with Naisora for a free website audit and AI growth strategy for your Bangalore-based restaurant or cafe.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
