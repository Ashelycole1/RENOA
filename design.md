# RENOA Website: design.md

**Purpose:** A single source of truth for how the RENOA website should look, feel, and behave. Hand this to designers and developers so every page stays consistent as the site grows from 3 pages to 20+.

**Companion file:** `RENOA_Website_Audit_and_Recommendations.md` (what to build). This file covers *how it should be designed*.

> **Note on scope:** The live site's text content and structure were reviewed, but its exact CSS values (hex codes, font files) could not be extracted. The visual tokens below are a **recommended system** built around RENOA's stated identity ("clean", "credible", "3D isometric visuals", product-studio from Kampala). Where your existing brand system already defines a color or typeface, replace the value here with the official one and keep the structure.

---

## 1. Design Principles

1. **Clarity over cleverness.** A buyer should understand what RENOA does and how to start within 5 seconds.
2. **Proof beats polish.** Real screenshots, numbers, and faces outrank decoration.
3. **Built for East African reality.** Fast on mid-range Android phones and variable networks; WhatsApp and Mobile Money are first-class.
4. **Confident and warm.** Plain-spoken, modern, never corporate-stiff or jargon-heavy.
5. **One primary action per screen.** Every view points to a single next step (usually "Book a call").
6. **Consistency is credibility.** Same spacing, same components, same tone on every page.
7. **Accessible by default.** Meets WCAG 2.2 AA; motion is optional, never required.

**Brand personality:** Capable · Direct · Modern · Grounded · Ambitious

---

## 2. Color System

### 2.1 Core Palette (Recommended)

| Token | Role | Light mode | Dark mode |
|---|---|---|---|
| `--bg` | Page background | `#FFFFFF` | `#0B0D12` |
| `--bg-subtle` | Alternating sections | `#F6F7F9` | `#11141B` |
| `--surface` | Cards, panels | `#FFFFFF` | `#161A23` |
| `--border` | Dividers, outlines | `#E4E7EC` | `#262B36` |
| `--text` | Primary text | `#0B0D12` | `#F2F4F7` |
| `--text-muted` | Secondary text | `#5B6472` | `#9AA3B2` |
| `--brand` | Primary brand / CTAs | `#2F5BFF` | `#5B7FFF` |
| `--brand-hover` | CTA hover | `#2347D6` | `#7C98FF` |
| `--accent` | Highlights, tags, 3D accents | `#00C2A8` | `#2EE0C6` |
| `--success` | Live status, confirmations | `#12B76A` | `#32D583` |
| `--warning` | In development | `#F79009` | `#FDB022` |
| `--danger` | Errors | `#D92D20` | `#F97066` |

### 2.2 Usage Rules

- **Brand color** is reserved for primary CTAs, links, and key highlights. Do not use it as a large background wash.
- **Accent color** supports the isometric/3D illustrations and small status elements only.
- Maximum **one primary-colored button per viewport**.
- Status chips: **Live** = success, **In development** = warning.
- Keep text/background contrast at **4.5:1 minimum** (3:1 for large text and UI components).
- Never rely on color alone to convey meaning; pair with text or icons.

### 2.3 Gradients (Use Sparingly)

- Hero glow: radial gradient of `--brand` at 8–12% opacity behind the headline.
- Section dividers: a subtle fade from `--bg` to `--bg-subtle`.
- No rainbow or multi-hue gradients.

---

## 3. Typography

### 3.1 Typefaces (Recommended)

| Use | Font | Fallback stack |
|---|---|---|
| Headings & display | **Inter Tight** or **Plus Jakarta Sans** (700/600) | `system-ui, -apple-system, "Segoe UI", Roboto, sans-serif` |
| Body & UI | **Inter** (400/500/600) | same as above |
| Code / technical labels | **JetBrains Mono** (400/500) | `ui-monospace, SFMono-Regular, Menlo, monospace` |

- Load at most **2 families / 4 weights**. Self-host or use Google Fonts with `font-display: swap`, subsetted to Latin.

### 3.2 Type Scale (Desktop → Mobile)

