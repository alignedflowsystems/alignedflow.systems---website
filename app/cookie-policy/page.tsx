import { Header } from "@/components/ui/header-2"
import { SiteFooter } from "@/components/ui/site-footer"

export const metadata = {
  title: "Cookie Policy | AlignedFlow Systems",
  description: "Cookie Policy for AlignedFlow Systems - how cookies and similar technologies are used on this website.",
  alternates: { canonical: "https://www.alignedflowsystems.com/cookie-policy" },
  robots: { index: false },
  openGraph: {
    title: "Cookie Policy | AlignedFlow Systems",
    description: "Cookie Policy for AlignedFlow Systems - how cookies and similar technologies are used on this website.",
  },
}

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      <div className="max-w-3xl mx-auto px-4 pt-36 pb-24">
        <h1 className="text-4xl font-bold mb-2">Cookie Policy</h1>
        <p className="text-sm text-muted-foreground mb-10">Last updated: March 2026</p>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8 text-muted-foreground leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">1. What Are Cookies?</h2>
            <p>
              Cookies are small text files placed on your device when you visit a website. They are widely
              used to make websites work more efficiently, remember preferences, and provide information
              to website owners about how visitors use their site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">2. Who We Are</h2>
            <p>
              This Cookie Policy applies to the website operated by{" "}
              <strong className="text-foreground">AlignedFlow Systems</strong>.
              Any questions about cookie usage can be directed to{" "}
              <a href="mailto:hello@alignedflowsystems.com" className="text-cyan-600 hover:underline">
                hello@alignedflowsystems.com
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">3. Cookies Used on This Site</h2>
            <p className="mb-4">
              The following categories of cookies are used on this website:
            </p>

            <div className="space-y-5">
              <div className="rounded-xl border border-border p-5">
                <h3 className="font-semibold text-foreground mb-1">Strictly Necessary Cookies</h3>
                <p className="text-sm">
                  These cookies are essential for the website to function and cannot be switched off.
                  They are usually set in response to actions taken, such as filling in forms or
                  navigating between pages. Browsers can be set to block these cookies, but some
                  parts of the site may not work as a result.
                </p>
              </div>

              <div className="rounded-xl border border-border p-5">
                <h3 className="font-semibold text-foreground mb-1">Performance & Analytics Cookies</h3>
                <p className="text-sm">
                  These cookies allow visit and traffic source counting so the performance of this site
                  can be measured and improved. All information collected is aggregated and therefore
                  anonymous. If these cookies are not allowed, visit data will not be available.
                </p>
              </div>

              <div className="rounded-xl border border-border p-5">
                <h3 className="font-semibold text-foreground mb-1">Functional Cookies</h3>
                <p className="text-sm">
                  These cookies enable enhanced functionality and personalisation on the website. They
                  may be set by AlignedFlow Systems or by third-party providers whose services have
                  been added to these pages. If these cookies are not allowed, some or all of these
                  features may not function correctly.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">4. Third-Party Cookies</h2>
            <p>
              Some pages on this website may include content from third-party services such as embedded
              videos, maps, or social media features. These third parties may set their own cookies.
              AlignedFlow Systems does not control the use of these cookies and recommends reviewing
              the privacy and cookie policies of those third parties directly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">5. How to Manage Cookies</h2>
            <p className="mb-3">
              Cookies can be controlled and managed in several ways:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>
                <strong className="text-foreground">Browser settings:</strong> Most browsers allow
                refusing or deleting cookies through their settings. Refer to the browser&apos;s help
                documentation for instructions.
              </li>
              <li>
                <strong className="text-foreground">Opt-out tools:</strong> Some third-party analytics
                providers offer opt-out mechanisms - for example, Google Analytics provides a browser
                add-on at{" "}
                <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline">
                  tools.google.com/dlpage/gaoptout
                </a>.
              </li>
              <li>
                <strong className="text-foreground">Do Not Track:</strong> Some browsers include a
                &quot;Do Not Track&quot; feature. This signal is respected where it is technically possible to do so.
              </li>
            </ul>
            <p className="mt-3 text-sm">
              Please note that restricting cookies may impact the experience on this website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">6. Changes to This Policy</h2>
            <p>
              This Cookie Policy may be updated from time to time to reflect changes in technology,
              regulation, or business practices. Any changes will be posted on this page with an
              updated revision date. Reviewing this policy periodically is encouraged.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">7. Contact</h2>
            <p>
              Any questions about this Cookie Policy or how data is handled can be sent to:
            </p>
            <p className="mt-3">
              <strong className="text-foreground">AlignedFlow Systems</strong><br />
              <a href="mailto:hello@alignedflowsystems.com" className="text-cyan-600 hover:underline">
                hello@alignedflowsystems.com
              </a>
            </p>
          </section>

        </div>
      </div>
      <SiteFooter />
    </main>
  )
}
