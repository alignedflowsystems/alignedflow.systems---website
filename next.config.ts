import type { NextConfig } from "next";

// Domains used by the app:
//   - formspree.io: contact form submissions
//   - fonts.gstatic.com / fonts.googleapis.com: Geist font (loaded via next/font, served from same origin at build)
// All logo images are now local (public/logos/), so no external image CDNs are needed.
const cspValue = [
  "default-src 'self'",
  // next/script, inline event handlers, framer-motion inline styles
  "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
  // Tailwind inline styles
  "style-src 'self' 'unsafe-inline'",
  // local images + data URIs + blob (next/image optimisation)
  "img-src 'self' data: blob:",
  // Geist is served from /_next/static by next/font — no external font CDN needed
  "font-src 'self'",
  // Formspree contact form endpoint
  "connect-src 'self' https://formspree.io",
  // No iframes
  "frame-src 'none'",
].join("; ");

const securityHeaders = [
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  // Report-Only so violations are logged without breaking anything during rollout.
  // Switch to Content-Security-Policy once no violations are seen in production.
  {
    key: "Content-Security-Policy-Report-Only",
    value: cspValue,
  },
];

const nextConfig: NextConfig = {
  images: {
    // All external logo images have been downloaded to public/logos/.
    // remotePatterns kept minimal — only for any remaining external images.
    remotePatterns: [],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
