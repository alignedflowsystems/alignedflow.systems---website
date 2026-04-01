export type BlogPost = {
  slug: string
  title: string
  description: string
  content: string // markdown string
  publishedAt: string // ISO date
  updatedAt: string
  author: string
  category: string
  tags: string[]
  readingTime: string
  image: string // placeholder path
}

export const blogPosts: BlogPost[] = [
  {
    slug: "website-cost-wellness-coach",
    title: "How Much Does a Website Cost for a Wellness Coach in 2025?",
    description:
      "From DIY builders to custom development - a transparent breakdown of what wellness coaches actually pay for their websites, and what affects the price.",
    publishedAt: "2025-11-15",
    updatedAt: "2026-01-20",
    author: "Mateusz Walek",
    category: "Pricing & Planning",
    tags: ["pricing", "wellness coach", "website cost", "web design"],
    readingTime: "6 min read",
    image: "/images/blog/website-cost-wellness-coach.webp",
    content: `## The honest answer: it depends - but here's a real breakdown

If you've been Googling "website cost wellness coach" and getting nothing but vague ranges and sales pitches, this post is for you. I'm going to walk through the actual numbers, explain what drives costs up or down, and help you figure out what makes sense for where your practice is right now.

Let's get into it.

## What type of website do you actually need?

Before we talk price, it's worth being clear about the three main categories:

### 1. Landing page (single-page site)
This is a single scrollable page that covers who you are, what you offer, and how to get in touch. It's the minimum viable online presence.

**Typical cost: £300-700 for a DIY build, £500-1,200 for a professionally built page.**

A landing page works well if you're just starting out, running a single programme, or primarily getting clients through referrals and just need somewhere to send people.

### 2. Full multi-page website
This typically includes a homepage, about page, services page, blog, and contact page - sometimes a resources section or lead magnet landing page too.

**Typical cost: £800-2,500 for a professionally built site.**

This is the right choice for most established wellness coaches. It gives you room to explain your approach, rank in Google searches, and build trust through content.

### 3. E-commerce or course site
If you're selling digital products, online courses, or packages with direct payment, you need proper e-commerce functionality - Stripe integration, product pages, checkout flows, and potentially membership areas.

**Typical cost: £2,000-5,000+, depending on complexity.**

Platforms like Kajabi or Teachable partially solve this, but they come with monthly fees and limited customisation.

## What actually affects the price?

### Number of pages and custom content
More pages mean more design time, more content to structure, and more development work. A 10-page site costs more than a 4-page site - straightforward.

### Integrations
Booking systems (Calendly, Acuity, Jane App), email marketing platforms (Mailchimp, ConvertKit), payment processors, and CRM integrations all add complexity. Each one needs to be connected, tested, and styled to match your brand.

If you just need a contact form, that's simple. If you need a client portal with intake forms, appointment reminders, and payment collection - expect to pay more.

### Custom design vs template
A template-based site uses a pre-built theme that's been adapted for your brand. It's faster and cheaper, but you may end up looking similar to other wellness coaches using the same theme.

A custom design is built specifically for your visual identity, messaging, and audience. It takes longer but results in something that's distinctly yours.

### Ongoing maintenance
Websites aren't set-and-forget. Plugins need updating, hosting needs renewing, content changes, and sometimes things break after platform updates. Many developers offer monthly care plans - typically £50-200/month - to handle this.

Some coaches handle maintenance themselves; others prefer to hand it off completely.

## DIY builders vs hiring a developer

### DIY with Wix, Squarespace, or similar

**Pros:**
- Low upfront cost (free to ~£25/month)
- You can make changes yourself at any time
- No waiting on a developer for small edits

**Cons:**
- Template limitations mean your site will look like thousands of others
- Performance and SEO are often mediocre out of the box
- Time cost is significant - learning the platform, building, troubleshooting
- Branding and conversion elements are harder to get right without design experience

DIY is a reasonable starting point if you're pre-revenue and can't justify the spend. Once you're generating consistent income, a professionally built site typically pays for itself quickly.

### Hiring a developer

**Pros:**
- Faster, cleaner result
- Better performance, SEO structure, and mobile experience
- Someone who's done this for wellness businesses before knows what converts

**Cons:**
- Higher upfront investment
- You're dependent on someone else for changes (unless they build you something editable)

The key is finding a developer who specialises in your niche. A generic web agency building sites for solicitors and restaurants won't have the same instinct for what a wellness client needs to feel confident enough to book.

## What to look for in a quote

When you receive a quote, ask for:

- **A clear scope** - exactly which pages and features are included
- **Revisions policy** - how many rounds of feedback are included
- **What's not included** - hosting, copywriting, stock photos, integrations
- **Ownership** - do you own the site and code, or are you locked in?
- **Post-launch support** - what happens if something breaks in week two?

Be cautious of quotes that are either very cheap (often cutting corners on performance and SEO) or very expensive without a clear justification for the premium.

## A note on value, not just cost

A wellness coaching website isn't an expense - it's a client acquisition tool. If a professionally built £1,200 website helps you convert even two additional clients per month that a DIY site wasn't, it pays for itself in weeks.

The question worth asking isn't "what does a website cost?" - it's "what is a website worth to my practice?"

If you're at the stage where you need a professional result without overcomplicating things, AlignedFlow Systems builds clean, fast websites for wellness coaches starting from £497 for a landing page and £997 for a full multi-page site. [Get in touch](/contact) if you'd like to talk through what you need.

## Summary

| Type | DIY cost | Professionally built |
|---|---|---|
| Landing page | £0-300/yr | £500-1,200 |
| Full website | £150-600/yr | £800-2,500 |
| E-commerce / courses | £300-1,200/yr | £2,000-5,000+ |

Prices are approximate and vary based on developer experience, location, and project scope. The right choice depends on where you are in your business - not what looks most impressive on paper.`,
  },
  {
    slug: "yoga-studio-website-mistakes",
    title: "5 Website Mistakes That Are Costing Yoga Studios Clients",
    description:
      "If your yoga studio website isn't converting visitors into students, one of these five common mistakes is probably why - and each one is fixable.",
    publishedAt: "2025-12-03",
    updatedAt: "2026-01-20",
    author: "Mateusz Walek",
    category: "Web Design Tips",
    tags: ["yoga studio", "website design", "online booking", "mobile optimisation"],
    readingTime: "5 min read",
    image: "/images/blog/yoga-studio-website-mistakes.webp",
    content: `## Your yoga studio website might be turning people away - without you knowing

Most yoga studio owners pour genuine care into the in-person experience: the lighting, the music, the way the space feels when someone walks in for the first time. Then they launch a website and think the job is done.

But a website isn't just a digital brochure. For many potential students, it's the first impression. And if that impression creates friction, uncertainty, or confusion - they'll simply find another studio.

Here are the five website mistakes I see most often, and exactly how to fix each one.

## Mistake 1: No online booking system

If someone has to email you, call you, or fill out a contact form just to book a class - you're losing them.

Modern students expect to browse your schedule and reserve their spot in under 60 seconds. This is especially true for first-time visitors who are already a little nervous about showing up to a new studio. If the booking process requires effort, the hesitation wins.

**The fix:** Integrate a booking system directly into your website. Options like Glofox, Mindbody, or even a simple Calendly embed can handle class scheduling without being expensive or complex to set up. Your website should have a "Book a Class" button in the navigation that goes directly to a live schedule - not a contact page.

## Mistake 2: Your site isn't optimised for mobile

Over 60% of web traffic now comes from mobile devices. For local businesses - including yoga studios - that number is often higher, because people search for nearby classes on their phones while they're out and about.

If your site is hard to navigate on mobile (tiny text, buttons too close together, images that don't scale correctly), visitors will bounce. And they won't come back.

**The fix:** Test your site on your own phone right now. Navigate to the schedule, try to book a class, read your pricing page. If anything feels clunky - that's what your potential students are experiencing. A properly built site adapts its layout for every screen size, and all interactive elements should be easy to tap with a finger.

## Mistake 3: Slow loading times

Studies consistently show that 53% of mobile users abandon a site that takes longer than three seconds to load. Every extra second increases bounce rate significantly.

Yoga studio websites are often slow because they use large, uncompressed images - photos of the studio, teacher headshots, lifestyle photography - that haven't been optimised for the web.

**The fix:** Compress all images before uploading them. Tools like Squoosh (free, browser-based) can reduce image file sizes by 70-80% with no visible quality loss. Use modern formats like WebP where possible. If you're using a page builder, check whether it's loading unnecessary scripts or plugins that aren't doing anything useful.

A fast site also ranks better in Google - so performance improvements directly support your local SEO.

## Mistake 4: No Google Business profile linked from your site

Many yoga studios have a Google Business profile but treat it as separate from their website. In practice, they work best together.

Your website should include your studio address, phone number, and opening hours in a consistent format - ideally in the footer on every page. This data, combined with your Google Business profile, tells Google exactly where you are and what you do - which helps you show up when someone nearby searches "yoga classes near me."

**The fix:** Claim and complete your Google Business profile if you haven't already. Make sure the name, address, and phone number on your website exactly match your Google Business listing. Add a link to your Google reviews page from your site (this builds trust and encourages existing students to leave reviews). Embed a Google Map on your contact page.

## Mistake 5: Generic template design that looks like every other studio

There are a handful of yoga website templates that power hundreds of studios. If you're using one without significant customisation, your site looks identical to a studio three towns away - and that's a problem.

Your brand is your differentiation. The warmth of your teaching style, the community you've built, the specific type of yoga you specialise in - none of that comes through on a stock template with stock photos.

**The fix:** At minimum, use your own photography (even smartphone photos are better than generic stock), write copy that reflects how you actually speak and what your students tell you they value, and make sure your colour palette and fonts are consistent and distinctly yours.

For studios serious about growth, a custom-designed site pays for itself quickly. At AlignedFlow Systems, we build websites for wellness businesses that are designed around your specific audience and goals - not adapted from a theme built for everyone.

## The bigger picture

Each of these mistakes is fixable - some in an afternoon, some requiring a bit more investment. But the studios that consistently grow their student base aren't necessarily the ones with the most beautiful websites. They're the ones whose websites make it easy to take the next step.

A good yoga studio website does one job: turn a curious visitor into a booked student. Everything - the design, the speed, the booking flow, the copy - should serve that goal.

Start with whichever mistake feels most urgent for your studio, and work through the list. The results will follow.`,
  },
  {
    slug: "therapist-website-vs-psychology-today",
    title: "Why Your Therapy Practice Needs More Than a Psychology Today Profile",
    description:
      "Psychology Today gets you listed. Your own website gets you chosen. Here's why therapists who invest in their own site consistently attract better-fit clients.",
    publishedAt: "2026-01-08",
    updatedAt: "2026-01-20",
    author: "Mateusz Walek",
    category: "Strategy",
    tags: ["therapist website", "private practice", "online presence", "Psychology Today"],
    readingTime: "7 min read",
    image: "/images/blog/therapist-website.webp",
    content: `## Listed is not the same as chosen

Psychology Today's therapist directory is genuinely useful. It has strong domain authority, it ranks well in Google, and people who are ready to find a therapist actively use it. If you're in private practice and not listed there, you're missing a real channel.

But here's the problem: being listed is not the same as being chosen.

When a potential client opens the directory and searches in their area, they see a grid of therapist profiles. The profiles look similar. The photos are professional headshots. The copy follows the same rough template. The decision of who to click through to often comes down to tiny signals - a phrase that resonates, a specialisation that feels relevant, a face that seems approachable.

And then they click your profile. They read 200 words. They might enquire - or they might not.

Your own website changes this dynamic entirely.

## The limitations of directory-only presence

### You don't own it

A directory listing exists on someone else's platform. Psychology Today can change its algorithm, its pricing, or its policies at any time. If they decide to raise the subscription fee from £30/month to £80/month, your marketing channel just got more expensive. If they change how profiles are ranked, your visibility could drop overnight.

You have no control over any of this.

Your own website, by contrast, is yours. The domain, the content, the traffic - all of it belongs to your practice.

### Limited differentiation

Every therapist on Psychology Today is working within the same template. Same character limits. Same layout. Same basic structure.

If you specialise in trauma-informed therapy for high-functioning adults, or you work exclusively with clients navigating major life transitions, or you bring a particular therapeutic lens that your ideal clients would find meaningful - you have about two paragraphs to communicate that in a directory listing.

Your own website gives you unlimited space to communicate who you are, how you work, and who you're right for.

### You're one option among many

When someone is browsing a directory, they're explicitly comparison-shopping. They're clicking through to multiple profiles, side by side. The frame is "find a therapist" - not "work with this therapist."

Your own website, reached through a Google search like "therapist for anxiety in Brighton" or through a referral, places you in a completely different frame. The visitor arrives specifically looking at you - not comparing you to fifteen others simultaneously.

## Why your own therapist website works differently

### Local SEO brings clients who are already looking

When someone searches "therapist for grief counselling in Edinburgh" or "CBT therapist near me," they're not browsing - they're ready to book. A well-built website with proper on-page SEO can rank for these searches and bring you clients with high intent.

Directory listings compete with each other for these searches. Your own website competes with the directories themselves - and in many niches and locations, a well-optimised local site can outrank them.

### Complete control of your brand

On your own site, you decide the colours, the images, the fonts, the tone of voice, the structure of information. If you want your personality to come through in your copy - that's possible. If you want a warm, calm visual aesthetic that reflects the atmosphere you create in sessions - you can build that.

This isn't vanity. How your website makes someone feel when they land on it is directly related to whether they contact you. Therapy clients are making a very personal decision. The emotional quality of your site matters.

### Intake forms that save real time

A well-designed therapist website includes an intake form that collects relevant information before a first call - preferred days and times, presenting concerns, whether they're using insurance or paying privately, how they heard about you.

This means your initial consultations are more focused, you're spending less time on admin, and you're better prepared for each conversation. Over the course of a year, this adds up.

### Content builds authority and trust over time

A blog or resources section on your website lets you write about topics your ideal clients are searching for. A post about "what to expect from your first therapy session" or "how to know if therapy is right for you" answers questions people are already asking - and it builds trust before they've ever contacted you.

This kind of content also keeps working for you indefinitely. A post you write once in January can bring in new enquiries every month for years.

### You're not dependent on one platform

If Psychology Today changes, or a client hears about you through a referral, or you run a local ad - your website is the stable home base everything points to. It's the asset that ties your marketing together.

## What to include on your therapist website

### An about page that actually feels personal

The about page is almost always the most-visited page on a therapist's website after the homepage. Potential clients want to know who they'd be sitting across from.

Write in first person. Mention your training and qualifications, but don't lead with them - lead with your approach and what brings you to this work. A professional headshot matters here; it's one of the main ways people begin to assess whether they might feel comfortable with you.

### Services with genuine clarity

Be specific about what you work with - and honest about what you don't. A potential client searching for support with OCD doesn't want to find a page that says "I work with a range of difficulties." They want to know whether you understand their specific situation.

List your modalities, typical session format, session length, fees, and whether you offer online sessions.

### A FAQ section

The questions people are too self-conscious to ask in a first call - "how long will therapy take?", "what happens if I want to stop?", "do you take notes?", "is this confidential?" - answer them on your website. This reduces the activation energy required to make first contact.

### A booking or contact page that removes friction

Make it easy to take the next step. Whether you use a contact form, a direct email link, or an embedded booking tool, the path from "interested" to "reached out" should be as short and clear as possible.

## How to use both together

The right approach isn't choosing between Psychology Today and your own website - it's using both strategically.

Your directory listing acts as a discovery channel for people browsing. Your website is where interested visitors land when they want to know more. Your Google Business profile handles local search. All of it points back to your website as the place where the decision gets made.

Build your website well, and every other channel you use - referrals, directories, social media - becomes more effective, because there's a strong, trustworthy home base for people to land on.

If you're ready to build that home base, AlignedFlow Systems works specifically with therapists and wellness professionals to create websites that are warm, professional, and designed to convert the right clients. [Get in touch](/contact) to talk through what your practice needs.

## In summary

Psychology Today is a useful tool. But it's a rented platform you don't control, with limited space for differentiation, in a frame designed for comparison-shopping.

Your own website is an asset you own. It gives you complete control over your brand, can rank in Google for highly-targeted searches, saves you admin time with intake forms, and builds authority through content.

Therapists who invest in their own site don't abandon the directories - they use both, and they don't have all their eggs in one basket.`,
  },
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}

export function getSortedBlogPosts(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )
}
