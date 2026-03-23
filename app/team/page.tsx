import { Header } from "@/components/ui/header-2"
import { TeamPage } from "@/components/ui/team-page"
import { SiteFooter } from "@/components/ui/site-footer"

export const metadata = {
  title: "Our Team | AlignedFlow Systems",
  description:
    "Meet Mateusz Dobosz, the London-based developer and founder behind AlignedFlow Systems. Fast delivery, proven results, and a clear process from kickoff to launch.",
  alternates: { canonical: "https://www.alignedflowsystems.com/team" },
  openGraph: {
    title: "Our Team | AlignedFlow Systems",
    description:
      "Meet Mateusz Dobosz, the London-based developer and founder behind AlignedFlow Systems. Fast delivery, proven results, and a clear process from kickoff to launch.",
  },
}

export default function TeamRoute() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <div className="pt-20">
        <TeamPage />
      </div>
      <SiteFooter />
    </main>
  )
}
