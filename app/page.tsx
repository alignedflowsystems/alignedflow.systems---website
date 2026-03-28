import React from "react"
import {
  FileText,
  ShoppingBag,
  ShieldCheck,
} from "lucide-react"

import { Header } from "@/components/ui/header-2"
import { PremiumHero } from "@/components/ui/hero"
import { LogoCloud } from "@/components/ui/logo-cloud-2"
import { Feature108 } from "@/components/ui/shadcnblocks-com-feature108"
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1"
import { TrustBar } from "@/components/ui/trust-bar"
import OrbitingSkills from "@/components/ui/orbiting-skills"
import { StatsCounter } from "@/components/StatsCounter"
import { SiteFooter } from "@/components/ui/site-footer"
import { FAQSection } from "@/components/ui/faq"
import { PortfolioGrid } from "@/components/ui/portfolio-grid"
import {
  BuiltWithHeading,
  AboutSection,
  HowItWorksSection,
  TestimonialsHeading,
  CTABanner,
} from "@/components/ui/home-animated-sections"

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
      startingFrom: "£497",
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
      startingFrom: "£1,997",
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
      startingFrom: "£97/mo",
      buttonText: "Get a Quote",
      imageSrc: "/services/monthly-care-plan.svg",
      imageAlt: "Monthly Care Plan",
    },
  },
]

const testimonials = [
  {
    id: "testimonial-emily-clarke",
    text: "The whole process was straightforward from start to finish. Knew exactly what was happening at every stage, the site was ready ahead of schedule, and clients notice it immediately.",
    name: "Emily Clarke",
    role: "Holistic Therapist, London",
    country: "gb" as const,
    company: "Serene Roots Therapy",
    photo: "/images/testimonials/emily.webp",
    rating: 5,
  },
  {
    id: "testimonial-megan-hughes",
    text: "Moved away from a Wix template and the difference is immediately obvious. Load times are down, the design actually represents the business, and enquiries have picked up noticeably.",
    name: "Megan Hughes",
    role: "Yoga & Breathwork Teacher",
    country: "gb" as const,
    company: "Breathe & Be Studio",
    photo: "/images/testimonials/megan.webp",
    rating: 5,
  },
  {
    id: "testimonial-sophie-bennett",
    text: "Before working with AlignedFlow, we were taking bookings over the phone and losing students to studios with slicker online systems. The new site went live in under three weeks and our online bookings are up 65%. The whole process was stress-free — Mateusz handled everything.",
    name: "Sophie Bennett",
    role: "Studio Owner",
    country: "gb" as const,
    company: "Lotus Flow Yoga",
    photo: "/images/testimonials/sophie.webp",
    rating: 5,
  },
  {
    id: "testimonial-tomasz-wisniewski",
    text: "Needed a site that looked professional without a premium price tag. The end result exceeded expectations — straightforward to work with, and delivered quickly.",
    name: "Tomasz Wiśniewski",
    role: "Personal Trainer, Warsaw",
    country: "pl" as const,
    company: "TW Personal Training",
    photo: "/images/testimonials/tomasz.webp",
    rating: 5,
  },
  {
    id: "testimonial-david-park",
    text: "The care plan takes one thing completely off the plate. Updates happen without having to chase anyone, and knowing security is handled in the background is genuinely reassuring.",
    name: "David Park",
    role: "Owner, Greenfield Deli",
    country: "gb" as const,
    company: "Greenfield Deli",
    photo: "/images/testimonials/david.webp",
    rating: 5,
  },
  {
    id: "testimonial-karolina-jablonska",
    text: "Needed a site that handled bookings and a product shop together. The result was clean, loaded fast, and there were no issues on launch day — exactly what was promised.",
    name: "Karolina Jabłońska",
    role: "Founder, Studio Równowaga",
    country: "pl" as const,
    company: "Studio Równowaga",
    photo: "/images/testimonials/karolina.webp",
    rating: 5,
  },
  {
    id: "testimonial-james-thornton",
    text: "No upselling, no jargon, no inflated quotes. Just a solid brief, a fair price, and a finished site that does exactly what it needs to do.",
    name: "James Thornton",
    role: "Personal Trainer & Coach",
    country: "gb" as const,
    company: "Thornton Fitness",
    photo: "/images/testimonials/james-thornton.webp",
    rating: 5,
  },
  {
    id: "testimonial-james-whitfield",
    text: "I was fully booked within six weeks of launching my new site. The design is clean, the copy hits exactly the right tone for my audience, and the Calendly integration means new clients can book straight from the homepage. Best business investment I've made this year.",
    name: "James Whitfield",
    role: "Business Coach",
    country: "gb" as const,
    company: "Whitfield Coaching",
    photo: "/images/testimonials/james.webp",
    rating: 5,
  },
]

// 8 testimonials split evenly: 3 / 3 / 2
const firstColumn = testimonials.slice(0, 3)
const secondColumn = testimonials.slice(3, 6)
const thirdColumn = testimonials.slice(6, 8)

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
          <BuiltWithHeading />
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
      <AboutSection />

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
      <HowItWorksSection />

      {/* ── PORTFOLIO ──────────────────────────────────────────────────────── */}
      <PortfolioGrid />

      {/* ── TESTIMONIALS ───────────────────────────────────────────────────── */}
      <section className="relative py-24 px-4 bg-background overflow-hidden">
        <div className="pointer-events-none absolute -top-40 left-0 w-[600px] h-[600px] rounded-full bg-cyan-500/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 right-0 w-[600px] h-[600px] rounded-full bg-cyan-500/5 blur-3xl" />
        <div className="max-w-6xl mx-auto">
          <TestimonialsHeading />

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

      {/* ── TRUST BAR ──────────────────────────────────────────────────────── */}
      <TrustBar />

      {/* ── FAQ ────────────────────────────────────────────────────────────── */}
      <FAQSection />

      {/* ── CTA BANNER ─────────────────────────────────────────────────────── */}
      <CTABanner />

      {/* ── FOOTER ─────────────────────────────────────────────────────────── */}
      <SiteFooter />

    </main>
  )
}
