"use client"

// TODO: gate analytics loading behind getConsent() === 'accepted'
// See lib/consent.ts for the getConsent() utility and the GDPR gating pattern.

import { useState, useEffect } from "react"
import { motion } from "motion/react"
import Link from "next/link"

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem("cookie-consent")) {
      setVisible(true)
    }
  }, [])

  function handleAccept() {
    localStorage.setItem("cookie-consent", "accepted")
    setVisible(false)
  }

  function handleDecline() {
    localStorage.setItem("cookie-consent", "declined")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <motion.div
      role="region"
      aria-label="Cookie consent"
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed bottom-0 left-0 right-0 z-50 bg-zinc-900 border-t border-zinc-800"
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-zinc-300 text-center sm:text-left">
          We use cookies to understand how visitors use our site. No personal data is sold.{" "}
          <Link href="/cookie-policy" className="text-cyan-500 underline underline-offset-2 hover:text-cyan-400">
            Cookie Policy
          </Link>
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={handleDecline}
            className="rounded-full px-5 py-2 text-sm border border-zinc-600 text-zinc-300 hover:border-zinc-400 hover:text-white transition-colors"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="rounded-full px-5 py-2 text-sm bg-cyan-600 hover:bg-cyan-700 text-white transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </motion.div>
  )
}
