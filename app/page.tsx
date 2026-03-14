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

// ── Data ──────────────────────────────────────────────────────────────────────

const services = [
  {
    value: "landing-page",
    icon: <FileText className="h-auto w-4 shrink-0" />,
    label: "Landing Page",
    content: {
      badge: "Landing Page",
      title: "A website that works as hard as you do.",
      description:
        "A single, high-converting page built around your offer. Perfect for coaches, therapists, and service providers who want a professional online presence without the complexity. Fast delivery. No filler. Just results.",
      buttonText: "Book a Free Call",
      imageSrc: "https://shadcnblocks.com/images/block/placeholder-dark-1.svg",
      imageAlt: "Landing Page Package",
    },
  },
  {
    value: "shop-services",
    icon: <ShoppingBag className="h-auto w-4 shrink-0" />,
    label: "Shop & Services",
    content: {
      badge: "Shop & Services",
      title: "Sell online. Take bookings. Grow revenue.",
      description:
        "A full multi-page website with an online store or booking system built in. Ideal for product-based businesses and service providers ready to scale. Stripe payments, inventory management, and a design your customers will love.",
      buttonText: "Book a Free Call",
      imageSrc: "https://shadcnblocks.com/images/block/placeholder-dark-2.svg",
      imageAlt: "Shop & Services Package",
    },
  },
  {
    value: "care-plan",
    icon: <ShieldCheck className="h-auto w-4 shrink-0" />,
    label: "Monthly Care Plan",
    content: {
      badge: "Monthly Care Plan",
      title: "Your site. Maintained, updated, protected.",
      description:
        "We handle hosting, security, performance, and content updates so you never have to think about it. Priority support, monthly check-ins, and a partner who keeps your website growing — month after month.",
      buttonText: "Book a Free Call",
      imageSrc: "https://shadcnblocks.com/images/block/placeholder-dark-3.svg",
      imageAlt: "Monthly Care Plan",
    },
  },
]

const testimonials = [
  {
    text: "AlignedFlow Systems zrobiło stronę dla mojego studia jogi w dwa tygodnie. Ceny były jasne od początku, zero niespodzianek. Już miesiąc po premierze mam 30% więcej rezerwacji online.",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    name: "Karolina Wiśniewska",
    role: "Właścicielka, Yoga Flow Studio · Leeds",
  },
  {
    text: "I was blown away by how smooth the whole process was. They listened, delivered on time, and the site looks exactly how I imagined. My clients always comment on it.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Emily Clarke",
    role: "Holistic Therapist · Manchester",
  },
  {
    text: "Polecam z całego serca. Profesjonalne podejście, piękny projekt i wszystko wyjaśnione po polsku. Moja firma wygląda teraz jak z innej ligi.",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
    name: "Tomasz Kowalski",
    role: "Trener personalny · Warszawa",
  },
  {
    text: "Switched from a Wix template to a custom AlignedFlow Systems site and the difference is night and day. Page speed went from 52 to 94. Bookings have doubled.",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    name: "Megan Hughes",
    role: "Yoga & Breathwork Teacher · Bristol",
  },
  {
    text: "Nareszcie studio, które rozumie specyfikę małego biznesu. Strona gotowa na czas, w budżecie, i naprawdę mi się podoba. Klienci w końcu mogą mnie znaleźć w Google.",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
    name: "Agnieszka Nowak",
    role: "Coach i mentorka · Kraków",
  },
  {
    text: "The care plan is worth every penny. I don't have to think about updates or security — it just works. AlignedFlow Systems feel like a proper partner, not just a supplier.",
    image: "https://randomuser.me/api/portraits/men/14.jpg",
    name: "David Park",
    role: "Owner, Greenfield Deli · Edinburgh",
  },
]

const firstColumn = testimonials.slice(0, 2)
const secondColumn = testimonials.slice(2, 4)
const thirdColumn = testimonials.slice(4, 6)

