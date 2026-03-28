import { MetadataRoute } from "next"
import { portfolioProjects } from "@/lib/portfolio-data"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://alignedflowsystems.com"

  const portfolioEntries: MetadataRoute.Sitemap = portfolioProjects.map((project) => ({
    url: `${base}/portfolio/${project.id}`,
    lastModified: "2026-03-28",
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  return [
    { url: base, lastModified: "2026-03-23", changeFrequency: "weekly", priority: 1 },
    { url: `${base}/team`, lastModified: "2026-03-23", changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/contact`, lastModified: "2026-03-23", changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/free-audit`, lastModified: "2026-03-28", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/privacy-policy`, lastModified: "2026-03-23", changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/cookie-policy`, lastModified: "2026-03-23", changeFrequency: "yearly", priority: 0.3 },
    ...portfolioEntries,
  ]
}
