"use client"

import { cn } from "@/lib/utils"
import { motion } from "motion/react"

type Logo = {
  src: string
  alt: string
}

type LogoCloudProps = React.ComponentProps<"div">

const logos: Logo[] = [
  { src: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg", alt: "Next.js" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", alt: "React" },
  { src: "https://cdn.jsdelivr.net/gh/remojansen/logo.ts@master/ts.svg", alt: "TypeScript" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg", alt: "Tailwind CSS" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg", alt: "Figma" },
  { src: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/vercel.svg", alt: "Vercel" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg", alt: "Stripe" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg", alt: "WordPress" },
]

export function LogoCloud({ className, ...props }: LogoCloudProps) {
  return (
    <div
      className={cn("relative grid grid-cols-4", className)}
      {...props}
    >
      <div className="-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-screen border-t" />

      {logos.map((logo, i) => {
        const isLastRow = i >= 4
        const isLastCol = (i + 1) % 4 === 0
        return (
          <LogoCard
            key={logo.alt}
            logo={logo}
            className={cn(
              !isLastCol && "border-r",
              !isLastRow && "border-b",
            )}
          />
        )
      })}

      <div className="-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-screen border-b" />
    </div>
  )
}

type LogoCardProps = React.ComponentProps<"div"> & { logo: Logo }

function LogoCard({ logo, className, ...props }: LogoCardProps) {
  return (
    <motion.div
      className={cn(
        "group flex flex-col items-center justify-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-10 md:p-12 cursor-default",
        className
      )}
      whileHover="hover"
      {...(props as React.ComponentProps<typeof motion.div>)}
    >
      <motion.div
        variants={{ hover: { scale: 1.2, y: -6 } }}
        transition={{ type: "spring", stiffness: 300, damping: 18 }}
        className="relative flex items-center justify-center"
      >
        <motion.div
          variants={{ hover: { opacity: 1, scale: 1 } }}
          initial={{ opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 rounded-full blur-xl bg-cyan-400/40 -z-10"
        />
        <img
          alt={logo.alt}
          className="pointer-events-none h-7 select-none object-contain brightness-0 invert relative z-10"
          src={logo.src}
          style={{ maxWidth: 140 }}
        />
      </motion.div>

      <motion.span
        variants={{ hover: { color: "#06b6d4", y: -2 } }}
        transition={{ duration: 0.2 }}
        className="text-xs text-muted-foreground font-medium"
      >
        {logo.alt}
      </motion.span>
    </motion.div>
  )
}
