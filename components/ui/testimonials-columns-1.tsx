"use client"
import React from "react"
import { Star } from "lucide-react"

export type Testimonial = {
  id?: string
  text: string
  name: string
  role: string
  country?: "gb" | "pl"
  photo?: string
  company?: string
  rating?: number
}

const countryLabel: Record<"gb" | "pl", { flag: string; label: string }> = {
  gb: { flag: "🇬🇧", label: "UK client" },
  pl: { flag: "🇵🇱", label: "Polish client" },
}

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/)
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase()
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase()
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5 mb-3" role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          aria-hidden="true"
          className={`w-3 h-3 ${i < rating ? "text-yellow-400" : "text-muted-foreground"}`}
          fill={i < rating ? "currentColor" : "none"}
        />
      ))}
    </div>
  )
}

function Avatar({ name }: { name: string }) {
  return (
    <div
      className="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center bg-cyan-600 text-white text-sm font-semibold"
      aria-label={`Avatar for ${name}`}
    >
      {getInitials(name)}
    </div>
  )
}

export const TestimonialsColumn = (props: {
  className?: string
  testimonials: Testimonial[]
  duration?: number
}) => {
  return (
    <div
      className={props.className}
      aria-label="Client testimonials"
    >
      {/* CSS animation runs on the GPU compositor thread - no JS, no jank on mobile */}
      <div
        className="flex flex-col gap-6 pb-6 bg-background"
        style={{
          animation: `testimonials-scroll ${props.duration || 10}s linear infinite`,
          willChange: "transform",
        }}
      >
        {[...new Array(2).fill(0).map((_, index) => (
          // The second copy is purely visual (infinite-scroll duplicate).
          // aria-hidden prevents screen readers from reading each card twice.
          <React.Fragment key={index}>
            {props.testimonials.map(({ id, text, name, role, country, photo, company, rating }) => (
              <div
                className="p-6 rounded-2xl border shadow-lg shadow-primary/10 max-w-xs w-full"
                key={id ?? name}
                aria-hidden={index > 0 ? "true" : undefined}
              >
                {rating !== undefined && <StarRating rating={rating} />}
                <div className="text-sm leading-relaxed">{text}</div>
                <div className="mt-5 flex items-center gap-3">
                  <Avatar name={name} />
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <p className="font-semibold text-sm leading-tight">{name}</p>
                    </div>
                    {company && (
                      <p className="text-xs text-muted-foreground leading-tight">{company}</p>
                    )}
                    <div className="leading-5 text-muted-foreground tracking-tight text-xs mt-0.5">{role}</div>
                    {country && (
                      <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground tracking-wide">
                        <span aria-hidden="true">{countryLabel[country].flag}</span>
                        <span>{countryLabel[country].label}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))]}
      </div>
    </div>
  )
}
