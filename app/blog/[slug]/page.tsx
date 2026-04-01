import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/ui/header-2"
import { SiteFooter } from "@/components/ui/site-footer"
import { blogPosts, getBlogPost } from "@/lib/blog-data"
import { renderMarkdown } from "@/lib/render-markdown"

// Required for Cloudflare Pages - prevents "Invalid prerender config" warning
// and ensures RSC prefetch routes are generated correctly alongside the HTML.
export const dynamic = "force-static"

// ── Static params ─────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

// ── Metadata ──────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) return {}

  const url = `https://www.alignedflowsystems.com/blog/${post.slug}`

  return {
    title: `${post.title} | AlignedFlow Systems`,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  }
}

// ── Date formatter ────────────────────────────────────────────────────────────

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) notFound()

  const htmlContent = renderMarkdown(post.content)

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    author: { "@type": "Person", name: post.author },
    publisher: { "@type": "Organization", name: "AlignedFlow Systems" },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    url: `https://www.alignedflowsystems.com/blog/${post.slug}`,
  }

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-foreground flex flex-col">
      <Header />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="flex-1">
        <article className="pt-32 pb-20 px-4">
          <div className="max-w-2xl mx-auto">

            {/* Back link */}
            <Link
              href="/blog"
              className="inline-flex items-center text-sm text-gray-500 hover:text-cyan-400 transition-colors mb-8"
            >
              &larr; Back to Blog
            </Link>

            {/* Category badge */}
            <span className="block text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-4">
              {post.category}
            </span>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
              {post.title}
            </h1>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-8 pb-8 border-b border-white/10">
              <span>{post.author}</span>
              <span>&middot;</span>
              <span>{formatDate(post.publishedAt)}</span>
              <span>&middot;</span>
              <span>{post.readingTime}</span>
            </div>

            {/* Image placeholder */}
            <div
              className="w-full aspect-video rounded-2xl border border-dashed border-white/15 bg-white/3 flex flex-col items-center justify-center gap-3 mb-10"
              aria-label={`Featured image for ${post.title}`}
            >
              <span className="text-2xl opacity-20" aria-hidden="true">[]</span>
              <p className="text-xs text-gray-600 tracking-wide">Featured image coming soon</p>
            </div>

            {/* Body content */}
            <div
              className="
                text-gray-300 leading-relaxed
                [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-white [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:leading-snug
                [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-white [&_h3]:mt-8 [&_h3]:mb-3
                [&_p]:mb-5 [&_p]:text-base [&_p]:leading-relaxed
                [&_ul]:mb-5 [&_ul]:pl-5 [&_ul]:space-y-2 [&_ul]:list-disc [&_ul]:marker:text-cyan-400
                [&_li]:text-base [&_li]:leading-relaxed
                [&_strong]:text-white [&_strong]:font-semibold
                [&_em]:italic
                [&_code]:text-cyan-300 [&_code]:bg-cyan-400/10 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm
                [&_a]:text-cyan-400 [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-cyan-300
                [&_hr]:border-white/10 [&_hr]:my-8
                [&_table]:w-full [&_table]:text-sm [&_table]:border-collapse [&_table]:mb-6
                [&_th]:text-left [&_th]:text-white [&_th]:font-semibold [&_th]:border [&_th]:border-white/10 [&_th]:px-3 [&_th]:py-2 [&_th]:bg-white/5
                [&_td]:border [&_td]:border-white/10 [&_td]:px-3 [&_td]:py-2
              "
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-white/10">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium text-cyan-400/70 bg-cyan-400/10 border border-cyan-400/20 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

          </div>

          {/* Bottom CTA */}
          <div className="max-w-2xl mx-auto mt-16 pt-10 border-t border-white/10">
            <div className="rounded-2xl border border-white/10 bg-white/3 p-8 text-center">
              <p className="text-white font-semibold text-lg mb-3">
                Need a website for your practice?
              </p>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                AlignedFlow Systems builds fast, conversion-focused websites for wellness
                professionals. From landing pages to full multi-page sites - built to attract the
                right clients.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3 text-sm font-semibold text-white bg-cyan-600 rounded-full hover:bg-cyan-500 transition-colors"
              >
                Get in Touch &rarr;
              </Link>
            </div>
          </div>

        </article>
      </main>

      <SiteFooter />
    </div>
  )
}
