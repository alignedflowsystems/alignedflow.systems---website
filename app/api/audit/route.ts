import { NextRequest, NextResponse } from "next/server"

// Cloudflare Pages requires Edge Runtime for all dynamic routes
export const runtime = "edge"

// Google PageSpeed Insights API — free, no key required for reasonable usage.
// Optionally set PAGESPEED_API_KEY in .env.local for higher rate limits.
const PSI_BASE = "https://www.googleapis.com/pagespeedonline/v5/runPagespeed"

const CATEGORIES = ["performance", "accessibility", "best-practices", "seo"] as const
type Category = (typeof CATEGORIES)[number]

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl
  const url = searchParams.get("url")

  if (!url) {
    return NextResponse.json({ error: "Missing url parameter." }, { status: 400 })
  }

  // Basic URL validation
  try {
    new URL(url)
  } catch {
    return NextResponse.json({ error: "Invalid URL." }, { status: 400 })
  }

  // Build PSI request URL
  const params = new URLSearchParams({
    url,
    strategy: "mobile",
    category: CATEGORIES.join("&category="), // PSI accepts repeated params
  })

  // PSI accepts repeated `category` params — URLSearchParams joins them with &
  const psiCategories = CATEGORIES.map((c) => `category=${c}`).join("&")
  const apiKey = process.env.PAGESPEED_API_KEY
  // fields= limits the response to only category scores (~1KB vs ~200KB full response)
  // This is critical on Cloudflare Pages free plan (10ms CPU time limit)
  const psiUrl = `${PSI_BASE}?url=${encodeURIComponent(url)}&strategy=mobile&${psiCategories}&fields=lighthouseResult.categories${apiKey ? `&key=${apiKey}` : ""}`

  try {
    const res = await fetch(psiUrl)

    if (!res.ok) {
      const body = await res.json().catch(() => ({}))
      const rawMessage: string = body?.error?.message ?? ""
      const rawStatus: number = body?.error?.code ?? res.status
      const message = rawMessage.toLowerCase().includes("quota")
        ? "The audit service is temporarily unavailable due to high demand. Please try again in a few minutes."
        : rawMessage.toLowerCase().includes("unable to fetch")
          ? "Could not reach that website. Make sure it is publicly accessible and try again."
          : `Could not analyse that URL. (${rawStatus}: ${rawMessage || "unknown error"})`
      return NextResponse.json({ error: message }, { status: 502 })
    }

    const psiData = await res.json()
    const cats = psiData?.lighthouseResult?.categories

    if (!cats) {
      return NextResponse.json(
        { error: "No Lighthouse data returned. The site may be unreachable." },
        { status: 502 }
      )
    }

    const scores = Object.fromEntries(
      CATEGORIES.map((cat) => [cat, Math.round((cats[cat]?.score ?? 0) * 100)])
    ) as Record<Category, number>

    return NextResponse.json({
      url,
      scores,
      fetchedAt: new Date().toISOString(),
    })
  } catch (err) {
    return NextResponse.json(
      { error: `Failed to contact Google PageSpeed Insights. (${err instanceof Error ? err.message : String(err)})` },
      { status: 502 }
    )
  }
}
