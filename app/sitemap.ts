import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://alignedflowsystems.com"
  return [
    { url: base, lastModified: "2026-03-23", changeFrequency: "weekly", priority: 1 },
    { url: `${base}/team`, lastModified: "2026-03-23", changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/contact`, lastModified: "2026-03-23", changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/privacy-policy`, lastModified: "2026-03-23", changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/cookie-policy`, lastModified: "2026-03-23", changeFrequency: "yearly", priority: 0.3 },
  ]
}
