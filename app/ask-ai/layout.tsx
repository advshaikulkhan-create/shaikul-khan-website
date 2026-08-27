import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Ask AI | Legal Research Assistant | Advocate Shaikul Khan",
  description:
    "Explore an AI-assisted legal research interface focused on criminal law, cyber crime, digital evidence and Indian criminal procedure.",
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "Ask AI | Legal Research Assistant | Advocate Shaikul Khan",
    description:
      "AI-assisted legal research focused on criminal law, cyber crime and digital evidence.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ask AI | Legal Research Assistant | Advocate Shaikul Khan",
    description:
      "AI-assisted legal research focused on criminal law, cyber crime and digital evidence.",
  },
};

export default function AskAILayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