const steps = [
  {
    icon: <MessageCircle className="h-8 w-8 text-cyan-600" />,
    step: "01",
    title: "Free Discovery Call",
    description:
      "We start with a relaxed conversation about your business, your goals, and what's not working right now. No pitch, no pressure — just listening.",
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-cyan-600" />,
    step: "02",
    title: "Tailored Proposal",
    description:
      "Within 48 hours you receive a clear proposal: scope, timeline, and a fixed price. No hourly billing, no surprise invoices — ever.",
  },
  {
    icon: <PenTool className="h-8 w-8 text-cyan-600" />,
    step: "03",
    title: "Design & Build",
    description:
      "We design first, then build. You approve every stage before we move forward. The result is a site that genuinely feels like yours.",
  },
  {
    icon: <Rocket className="h-8 w-8 text-cyan-600" />,
    step: "04",
    title: "Launch & Grow",
    description:
      "We handle the technical launch and hand over a site you understand. Ongoing support is always available — we don't disappear after go-live.",
  },
]

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
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold tracking-widest text-cyan-600 uppercase">
              Built With
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">
              Modern tools. Not WordPress templates.
            </h2>
          </div>
          <LogoCloud />
        </div>
      </section>

      {/* ── ORBITING SKILLS ─────────────────────────────────────────────── */}
      <section className="py-24 px-4 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-widest text-cyan-500 uppercase">Tech Stack</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">
              The technologies behind your website.
            </h2>
            <p className="mt-4 text-gray-400 max-w-xl mx-auto text-sm">
              Hover over any icon to explore the tools we use to build fast, modern, and scalable websites.
            </p>
          </div>
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
            <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
            <span className="text-xs font-semibold tracking-widest text-cyan-600 uppercase">
              About Us
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold leading-snug">
              Built by someone who's been the small business owner wondering where to start
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative rounded-2xl border border-border bg-background p-8 shadow-sm"
          >
            <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              AlignedFlow Systems was founded to give wellness creators, coaches, and small businesses
              access to the same quality of web design that bigger brands take for granted —
              at prices that make sense. We work across the UK and Poland, in English and Polish,
              and we treat every project like it's our own business on the line.
              No templates. No vague timelines. No inflated agency fees.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-7 py-3 text-sm font-semibold text-white bg-cyan-600 rounded-full hover:bg-cyan-700 transition-colors"
            >
              Work With Us
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES ───────────────────────────────────────────────────────── */}
      <section id="services">
        <Feature108
          badge="Our Packages"
          heading="Three clear packages. No surprises."
          description="Choose the package that fits where your business is right now. Every package includes a dedicated point of contact, clear timelines, and no hidden costs."
          tabs={services}
        />
      </section>

      {/* ── HOW IT WORKS ───────────────────────────────────────────────────── */}
      <section className="py-24 px-4 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold tracking-widest text-cyan-600 uppercase">
              Our Process
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">
              From first call to live website — here's exactly how it works.
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Four straightforward steps. No ambiguity, no chasing for updates,
              no nasty surprises on the final invoice.
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
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={2}
                />
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
      <section className="py-24 px-4 bg-background">
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
              What our clients say
            </h2>
            <p className="mt-4 text-muted-foreground">
              Real people. Real businesses. Real results — in the UK and Poland.
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

      {/* ── CTA BANNER ─────────────────────────────────────────────────────── */}
      <section id="contact" className="py-24 px-4 bg-cyan-700">
        <div className="max-w-3xl mx-auto text-center">
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
              Book a free 30-minute call and let's figure out what your business actually needs.
              No commitment. No hard sell. Gotowi? Let's talk.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hello@alignedflowsystems.com"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-cyan-600 bg-white rounded-full hover:bg-cyan-50 transition-colors shadow-lg"
              >
                Get a Quote
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white/60 rounded-full hover:bg-cyan-400/20 hover:border-cyan-400 hover:text-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.35)] transition-all duration-300"
              >
                See Our Packages
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────────────────────── */}
      <footer className="bg-gray-950 text-gray-400 py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <span className="text-white font-bold text-xl tracking-tight">
                AlignedFlow Systems
              </span>
              <p className="mt-3 text-sm leading-relaxed max-w-sm">
                Web design for wellness creators, coaches, and small businesses
                across the UK and Poland. Clear design. Clear pricing. No surprises.
              </p>
              <p className="mt-3 text-xs text-gray-500">🇬🇧 United Kingdom · 🇵🇱 Polska</p>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
                Packages
              </h4>
              <ul className="space-y-2 text-sm">
                {[
                  "Landing Page",
                  "Shop & Services",
                  "Monthly Care Plan",
                ].map((s) => (
                  <li key={s}>
                    <a href="#services" className="hover:text-white transition-colors">
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
                Company
              </h4>
              <ul className="space-y-2 text-sm">
                {[
                  { label: "Home", href: "#hero" },
                  { label: "About Us", href: "#about" },
                  { label: "Packages", href: "#services" },
                  { label: "Contact", href: "#contact" },
                ].map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="hover:text-white transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="mailto:hello@klarstudio.co.uk" className="hover:text-white transition-colors">
                    hello@klarstudio.co.uk
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
            <p>&copy; {new Date().getFullYear()} AlignedFlow Systems. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
