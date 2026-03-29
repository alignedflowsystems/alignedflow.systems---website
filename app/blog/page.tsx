import Link from "next/link"
import { Header } from "@/components/ui/header-2"
import { SiteFooter } from "@/components/ui/site-footer"
import { getSortedBlogPosts } from "@/lib/blog-data"

export const metadata = {
  title: "Blog | AlignedFlow Systems",
  description:
    "Practical advice on web design, strategy, and online presence for wellness coaches, therapists, and small businesses.",
  alternates: { canonical: "https://www.alignedflowsystems.com/blog" },
}

function formatDate(iso: string): string {
  const date = new Date(iso)
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })
}

export default function BlogPage() {
  const posts = getSortedBlogPosts()

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-foreground flex flex-col">
      <Header />

      <main className="flex-1">
        {/* ── Section header ──────────────────────────────────────────────────── */}
        <section className="pt-32 pb-12 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <span className="inline-block text-xs font-semibold tracking-widest text-cyan-600 uppercase mb-4">
              Blog
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Insights &amp; Advice
            </h1>
            <p className="text-lg text-gray-400 max-w-xl mx-auto">
              Practical writing on web design, strategy, and building an online presence that
              actually works for wellness professionals and small businesses.
            </p>
          </div>
        </section>

        {/* ── Post grid ───────────────────────────────────────────────────────── */}
        <section className="px-4 pb-28">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-2xl border border-white/10 bg-white/3 hover:border-cyan-500/40 hover:bg-white/5 transition-all duration-300 overflow-hidden"
              >
                {/* Image placeholder */}
                <div className="w-full aspect-video bg-slate-800/60 flex items-center justify-center border-b border-white/5">
                  <span className="text-xs text-gray-600 font-medium tracking-wide uppercase">
                    {post.category}
                  </span>
                </div>

                <div className="flex flex-col flex-1 p-5 gap-3">
                  {/* Category badge */}
                  <span className="inline-block self-start text-xs font-semibold tracking-widest text-cyan-600 uppercase">
                    {post.category}
                  </span>

                  {/* Title */}
                  <h2 className="text-base font-semibold text-white leading-snug group-hover:text-cyan-300 transition-colors">
                    {post.title}
                  </h2>

                  {/* Description */}
                  <p className="text-sm text-gray-400 leading-relaxed line-clamp-3 flex-1">
                    {post.description}
                  </p>

                  {/* Footer row */}
                  <div className="flex items-center justify-between pt-3 border-t border-white/8 mt-auto">
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <span>{formatDate(post.publishedAt)}</span>
                      <span>&middot;</span>
                      <span>{post.readingTime}</span>
                    </div>
                    <span className="text-xs text-cyan-500 font-medium group-hover:text-cyan-400 transition-colors">
                      Read more &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
