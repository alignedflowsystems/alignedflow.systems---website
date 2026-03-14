"use client"

import { Tabs, TabsList, TabsTrigger } from "@radix-ui/react-tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { motion } from "motion/react"
import React, { useState, useRef } from "react"

interface TabContent {
  badge: string
  title: string
  description: string
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

const Feature108 = ({
  badge = "Our Services",
  heading = "Everything You Need to Grow Online",
  description = "From design to marketing, we deliver complete digital solutions tailored to your business.",
  tabs = [],
}: Feature108Props) => {
  const [active, setActive] = useState(tabs[0]?.value ?? "")
  const touchStartX = useRef<number | null>(null)

  const activeIndex = tabs.findIndex((t) => t.value === active)

  const goNext = () => setActive(tabs[(activeIndex + 1) % tabs.length].value)
  const goPrev = () => setActive(tabs[(activeIndex - 1 + tabs.length) % tabs.length].value)

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) diff > 0 ? goNext() : goPrev()
    touchStartX.current = null
  }

  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="text-xs font-semibold tracking-widest text-cyan-600 uppercase">{badge}</span>
          <h2 className="mt-1 max-w-2xl text-3xl font-bold md:text-4xl">{heading}</h2>
          <p className="text-muted-foreground max-w-xl">{description}</p>
        </div>

        <Tabs value={active} onValueChange={setActive} className="mt-10">
          <TabsList className="flex flex-wrap items-center justify-center gap-3">
            {tabs.map((tab) => (
              <TabsTrigger key={tab.value} value={tab.value} asChild>
                <ShimmerButton
                  background="rgba(6, 100, 130, 0.95)"
                  shimmerColor="#00ffff"
                  shimmerSpread="160deg"
                  borderRadius="0.75rem"
                  shimmerDuration="1.8s"
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
            className="rounded-2xl bg-muted/70 p-6 lg:p-16 touch-pan-y"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
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
                      <Button className="mt-2.5 w-fit gap-2 bg-cyan-600 hover:bg-cyan-700 text-white" size="lg">
                        Get a Quote
                      </Button>
                    </div>
                    <img
                      src={tab.content.imageSrc}
                      alt={tab.content.imageAlt}
                      className="rounded-xl w-full"
                    />
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
          </div>
          </div>
        </Tabs>
      </div>
    </section>
  )
}

export { Feature108 }
