// NOTE (Task 15): This file uses "use client" because multiple motion/framer-motion
// components are used inline with whileInView/animate. To convert to a Server Component
// in a future refactor, extract each animated section into its own "use client" wrapper.
"use client"

import React from "react"
import { motion } from "motion/react"
import {
  FileText,
  ShoppingBag,
  ShieldCheck,
  MessageCircle,
  Lightbulb,
  PenTool,
  Rocket,
} from "lucide-react"

import { BGPattern } from "@/components/ui/bg-pattern"
import { GlowingEffect } from "@/components/ui/glowing-effect"
import { Header } from "@/components/ui/header-2"
import { PremiumHero } from "@/components/ui/hero"
import { LogoCloud } from "@/components/ui/logo-cloud-2"
import { Feature108 } from "@/components/ui/shadcnblocks-com-feature108"
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1"
import OrbitingSkills from "@/components/ui/orbiting-skills"
import { StatsCounter } from "@/components/StatsCounter"
import { SiteFooter } from "@/components/ui/site-footer"
import { FAQSection } from "@/components/ui/faq"

// ── Data ──────────────────────────────────────────────────────────────────────

const services = [
  {
    value: "landing-page",
    icon: <FileText className="h-auto w-4 shrink-0" />,
    label: "Landing Page",
    content: {
      badge: "Landing Page",
      title: "A focused, high-converting web presence.",
      description:
        "A single, professionally crafted page built around a specific offer or service. Designed for clarity and conversion, this solution is well-suited to coaches, therapists, and independent service providers seeking an impactful online presence with a fast, structured delivery.",
      buttonText: "Get a Quote",
      imageSrc: "/services/landing-page.svg",
      imageAlt: "Landing Page Package",
    },
  },
  {
    value: "shop-services",
    icon: <ShoppingBag className="h-auto w-4 shrink-0" />,
    label: "Shop & Services",
    content: {
      badge: "Shop & Services",
      title: "A complete platform for commerce and bookings.",
      description:
        "A multi-page website integrating an online store or booking system, built to support business growth. Includes secure payment processing, inventory or availability management, and a design tailored to the brand with a smooth customer journey from first visit to conversion.",
      buttonText: "Get a Quote",
      imageSrc: "/services/shop-and-services.svg",
      imageAlt: "Shop & Services Package",
    },
  },
  {
    value: "care-plan",
    icon: <ShieldCheck className="h-auto w-4 shrink-0" />,
    label: "Monthly Care Plan",
    content: {
      badge: "Monthly Care Plan",
      title: "Ongoing management, support, and performance.",
      description:
        "A retained service covering hosting, security monitoring, performance optimisation, and content updates. Designed for businesses that want their website actively maintained rather than left static — with priority support and regular reviews included as standard.",
      buttonText: "Get a Quote",
      imageSrc: "/services/monthly-care-plan.svg",
      imageAlt: "Monthly Care Plan",
    },
  },
]

const testimonials = [
  {
    text: "The whole process was straightforward from start to finish. Knew exactly what was happening at every stage, the site was ready ahead of schedule, and clients notice it immediately.",
    name: "Emily Clarke",
    role: "Holistic Therapist, London",
    country: "gb" as const,
  },
  {
    text: "Moved away from a Wix template and the difference is immediately obvious. Load times are down, the design actually represents the business, and enquiries have picked up noticeably.",
    name: "Megan Hughes",
    role: "Yoga & Breathwork Teacher",
    country: "gb" as const,
  },
  {
    text: "Needed a site that looked professional without a premium price tag. The end result exceeded expectations — straightforward to work with, and delivered quickly.",
    name: "Tomasz Wiśniewski",
    role: "Personal Trainer, Warsaw",
    country: "pl" as const,
  },
  {
    text: "The care plan takes one thing completely off the plate. Updates happen without having to chase anyone, and knowing security is handled in the background is genuinely reassuring.",
    name: "David Park",
    role: "Owner, Greenfield Deli",
    country: "gb" as const,
  },
  {
    text: "Needed a site that handled bookings and a product shop together. The result was clean, loaded fast, and there were no issues on launch day — exactly what was promised.",
    name: "Karolina Jabłońska",
    role: "Founder, Studio Równowaga",
    country: "pl" as const,
  },
  {
    text: "No upselling, no jargon, no inflated quotes. Just a solid brief, a fair price, and a finished site that does exactly what it needs to do.",
    name: "James Thornton",
    role: "Personal Trainer & Coach",
    country: "gb" as const,
  },
]

