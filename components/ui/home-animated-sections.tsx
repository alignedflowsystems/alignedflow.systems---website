"use client"

import React from "react"
import Link from "next/link"
import { motion } from "motion/react"
import {
  MessageCircle,
  Lightbulb,
  PenTool,
  Rocket,
} from "lucide-react"
import { BGPattern } from "@/components/ui/bg-pattern"
import { GlowingEffect } from "@/components/ui/glowing-effect"

// ── Types ─────────────────────────────────────────────────────────────────────

interface Step {
  icon: React.ReactNode
  step: string
  title: string
  description: string
}

// ── Data ──────────────────────────────────────────────────────────────────────

const steps: Step[] = [
  {
    icon: <MessageCircle className="h-8 w-8 text-cyan-600" />,
    step: "01",
    title: "Initial Enquiry",
    description:
      "Share a brief overview of the project via the contact form. A considered response with recommended next steps follows within 24 hours.",
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-cyan-600" />,
    step: "02",
    title: "Proposal & Scope",
    description:
      "A detailed proposal is prepared outlining the project scope, deliverables, and timeline, providing a clear foundation before work begins.",
  },
  {
    icon: <PenTool className="h-8 w-8 text-cyan-600" />,
    step: "03",
    title: "Design & Development",
    description:
      "The site is designed and developed to specification with purposeful visual direction and clean, performant code built for long-term reliability.",
  },
  {
    icon: <Rocket className="h-8 w-8 text-cyan-600" />,
    step: "04",
    title: "Launch & Handover",
    description:
      "The site is deployed, thoroughly tested, and handed over with full documentation. Ongoing support remains available beyond the launch date.",
  },
]

const glowProps = {
  spread: 40,
  glow: true as const,
  disabled: false,
  proximity: 64,
  inactiveZone: 0.01,
  borderWidth: 2,
} as const

// ── Exported sections ─────────────────────────────────────────────────────────

/** The "Built With" heading text that uses motion animations */
export function BuiltWithHeading() {
  return (
    <div className="text-center mb-8">
      <motion.span
        className="text-xs font-semibold tracking-widest text-cyan-400 uppercase"
        initial={{ opacity: 0, y: -16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.8 }}
      >
        Built With
      </motion.span>
      <motion.h2
        className="mt-3 text-2xl md:text-3xl font-bold text-white"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.8 }}
      >
        Modern stack. Production-grade results.
      </motion.h2>
      <motion.p
        className="mt-3 text-sm text-gray-400 max-w-lg mx-auto"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.8 }}
      >
        The same tools used by the world's fastest-growing companies —
        so your site is built to perform, scale, and last.
      </motion.p>
    </div>
  )
}

/** The "About" two-column section */
export function AboutSection() {
  return (
    <section id="about" className="relative py-24 px-4 bg-secondary/30">
      <BGPattern variant="grid" mask="fade-edges" fill="#94a3b8" size={32} className="z-0" />
      <div className="relative z-10 max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative rounded-2xl border border-border bg-background p-8 shadow-sm"
        >
          <GlowingEffect {...glowProps} />
          <span className="text-xs font-semibold tracking-widest text-cyan-600 uppercase">
            About
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold leading-snug">
            Websites built with purpose, precision, and a long-term perspective
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="relative rounded-2xl border border-border bg-background p-8 shadow-sm"
        >
          <GlowingEffect {...glowProps} />
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            AlignedFlow Systems is a boutique web design studio focused on delivering
            thoughtful, high-performance websites for businesses and creators who take
            their online presence seriously. Every project is approached with a clear
            process, transparent communication, and attention to the details that make
            the difference between a website that exists and one that works.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/team"
              className="inline-flex items-center justify-center px-7 py-3 text-sm font-semibold text-white bg-cyan-600 rounded-full hover:bg-cyan-700 transition-colors"
            >
              Meet the Team
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-7 py-3 text-sm font-semibold text-white border border-white/20 rounded-full hover:border-cyan-400 hover:text-cyan-400 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/** The "How It Works" steps section */
export function HowItWorksSection() {
  return (
    <section className="py-24 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold tracking-widest text-cyan-600 uppercase">
            The Process
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">
            A structured process designed for clarity and efficiency.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Every project follows a defined workflow — from initial enquiry through to a
            successful launch — with full visibility and regular communication at each stage.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative rounded-2xl border-[0.75px] border-border p-2"
            >
              <GlowingEffect {...glowProps} />
              <div className="relative flex flex-col items-start bg-background rounded-xl p-6 shadow-sm h-full">
                <div className="mb-4">{s.icon}</div>
                <span className="text-xs font-bold text-muted-foreground tracking-widest mb-2">
                  STEP {s.step}
                </span>
                <h3 className="text-lg font-semibold mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {s.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/** The testimonials section heading */
export function TestimonialsHeading() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center max-w-xl mx-auto text-center mb-10"
    >
      <span className="text-xs font-semibold tracking-widest text-cyan-600 uppercase">
        Client Testimonials
      </span>
      <h2 className="mt-3 text-3xl md:text-4xl font-bold">
        What clients say
      </h2>
      <p className="mt-4 text-muted-foreground">
        Real people. Real businesses. Real results.
      </p>
    </motion.div>
  )
}

/** The CTA banner at the bottom of the page */
export function CTABanner() {
  return (
    <section id="contact" className="relative py-40 px-4 bg-cyan-700 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-background to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />
      <div className="relative z-20 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Ready to build something you're proud of?
          </h2>
          <p className="mt-5 text-cyan-100 text-lg max-w-xl mx-auto">
            Fill in the contact form and expect a reply within 24 hours.
            No commitment. No hard sell.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-cyan-600 bg-white rounded-full hover:bg-cyan-50 transition-colors shadow-lg"
            >
              Get a Quote
            </Link>
            <Link
              href="/estimate"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white/60 rounded-full hover:bg-cyan-400/20 hover:border-cyan-400 hover:text-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.35)] transition-all duration-300"
            >
              Get an Estimate
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