| Style | Desktop | Mobile | Weight | Line height | Letter spacing |
|---|---|---|---|---|---|
| Display (hero H1) | 72 px | 40 px | 700 | 1.05 | -0.03em |
| H1 | 56 px | 34 px | 700 | 1.1 | -0.02em |
| H2 | 40 px | 28 px | 700 | 1.15 | -0.02em |
| H3 | 28 px | 22 px | 600 | 1.25 | -0.01em |
| H4 | 20 px | 18 px | 600 | 1.35 | 0 |
| Body L | 20 px | 18 px | 400 | 1.6 | 0 |
| Body | 16 px | 16 px | 400 | 1.6 | 0 |
| Small | 14 px | 14 px | 400 | 1.5 | 0 |
| Eyebrow / label | 12–13 px | 12 px | 600 | 1.3 | 0.08em, uppercase |

Use fluid sizing (`clamp()`) for Display, H1, and H2.

### 3.3 Typography Rules

- One H1 per page.
- Body line length: **60–75 characters** (`max-width: 68ch`).
- Left-align body text; center only short headings and CTAs.
- Eyebrow labels (e.g., "PRODUCT STUDIO · KAMPALA", "THE PROCESS") sit above section headings, as on the current site.
- Numerals in the process steps (01–04) use the mono font.

---

## 4. Layout & Spacing

### 4.1 Grid

- **Container max-width:** 1200 px (1280 px for wide hero sections), centered.
- **Columns:** 12 (desktop), 8 (tablet), 4 (mobile).
- **Gutters:** 24 px desktop, 16 px mobile.
- **Page padding:** 24 px desktop, 16 px mobile (add safe-area insets on mobile).

### 4.2 Breakpoints

| Name | Min width |
|---|---|
| `sm` | 480 px |
| `md` | 768 px |
| `lg` | 1024 px |
| `xl` | 1280 px |

Design **mobile-first**; test at 360 px width (common Android size).

### 4.3 Spacing Scale (8-pt base)

`4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128`

- Section vertical padding: **96 px desktop / 64 px mobile**.
- Space between heading and content: **24–32 px**.
- Card inner padding: **24 px** (20 px mobile).

### 4.4 Radius, Borders & Elevation

| Token | Value | Use |
|---|---|---|
| `--radius-sm` | 8 px | Inputs, chips |
| `--radius-md` | 12 px | Buttons |
| `--radius-lg` | 20 px | Cards, panels |
| `--radius-full` | 999 px | Pills, avatars |
| Border | 1 px `--border` | Default card outline |
| Shadow-1 | `0 1px 2px rgba(11,13,18,.06)` | Resting cards |
| Shadow-2 | `0 8px 24px rgba(11,13,18,.10)` | Hover / raised |
| Shadow-3 | `0 24px 64px rgba(11,13,18,.16)` | Modals / popovers |

Prefer borders over heavy shadows for a clean, flat-modern look.

---

## 5. Components

### 5.1 Navigation Bar

- Sticky, 72 px tall, with a translucent background (`backdrop-filter: blur`) and a bottom border that appears on scroll.
- Left: RENOA wordmark (links home).
- Center/right: **Services · Work · About · Insights · Careers**.
- Far right: primary button **"Book a call"** (replace "Let's Talk" so the action is explicit).
- Active page indicated by an underline or brand-colored text.
- **Mobile:** hamburger opens a full-screen menu with large tap targets, the Book a call button pinned at the bottom, and a WhatsApp shortcut.
- Services may open a small dropdown listing the individual service pages.

### 5.2 Buttons

| Type | Style | Use |
|---|---|---|
| Primary | Filled `--brand`, white text, 12 px radius, 48 px height (44 px minimum on mobile) | Main CTA |
| Secondary | Transparent, 1 px border, `--text` | Supporting action ("See our work") |
| Tertiary / link | Text + arrow icon, underline on hover | Inline actions ("View all projects →") |
| WhatsApp | Filled `#2563EB` with the WhatsApp icon | Contact only |

- States: default, hover (slight lift + darker fill), focus (2 px offset focus ring in `--brand`), active, disabled, loading.
- Use an SVG arrow icon, not a text glyph (fixes the current "View all ?" bug).
- Minimum touch target: **44×44 px**.

