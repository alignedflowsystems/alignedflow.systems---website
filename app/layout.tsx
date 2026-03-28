import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/ui/cookie-banner";
import { faqItems } from "@/lib/faq-data";

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
  "mainEntity": faqItems.map((item) => ({
    "@type": "Question",
    "name": item.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.answer,
    },
  })),
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
