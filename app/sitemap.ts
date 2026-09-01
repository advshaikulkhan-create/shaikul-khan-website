import type { MetadataRoute } from "next";

const SITE_URL = "https://shaikul-khan-website.vercel.app";

// Known Knowledge Centre act slugs (kept in sync with app/knowledge-centre/[actSlug]/page.tsx)
const ACT_SLUGS = [
  "bns",
  "bnss",
  "bsa",
  "ipc",
  "crpc",
  "iea",
  "pocso",
  "jj",
  "ndps",
  "mmdr",
  "rba",
  "arms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/knowledge-centre`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  const actRoutes: MetadataRoute.Sitemap = ACT_SLUGS.map((slug) => ({
    url: `${SITE_URL}/knowledge-centre/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...actRoutes];
}
