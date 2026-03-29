"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"
import { motion } from "motion/react"

type Logo = {
  src: string
  alt: string
}

type LogoCloudProps = React.ComponentProps<"div">

const logos: Logo[] = [
  { src: "/logos/nextjs.svg", alt: "Next.js" },
  { src: "/logos/react.svg", alt: "React" },
  { src: "/logos/typescript.svg", alt: "TypeScript" },
  { src: "/logos/tailwindcss.svg", alt: "Tailwind CSS" },
  { src: "/logos/figma.svg", alt: "Figma" },
  { src: "/logos/vercel.svg", alt: "Vercel" },
  { src: "/logos/stripe-logo.svg", alt: "Stripe" },
  { src: "/logos/wordpress-logo.svg", alt: "WordPress" },
]

export function LogoCloud({ className, ...props }: LogoCloudProps) {
  return (
    <div
      className={cn("relative grid grid-cols-2 md:grid-cols-4", className)}
      {...props}
    >
      <div className="-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-screen border-t" />

      {logos.map((logo, i) => {
        const isLastRow4 = i >= 4
        const isLastCol4 = (i + 1) % 4 === 0
        const isLastRow2 = i >= 6
        const isLastCol2 = (i + 1) % 2 === 0
        return (
          <LogoCard
            key={logo.alt}
            logo={logo}
            className={cn(
              // md+: 4-col borders
              !isLastCol4 && "md:border-r",
              !isLastRow4 && "md:border-b",
              // mobile: 2-col borders
              !isLastCol2 && "border-r md:border-r-0",
              !isLastRow2 && "border-b",
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
        <Image
          src={logo.src}
          alt={logo.alt}
          width={140}
          height={28}
          className="pointer-events-none h-7 w-auto select-none object-contain brightness-0 invert relative z-10"
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
