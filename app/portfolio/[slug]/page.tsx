import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/ui/header-2"
import { SiteFooter } from "@/components/ui/site-footer"
import { portfolioProjects } from "@/lib/portfolio-data"

// Required for Cloudflare Pages - prevents "Invalid prerender config" warning
// and ensures RSC prefetch routes are generated correctly alongside the HTML.
export const dynamic = "force-static"

// ── Per-project narrative copy ────────────────────────────────────────────────

type ProjectNarrative = {
  challenge: string
  solution: string
}

const narratives: Record<string, ProjectNarrative> = {
  "monika-walek-photography": {
    challenge:
      "Monika needed a professional online presence that reflected the quality of her work without the complexity of a large website. Her existing social media profiles weren't converting visitors into enquiries, and there was no clear place to send potential clients. She needed something clean, fast, and credible.",
    solution:
      "A focused personal brand landing page was built with clear messaging, a portfolio section, and a direct contact form. The design prioritised speed and mobile responsiveness, ensuring a polished first impression across all devices.",
  },
}

// ── Static params ─────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return portfolioProjects.map((project) => ({ slug: project.id }))
}

// ── Metadata ──────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = portfolioProjects.find((p) => p.id === slug)
  if (!project) return {}

  const title = `${project.client} - Case Study | AlignedFlow Systems`
  const description = project.description

  return {
    title,
    description,
    alternates: { canonical: `https://www.alignedflowsystems.com/portfolio/${slug}` },
    openGraph: {
      title,
      description,
      type: "article",
      url: `https://www.alignedflowsystems.com/portfolio/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  }
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = portfolioProjects.find((p) => p.id === slug)

  if (!project) notFound()

  const narrative = narratives[project.id] ?? {
    challenge: project.description,
    solution: `The solution was carefully scoped to match ${project.client}'s goals, using ${project.type.toLowerCase()} best practices and the technologies listed above.`,
  }

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-foreground flex flex-col">
      <Header />

      <main className="flex-1">

        {/* ── Hero ──────────────────────────────────────────────────────────── */}
        <section className="pt-32 pb-16 px-4">
          <div className="max-w-3xl mx-auto">
            {/* Category badge */}
            <span className="inline-block text-xs font-semibold tracking-widest text-cyan-600 uppercase mb-5">
              {project.type}
            </span>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
              {project.client}
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              {project.description}
            </p>

            {/* Tech stack pills */}
            <div className="flex flex-wrap gap-2">
              {project.type.split(" / ").map((tech) => (
                <span
                  key={tech}
                  className="inline-block text-xs font-medium text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── Image placeholder ─────────────────────────────────────────────── */}
        <section className="px-4 pb-16">
          <div className="max-w-3xl mx-auto">
            <div
              className="w-full aspect-[16/9] rounded-2xl border border-dashed border-white/15 bg-white/3 flex flex-col items-center justify-center gap-3"
              aria-label={`Screenshot placeholder for ${project.client}`}
            >
              <span className="text-3xl opacity-30" aria-hidden="true">
                []
              </span>
              <p className="text-sm text-gray-500">Project screenshot coming soon</p>
            </div>
          </div>
        </section>

        {/* ── Challenge ─────────────────────────────────────────────────────── */}
        <section className="px-4 pb-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xs font-semibold tracking-widest text-cyan-600 uppercase mb-3">
              The Challenge
            </h2>
            <p className="text-gray-300 leading-relaxed text-base md:text-lg">
              {narrative.challenge}
            </p>
          </div>
        </section>

        {/* ── Solution ──────────────────────────────────────────────────────── */}
        <section className="px-4 pb-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xs font-semibold tracking-widest text-cyan-600 uppercase mb-3">
              The Solution
            </h2>
            <p className="text-gray-300 leading-relaxed text-base md:text-lg mb-6">
              {narrative.solution}
            </p>

            {/* Tech stack pills - repeated in solution context */}
            <div className="flex flex-wrap gap-2">
              {project.type.split(" / ").map((tech) => (
                <span
                  key={tech}
                  className="inline-block text-xs font-medium text-white/70 bg-white/5 border border-white/10 px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── Results ───────────────────────────────────────────────────────── */}
        {project.result && (
          <section className="px-4 pb-20">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-xs font-semibold tracking-widest text-cyan-600 uppercase mb-5">
                The Results
              </h2>
              <p
                className="text-4xl md:text-5xl font-bold text-emerald-400 leading-tight mb-4"
                style={{ textShadow: "0 0 40px rgba(52,211,153,0.25)" }}
              >
                {project.result}
              </p>
              <p className="text-sm text-gray-500">Measured 30 days after launch.</p>
            </div>
          </section>
        )}

        {/* ── Divider ───────────────────────────────────────────────────────── */}
        <div className="max-w-3xl mx-auto px-4 mb-20">
          <hr className="border-white/10" />
        </div>

        {/* ── CTA ───────────────────────────────────────────────────────────── */}
        <section className="px-4 pb-28 text-center">
          <div className="max-w-xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Want results like this?
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              Let&apos;s build something together.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-white bg-cyan-600 rounded-full hover:bg-cyan-700 transition-colors"
            >
              Start Your Project
            </Link>
          </div>
        </section>

      </main>

      <SiteFooter />
    </div>
  )
}
