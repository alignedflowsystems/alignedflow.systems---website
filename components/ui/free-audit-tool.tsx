"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "motion/react"
import { Search, AlertCircle, ExternalLink, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

// ── Types ─────────────────────────────────────────────────────────────────────

type Category = "performance" | "accessibility" | "best-practices" | "seo"

type AuditResult = {
  url: string
  scores: Record<Category, number>
  fetchedAt: string
}

type AuditState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: AuditResult }
  | { status: "error"; message: string }

// ── Helpers ───────────────────────────────────────────────────────────────────

const CATEGORY_LABELS: Record<Category, string> = {
  performance: "Performance",
  accessibility: "Accessibility",
  "best-practices": "Best Practices",
  seo: "SEO",
}

function scoreColour(score: number): string {
  if (score >= 90) return "text-emerald-400"
  if (score >= 50) return "text-amber-400"
  return "text-red-400"
}

function scoreBg(score: number): string {
  if (score >= 90) return "bg-emerald-400"
  if (score >= 50) return "bg-amber-400"
  return "bg-red-400"
}

function scoreLabel(score: number): string {
  if (score >= 90) return "Good"
  if (score >= 50) return "Needs Work"
  return "Poor"
}

function normaliseUrl(raw: string): string {
  const trimmed = raw.trim()
  if (/^https?:\/\//i.test(trimmed)) return trimmed
  return `https://${trimmed}`
}

// ── Score ring ────────────────────────────────────────────────────────────────

function ScoreRing({ score, label }: { score: number; label: string }) {
  const radius = 36
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (score / 100) * circumference

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-24 h-24">
        {/* Track */}
        <svg className="w-full h-full -rotate-90" viewBox="0 0 96 96">
          <circle
            cx="48"
            cy="48"
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth="6"
            className="text-white/10"
          />
          <motion.circle
            cx="48"
            cy="48"
            r={radius}
            fill="none"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className={scoreBg(score).replace("bg-", "stroke-")}
          />
        </svg>
        {/* Score number */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span
            className={`text-2xl font-bold tabular-nums ${scoreColour(score)}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {score}
          </motion.span>
        </div>
      </div>
      <div className="text-center">
        <p className="text-xs font-semibold text-foreground">{label}</p>
        <p className={`text-xs ${scoreColour(score)}`}>{scoreLabel(score)}</p>
      </div>
    </div>
  )
}

// ── Main component ────────────────────────────────────────────────────────────

export function FreeAuditTool() {
  const [url, setUrl] = useState("")
  const [state, setState] = useState<AuditState>({ status: "idle" })

  async function runAudit(e: React.FormEvent) {
    e.preventDefault()
    if (!url.trim()) return

    setState({ status: "loading" })

    const normalised = normaliseUrl(url)

    // Validate URL shape before sending
    try {
      new URL(normalised)
    } catch {
      setState({ status: "error", message: "Please enter a valid website address." })
      return
    }

    try {
      const res = await fetch(
        `/api/audit?url=${encodeURIComponent(normalised)}`,
        { signal: AbortSignal.timeout(30_000) }
      )

      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        setState({
          status: "error",
          message: body.error ?? "Could not analyse that URL. Make sure the site is publicly accessible.",
        })
        return
      }

      const data: AuditResult = await res.json()
      setState({ status: "success", data })
    } catch (err) {
      const isTimeout = err instanceof Error && err.name === "TimeoutError"
      setState({
        status: "error",
        message: isTimeout
          ? "The audit timed out — the site may be slow to respond. Try again in a moment."
          : "Something went wrong. Please try again.",
      })
    }
  }

  const categories: Category[] = ["performance", "accessibility", "best-practices", "seo"]

  return (
    <section className="py-20 px-4">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <motion.span
            className="text-xs font-semibold tracking-widest text-cyan-600 uppercase"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Free Tool
          </motion.span>
          <motion.h1
            className="mt-3 text-3xl md:text-4xl font-bold"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            Website Audit
          </motion.h1>
          <motion.p
            className="mt-4 text-muted-foreground max-w-md mx-auto"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
          >
            Enter your website URL for an instant report on performance, SEO,
            accessibility, and best practices — powered by Google PageSpeed
            Insights.
          </motion.p>
        </div>

        {/* Input form */}
        <motion.form
          onSubmit={runAudit}
          className="flex gap-2 mb-10"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.3 }}
        >
          <Input
            type="text"
            placeholder="yourwebsite.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="flex-1 h-12 text-base"
            disabled={state.status === "loading"}
            aria-label="Website URL"
          />
          <Button
            type="submit"
            className="h-12 px-5 shrink-0"
            disabled={state.status === "loading" || !url.trim()}
          >
            {state.status === "loading" ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                </svg>
                Auditing…
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Search className="h-4 w-4" />
                Audit
              </span>
            )}
          </Button>
        </motion.form>

        {/* Results */}
        <AnimatePresence mode="wait">

          {/* Error state */}
          {state.status === "error" && (
            <motion.div
              key="error"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex items-start gap-3 rounded-xl border border-red-500/30 bg-red-500/10 px-5 py-4 text-sm text-red-400"
            >
              <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" />
              <p>{state.message}</p>
            </motion.div>
          )}

          {/* Success state */}
          {state.status === "success" && (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              {/* Audited URL */}
              <div className="flex items-center gap-2 mb-8 text-sm text-muted-foreground">
                <ExternalLink className="h-3.5 w-3.5 shrink-0" />
                <a
                  href={state.data.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="truncate hover:text-foreground transition-colors"
                >
                  {state.data.url}
                </a>
                <span className="ml-auto shrink-0 text-xs">
                  Mobile score
                </span>
              </div>

              {/* Score rings */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10">
                {categories.map((cat) => (
                  <ScoreRing
                    key={cat}
                    score={state.data.scores[cat]}
                    label={CATEGORY_LABELS[cat]}
                  />
                ))}
              </div>

              {/* Score legend */}
              <div className="flex items-center justify-center gap-6 text-xs text-muted-foreground mb-10">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  90–100 Good
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  50–89 Needs Work
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-400" />
                  0–49 Poor
                </span>
              </div>

              {/* CTA */}
              <div className="rounded-2xl border border-border/60 bg-card/40 p-6 text-center">
                <p className="font-semibold text-foreground mb-1">
                  Want to improve these scores?
                </p>
                <p className="text-sm text-muted-foreground mb-5">
                  AlignedFlow Systems builds fast, optimised websites from the ground up.
                  Let&apos;s talk about your project.
                </p>
                <Button asChild>
                  <Link href="/contact" className="inline-flex items-center gap-2">
                    Get a Free Quote
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>

              {/* Attribution */}
              <p className="text-center text-xs text-muted-foreground mt-6 opacity-60">
                Scores are generated by{" "}
                <a
                  href="https://developers.google.com/speed/docs/insights/v5/about"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2"
                >
                  Google PageSpeed Insights
                </a>{" "}
                and reflect mobile performance at time of audit.
              </p>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </section>
  )
}
