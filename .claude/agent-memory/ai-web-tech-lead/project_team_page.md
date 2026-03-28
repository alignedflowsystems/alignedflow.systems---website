---
name: team_page_build
description: /team page added to AlignedFlow Systems — solo founder profile for Mateusz Dobosz
type: project
---

A /team page was built for AlignedFlow Systems on 2026-03-16.

Files created/modified:
- `app/team/page.tsx` — route wrapper with SEO metadata
- `components/ui/team-page.tsx` — full client component (4 sections: Hero, Founder Profile, Why Work With Me, CTA)
- `components/ui/header-2.tsx` — "Team" nav link added between "About" and "Contact"

**Why:** Solo founder site for Mateusz Dobosz. The page is intentionally personal — named founder, London-based, initials avatar "MD", LinkedIn + contact CTA.

**How to apply:** If updating the founder's name, bio, LinkedIn URL, or avatar, edit `components/ui/team-page.tsx`. If nav order changes again, the navLinks array is at the top of `components/ui/header-2.tsx`.
