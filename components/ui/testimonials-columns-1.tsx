"use client"
import React from "react"
import { motion } from "motion/react"

export type Testimonial = {
  id?: string
  text: string
  name: string
  role: string
  country?: "gb" | "pl"
}

const countryLabel: Record<"gb" | "pl", { flag: string; label: string }> = {
  gb: { flag: "🇬🇧", label: "UK client" },
  pl: { flag: "🇵🇱", label: "Polish client" },
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
            {props.testimonials.map(({ id, text, name, role, country }) => (
              <div
                className="p-6 rounded-2xl border shadow-lg shadow-primary/10 max-w-xs w-full"
                key={id ?? name}
              >
                <div className="text-sm leading-relaxed">{text}</div>
                <div className="mt-5">
                  <div className="font-medium tracking-tight leading-5">{name}</div>
                  <div className="leading-5 opacity-60 tracking-tight text-sm mt-0.5">{role}</div>
                  {country && (
                    <div className="mt-2 flex items-center gap-1 text-xs text-muted-foreground/50 tracking-wide">
                      <span aria-hidden="true">{countryLabel[country].flag}</span>
                      <span>{countryLabel[country].label}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </React.Fragment>
        ))]}
      </motion.div>
    </div>
  )
}
