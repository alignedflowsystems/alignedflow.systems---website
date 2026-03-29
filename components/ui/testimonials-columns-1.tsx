"use client"
import React, { useState } from "react"
import Image from "next/image"
import { motion } from "motion/react"
import { Star, Linkedin } from "lucide-react"

export type Testimonial = {
  id?: string
  text: string
  name: string
  role: string
  country?: "gb" | "pl"
  photo?: string
  company?: string
  linkedinUrl?: string
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
    <div className="flex items-center gap-0.5 mb-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-3 h-3 ${i < rating ? "text-yellow-400" : "text-muted-foreground"}`}
          fill={i < rating ? "currentColor" : "none"}
        />
      ))}
    </div>
  )
}

function Avatar({ photo, name }: { photo?: string; name: string }) {
  const [imgError, setImgError] = useState(false)

  if (photo && !imgError) {
    return (
      <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
        <Image
          src={photo}
          alt={name}
          fill
          className="object-cover"
          sizes="48px"
          onError={() => setImgError(true)}
        />
      </div>
    )
  }
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
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-background"
      >
        {[...new Array(2).fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ id, text, name, role, country, photo, company, linkedinUrl, rating }) => (
              <div
                className="p-6 rounded-2xl border shadow-lg shadow-primary/10 max-w-xs w-full"
                key={id ?? name}
              >
                {rating !== undefined && <StarRating rating={rating} />}
                <div className="text-sm leading-relaxed">{text}</div>
                <div className="mt-5 flex items-center gap-3">
                  <Avatar photo={photo} name={name} />
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <p className="font-semibold text-sm leading-tight">{name}</p>
                      {linkedinUrl && (
                        <a
                          href={linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${name} on LinkedIn`}
                          className="text-muted-foreground hover:text-cyan-400 transition-colors"
                        >
                          <Linkedin className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                    {company && (
                      <p className="text-xs text-muted-foreground leading-tight">{company}</p>
                    )}
                    <div className="leading-5 opacity-60 tracking-tight text-xs mt-0.5">{role}</div>
                    {country && (
                      <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground/50 tracking-wide">
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
      </motion.div>
    </div>
  )
}
