import Link from "next/link"
import { Header } from "@/components/ui/header-2"
import { SiteFooter } from "@/components/ui/site-footer"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0a0f1a] text-foreground flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center py-40 px-4 text-center">
        <div>
          {/* Large 404 */}
          <p className="text-[120px] md:text-[160px] font-bold leading-none text-cyan-400 select-none"
             style={{ textShadow: "0 0 60px rgba(34,211,238,0.35)" }}
          >
            404
          </p>

          <h1 className="text-2xl md:text-3xl font-bold mt-4 text-white">
            Page not found
          </h1>
          <p className="text-gray-400 mt-3 max-w-sm mx-auto">
            It may have moved or never existed. Try heading back to the homepage.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10 flex-wrap">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-8 py-3 text-sm font-semibold text-white bg-cyan-600 rounded-full hover:bg-cyan-700 transition-colors"
            >
              Back to Home
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 text-sm font-semibold text-white border border-white/20 rounded-full hover:border-cyan-400 hover:text-cyan-400 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
