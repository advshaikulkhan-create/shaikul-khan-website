import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Cyber Crime Defence | Digital Evidence & Cyber Litigation",
  description:
    "Cyber crime defence, digital evidence analysis, electronic evidence and cyber litigation resources from Advocate Shaikul Khan.",
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "Cyber Crime Defence | Advocate Shaikul Khan",
    description:
      "Cyber crime defence, digital evidence analysis and cyber litigation resources.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cyber Crime Defence | Advocate Shaikul Khan",
    description:
      "Cyber crime defence, digital evidence analysis and cyber litigation resources.",
  },
};

export default function CyberCrimeLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
