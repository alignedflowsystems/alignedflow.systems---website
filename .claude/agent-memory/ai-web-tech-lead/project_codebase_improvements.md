---
name: Codebase improvement batch — March 2026
description: Summary of all fixes applied in the March 2026 quality pass (critical + improvements + nice-to-haves)
type: project
---

All 17 fixes were applied and the build passes cleanly (Next.js 16.2.1, zero errors, zero warnings).

**Why:** Routine quality pass — performance, correctness, and maintainability improvements.

**How to apply:** These are now baked into the codebase. When adding new features, follow the patterns established here (e.g. always use next/link for internal routes, always use next/image for images, import FAQ data from lib/faq-data.ts).

Key changes made:
- All logo images downloaded to public/logos/ (no external CDN URLs in source)
- use-scroll.ts moved to hooks/use-scroll.ts
- FAQ data centralised in lib/faq-data.ts (used by both layout.tsx JSON-LD and faq.tsx)
- lib/consent.ts created with getConsent() utility for future GDPR analytics gating
- app/page.tsx is now a Server Component; animated sections live in components/ui/home-animated-sections.tsx
- OrbitingSkills rAF loop pauses when scrolled out of view (IntersectionObserver)
- SparklesCore lazy-loaded in site-footer.tsx with next/dynamic { ssr: false }
- CSP header added as Content-Security-Policy-Report-Only in next.config.ts
- .dark orphaned class removed from globals.css
- Typewriter CLS fixed — full text renders before JS hydration
