---
name: Pricing & Conversion Pass 2026-03-28
description: 9-change conversion/pricing update — pricing added to services, FAQ expanded, hero rewritten, stats reframed, budget field added to contact form
type: project
---

Applied 2026-03-28. All changes passed `npm run build` with zero errors.

Key decisions made:
- `StatsCounter` extended to support a `kind: "text" | "numeric"` discriminated union so non-numeric stats ("< 3 Week", "24hr") render as static text while "Years Experience" and "Five-Star Reviews" keep the CountUp animation.
- `startingFrom` field added to `TabContent` interface in `feature108.tsx` as optional string; data lives in `page.tsx` services array.
- `FAQItem` interface in `lib/faq-data.ts` has no `id` field — the 3 new entries were added without `id` to match the existing type (spec listed `id` fields but the type doesn't support them).
- Budget range select in `contact-2.tsx` uses the same native `<select>` pattern already in the file rather than a shadcn Select component (the file uses native selects, not the shadcn Select).
- Logo cloud border logic updated for 2-col mobile grid — `isLastRow`/`isLastCol` recalculated for both 2- and 4-column breakpoints.
- LinkedIn URL placeholder: `https://linkedin.com/in/mateusz-alignedflow` — needs updating when real profile URL is confirmed.
- GitHub URL placeholder: `https://github.com/alignedflowsystems` — needs confirming.

**Why:** Conversion-focused quality pass to add pricing transparency, social proof signals, and clearer hero messaging for the wellness/coaching niche.

**How to apply:** When touching services, FAQ, or contact form, be aware these pricing figures and the discriminated-union stats pattern are now the baseline.
