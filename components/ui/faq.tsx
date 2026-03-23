"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"

const faqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "Most websites are delivered within 2–4 weeks from the initial enquiry, depending on complexity and how quickly content is provided. A clear timeline is confirmed before work begins.",
  },
  {
    question: "Do I need to provide the content?",
    answer:
      "The text and any photos are provided by you — everything else is handled. If copywriting support is needed, that can be scoped as an add-on. Stock photography and AI-assisted imagery are also available if needed.",
  },
  {
    question: "What happens after the website launches?",
    answer:
      "Ongoing support and maintenance is available after every project. Whether it's updates, new pages, or fixing anything that comes up — AlignedFlow Systems is available after launch, not just during the build.",
  },
  {
    question: "What if I don't like the design?",
    answer:
      "Designs are shared for approval before anything is built. Revision rounds are built into the process, so nothing goes live until the result is right.",
  },
  {
    question: "Do you work with any industry?",
    answer:
      "The focus is on wellness coaches, spiritual creators, and small businesses, but projects across many niches are welcome. Get in touch with the details and a quick assessment of fit will follow.",
  },
  {
    question: "What do I need to get started?",
    answer:
      "Just reach out via the contact form. A few questions about the project will follow and next steps will be sent over — no commitment required.",
  },
]

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
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={answerId}
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <p className="pb-5 text-gray-400 leading-relaxed text-sm md:text-base">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FAQSection() {
  return (
    <section id="faq" className="py-24 px-4 bg-black">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-widest text-cyan-600 uppercase">
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
          {faqs.map((faq, i) => (
            <FAQItem key={i} index={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  )
}
