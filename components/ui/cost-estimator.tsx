"use client"

import React, { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "motion/react"
import {
  Layout,
  Globe,
  ShoppingBag,
  Code2,
  Mail,
  CalendarDays,
  BookOpen,
  Store,
  Package,
  Lock,
  Sparkles,
  Languages,
  Check,
  ArrowLeft,
  ChevronRight,
  Calculator,
} from "lucide-react"
import { cn } from "@/lib/utils"

// ── Types ─────────────────────────────────────────────────────────────────────

interface SiteType {
  id: string
  label: string
  description: string
  icon: React.ReactNode
  basePrice: number
}

interface Feature {
  id: string
  label: string
  icon: React.ReactNode
  price: number
  included: boolean
  alwaysSelected: boolean
}

interface SupportPlan {
  id: string
  label: string
  description: string
  monthlyPrice: number
}

interface Timeline {
  id: string
  label: string
  description: string
}

// ── Data ──────────────────────────────────────────────────────────────────────

const siteTypes: SiteType[] = [
  {
    id: "landing-page",
    label: "Landing Page",
    description: "1-3 pages",
    icon: <Layout className="h-6 w-6" />,
    basePrice: 497,
  },
  {
    id: "business-website",
    label: "Business Website",
    description: "4-8 pages",
    icon: <Globe className="h-6 w-6" />,
    basePrice: 997,
  },
  {
    id: "ecommerce-store",
    label: "E-commerce Store",
    description: "Full online shop",
    icon: <ShoppingBag className="h-6 w-6" />,
    basePrice: 1997,
  },
  {
    id: "web-application",
    label: "Web Application",
    description: "Custom functionality",
    icon: <Code2 className="h-6 w-6" />,
    basePrice: 2997,
  },
]

const features: Feature[] = [
  {
    id: "contact-form",
    label: "Contact form",
    icon: <Mail className="h-5 w-5" />,
    price: 0,
    included: true,
    alwaysSelected: true,
  },
  {
    id: "booking",
    label: "Online booking / scheduling",
    icon: <CalendarDays className="h-5 w-5" />,
    price: 300,
    included: false,
    alwaysSelected: false,
  },
  {
    id: "blog",
    label: "Blog",
    icon: <BookOpen className="h-5 w-5" />,
    price: 200,
    included: false,
    alwaysSelected: false,
  },
  {
    id: "shop-small",
    label: "Online shop (up to 50 products)",
    icon: <Store className="h-5 w-5" />,
    price: 500,
    included: false,
    alwaysSelected: false,
  },
  {
    id: "shop-large",
    label: "Online shop (50+ products)",
    icon: <Package className="h-5 w-5" />,
    price: 800,
    included: false,
    alwaysSelected: false,
  },
  {
    id: "client-portal",
    label: "Client portal / login area",
    icon: <Lock className="h-5 w-5" />,
    price: 600,
    included: false,
    alwaysSelected: false,
  },
  {
    id: "animations",
    label: "Custom animations & interactions",
    icon: <Sparkles className="h-5 w-5" />,
    price: 400,
    included: false,
    alwaysSelected: false,
  },
  {
    id: "multilang",
    label: "Multi-language support",
    icon: <Languages className="h-5 w-5" />,
    price: 300,
    included: false,
    alwaysSelected: false,
  },
]

const supportPlans: SupportPlan[] = [
  {
    id: "none",
    label: "No thanks, I'll manage it myself",
    description: "You handle all updates and maintenance",
    monthlyPrice: 0,
  },
  {
    id: "basic",
    label: "Basic maintenance",
    description: "Updates + backups",
    monthlyPrice: 49,
  },
  {
    id: "growth",
    label: "Growth plan",
    description: "Maintenance + monthly content updates + analytics",
    monthlyPrice: 99,
  },
  {
    id: "priority",
    label: "Priority support",
    description: "Everything + priority response + monthly strategy call",
    monthlyPrice: 149,
  },
]

const timelines: Timeline[] = [
  {
    id: "asap",
    label: "ASAP",
    description: "Within 2 weeks",
  },
  {
    id: "this-month",
    label: "This month",
    description: "Within 4 weeks",
  },
  {
    id: "1-3-months",
    label: "In 1-3 months",
    description: "No immediate rush",
  },
  {
    id: "exploring",
    label: "Just exploring for now",
    description: "Getting a sense of budget",
  },
]

// ── Helpers ───────────────────────────────────────────────────────────────────

function roundToNearest50(n: number): number {
  return Math.round(n / 50) * 50
}

function formatPrice(n: number): string {
  return `£${n.toLocaleString("en-GB")}`
}

// ── Sub-components ────────────────────────────────────────────────────────────

function ProgressBar({ step, total }: { step: number; total: number }) {
  const pct = ((step - 1) / (total - 1)) * 100
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-muted-foreground">
          Step {step} of {total}
        </span>
        <span className="text-sm font-medium text-cyan-400">
          {Math.round(pct)}% complete
        </span>
      </div>
      <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500"
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>
    </div>
  )
}