const firstColumn = testimonials.slice(0, 2)
const secondColumn = testimonials.slice(2, 4)
const thirdColumn = testimonials.slice(4, 6)

const steps = [
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

// ── Shared props ──────────────────────────────────────────────────────────────

const glowProps = {
  spread: 40,
  glow: true as const,
  disabled: false,
  proximity: 64,
  inactiveZone: 0.01,
  borderWidth: 2,
} as const

// ── Page ──────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">

      {/* ── NAVBAR ─────────────────────────────────────────────────────────── */}
      <Header />

      {/* ── HERO ───────────────────────────────────────────────────────────── */}
      <section id="hero">
        <PremiumHero />
      </section>

      {/* ── BUILT WITH / LOGOS ─────────────────────────────────────────────── */}
      <section className="relative pt-2 pb-12 px-4 overflow-hidden bg-black">
        {/* Top fade — blends into hero */}
        <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-[#030303] to-transparent pointer-events-none z-20" />
        {/* Bottom fade — blends into Orbiting Skills */}
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-black to-transparent pointer-events-none z-20" />
        <div className="relative z-10 max-w-4xl mx-auto pt-16">
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
        </div>
        <LogoCloud className="relative z-10" />
      </section>


      {/* ── ORBITING SKILLS ─────────────────────────────────────────────── */}
      <section className="relative py-24 px-4 bg-black overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto -mt-10">
          <OrbitingSkills />
        </div>
      </section>


      {/* ── ABOUT ──────────────────────────────────────────────────────────── */}
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
              <a
                href="/team"
                className="inline-flex items-center justify-center px-7 py-3 text-sm font-semibold text-white bg-cyan-600 rounded-full hover:bg-cyan-700 transition-colors"
              >
                Meet the Team
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3 text-sm font-semibold text-white border border-white/20 rounded-full hover:border-cyan-400 hover:text-cyan-400 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── STATS ──────────────────────────────────────────────────────────── */}
      <StatsCounter />

      {/* ── SERVICES ───────────────────────────────────────────────────────── */}
      <section id="services">
        <Feature108
          badge="Services"
          heading="Tailored solutions for every stage of growth."
          description="Each service is scoped to deliver measurable value — whether launching a new presence, expanding an existing one, or ensuring long-term performance and reliability."
          tabs={services}
        />
      </section>

      {/* ── HOW IT WORKS ───────────────────────────────────────────────────── */}
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
              Every project follows a defined workflow — from initial enquiry through to a successful launch — with full visibility and regular communication at each stage.
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

      {/* ── TESTIMONIALS ───────────────────────────────────────────────────── */}
      <section className="relative py-24 px-4 bg-background overflow-hidden">
        <div className="pointer-events-none absolute -top-40 left-0 w-[600px] h-[600px] rounded-full bg-cyan-500/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 right-0 w-[600px] h-[600px] rounded-full bg-cyan-500/5 blur-3xl" />
        <div className="max-w-6xl mx-auto">
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

          <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] max-h-[680px] overflow-hidden">
            <TestimonialsColumn testimonials={firstColumn} duration={15} />
            <TestimonialsColumn
              testimonials={secondColumn}
              className="hidden md:block"
              duration={19}
            />
            <TestimonialsColumn
              testimonials={thirdColumn}
              className="hidden lg:block"
              duration={17}
            />
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────────────── */}
      <FAQSection />

      {/* ── CTA BANNER ─────────────────────────────────────────────────────── */}
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
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-cyan-600 bg-white rounded-full hover:bg-cyan-50 transition-colors shadow-lg"
              >
                Get a Quote
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white/60 rounded-full hover:bg-cyan-400/20 hover:border-cyan-400 hover:text-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.35)] transition-all duration-300"
              >
                See Packages
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────────────────────── */}
      <SiteFooter />

    </main>
  )
}
