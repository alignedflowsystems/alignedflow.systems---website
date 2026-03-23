import { Suspense } from "react"
import { Header } from "@/components/ui/header-2"
import { Contact2 } from "@/components/ui/contact-2"
import { SiteFooter } from "@/components/ui/site-footer"

export const metadata = {
  title: "Contact | AlignedFlow Systems",
  description: "Get in touch with AlignedFlow Systems. Share your project details and expect a reply within 24 hours.",
  alternates: { canonical: "https://www.alignedflowsystems.com/contact" },
  openGraph: {
    title: "Contact | AlignedFlow Systems",
    description: "Get in touch with AlignedFlow Systems. Share your project details and expect a reply within 24 hours.",
  },
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <div className="pt-24">
        <Suspense fallback={<div />}>
          <Contact2 />
        </Suspense>
      </div>
      <SiteFooter />
    </main>
  )
}
