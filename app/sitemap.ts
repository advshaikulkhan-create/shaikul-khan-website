import type { MetadataRoute } from "next";
import { sections } from "./knowledge-centre/data";
import { deepLegalResearchData } from "@/lib/deepLegalResearch";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://shaikul-khan-website.vercel.app";

  const staticPages = [
    "/",
    "/about",
    "/ask-ai",
    "/consultation",
    "/disclaimer",
    "/k",
    "/knowledge-centre",
    "/practice-areas/cyber-crime",
    "/privacy-policy",
    "/team",
  ];

  const sectionPages = sections.map((section) => ({
    url: `${baseUrl}/knowledge-centre/${section.id}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const legalResearchPages = deepLegalResearchData.map((item) => ({
    url: `${baseUrl}/k/${item.act.toLowerCase()}-${item.section
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    ...staticPages.map((path) => ({
      url: `${baseUrl}${path}`,
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : 0.7,
    })),
    ...sectionPages,
    ...legalResearchPages,
  ];
}
