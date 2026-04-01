"use client"

import Image from "next/image"
import Link from "next/link"
import { Tabs, TabsList, TabsTrigger } from "@radix-ui/react-tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { motion } from "motion/react"
import React, { useState, useRef, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Loader2 } from "lucide-react"

const Feature108Fallback = () => (
  <div className="min-h-[400px] flex items-center justify-center">
    <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
  </div>
);

interface TabContent {
  badge: string
  title: string
  description: string
  startingFrom?: string
  buttonText: string
  imageSrc: string
  imageAlt: string
}

interface Tab {
  value: string
  icon: React.ReactNode
  label: string
  content: TabContent
}

interface Feature108Props {
  badge?: string
  heading?: string
  description?: string
  tabs?: Tab[]
}

const Feature108Inner = ({
  badge = "Our Services",
  heading = "Everything You Need to Grow Online",
  description = "From design to launch, complete digital solutions tailored to your business.",
  tabs = [],
}: Feature108Props) => {
  const searchParams = useSearchParams()
  const [active, setActive] = useState(tabs[0]?.value ?? "")
  const [showHint, setShowHint] = useState(true)

  // Touch swipe refs
  const touchStartX = useRef<number | null>(null)

  // Mouse drag refs
  const dragStartX = useRef<number | null>(null)
  const isDragging = useRef(false)

  useEffect(() => {
    const tabParam = searchParams.get("tab")
    if (tabParam && tabs.find((t) => t.value === tabParam)) {
      setActive(tabParam)
    }
  }, [searchParams, tabs])

  const activeIndex = tabs.findIndex((t) => t.value === active)

  const goNext = () => { setShowHint(false); setActive(tabs[(activeIndex + 1) % tabs.length].value) }
  const goPrev = () => { setShowHint(false); setActive(tabs[(activeIndex - 1 + tabs.length) % tabs.length].value) }

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) diff > 0 ? goNext() : goPrev()
    touchStartX.current = null
  }

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    dragStartX.current = e.clientX
    isDragging.current = true
  }
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return
    // Prevent accidental text selection while dragging
    e.preventDefault()
  }
  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging.current || dragStartX.current === null) return
    e.preventDefault()
    const diff = dragStartX.current - e.clientX
    if (Math.abs(diff) > 50) diff > 0 ? goNext() : goPrev()
    dragStartX.current = null
    isDragging.current = false
  }
  const handleMouseLeave = () => {
    // Cancel drag if pointer leaves the card
    dragStartX.current = null
    isDragging.current = false
  }

  return (
    <section className="relative py-24 px-4 bg-background overflow-hidden">
      <div className="pointer-events-none absolute -top-40 right-0 w-[600px] h-[600px] rounded-full bg-cyan-500/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 left-0 w-[600px] h-[600px] rounded-full bg-cyan-500/5 blur-3xl" />
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase">{badge}</span>
          <h2 className="mt-1 max-w-2xl text-3xl font-bold md:text-4xl">{heading}</h2>
          <p className="text-muted-foreground max-w-xl">{description}</p>
        </div>

        <Tabs value={active} onValueChange={setActive} className="mt-10">
          <TabsList className="flex flex-wrap items-center justify-center gap-3">
            {tabs.map((tab) => (
              <TabsTrigger key={tab.value} value={tab.value} asChild>
                <ShimmerButton
                  background="rgba(8, 145, 178, 0.85)"
                  shimmerColor="#00ffff"
                  borderRadius="0.75rem"
                  shimmerDuration="3s"
                  className="flex items-center gap-2 px-4 py-3 text-sm font-semibold data-[state=inactive]:opacity-50 data-[state=inactive]:scale-95 transition-all"
                >
                  {tab.icon} {tab.label}
                </ShimmerButton>
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="relative mx-auto mt-8 max-w-screen-xl">
            {/* Desktop prev arrow */}
            <button
              onClick={goPrev}
              aria-label="Previous"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-10 hidden lg:flex items-center justify-center w-10 h-10 rounded-full bg-background border border-border shadow-md hover:bg-cyan-50 hover:border-cyan-400 hover:text-cyan-600 transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>

            {/* Desktop next arrow */}
            <button
              onClick={goNext}
              aria-label="Next"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-10 hidden lg:flex items-center justify-center w-10 h-10 rounded-full bg-background border border-border shadow-md hover:bg-cyan-50 hover:border-cyan-400 hover:text-cyan-600 transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>

          <div
            className="rounded-2xl bg-muted/70 p-6 lg:p-16 touch-pan-y relative select-none cursor-grab active:cursor-grabbing"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            {/* All panels stay mounted; active one sits in normal flow, inactive ones overlay it absolutely */}
            <div className="relative">
              {tabs.map((tab, i) => {
                const isActive = tab.value === active
                return (
                  <motion.div
                    key={tab.value}
                    animate={{ opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    aria-hidden={!isActive}
                    className="grid place-items-center gap-20 lg:grid-cols-2 lg:gap-10"
                    style={
                      isActive
                        ? { position: "relative", pointerEvents: "auto" }
                        : { position: "absolute", inset: 0, pointerEvents: "none" }
                    }
                  >
                    <div className="flex flex-col gap-5">
                      <Badge variant="outline" className="w-fit bg-background">
                        {tab.content.badge}
                      </Badge>
                      <h3 className="text-3xl font-semibold lg:text-5xl">{tab.content.title}</h3>
                      <p className="text-muted-foreground lg:text-lg">{tab.content.description}</p>
                      {tab.content.startingFrom && (
                        <p className="text-primary font-semibold text-sm">
                          Starting from {tab.content.startingFrom}
                        </p>
                      )}
                      <Button className="mt-2.5 w-fit gap-2 bg-cyan-600 hover:bg-cyan-700 text-white" size="lg" asChild>
                        <Link href={`/contact?package=${tab.value}`}>Get a Quote</Link>
                      </Button>
                    </div>
                    <div className="relative w-full aspect-video">
                      <Image
                        src={tab.content.imageSrc}
                        alt={tab.content.imageAlt}
                        fill
                        className="rounded-xl object-contain"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Dot indicators */}
            <div className="flex items-center justify-center gap-2 mt-6">
              {tabs.map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => setActive(tab.value)}
                  className={`rounded-full transition-all duration-300 ${
                    tab.value === active
                      ? "w-6 h-2 bg-cyan-500"
                      : "w-2 h-2 bg-muted-foreground/40"
                  }`}
                  aria-label={`Go to ${tab.label}`}
                />
              ))}
            </div>

            {/* Mobile swipe hint - CSS-driven for Safari compatibility */}
            {showHint && (
              <>
                <style>{`
                  @keyframes swipe-hand {
                    0%   { transform: translateX(-36px); opacity: 0; }
                    12%  { transform: translateX(-36px); opacity: 1; }
                    65%  { transform: translateX(36px);  opacity: 1; }
                    80%  { transform: translateX(36px);  opacity: 0; }
                    100% { transform: translateX(36px);  opacity: 0; }
                  }
                  @keyframes swipe-fade {
                    0%   { opacity: 0; }
                    100% { opacity: 1; }
                  }
                `}</style>
                <div
                  className="lg:hidden absolute inset-0 flex items-end justify-center pb-14 pointer-events-none z-20"
                  style={{ animation: "swipe-fade 0.4s ease-out forwards" }}
                  aria-hidden="true"
                >
                  <div className="relative flex items-center justify-center w-28 h-14">
                    {/* Hand icon */}
                    <div style={{ animation: "swipe-hand 1.5s ease-in-out infinite" }}>
                      <svg width="32" height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 18V9a2.5 2.5 0 0 1 5 0v7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M15 11V7a2.5 2.5 0 0 1 5 0v9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M20 11.5V9a2.5 2.5 0 0 1 5 0v7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M25 12v-1.5a2.5 2.5 0 0 1 5 0v9C30 27 24.627 34 16 34A12 12 0 0 1 4 22v-5.5a2.5 2.5 0 0 1 5 0V20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    {/* Chevron arrows */}
                    <div className="absolute right-1 flex gap-0.5 opacity-70">
                      <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
                        <path d="M1 1l6 6-6 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <svg width="8" height="14" viewBox="0 0 8 14" fill="none" style={{ opacity: 0.5 }}>
                        <path d="M1 1l6 6-6 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
          </div>
        </Tabs>
      </div>
    </section>
  )
}

const Feature108 = (props: Feature108Props) => (
  <Suspense fallback={<Feature108Fallback />}>
    <Feature108Inner {...props} />
  </Suspense>
)

export { Feature108 }
