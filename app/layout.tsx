import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/ui/cookie-banner";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "AlignedFlow Systems",
  "description": "Modern, fast websites for wellness coaches, spiritual creators, and small businesses worldwide.",
  "url": "https://alignedflowsystems.com",
  "areaServed": "Worldwide",
  "serviceType": "Web Design and Development",
  "address": { "@type": "PostalAddress", "addressLocality": "London", "addressCountry": "GB" },
  "email": "hello@alignedflowsystems.com",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long does a typical project take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most websites are delivered within 2–4 weeks from the initial enquiry, depending on complexity and how quickly content is provided. A clear timeline is confirmed before work begins.",
      },
    },
    {
      "@type": "Question",
      "name": "Do I need to provide the content?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The text and any photos are provided by you — everything else is handled. If copywriting support is needed, that can be scoped as an add-on. Stock photography and AI-assisted imagery are also available if needed.",
      },
    },
    {
      "@type": "Question",
      "name": "What happens after the website launches?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ongoing support and maintenance is available after every project. Whether it's updates, new pages, or fixing anything that comes up — AlignedFlow Systems is available after launch, not just during the build.",
      },
    },
    {
      "@type": "Question",
      "name": "What if I don't like the design?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Designs are shared for approval before anything is built. Revision rounds are built into the process, so nothing goes live until the result is right.",
      },
    },
    {
      "@type": "Question",
      "name": "Do you work with any industry?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The focus is on wellness coaches, spiritual creators, and small businesses, but projects across many niches are welcome. Get in touch with the details and a quick assessment of fit will follow.",
      },
    },
    {
      "@type": "Question",
      "name": "What do I need to get started?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Just reach out via the contact form. A few questions about the project will follow and next steps will be sent over — no commitment required.",
      },
    },
  ],
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AlignedFlow Systems | Web Design for Businesses & Creators",
  description: "Modern, fast websites for wellness coaches, spiritual creators, and small businesses worldwide.",
  metadataBase: new URL("https://alignedflowsystems.com"),
  icons: {
    icon: [
      { url: "/favicon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/favicon-48.png", type: "image/png", sizes: "48x48" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
  },
  openGraph: {
    type: "website",
    url: "https://alignedflowsystems.com",
    title: "AlignedFlow Systems | Web Design for Businesses & Creators",
    description: "Modern, fast websites for wellness coaches, spiritual creators, and small businesses worldwide.",
    siteName: "AlignedFlow Systems",
    images: ["https://www.alignedflowsystems.com/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "AlignedFlow Systems | Web Design for Businesses & Creators",
    description: "Modern, fast websites for wellness coaches, spiritual creators, and small businesses worldwide.",
    images: ["https://www.alignedflowsystems.com/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
