"use client"

import { useState } from "react"
import { faqItems } from "@/lib/faq-data"

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false)
  const answerId = `faq-answer-${index}`
  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={answerId}
        className="w-full flex items-center justify-between gap-4 py-5 text-left text-white font-medium text-base md:text-lg hover:text-cyan-400 transition-colors focus-visible:outline-none focus-visible:text-cyan-400"
      >
        <span>{question}</span>
        <span
          aria-hidden="true"
          className={`flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full border border-white/20 text-cyan-400 transition-transform duration-300 ${open ? "rotate-45" : ""}`}
        >
          +
        </span>
      </button>
      {/*
        The answer region is always present in the DOM so aria-controls always
        resolves to a valid element (WCAG 2.1 AA). When closed: visually hidden
        via max-height/opacity transition, and aria-hidden so screen readers
        skip the text while it is not exposed.
      */}
      <div
        id={answerId}
        role="region"
        aria-hidden={open ? undefined : true}
        style={{
          overflow: "hidden",
          maxHeight: open ? "600px" : "0",
          opacity: open ? 1 : 0,
          transition: "max-height 0.25s ease-in-out, opacity 0.2s ease-in-out",
        }}
      >
        <p className="pb-5 text-gray-400 leading-relaxed text-sm md:text-base">
          {answer}
        </p>
      </div>
    </div>
  )
}

export function FAQSection() {
  return (
    <section id="faq" className="py-24 px-4 bg-black">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase">
            FAQ
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">
            Common questions
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Everything you need to know before getting started.
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 px-6 md:px-10">
          {faqItems.map((faq, i) => (
            <FAQItem key={faq.question} index={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  )
}
