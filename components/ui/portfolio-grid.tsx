"use client"

import React from "react"
import Image from "next/image"
import { motion } from "motion/react"
import { GlowingEffect } from "@/components/ui/glowing-effect"

// ── Types ─────────────────────────────────────────────────────────────────────

export type PortfolioProject = {
  client: string
  type: string
  description: string
  /** Optional client quote — leave as empty string when not yet available */
  quote: string
  /** External link to the live site, or null for visual-only cards */
  link: string | null
  images: {
    desktop: string
    mobile: string
  }
}

// ── Project data ──────────────────────────────────────────────────────────────
// Add new projects here — each object becomes a card automatically.

export const portfolioProjects: PortfolioProject[] = [
  {
    client: "Monika Walek",
    type: "Landing Page / Personal Brand Website",
    description:
      "A clean, fast-loading personal brand website designed and developed for a London-based professional. Built with a focus on clear messaging, mobile responsiveness, and conversion.",
    quote: "", // TODO: add client quote when available
    link: null,
    images: {
      desktop: "/portfolio/monika-walek-desktop.png",
      mobile: "/portfolio/monika-walek-mobile.png",
    },
  },
]

// ── Sub-components ────────────────────────────────────────────────────────────

/** Simple browser chrome mockup wrapping a screenshot */
function BrowserMockup({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="rounded-lg overflow-hidden border border-white/10 shadow-xl">
      {/* Chrome bar */}
      <div className="flex items-center gap-1.5 px-3 py-2 bg-[#1a1f2e] border-b border-white/10">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" aria-hidden="true" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" aria-hidden="true" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" aria-hidden="true" />
        <div className="ml-3 flex-1 h-4 rounded bg-white/5 max-w-[200px]" aria-hidden="true" />
      </div>
      {/* Screenshot */}
      <div className="relative w-full aspect-[16/10] bg-[#0d1117]">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  )
}

/** Phone mockup wrapping a mobile screenshot */
function PhoneMockup({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative mx-auto w-[80px] sm:w-[96px] flex-shrink-0">
      {/* Phone shell */}
      <div className="rounded-[14px] border border-white/20 bg-[#1a1f2e] p-1 shadow-xl">
        {/* Notch / status bar */}
        <div className="flex justify-center mb-0.5">
          <div className="w-8 h-1.5 rounded-full bg-white/10" aria-hidden="true" />
        </div>
        {/* Screen */}
        <div className="relative rounded-[10px] overflow-hidden aspect-[9/19] bg-[#0d1117]">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover object-top"
            sizes="96px"
          />
        </div>
      </div>
    </div>
  )
}

// ── Portfolio card ─────────────────────────────────────────────────────────────

function PortfolioCard({
  project,
  index,
}: {
  project: PortfolioProject
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative rounded-2xl border-[0.75px] border-border p-2"
    >
      <GlowingEffect
        spread={40}
        glow
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
        borderWidth={2}
      />
      <div className="relative flex flex-col bg-background rounded-xl overflow-hidden shadow-sm h-full">
        {/* Screenshot area */}
        <div className="flex items-end gap-4 p-4 pb-3 bg-[#0a0f1a]">
          {/* Desktop mockup — takes majority of the width */}
          <div className="flex-1 min-w-0">
            <BrowserMockup
              src={project.images.desktop}
              alt={`${project.client} — desktop view`}
            />
          </div>
          {/* Mobile mockup — pinned to the right */}
          <PhoneMockup
            src={project.images.mobile}
            alt={`${project.client} — mobile view`}
          />
        </div>

        {/* Card body */}
        <div className="flex flex-col flex-1 p-6 pt-5">
          {/* Type badge */}
          <span className="inline-block text-xs font-semibold tracking-widest text-cyan-600 uppercase mb-2">
            {project.type}
          </span>
          <h3 className="text-lg font-semibold text-foreground mb-3">
            {project.client}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {project.description}
          </p>

          {/* Quote — only rendered when populated */}
          {project.quote && (
            <blockquote className="mt-4 pl-3 border-l-2 border-cyan-600 text-sm italic text-muted-foreground">
              "{project.quote}"
            </blockquote>
          )}
        </div>
      </div>
    </motion.div>
  )
}

// ── Main export ────────────────────────────────────────────────────────────────

export function PortfolioGrid() {
  return (
    <section id="portfolio" className="py-24 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-14">
          <motion.span
            className="text-xs font-semibold tracking-widest text-cyan-600 uppercase"
            initial={{ opacity: 0, y: -12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Portfolio
          </motion.span>
          <motion.h2
            className="mt-3 text-3xl md:text-4xl font-bold"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Recent Work
          </motion.h2>
          <motion.p
            className="mt-4 text-muted-foreground max-w-xl mx-auto"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A selection of projects built and delivered by AlignedFlow Systems.
          </motion.p>
        </div>

        {/*
          Grid: 1 col on mobile → 2 cols at md → 3 cols at xl.
          auto-fill is omitted deliberately so cards don't stretch oddly
          when only 1 or 2 exist; explicit responsive cols are cleaner.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {portfolioProjects.map((project, i) => (
            <PortfolioCard key={project.client} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
