import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://alignedflowsystems.com"
  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/team`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/privacy-policy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/cookie-policy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ]
}
