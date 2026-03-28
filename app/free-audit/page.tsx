import { Suspense } from "react"
import { Loader2 } from "lucide-react"
import { Header } from "@/components/ui/header-2"
import { SiteFooter } from "@/components/ui/site-footer"
import { FreeAuditTool } from "@/components/ui/free-audit-tool"

export const metadata = {
  title: "Free Website Audit | AlignedFlow Systems",
  description:
    "Enter your website URL and get an instant performance audit — speed, SEO, accessibility, and best practices scores powered by Google PageSpeed Insights.",
  alternates: { canonical: "https://www.alignedflowsystems.com/free-audit" },
  openGraph: {
    title: "Free Website Audit | AlignedFlow Systems",
    description:
      "Get an instant performance audit for your website — speed, SEO, accessibility, and best practices scores.",
  },
}

export default function FreeAuditPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <div className="pt-24">
        <Suspense
          fallback={
            <div className="min-h-[400px] flex items-center justify-center">
              <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
            </div>
          }
        >
          <FreeAuditTool />
        </Suspense>
      </div>
      <SiteFooter />
    </main>
  )
}
