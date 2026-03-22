import { Header } from "@/components/ui/header-2"
import { SiteFooter } from "@/components/ui/site-footer"

export const metadata = {
  title: "Privacy Policy | AlignedFlow Systems",
  description: "Privacy Policy for AlignedFlow Systems — how personal data is collected, used, and protected.",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      <div className="max-w-3xl mx-auto px-4 pt-36 pb-24">
        <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-10">Last updated: March 2026</p>

        <div className="space-y-10 text-muted-foreground leading-relaxed">

          {/* 1 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">1. Who We Are</h2>
            <p>
              <strong className="text-foreground">AlignedFlow Systems</strong> is a web design and
              development studio. The website address is{" "}
              <a href="https://alignedflowsystems.com" className="text-cyan-600 hover:underline">
                alignedflowsystems.com
              </a>.
            </p>
            <p className="mt-3">
              AlignedFlow Systems is the data controller responsible for personal information collected
              through this website. Any questions about this policy can be directed to{" "}
              <a href="mailto:hello@alignedflowsystems.com" className="text-cyan-600 hover:underline">
                hello@alignedflowsystems.com
              </a>.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">2. What Personal Data Is Collected and Why</h2>

            <div className="space-y-5">
              <div className="rounded-xl border border-border p-5">
                <h3 className="font-semibold text-foreground mb-2">Contact Forms</h3>
                <p className="text-sm">
                  When a contact form is submitted, AlignedFlow Systems collects the name, email address,
                  and any additional details included in the message. This information is used solely
                  to respond to the enquiry and discuss the project. Contact details are not shared
                  with third parties unless necessary to fulfil a request (for example, passing a brief
                  to a collaborator the client has approved). Information submitted through contact forms
                  may be retained for up to 24 months for customer service purposes and will not be used
                  for marketing without explicit consent.
                </p>
              </div>

              <div className="rounded-xl border border-border p-5">
                <h3 className="font-semibold text-foreground mb-2">Cookies & Analytics</h3>
                <p className="text-sm">
                  Cookies and analytics tools are used to understand how visitors use this website — for
                  example, which pages are most visited and how long people spend on the site. This data
                  is collected in aggregated, anonymised form and is not used to identify individuals
                  personally. For full details on the cookies used and how to manage them, see the{" "}
                  <a href="/cookie-policy" className="text-cyan-600 hover:underline">Cookie Policy</a>.
                </p>
              </div>

              <div className="rounded-xl border border-border p-5">
                <h3 className="font-semibold text-foreground mb-2">Embedded Content from Other Websites</h3>
                <p className="text-sm">
                  Pages on this site may include embedded content such as videos or maps. Embedded
                  content from other websites behaves in exactly the same way as if you had visited
                  those websites directly. Those sites may collect data about you, use cookies, and
                  monitor your interaction with their embedded content. Reviewing the privacy policies
                  of those third-party services is recommended.
                </p>
              </div>

              <div className="rounded-xl border border-border p-5">
                <h3 className="font-semibold text-foreground mb-2">Media & Images</h3>
                <p className="text-sm">
                  If images are shared as part of a project brief or via email, avoid sending images
                  with embedded location data (EXIF GPS) if that information should not be stored.
                  Any images shared are used solely for the purpose of delivering the project.
                </p>
              </div>
            </div>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">3. Client & Project Information</h2>
            <p>
              Information provided by clients during the course of a project — including business
              details, creative briefs, login credentials, or access to third-party platforms — is
              treated as strictly private and confidential. Such information is:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm mt-3">
              <li>Stored securely and accessible only to authorised personnel at AlignedFlow Systems</li>
              <li>Used only for the purpose for which it was provided</li>
              <li>Not disclosed to third parties without express written consent, except where required by law</li>
              <li>Deleted or returned upon completion of the project at the client&apos;s request</li>
            </ul>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">4. Legal Basis for Processing</h2>
            <p className="mb-3">Personal data is processed under the following legal bases (UK GDPR / EU GDPR):</p>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong className="text-foreground">Legitimate interests</strong> — responding to enquiries and operating the business</li>
              <li><strong className="text-foreground">Contract performance</strong> — delivering services requested</li>
              <li><strong className="text-foreground">Legal obligation</strong> — where required by applicable law</li>
              <li><strong className="text-foreground">Consent</strong> — where explicitly agreed, such as opting in to updates</li>
            </ul>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">5. How Long Data Is Retained</h2>
            <p>
              Personal data is retained only as long as necessary for the purposes set out in this policy:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm mt-3">
              <li>Contact form enquiries — up to 24 months, unless deletion is requested sooner</li>
              <li>Active client project data — for the duration of the project and up to 12 months after completion</li>
              <li>Financial and invoicing records — as required by law (typically 6 years)</li>
              <li>Analytics data — in anonymised, aggregated form with no fixed retention limit</li>
            </ul>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">6. Where Data Is Sent</h2>
            <p className="mb-3">
              Personal data is never sold or rented. It may be shared only in the following limited
              circumstances:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>
                <strong className="text-foreground">Service providers</strong> — trusted tools and
                platforms used to operate the business (e.g. hosting on Vercel, email delivery). All are
                bound by appropriate data processing agreements.
              </li>
              <li>
                <strong className="text-foreground">Spam detection</strong> — contact form submissions
                may be checked through an automated spam detection service.
              </li>
              <li>
                <strong className="text-foreground">Legal requirements</strong> — where required by law,
                court order, or regulatory authority.
              </li>
            </ul>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">7. Your Rights</h2>
            <p className="mb-3">Under UK GDPR and EU GDPR, you have the right to:</p>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong className="text-foreground">Access</strong> — request a copy of the personal data held about you</li>
              <li><strong className="text-foreground">Rectification</strong> — request correction of inaccurate or incomplete data</li>
              <li><strong className="text-foreground">Erasure</strong> — request deletion of personal data</li>
              <li><strong className="text-foreground">Restriction</strong> — request limits on how personal data is processed</li>
              <li><strong className="text-foreground">Portability</strong> — receive data in a structured, machine-readable format</li>
              <li><strong className="text-foreground">Objection</strong> — object to processing based on legitimate interests</li>
              <li><strong className="text-foreground">Withdraw consent</strong> — at any time, where processing is based on consent</li>
            </ul>
            <p className="mt-4 text-sm">
              To exercise any of these rights, email{" "}
              <a href="mailto:hello@alignedflowsystems.com" className="text-cyan-600 hover:underline">
                hello@alignedflowsystems.com
              </a>. A response will be provided within 30 days. There is no charge for making a request.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">8. Security</h2>
            <p>
              Reasonable technical and organisational measures are taken to protect personal data
              from unauthorised access, disclosure, alteration, or destruction. However, no method of
              transmission over the internet is 100% secure and absolute security cannot be guaranteed.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">9. Children&apos;s Privacy</h2>
            <p>
              This website and its services are not directed at children under the age of 16. Personal
              data from children is not knowingly collected. If you believe a child has submitted
              personal information, please get in touch and it will be deleted promptly.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">10. Cookies</h2>
            <p>
              For full information about the cookies used on this site and how to manage preferences, please
              read the{" "}
              <a href="/cookie-policy" className="text-cyan-600 hover:underline">Cookie Policy</a>.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">11. Changes to This Policy</h2>
            <p>
              This Privacy Policy may be updated from time to time. Any changes will be posted on this
              page with an updated revision date. Reviewing this page periodically is recommended.
              Continued use of this website after changes are posted constitutes acceptance of the
              updated policy.
            </p>
          </section>

          {/* 12 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">12. Contact & Complaints</h2>
            <p>
              Any questions, concerns, or complaints about how personal data is handled can be directed to:
            </p>
            <p className="mt-3">
              <strong className="text-foreground">AlignedFlow Systems</strong><br />
              <a href="mailto:hello@alignedflowsystems.com" className="text-cyan-600 hover:underline">
                hello@alignedflowsystems.com
              </a>
            </p>
            <p className="mt-4 text-sm">
              If not satisfied with the response, there is a right to lodge a complaint with the{" "}
              <a
                href="https://ico.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-600 hover:underline"
              >
                Information Commissioner&apos;s Office (ICO)
              </a>{" "}
              in the UK, or the relevant supervisory authority within the EU.
            </p>
          </section>

        </div>
      </div>
      <SiteFooter />
    </main>
  )
}