### 5.3 Hero

- Eyebrow tag → H1 (Display) → sub-headline (Body L, max 2 lines) → two CTAs → proof strip.
- Right side or background: the 3D isometric visual or a device mockup of a flagship product, lazy-loaded and kept under ~150 KB (poster image first, animation optional).
- The marquee ("Launch · Build · Design") may remain as a subtle, slow scrolling strip, paused when `prefers-reduced-motion` is set.

### 5.4 Stats / Proof Strip

- 3–4 items: big number (H2 weight) + small label.
- Use real, verifiable numbers; keep them consistent site-wide.
- Count-up animation optional; respect reduced-motion.

### 5.5 Project Card

| Element | Spec |
|---|---|
| Image | 16:10 screenshot or device mockup, rounded `--radius-lg` |
| Category tag | Eyebrow style (e.g., "MOBILITY PLATFORM") |
| Status chip | Live (green) / In development (amber) |
| Title | H3 |
| One-line outcome | Body, muted |
| Tech tags | Small mono chips |
| Footer | "Read case study →" (internal) and "Visit live site ↗" (external) |

- Hover: card lifts 4 px, border turns `--brand` at 40% opacity, image zooms 1.03.
- **In-development** cards are not clickable; show "Coming soon" or a waitlist link.
- Index numbers (01, 02, 03…) in the mono font, as currently used.

### 5.6 Filter Bar (Projects page)

- Horizontal pills: All · AI · Web3 · Platform · Brand · Consulting.
- Active pill filled with `--text` (or `--brand`), inactive outlined.
- Scrolls horizontally on mobile with a fade at the edge; updates the URL query (`?filter=ai`) so views are shareable.

### 5.7 Process Steps

- Four steps, numbered 01–04, each with title, description, and an **Output** label (Problem Analysis, Project Roadmap & PRD, Working Software, Long-Term Support).
- Desktop: horizontal timeline with connecting line; mobile: vertical stack.
- Add typical duration under each step once confirmed.

### 5.8 Capability / Service Card

- Icon (24–32 px, line style), H3 title, 2-line description, 3 bullet deliverables, "Learn more →".
- Icons: one consistent set (Lucide or Phosphor), 1.5–2 px stroke, brand-tinted.

### 5.9 Team Card

- Square or 4:5 photo, name (H4), role (Small, muted), one-line bio, LinkedIn icon.
- Consistent photo treatment: same background tone, cropping, and lighting direction.
- Initials-in-circle is acceptable only as a temporary placeholder.

### 5.10 Testimonial

- Quote (Body L), name, role/company, photo or logo.
- 1–3 per row; carousel only on mobile.

### 5.11 Forms

- Labels above fields (always visible, never placeholder-only).
- 48 px input height, 8 px radius, 1 px border, focus ring in `--brand`.
- Inline validation with plain-language errors ("Enter a valid email like name@company.com").
- Required fields marked; keep the contact form to ~6 fields.
- Spam protection that does not rely on difficult CAPTCHAs.
- Success state routes to `/thank-you` (for analytics) and sends an auto-reply email.

### 5.12 Job Card (Careers)

- Department tag, role title (H3), one-line description, meta row (Location · Type), "Apply" button linking to the role page or form.
- Hover state matches project cards.

### 5.13 Case Study Layout

- Full-width hero with project name and result headline.
- Sticky "snapshot" sidebar on desktop (Client, Industry, Year, Services, Stack, Timeline).
- Alternating text and screenshot blocks; pull-quote for the testimonial; next-project link at the end.

### 5.14 Footer

- Four columns: Company · Services · Work · Legal, plus brand blurb, contact (email, WhatsApp, Kampala), newsletter field, and social icons.
- Bottom bar: copyright, registration details, and a "Back to top" link.

### 5.15 Floating Elements

- **WhatsApp button:** bottom-right, 56 px circle, appears after a short scroll, never covers form fields or cookie banner.
- **Cookie notice:** bottom, compact, two buttons (Accept / Manage), only if consent-requiring analytics are used.

---

## 6. Imagery, Illustration & Iconography

### 6.1 Visual Language

