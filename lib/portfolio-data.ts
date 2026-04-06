// ── Types ─────────────────────────────────────────────────────────────────────

export type PortfolioProject = {
  /** Stable unique identifier - used as the URL slug and React list key */
  id: string
  client: string
  type: string
  description: string
  /** Optional client quote - leave as empty string when not yet available */
  quote: string
  /** Key result metric achieved after launch */
  result?: string
  /** External link to the live site, or null for visual-only cards */
  link: string | null
  images: {
    desktop: string
    mobile: string
  }
}

// ── Project data ──────────────────────────────────────────────────────────────
// Add new projects here - each object is consumed by both the homepage grid
// and the individual /portfolio/[slug] case study pages.

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "emerald-construction",
    client: "Emerald Construction London",
    type: "Business Website / Construction",
    description:
      "A premium website for a London-based residential and commercial construction company. Built to establish trust and drive enquiries — featuring service showcases, project galleries, testimonials, and a clear conversion flow.",
    quote: "",
    link: null,
    images: {
      desktop: "/portfolio/emerald-construction-desktop.png",
      mobile: "/portfolio/emerald-construction-mobile.png",
    },
  },
  {
    id: "monika-walek-photography",
    client: "Monika Walek",
    type: "Landing Page / Personal Brand Website",
    description:
      "A clean, fast-loading personal brand website designed and developed for a London-based professional. Built with a focus on clear messaging, mobile responsiveness, and conversion.",
    quote: "",
    link: null,
    images: {
      desktop: "/portfolio/monika-walek-desktop.png",
      mobile: "/portfolio/monika-walek-mobile.png",
    },
  },
]
