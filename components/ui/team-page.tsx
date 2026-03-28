"use client"

import React from "react"
import Link from "next/link"
import { motion } from "motion/react"
import { Zap, BarChart2, CheckSquare, Headphones } from "lucide-react"
import { GlowingEffect } from "@/components/ui/glowing-effect"

const whyCards = [
  {
    icon: <Zap className="h-6 w-6 text-cyan-600" />,
    title: "Efficient Delivery",
    description:
      "Projects are scoped and delivered within agreed timelines, with progress communicated at every stage.",
  },
  {
    icon: <BarChart2 className="h-6 w-6 text-cyan-600" />,
    title: "Results-Oriented",
    description:
      "Every design and development decision is grounded in the business objectives set out at the start of the project.",
  },
  {
    icon: <CheckSquare className="h-6 w-6 text-cyan-600" />,
    title: "Structured Approach",
    description:
      "A defined workflow, transparent communication, and clearly agreed deliverables from initial brief to final handover.",
  },
  {
    icon: <Headphones className="h-6 w-6 text-cyan-600" />,
    title: "Post-Launch Support",
    description:
      "Support continues beyond the launch date. Monthly care plans are available, and enquiries are responded to promptly by email.",
  },
]

export function TeamPage() {
  return (
    <>
      {/* ── SECTION 1: HERO ──────────────────────────────────────────────── */}
      <section className="relative py-32 px-4 bg-background overflow-hidden">
        {/* Cyan glow decoration */}
        <div className="pointer-events-none absolute -top-40 right-0 w-[600px] h-[600px] rounded-full bg-cyan-500/5 blur-3xl" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.span
            className="text-xs font-semibold tracking-widest text-cyan-600 uppercase"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            Meet the Founder
          </motion.span>

          <motion.h1
            className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            The Vision Behind AlignedFlow Systems
          </motion.h1>

          <motion.p
            className="mt-5 text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            One developer. Full ownership. Results you can measure.
          </motion.p>
        </div>
      </section>

      {/* ── SECTION 2: FOUNDER PROFILE ───────────────────────────────────── */}
      <section className="relative py-16 px-4 bg-secondary/30 overflow-hidden">
        <div className="pointer-events-none absolute -bottom-40 left-0 w-[500px] h-[500px] rounded-full bg-cyan-500/5 blur-3xl" />

        <motion.div
          className="relative max-w-2xl mx-auto rounded-2xl border-[0.75px] border-border bg-background p-2 shadow-sm"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <GlowingEffect
            spread={40}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
            borderWidth={2}
          />

          <div className="relative bg-background rounded-xl p-8">
            {/* Avatar */}
            <div className="flex flex-col items-center text-center">
              <div className="w-[120px] h-[120px] rounded-full bg-cyan-600/20 border-2 border-cyan-600/40 flex items-center justify-center mb-6">
                <span className="text-cyan-600 font-bold text-2xl select-none">MD</span>
              </div>

              {/* Name */}
              <h2 className="text-2xl font-bold">Mateusz Dobosz</h2>

              {/* Title */}
              <p className="mt-1 text-cyan-600 text-sm font-semibold tracking-widest uppercase">
                Founder &amp; Lead Developer
              </p>

              {/* Bio */}
              <p className="mt-6 text-muted-foreground leading-relaxed text-base max-w-xl">
                London-based web developer specialising in fast-launch, conversion-optimised websites
                for coaches, consultants, and service businesses. Over 5 years building digital funnels
                that deliver measurable results. Passionate about helping solopreneurs scale through
                smart web technology.
              </p>

              {/* Links */}
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-7 py-3 text-sm font-semibold text-white bg-cyan-600 rounded-full hover:bg-cyan-700 transition-colors"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── SECTION 3: WHY WORK WITH ME ──────────────────────────────────── */}
      <section className="relative py-24 px-4 bg-background overflow-hidden">
        <div className="pointer-events-none absolute -top-40 right-0 w-[600px] h-[600px] rounded-full bg-cyan-500/5 blur-3xl" />

        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-semibold tracking-widest text-cyan-600 uppercase">
              Why AlignedFlow Systems
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">
              The principles behind every project
            </h2>
          </motion.div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyCards.map((card, i) => (
              <motion.div
                key={card.title}
                className="relative rounded-2xl border-[0.75px] border-border p-2"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={2}
                />
                <div className="relative flex flex-col bg-background rounded-xl p-6 shadow-sm h-full">
                  <div className="mb-4">{card.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: CTA BANNER ────────────────────────────────────────── */}
      <section className="relative py-24 px-4 bg-cyan-700 overflow-hidden text-center">
        <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-background to-transparent pointer-events-none z-10" />
        <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />

        <div className="relative z-20 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Ready for your site? Let&apos;s talk.
            </h2>
            <p className="mt-5 text-cyan-100 text-lg max-w-xl mx-auto">
              Fill in the contact form and expect a reply within 24 hours. No commitment, no hard sell.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-cyan-600 bg-white rounded-full hover:bg-cyan-50 transition-colors shadow-lg"
              >
                Get a Quote
              </Link>
              <Link
                href="/#services"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white/60 rounded-full hover:bg-cyan-400/20 hover:border-cyan-400 hover:text-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.35)] transition-all duration-300"
              >
                See Packages
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