function AnimatedPrice({ value }: { value: number }) {
  return (
    <motion.span
      key={value}
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {formatPrice(value)}
    </motion.span>
  )
}

// ── Price Panel ───────────────────────────────────────────────────────────────

interface PricePanelProps {
  basePrice: number | null
  featureTotal: number
  monthlyPrice: number
  compact?: boolean
}

function PricePanel({ basePrice, featureTotal, monthlyPrice, compact = false }: PricePanelProps) {
  const low = basePrice !== null ? roundToNearest50(basePrice + featureTotal) : null
  const high = low !== null ? roundToNearest50(low * 1.3) : null

  if (compact) {
    // Mobile sticky bar
    return (
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-900/98 backdrop-blur-md border-t border-white/10 px-4 py-3 md:hidden">
        <div className="max-w-lg mx-auto flex items-center justify-between">
          <div>
            {low !== null ? (
              <div className="text-base font-bold text-white">
                <AnimatedPrice value={low} />
                <span className="text-white/80 mx-1" aria-hidden="true">-</span>
                <AnimatedPrice value={high!} />
              </div>
            ) : (
              <div className="text-sm text-muted-foreground">Select a site type to see pricing</div>
            )}
            {monthlyPrice > 0 && (
              <div className="text-xs text-cyan-400">+ {formatPrice(monthlyPrice)}/mo</div>
            )}
          </div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Calculator className="h-3.5 w-3.5" />
            <span>Estimate</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="hidden md:block sticky top-28 rounded-2xl border border-white/10 bg-card/60 backdrop-blur p-6 shadow-xl">
      <div className="flex items-center gap-2 mb-4">
        <Calculator className="h-4 w-4 text-cyan-400" />
        <span className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">Live Estimate</span>
      </div>

      {low !== null ? (
        <>
          <div className="text-xs text-muted-foreground mb-1">Estimated project cost</div>
          <div className="text-2xl font-bold text-white mb-1 flex flex-wrap gap-1 items-baseline">
            <AnimatedPrice value={low} />
            <span className="text-white/70 text-lg" aria-hidden="true">-</span>
            <AnimatedPrice value={high!} />
          </div>
          {monthlyPrice > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="text-sm text-cyan-400 mt-1"
            >
              + {formatPrice(monthlyPrice)}/month ongoing
            </motion.div>
          )}
          <div className="mt-4 pt-4 border-t border-white/10 space-y-2">
            <div className="text-xs text-muted-foreground">
              Based on your selections. Final quote may vary.
            </div>
          </div>
        </>
      ) : (
        <div className="text-sm text-muted-foreground">
          Answer the questions to see your price range.
        </div>
      )}
    </div>
  )
}

// ── Main Component ────────────────────────────────────────────────────────────

