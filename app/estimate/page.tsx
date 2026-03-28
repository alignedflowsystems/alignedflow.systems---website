import { Suspense } from "react"
import { Loader2 } from "lucide-react"
import { Header } from "@/components/ui/header-2"
import { CostEstimator } from "@/components/ui/cost-estimator"
import { SiteFooter } from "@/components/ui/site-footer"

export const metadata = {
  title: "Project Cost Estimator | AlignedFlow Systems",
  description:
    "Get an instant personalised estimate for your website project. Answer 4 quick questions and see a price range in under 60 seconds.",
  alternates: { canonical: "https://www.alignedflowsystems.com/estimate" },
  openGraph: {
    title: "Project Cost Estimator | AlignedFlow Systems",
    description:
      "Find out what your website will cost. Answer 4 questions and get an instant estimate.",
  },
}

export default function EstimatePage() {
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
          <CostEstimator />
        </Suspense>
      </div>
      <SiteFooter />
    </main>
  )
}