- **Primary style:** clean 3D isometric illustration, consistent with the existing RENOA Brand System. Use a limited palette (`--brand`, `--accent`, neutrals) so visuals feel like one family.
- **Product visuals:** real screenshots inside simple device frames (phone and laptop), with consistent shadows and angles.
- **Photography:** authentic photos of the Kampala team and workspace; avoid generic stock images of "diverse teams at laptops".
- **Data visuals:** simple charts using brand and accent colors with direct labels.

### 6.2 Image Rules

- Formats: AVIF/WebP with JPEG fallback; SVG for icons and simple illustrations.
- Always set `width`/`height` (prevents layout shift) and descriptive `alt` text.
- Lazy-load everything below the fold; preload only the hero image.
- Target: hero image < 150 KB, card images < 80 KB, total page weight < 1.5 MB on first load.

### 6.3 Iconography

- One icon library, line style, 24 px grid, 1.5–2 px stroke, rounded caps.
- Decorative icons are hidden from screen readers; functional icons get accessible labels.

---

## 7. Motion & Interaction

| Element | Behavior | Duration / easing |
|---|---|---|
| Section reveal | Fade + 16 px upward slide on scroll, once | 400–500 ms, `ease-out` |
| Card hover | Lift 4 px, border tint | 200 ms, `ease-out` |
| Button hover | Slight darken + 1 px lift | 150 ms |
| Page transitions | Simple fade | 200 ms |
| Number count-up | Once, when visible | 800 ms |
| Marquee strip | Slow linear scroll | 30–40 s loop |

**Rules**
- Respect `prefers-reduced-motion: reduce` by disabling all non-essential motion.
- Animate only `transform` and `opacity` (GPU-friendly).
- No auto-playing sound; any video is muted, has controls, and uses a poster image.
- Motion should guide attention, never block content or delay interaction.

---

## 8. Page Templates

| Template | Pages | Structure |
|---|---|---|
| **Landing** | Home | Hero → proof → services → case studies → differentiators → process → stack → testimonials → team → insights → FAQ → CTA |
| **Listing** | Work, Insights, Careers, Industries | Page header → filter bar → card grid → CTA |
| **Detail** | Case study, Service, Role, Article | Header → snapshot/meta → long-form body → related → CTA |
| **Info** | About, Pricing, Security, FAQ | Header → content blocks → CTA |
| **Form** | Contact, Start a Project | Header → form beside booking/WhatsApp → expectation note |
| **Legal** | Privacy, Terms, Cookies | Narrow text column, table of contents, last-updated date |
| **Utility** | 404, Thank-you | Centered message, one clear next action |

Every template ends with the same closing CTA band: *"Ready to upgrade your product operations?"* plus Book a call and WhatsApp.

---

## 9. Voice & Microcopy

**Tone:** confident, clear, human. Short sentences. Active voice. Specific over vague.

| Do | Don't |
|---|---|
| "We build software that means business." | "We leverage synergistic solutions." |
| "Book a free 30-minute call" | "Submit" |
| "We reply within one business day." | "We will get back to you shortly." |
| "Something went wrong. Try again, or message us on WhatsApp." | "Error 500" |

**CTA labels:** Book a call · See our work · Start a project · Read the case study · Chat on WhatsApp · Apply for this role.

**Empty and error states:** friendly, helpful, with a next step (and a branded 404 with links to Home, Work, and Contact).

---

## 10. Accessibility Checklist (WCAG 2.2 AA)

- [ ] Color contrast ≥ 4.5:1 for body text, ≥ 3:1 for large text and UI
- [ ] Full keyboard navigation with visible focus indicators
- [ ] Logical heading order; landmarks (`header`, `nav`, `main`, `footer`)
- [ ] "Skip to content" link
- [ ] Alt text on informative images; empty alt on decorative ones
- [ ] Form labels, error messages, and `aria-live` for validation
- [ ] Touch targets ≥ 44×44 px
- [ ] No content that relies on hover alone
- [ ] `prefers-reduced-motion` and `prefers-color-scheme` respected
- [ ] Video has captions; no auto-playing audio
- [ ] Language attribute set (`lang="en"`)
- [ ] Tested with a screen reader and at 200% zoom

