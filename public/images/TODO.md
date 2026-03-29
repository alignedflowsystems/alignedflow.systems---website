# Missing Images

These image files are referenced in the codebase but do not exist yet.
All paths are relative to `public/`.

## Testimonial Photos

The `Avatar` component in `components/ui/testimonials-columns-1.tsx` gracefully
falls back to initials when a `photo` prop resolves to a missing file — so the
site will not break. However, Next.js `<Image>` will log a 404 in dev and the
card will show a broken image slot if the `photo` prop is set. When photos are
added, place them at the paths below.

| Path | Dimensions | Subject |
|------|-----------|---------|
| `images/testimonials/emily.webp` | 96×96 px (display size 48×48, 2× for retina) | Emily Clarke — Holistic Therapist |
| `images/testimonials/megan.webp` | 96×96 px | Megan Hughes — Yoga & Breathwork Teacher |
| `images/testimonials/sophie.webp` | 96×96 px | Sophie Bennett — Studio Owner |
| `images/testimonials/tomasz.webp` | 96×96 px | Tomasz Wiśniewski — Personal Trainer |
| `images/testimonials/david.webp` | 96×96 px | David Park — Owner, Greenfield Deli |
| `images/testimonials/karolina.webp` | 96×96 px | Karolina Jabłońska — Founder, Studio Równowaga |
| `images/testimonials/james-thornton.webp` | 96×96 px | James Thornton — Personal Trainer & Coach |
| `images/testimonials/james.webp` | 96×96 px | James Whitfield — Business Coach |

## Portfolio Screenshots

These exist under `public/portfolio/` (correct location) and are present:

- `portfolio/monika-walek-desktop.png` — EXISTS
- `portfolio/monika-walek-mobile.png` — EXISTS

Note: `lib/portfolio-data.ts` references paths as `/portfolio/monika-walek-desktop.png`
which resolves to `public/portfolio/monika-walek-desktop.png`. This is correct.

## Notes

- Until testimonial photos are available, the `Avatar` component shows coloured
  circles with initials — this is intentional and accessible.
- To suppress Next.js 404 warnings for missing testimonial images in development,
  either remove the `photo` field from testimonials that have no photo, or add
  real photos at the paths above.
- Recommended format: WebP, square crop, face centred, minimum 96×96 px.