export function CostEstimator() {
  const TOTAL_STEPS = 4
  const [step, setStep] = useState(1)
  const [done, setDone] = useState(false)

  // Selections
  const [selectedSiteType, setSelectedSiteType] = useState<string | null>(null)
  const [selectedFeatures, setSelectedFeatures] = useState<Set<string>>(
    new Set(["contact-form"])
  )
  const [selectedSupport, setSelectedSupport] = useState<string>("none")
  const [selectedTimeline, setSelectedTimeline] = useState<string | null>(null)

  // Email capture
  const [email, setEmail] = useState("")
  const [emailSent, setEmailSent] = useState(false)

  // Derived prices
  const siteTypeData = siteTypes.find((s) => s.id === selectedSiteType)
  const basePrice = siteTypeData?.basePrice ?? null

  const featureTotal = Array.from(selectedFeatures).reduce((sum, fId) => {
    const f = features.find((ft) => ft.id === fId)
    return sum + (f?.price ?? 0)
  }, 0)

  const supportData = supportPlans.find((p) => p.id === selectedSupport)
  const monthlyPrice = supportData?.monthlyPrice ?? 0

  const low = basePrice !== null ? roundToNearest50(basePrice + featureTotal) : null
  const high = low !== null ? roundToNearest50(low * 1.3) : null

  // Contact URL params
  const contactParams = new URLSearchParams()
  if (selectedSiteType) contactParams.set("type", selectedSiteType)
  if (low !== null) contactParams.set("budget", String(low))
  const featureList = Array.from(selectedFeatures).filter((f) => f !== "contact-form")
  if (featureList.length > 0) contactParams.set("features", featureList.join(","))
  const contactHref = `/contact?${contactParams.toString()}`

  // Helpers
  const toggleFeature = (id: string) => {
    const f = features.find((ft) => ft.id === id)
    if (f?.alwaysSelected) return
    setSelectedFeatures((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  const canAdvance = () => {
    if (step === 1) return selectedSiteType !== null
    if (step === 2) return true
    if (step === 3) return selectedSupport !== null
    if (step === 4) return selectedTimeline !== null
    return false
  }

  const handleNext = () => {
    if (step < TOTAL_STEPS) {
      setStep((s) => s + 1)
    } else {
      setDone(true)
    }
  }

  const handleBack = () => {
    if (done) {
      setDone(false)
      return
    }
    setStep((s) => Math.max(1, s - 1))
  }

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    setEmailSent(true)
  }

  const stepVariants = {
    enter: { opacity: 0, x: 24 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -24 },
  }

  return (
    <section className="relative py-16 px-4 bg-background min-h-screen">
      {/* Background glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <motion.span
            className="text-xs font-semibold tracking-widest text-cyan-400 uppercase"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Project Cost Estimator
          </motion.span>
          <motion.h1
            className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            What Will Your Website Cost?
            <br />
            <span className="text-cyan-400">Get an Instant Estimate</span>
          </motion.h1>
          <motion.p
            className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Answer 4 quick questions and get a personalised price range in under 60 seconds.
          </motion.p>
        </div>

        {/* Layout: questions left, price panel right */}
        <div className="grid md:grid-cols-[1fr_280px] gap-8 items-start">

          {/* Left: steps / results */}
          <div className="min-w-0">
            {!done ? (
              <>
                <ProgressBar step={step} total={TOTAL_STEPS} />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    variants={stepVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    {/* ── STEP 1 ── */}
                    {step === 1 && (
                      <div>
                        <h2 className="text-xl font-semibold mb-2">What type of site do you need?</h2>
                        <p className="text-sm text-muted-foreground mb-6">Choose the option that best describes your project.</p>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {siteTypes.map((type) => (
                            <button
                              key={type.id}
                              type="button"
                              onClick={() => setSelectedSiteType(type.id)}
                              className={cn(
                                "relative flex items-start gap-4 p-5 rounded-xl border text-left transition-all duration-200",
                                selectedSiteType === type.id
                                  ? "border-cyan-500 bg-cyan-500/10 shadow-[0_0_0_1px_rgba(6,182,212,0.3)]"
                                  : "border-border/60 bg-card/40 hover:border-white/30 hover:bg-card/60"
                              )}
                            >
                              <div className={cn(
                                "mt-0.5 shrink-0 rounded-lg p-2 transition-colors",
                                selectedSiteType === type.id ? "bg-cyan-500/20 text-cyan-400" : "bg-white/5 text-muted-foreground"
                              )}>
                                {type.icon}
                              </div>
                              <div className="min-w-0">
                                <div className="font-semibold text-sm leading-snug">{type.label}</div>
                                <div className="text-xs text-muted-foreground mt-0.5">{type.description}</div>
                                <div className={cn(
                                  "text-sm font-bold mt-2 transition-colors",
                                  selectedSiteType === type.id ? "text-cyan-400" : "text-white/80"
                                )}>
                                  from {formatPrice(type.basePrice)}
                                </div>
                              </div>
                              {selectedSiteType === type.id && (
                                <div className="absolute top-3 right-3 rounded-full bg-cyan-500 p-0.5">
                                  <Check className="h-3 w-3 text-white" />
                                </div>
                              )}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* ── STEP 2 ── */}
                    {step === 2 && (
                      <div>
                        <h2 className="text-xl font-semibold mb-2">What features do you need?</h2>
                        <p className="text-sm text-muted-foreground mb-6">Select all that apply. You can deselect anything you don't need.</p>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {features.map((feature) => {
                            const isSelected = selectedFeatures.has(feature.id)
                            return (
                              <button
                                key={feature.id}
                                type="button"
                                onClick={() => toggleFeature(feature.id)}
                                disabled={feature.alwaysSelected}
                                className={cn(
                                  "relative flex items-center gap-3 p-4 rounded-xl border text-left transition-all duration-200",
                                  isSelected
                                    ? "border-cyan-500 bg-cyan-500/10 shadow-[0_0_0_1px_rgba(6,182,212,0.3)]"
                                    : "border-border/60 bg-card/40 hover:border-white/30 hover:bg-card/60",
                                  feature.alwaysSelected && "cursor-default opacity-80"
                                )}
                              >
                                <div className={cn(
                                  "shrink-0 rounded-lg p-1.5 transition-colors",
                                  isSelected ? "bg-cyan-500/20 text-cyan-400" : "bg-white/5 text-muted-foreground"
                                )}>
                                  {feature.icon}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="text-sm font-medium leading-snug">{feature.label}</div>
                                  <div className={cn(
                                    "text-xs font-semibold mt-0.5",
                                    isSelected ? "text-cyan-400" : "text-muted-foreground"
                                  )}>
                                    {feature.price === 0 ? "Included" : `+${formatPrice(feature.price)}`}
                                  </div>
                                </div>
                                <div className={cn(
                                  "shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all",
                                  isSelected ? "border-cyan-500 bg-cyan-500" : "border-white/20"
                                )}>
                                  {isSelected && <Check className="h-3 w-3 text-white" />}
                                </div>
                              </button>
                            )
                          })}
                        </div>
                      </div>
                    )}

                    {/* ── STEP 3 ── */}
                    {step === 3 && (
                      <div>
                        <h2 className="text-xl font-semibold mb-2">Do you need ongoing support?</h2>
                        <p className="text-sm text-muted-foreground mb-6">Choose a plan that fits how you want to manage your site after launch.</p>
                        <div className="grid gap-3">
                          {supportPlans.map((plan) => (
                            <button
                              key={plan.id}
                              type="button"
                              onClick={() => setSelectedSupport(plan.id)}
                              className={cn(
                                "relative flex items-center gap-4 p-5 rounded-xl border text-left transition-all duration-200",
                                selectedSupport === plan.id
                                  ? "border-cyan-500 bg-cyan-500/10 shadow-[0_0_0_1px_rgba(6,182,212,0.3)]"
                                  : "border-border/60 bg-card/40 hover:border-white/30 hover:bg-card/60"
                              )}
                            >
                              <div className="flex-1 min-w-0">
                                <div className="font-semibold text-sm">{plan.label}</div>
                                <div className="text-xs text-muted-foreground mt-0.5">{plan.description}</div>
                              </div>
                              <div className="shrink-0 text-right">
                                <div className={cn(
                                  "text-sm font-bold transition-colors",
                                  selectedSupport === plan.id ? "text-cyan-400" : "text-white/80"
                                )}>
                                  {plan.monthlyPrice === 0 ? "£0/mo" : `${formatPrice(plan.monthlyPrice)}/mo`}
                                </div>
                              </div>
                              {selectedSupport === plan.id && (
                                <div className="absolute top-3 right-3 rounded-full bg-cyan-500 p-0.5">
                                  <Check className="h-3 w-3 text-white" />
                                </div>
                              )}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* ── STEP 4 ── */}
                    {step === 4 && (
                      <div>
                        <h2 className="text-xl font-semibold mb-2">When do you need it?</h2>
                        <p className="text-sm text-muted-foreground mb-6">This helps prioritise and plan the project timeline.</p>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {timelines.map((tl) => (
                            <button
                              key={tl.id}
                              type="button"
                              onClick={() => setSelectedTimeline(tl.id)}
                              className={cn(
                                "relative flex flex-col gap-1 p-5 rounded-xl border text-left transition-all duration-200",
                                selectedTimeline === tl.id
                                  ? "border-cyan-500 bg-cyan-500/10 shadow-[0_0_0_1px_rgba(6,182,212,0.3)]"
                                  : "border-border/60 bg-card/40 hover:border-white/30 hover:bg-card/60"
                              )}
                            >
                              <div className="font-semibold text-sm">{tl.label}</div>
                              <div className="text-xs text-muted-foreground">{tl.description}</div>
                              {selectedTimeline === tl.id && (
                                <div className="absolute top-3 right-3 rounded-full bg-cyan-500 p-0.5">
                                  <Check className="h-3 w-3 text-white" />
                                </div>
                              )}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* Navigation */}
                <div className="flex items-center justify-between mt-8">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-white transition-colors"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Back
                    </button>
                  ) : (
                    <div />
                  )}
                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={!canAdvance()}
                    className={cn(
                      "flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200",
                      canAdvance()
                        ? "bg-cyan-600 hover:bg-cyan-500 text-white shadow-lg"
                        : "bg-white/10 text-white/30 cursor-not-allowed"
                    )}
                  >
                    {step === TOTAL_STEPS ? "See My Estimate" : "Next"}
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </>
            ) : (
              /* ── RESULTS ── */
              <AnimatePresence mode="wait">
                <motion.div
                  key="results"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  {/* Back link */}
                  <button
                    type="button"
                    onClick={handleBack}
                    className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-white transition-colors mb-6"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Edit selections
                  </button>

                  {/* Results card */}
                  <div className="rounded-2xl border border-white/10 bg-card/60 backdrop-blur p-8">
                    <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase">
                      Your Estimate
                    </span>

                    {/* Price range - very prominent */}
                    <div className="mt-4">
                      {low !== null ? (
                        <>
                          <div className="text-5xl md:text-6xl font-bold text-cyan-400 leading-none">
                            {formatPrice(low)}
                            <span className="text-white/70 mx-3 text-4xl" aria-hidden="true">-</span>
                            {formatPrice(high!)}
                          </div>
                          <p className="mt-2 text-sm text-muted-foreground">One-time project cost</p>
                        </>
                      ) : (
                        <div className="text-2xl text-muted-foreground">Price unavailable</div>
                      )}
                    </div>

                    {/* Monthly cost */}
                    {monthlyPrice > 0 && (
                      <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2">
                        <span className="text-sm font-semibold text-cyan-400">
                          + {formatPrice(monthlyPrice)}/month
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {supportData?.label}
                        </span>
                      </div>
                    )}

                    {/* Summary of selections */}
                    <div className="mt-8 space-y-4 text-sm">
                      <div className="grid grid-cols-[120px_1fr] gap-x-4 gap-y-3">
                        <span className="text-muted-foreground font-medium">Site type</span>
                        <span className="text-white">{siteTypeData?.label ?? "-"}</span>

                        <span className="text-muted-foreground font-medium">Features</span>
                        <div className="flex flex-wrap gap-1.5">
                          {Array.from(selectedFeatures).map((fId) => {
                            const f = features.find((ft) => ft.id === fId)
                            return f ? (
                              <span
                                key={fId}
                                className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-white/80"
                              >
                                {f.label}
                              </span>
                            ) : null
                          })}
                        </div>

                        <span className="text-muted-foreground font-medium">Support</span>
                        <span className="text-white">{supportData?.label ?? "-"}</span>

                        <span className="text-muted-foreground font-medium">Timeline</span>
                        <span className="text-white">
                          {timelines.find((t) => t.id === selectedTimeline)?.label ?? "-"}
                        </span>
                      </div>
                    </div>

                    {/* Disclaimer */}
                    <p className="mt-6 text-xs text-muted-foreground border-t border-white/10 pt-4">
                      This is an estimate - your exact quote may vary based on specific requirements.
                    </p>

                    {/* CTAs */}
                    <div className="mt-6 flex flex-col sm:flex-row gap-3">
                      <Link
                        href={contactHref}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-semibold transition-colors shadow-lg"
                      >
                        Get Your Exact Quote
                        <ChevronRight className="h-4 w-4" />
                      </Link>
                    </div>

                    {/* Email capture */}
                    <div className="mt-8 pt-6 border-t border-white/10">
                      <p className="text-sm font-medium text-white mb-3">Email me this estimate</p>
                      {emailSent ? (
                        <motion.div
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex items-center gap-2 text-sm text-cyan-400"
                        >
                          <Check className="h-4 w-4" />
                          Estimate sent! Check your inbox.
                        </motion.div>
                      ) : (
                        <form onSubmit={handleEmailSubmit} className="flex gap-2 max-w-sm">
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@example.com"
                            required
                            className="flex-1 min-w-0 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-muted-foreground focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-colors"
                          />
                          <button
                            type="submit"
                            className="shrink-0 px-4 py-2.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-semibold transition-colors"
                          >
                            Send
                          </button>
                        </form>
                      )}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            )}
          </div>

          {/* Right: price panel (desktop) */}
          <PricePanel
            basePrice={basePrice}
            featureTotal={featureTotal}
            monthlyPrice={monthlyPrice}
          />
        </div>
      </div>

      {/* Mobile sticky price bar */}
      <PricePanel
        basePrice={basePrice}
        featureTotal={featureTotal}
        monthlyPrice={monthlyPrice}
        compact
      />

      {/* Spacer so mobile content isn't hidden behind sticky bar */}
      <div className="h-16 md:hidden" />
    </section>
  )
}