---

## 11. Performance Budget

| Metric | Target |
|---|---|
| Largest Contentful Paint (LCP) | ≤ 2.5 s on mid-range mobile over 4G |
| Interaction to Next Paint (INP) | ≤ 200 ms |
| Cumulative Layout Shift (CLS) | ≤ 0.1 |
| First-load JS | ≤ 170 KB (gzipped) |
| Total first-load page weight | ≤ 1.5 MB |
| Fonts | ≤ 2 families, ≤ 4 files, subsetted |
| Third-party scripts | Analytics only; load after interaction where possible |

Heavy 3D or animation assets load lazily, with a static fallback for slow connections or reduced-motion users.

---

## 12. Implementation Notes

**Suggested stack (matches RENOA's own expertise):** Next.js + TypeScript, Tailwind CSS (tokens below), a headless CMS or MDX for case studies/articles/jobs, deployed on Vercel with a custom domain.

### 12.1 CSS Design Tokens (starter)

```css
:root {
  /* Color */
  --bg: #ffffff;
  --bg-subtle: #f6f7f9;
  --surface: #ffffff;
  --border: #e4e7ec;
  --text: #0b0d12;
  --text-muted: #5b6472;
  --brand: #2f5bff;
  --brand-hover: #2347d6;
  --accent: #00c2a8;
  --success: #12b76a;
  --warning: #f79009;
  --danger: #d92d20;

  /* Type */
  --font-heading: "Inter Tight", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;

  /* Radius */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --radius-full: 999px;

  /* Spacing */
  --space-1: 4px;  --space-2: 8px;   --space-3: 12px;
  --space-4: 16px; --space-6: 24px;  --space-8: 32px;
  --space-12: 48px; --space-16: 64px; --space-24: 96px;

  /* Layout */
  --container: 1200px;
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg: #0b0d12;
    --bg-subtle: #11141b;
    --surface: #161a23;
    --border: #262b36;
    --text: #f2f4f7;
    --text-muted: #9aa3b2;
    --brand: #5b7fff;
    --brand-hover: #7c98ff;
    --accent: #2ee0c6;
    --success: #32d583;
    --warning: #fdb022;
    --danger: #f97066;
  }
}

@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; transition: none !important; }
}
```

### 12.2 Component Inventory (build once, reuse everywhere)

`Button` · `NavBar` · `Footer` · `Hero` · `SectionHeader` (eyebrow + title + sub) · `StatItem` · `ProjectCard` · `ServiceCard` · `ProcessStep` · `TeamCard` · `Testimonial` · `JobCard` · `FilterPills` · `Tag/Chip` · `FormField` · `CTABand` · `FAQAccordion` · `Snapshot` (case study sidebar) · `WhatsAppButton` · `CookieNotice` · `Breadcrumbs`

---

## 13. Design QA Checklist (Before Every Release)

- [ ] Uses only tokens (no one-off colors, sizes, or spacings)
- [ ] One H1, correct heading order, unique meta title/description, OG image set
- [ ] All links work and point to the right destination (no placeholder or wrong URLs)
- [ ] Stats and counters match across pages
- [ ] Looks correct at 360, 768, 1024, and 1440 px
- [ ] Light and dark modes both checked (if dark mode is shipped)
- [ ] Keyboard and screen-reader pass done
- [ ] Lighthouse: Performance, Accessibility, and SEO each ≥ 90
- [ ] Images optimized, lazy-loaded, with alt text
- [ ] Forms submit, validate, and trigger the confirmation + email
- [ ] 404, thank-you, and legal pages styled consistently

---

## 14. Quick Reference

| Item | Value |
|---|---|
| Primary font | Inter / Inter Tight |
| Brand color | `#2F5BFF` (replace with official) |
| Accent | `#00C2A8` (replace with official) |
| Container | 1200 px |
| Base spacing | 8 px |
| Section padding | 96 px / 64 px mobile |
| Button height | 48 px (min 44 px) |
| Card radius | 20 px |
| Min contrast | 4.5:1 |
| Hero image budget | < 150 KB |
| Primary CTA | "Book a call" |
