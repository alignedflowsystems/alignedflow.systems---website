"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "motion/react";
import { Mail, Globe, Send, CheckCircle, Loader2 } from "lucide-react";

const ContactFallback = () => (
  <div className="min-h-[400px] flex items-center justify-center">
    <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
  </div>
);
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const PACKAGE_OPTIONS = [
  { value: "", label: "Select a package (optional)" },
  { value: "landing-page", label: "Landing Page" },
  { value: "shop-services", label: "Shop & Services" },
  { value: "care-plan", label: "Monthly Care Plan" },
] as const;

interface Fields {
  firstname: string;
  lastname: string;
  email: string;
  package: string;
  message: string;
}

const EMPTY_FIELDS: Fields = {
  firstname: "",
  lastname: "",
  email: "",
  package: "",
  message: "",
};

if (
  process.env.NODE_ENV === "development" &&
  !process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT
) {
  throw new Error(
    "[contact-2] NEXT_PUBLIC_FORMSPREE_ENDPOINT is not set. " +
      "Add it to .env.local so the contact form can submit."
  );
}

const FORMSPREE_ENDPOINT =
  process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? "";

const ContactFormInner = () => {
  const searchParams = useSearchParams();
  const [fields, setFields] = useState<Fields>(EMPTY_FIELDS);
  const [honeypot, setHoneypot] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Pre-select package from URL ?package= param
  useEffect(() => {
    const pkg = searchParams.get("package") ?? "";
    const valid = PACKAGE_OPTIONS.some((o) => o.value === pkg);
    if (valid && pkg) {
      setFields((prev) => ({ ...prev, package: pkg }));
    }
  }, [searchParams]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check: bots fill hidden fields; real users never see it
    if (honeypot) return;

    setLoading(true);
    setError(null);

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10_000);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        signal: controller.signal,
        body: JSON.stringify({
          ...fields,
          // Map package value to a readable label for the email
          package: PACKAGE_OPTIONS.find((o) => o.value === fields.package)?.label ?? fields.package,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong on our end. Please try again shortly.");
        setLoading(false);
      }
    } catch (err) {
      if (err instanceof Error && err.name === "AbortError") {
        setError("The request timed out. Please try again.");
      } else {
        setError("Unable to reach the server. Please check your connection.");
      }
      setLoading(false);
    } finally {
      clearTimeout(timeoutId);
    }
  };

  return (
    <section className="relative py-32 px-4 bg-background overflow-hidden">
      {/* Subtle cyan glow top-right */}
      <div className="pointer-events-none absolute -top-40 right-0 w-[600px] h-[600px] rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="relative z-10 max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-between gap-16 lg:gap-24">

        {/* ── Left: copy + contact details ───────────────────── */}
        <motion.div
          className="flex flex-col justify-between gap-10 mx-auto lg:mx-0 max-w-sm"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div>
            <span className="text-xs font-semibold tracking-widest text-cyan-600 uppercase">
              Get In Touch
            </span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold leading-tight">
              Ready to build something you’re proud of?
            </h2>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              Fill in the form with a brief overview of the project and a response will follow within 24 hours. All enquiries are treated with discretion and professionalism.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Contact Details
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-600/10 text-cyan-600">
                  <Mail className="h-4 w-4" />
                </span>
                <a
                  href="mailto:hello@alignedflowsystems.com"
                  className="text-sm hover:text-cyan-600 transition-colors"
                >
                  hello@alignedflowsystems.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-600/10 text-cyan-600">
                  <Globe className="h-4 w-4" />
                </span>
                <a
                  href="https://alignedflowsystems.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-cyan-600 transition-colors"
                >
                  alignedflowsystems.com
                </a>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* ── Right: form ──────────────────────────────────── */}
        <motion.div
          className="mx-auto w-full max-w-screen-md"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {submitted ? (
            <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-border bg-background p-12 text-center h-full min-h-[400px]">
              <CheckCircle className="h-12 w-12 text-cyan-600" />
              <h3 className="text-2xl font-bold">Message sent!</h3>
              <p className="text-muted-foreground max-w-xs">
                Thanks for reaching out. A reply will follow within 24 hours.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 rounded-2xl border border-border bg-background p-8 md:p-10 shadow-sm"
            >
              {/* Honeypot: invisible to real users, bots fill it automatically */}
              <input
                type="text"
                name="_gotcha"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                aria-hidden="true"
                tabIndex={-1}
                style={{ display: "none" }}
              />

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="grid w-full gap-1.5">
                  <Label htmlFor="firstname">First Name</Label>
                  <Input
                    id="firstname"
                    name="firstname"
                    type="text"
                    placeholder="Jane"
                    value={fields.firstname}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="grid w-full gap-1.5">
                  <Label htmlFor="lastname">Last Name</Label>
                  <Input
                    id="lastname"
                    name="lastname"
                    type="text"
                    placeholder="Smith"
                    value={fields.lastname}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="grid w-full gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="jane@example.com"
                  value={fields.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="grid w-full gap-1.5">
                <Label htmlFor="package">Package</Label>
                <select
                  id="package"
                  name="package"
                  value={fields.package}
                  onChange={handleChange}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-foreground"
                >
                  {PACKAGE_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid w-full gap-1.5">
                <Label htmlFor="message">Tell us more</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="A bit about your business, your timeline, and any specific requirements..."
                  className="min-h-[140px] resize-none"
                  value={fields.message}
                  onChange={handleChange}
                  required
                />
              </div>

              {error && (
                <p className="text-sm text-red-500 text-center" role="alert">
                  {error}
                </p>
              )}

              <Button
                type="submit"
                disabled={loading}
                className="w-full gap-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-full h-11 disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send className="h-4 w-4" />
                  </>
                )}
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                All enquiries receive a reply within 24 hours.
              </p>
            </form>
          )}
        </motion.div>

      </div>
    </section>
  );
};

export const Contact2 = () => (
  <Suspense fallback={<ContactFallback />}>
    <ContactFormInner />
  </Suspense>
);
