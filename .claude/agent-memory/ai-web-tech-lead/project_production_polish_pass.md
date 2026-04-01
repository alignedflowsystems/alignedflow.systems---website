---
name: Production Polish Pass — March 2026
description: 2026-03-28 final production polish — 8 tasks, all canonical URLs www-normalised, loading/404/robots fixed, orbiting skills mobile fallback added
type: project
---

Production polish pass completed 2026-03-28. All tasks resolved in one session.

Key changes:
- `orbiting-skills.tsx`: prefers-reduced-motion guard added to rAF loop; static 3-column grid fallback for mobile (`md:hidden`) and reduced-motion users
- `testimonials-columns-1.tsx`: `Avatar` component now uses `onError` + `imgError` state to fall back to initials if photo file is missing — prevents broken image slots
- `public/images/TODO.md` created: lists all 8 missing testimonial photo paths with expected dimensions
- `app/not-found.tsx`: upgraded with proper metadata export, "This page doesn't exist — but your next website could." headline, 3 links (home / portfolio / contact)
- `app/loading.tsx`: created — Loader2 spinner, full-page centered
- `app/robots.ts`: added `disallow: "/api/"` and fixed sitemap URL to www
- All canonical URLs normalised to `https://www.alignedflowsystems.com` (was missing www in some places); `metadataBase` in layout.tsx fixed; JSON-LD URLs in layout.tsx and blog/[slug]/page.tsx fixed; `alternates.canonical` added to portfolio/[slug]/page.tsx
- Build: clean, 0 TypeScript errors, 0 npm vulnerabilities
- No `console.log` statements found in source
- 1 TODO comment found: `components/ui/cookie-banner.tsx:3` — gate analytics behind consent (pre-existing, not introduced here)

**Why:** Pre-launch production readiness — accessibility, SEO consistency, missing infrastructure files.

**How to apply:** Canonical URL standard is always `https://www.alignedflowsystems.com` with www. Testimonial photos go in `public/images/testimonials/`. Portfolio images go in `public/portfolio/`.
