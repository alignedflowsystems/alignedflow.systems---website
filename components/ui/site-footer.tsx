"use client"

import { SparklesCore } from "@/components/ui/sparkles"

export function SiteFooter() {
  return (
    <footer className="relative bg-black text-gray-400 pt-12 pb-8 px-4 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-background to-transparent pointer-events-none z-20" />
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="footer-sparkles"
          background="#000000"
          minSize={0.3}
          maxSize={1}
          particleDensity={30}
          particleColor="#00ffff"
          speed={1}
          className="w-full h-full"
        />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <span className="text-white font-bold text-xl tracking-tight">
              AlignedFlow Systems
            </span>
            <p className="mt-3 text-sm leading-relaxed max-w-sm">
              A boutique web design studio delivering high-performance websites
              for businesses and creators who take their online presence seriously.
            </p>
          </div>

          {/* Packages */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
              Packages
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Landing Page", tab: "landing-page" },
                { label: "Shop & Services", tab: "shop-services" },
                { label: "Monthly Care Plan", tab: "care-plan" },
              ].map((s) => (
                <li key={s.tab}>
                  <a href={`/?tab=${s.tab}#services`} className="hover:text-white transition-colors">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/#about" },
                { label: "Packages", href: "/#services" },
                { label: "Team", href: "/team" },
                { label: "Contact", href: "/contact" },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-white transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="mailto:hello@alignedflowsystems.com" className="hover:text-white transition-colors">
                  hello@alignedflowsystems.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm">
          <p>&copy; {new Date().getFullYear()} AlignedFlow Systems Limited. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="/cookie-policy" className="hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
