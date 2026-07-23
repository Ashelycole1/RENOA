# RENOA Website Design Document
### Exact-replica reference: Afro Labs (afrolabs.site) — accent recolored to dark green

---

## 1. Source Analysis — Afro Labs

**Site:** afrolabs.site — software studio, Addis Ababa, Ethiopia
**Pages covered:** Home, Careers, Projects (All Projects), plus PMS product demo
**Stack signals:** Next.js (`/_next/static/chunks/`), Tailwind CSS (utility classes + CSS custom properties), Cal.com booking embed, Cloudflare email obfuscation and analytics beacon

### 1.1 Full page inventory
```
Nav (persistent on every page): Logo | Services | Work | Projects | Careers | [Let's Talk button]

/ (Home)
  Hero — featured-demo chip / headline / subline / dual CTA / 3D isometric illustration
  Selected Work — eyebrow + counter (01/03) + arrows, H2, subline, "View all projects", 3-card grid
  Process — eyebrow, H2 + subline (2-col), 4-step numbered row with icon badges + Output labels
  Capabilities — eyebrow, H2, subline, stippled 3D illustration (left) / 4 pillar cards (right)
  CTA band ("Start Building") — centered, faint grid-pattern background, eyebrow/H2/subline/button
  Footer — big logo, restated headline/subline, CTA button, 3-column sitemap, watermark pattern, bottom bar

/careers
  Eyebrow "CAREERS", H2 "We hire people who ship.", description, contact-email button, same 3D isometric illustration reused

/projects
  Eyebrow "ALL PROJECTS", H1 "Our Work", description
  Filter pills: All / E-Commerce / Platform / Brand / Social / Consulting
  Project list: preview image, title, subtitle (location/context), "VIEW PROJECT" link + external-link icon button
  Includes an "IN DEVELOPMENT" status project (no live link yet)
  Bottom CTA — "Ready to build?" + "Start a Project" button
```

### 1.2 What makes it work
| Element | Why it's effective |
|---|---|
| **Outcome-first headline** | "We build software that means business" — sells business value, not tech stack |
| **Live demo links on every finished project** | Trust signal — real deployed products, not screenshots |
| **Named deliverables per process step** | "Output: PRD & Roadmap" makes the engagement feel contractual |
| **Exactly 4 capability pillars** | Tight scope reads as focus |
| **Single CTA repeated across the page** | Hero, mid-page, footer, careers — always "Book a call" (or its variants) |
| **Filterable project index** | Visitors self-select by project type — E-Commerce, Platform, Brand, Social, Consulting |
| **Honest "in development" status** | Unshipped projects are labeled plainly rather than hidden or faked as live |

---

## 2. Design Tokens — Extracted Directly from Live CSS (DevTools-confirmed)

These are the actual CSS custom properties read off afrolabs.site's computed styles — not visual estimates. Only the accent family is recolored from purple to dark green for RENOA; every other token carries over exactly as extracted.

### 2.1 Colors
| Token | Afro Labs (extracted) | RENOA (recolored) |
|---|---|---|
| `--bg` | `#fdfdfd` | `#fdfdfd` — unchanged |
| `--bg-muted` | `#f7f7f7` | unchanged |
| `--bg-glow-1` / `--bg-glow-2` | `transparent` | unchanged |
| `--border` | `#0000000d` (black @ 5% alpha) | unchanged |
| `--border-strong` | `#0000001a` (black @ 10% alpha) | unchanged |
| `--card` | `#fff` | unchanged |
| `--footer-from` | `#fdfdfd` | unchanged |
| `--footer-to` | `#f3f3f3` | unchanged |
| `--glass` | `#fffc` (white @ ~80% alpha) | unchanged |
| `--glass-border` | `#0000000f` | unchanged |
| `--glass-shadow` | `#0000000a` | unchanged |
| `--drop-shadow-sm` | `0 1px 2px #00000026` | unchanged |
| **`--accent`** | `#6f22bf` (purple) | **`#0F6B3C`** (dark green) |
| **`--accent-hover`** | `#5f1da5` | **`#0B5230`** |
| **`--accent-soft`** | `#efe8fb` | **`#E4F3EA`** |
| **`--accent-deep`** | `#032937` | **`#04180F`** |
| **`--btn-bg`** | `#6f22bf` | **`#0F6B3C`** |
| **`--btn-glow`** | `#6f22bf38` | **`#0F6B3C38`** |
| `--btn-sec-bg` | `#fff` | unchanged |
| `--btn-sec-text` | `#111` | unchanged |
| `--btn-text` | `#fff` | unchanged |

### 2.2 Typography
| Token | Value |
|---|---|
| `--font-sans` / `--font-heading` | `"PP Neue Montreal", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif` |
| `--font-mono` | `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace` |
| `--font-weight-light` | `300` |
| `--font-weight-medium` | `500` |
| `--font-weight-semibold` | `600` |
| `--font-weight-bold` | `700` |
| `--leading-tight` | `1.25` |
| `--leading-relaxed` | `1.625` |
| Text size range | `0.75rem` (`xs`) up to `3.75rem` (`6xl`) |

**PP Neue Montreal** is a licensed commercial typeface — substitute **General Sans** or **Switzer** if licensing isn't secured.

### 2.3 Layout tokens
| Token | Value |
|---|---|
| `--container-md` | `28rem` |
| `--container-3xl` | `48rem` |
| `--container-5xl` | `64rem` |
| `--radius` | `0px` |
| `--radius-md` | `.375rem` |
| `--radius-lg` | `.5rem` |
| `--blur-md` | `12px` |
| `--default-transition-duration` | `.15s` |
| `--default-transition-timing-function` | `cubic-bezier(.4,0,.2,1)` |
| `--ease-out` | `cubic-bezier(0,0,.2,1)` |

### 2.4 Illustration & texture notes
- **Hero illustration:** solid-fill 3D isometric cube stack labeled *Design / Build / Launch*, topped by a wireframe globe inside a dashed orbital ellipse — recolor fill to `--accent` green.
- **Capabilities illustration:** stippled/dot-matrix 3D cube composition — recolor dots to `--accent` green.
- **Footer background:** `--footer-from`/`--footer-to` gradient + low-opacity hexagon texture + soft blurred landmass gradient overlay — recommend Uganda's outline silhouette for RENOA.
- **Body background-image:** radial gradient currently fully transparent — effectively inactive.

---

## 3. Content Mapping to RENOA

- **Team:** Evans (CEO), Natozo Martha (COO), Egabo Aaron (Project Manager), Alimpa Anne Hillary (Finance), Onyango John Steven (Marketing), Niwasiima Ashelycole (Co-Founder & CTO)
- **Location:** Kampala, Uganda
- Prior "Six Strands" visual is retired — replaced by the two Afro Labs illustration styles recolored green.

---

## 4. Site Architecture

```
Nav: RENOA | Services | Work | Projects | Careers | [Let's Talk]

/ (Home)
  Hero
  Selected Work   (3 shipped: DriveUG, LAWBUDDY, Gemyte)
  Process         (4 steps, named outputs)
  Capabilities    (4 pillars)
  Team strip      (optional — see Section 9)
  CTA band
  Footer

/careers
/projects
```

---

## 5. Section-by-Section Content Spec

### 5.1 Hero
- **Featured chip:** `FEATURED: DriveUG — Peer-to-Peer Rental Platform` → driveug.vercel.app
- **H1:** `We build software that means business.`
- **Subline:** `Our adaptive team powers engineering, design, and AI operations for teams across Kampala and global markets.`
- **CTAs:** `Book a call` (green fill) / `Learn more` (white outline)
- **Illustration:** 3D isometric cube stack (Design / Build / Launch) + wireframe globe + orbital ellipse, recolored green

### 5.2 Selected Work — 3-card grid

| Card | Category | Description | Live link |
|---|---|---|---|
| **DriveUG** | Mobility Platform | Peer-to-peer car rental platform for Uganda with Mobile Money booking and owner dashboards. | driveug.vercel.app |
| **LAWBUDDY** | AI Legal Assistant | An AI legal assistant grounded strictly in the 1995 Ugandan Constitution, with chat and side-by-side article comparison. | uglawbuddy.vercel.app |
| **Gemyte** | AI Learning Platform | An AI-driven 3D learning engine — upload a syllabus, generate "Knowledge Orbs," and work through STEM material as gamified cognitive challenges, powered by Gemini 2.5. | gemyte.vercel.app |

Header: eyebrow `SELECTED WORK` + counter `01 / 03` + arrow buttons, H2 `What we've shipped recently.`, `View all projects` → `/projects`

### 5.3 Process — 4 steps

| # | Stage | Description | Output |
|---|---|---|---|
| 01 | **Consultation** | We sit down with your team to learn your daily operations, identify your main problems, and discover exactly what you need. | Problem Analysis |
| 02 | **Strategy** | We check what is technically possible, study the risks, and create a clear PRD and system blueprint. | Project Roadmap & PRD |
| 03 | **Development** | Our team writes clean, secure code and connects all necessary systems. We test everything thoroughly. | Working Software |
| 04 | **Maintenance** | We don't just deliver and leave. We manage the system, fix issues, and continuously improve as your business grows. | Long-Term Support |

### 5.4 Capabilities — 4 pillars
Left: eyebrow + H2 + subline + stippled 3D illustration. Right: 4 stacked cards with green icon badge + title + description.

1. **Intelligence & Automation** — AI systems, LLM-driven workflows, and automation that thinks ahead of the busywork, so your team doesn't have to.
2. **Web & App Development** — Production-grade web platforms and mobile apps, built to hold up under real users, not just demos.
3. **ICT Consultation** — Technical strategy, infrastructure audits, and roadmap decisions for teams who need a second set of eyes before they build.
4. **Brand Design & Marketing** — Identity systems, visual language, and go-to-market storytelling that make a product feel credible from launch day.

### 5.5 Team strip
Evans (CEO) · Natozo Martha (COO) · Egabo Aaron (PM) · Alimpa Anne Hillary (Finance) · Onyango John Steven (Marketing) · Niwasiima Ashelycole (Co-Founder & CTO)

### 5.6 CTA Band
Eyebrow `START BUILDING`, H2 `Ready to upgrade your product operations?`, subline `Our value engineers work with you to deeply understand your business, custom-build your workspace, and provide full-stack support.`, button `Book a call` (green, arrow icon), faint grid-line background.

### 5.7 Footer
```
COMPANY: Home / Services / Careers
WORK: Selected work / All projects / DriveUG (LIVE) / LAWBUDDY (LIVE) / Gemyte (LIVE)
CONTACT: hello@renoa.dev · Kampala, Uganda

© 2026 RENOA. All rights reserved.        [X]  [LinkedIn]  [GitHub]
```

### 5.8 Careers page
Eyebrow `CAREERS`, H2 `We hire people who ship.`, description: *We do not always publish open roles. We are always looking for exceptional talent with proof of work, strong taste, and the ability to turn ideas into shipped products.*, contact button (mail icon), 3D illustration reused.

### 5.9 Projects page (`/projects`)
Eyebrow `ALL PROJECTS`, H1 `Our Work`, description: *Every project is a partnership — from concept to launch, engineered with precision and care for global scale.*

**Filter pills:** `All` / `AI` / `Web3` / `Platform` / `Brand` / `Consulting`

Projects: DriveUG · LAWBUDDY · Gemyte · *(optional in-development slot)*

Bottom CTA: H2 `Ready to build?`, subline `Let's discuss how we can bring your next product to life.`, button `Start a Project`.

---

## 6. Build Notes
- Stack: Next.js + TypeScript (no change)
- Replace Cal.com link with RENOA's actual scheduling link
- All finished projects **must** link to a live URL; in-development items get `IN DEVELOPMENT` label
- `/careers` and `/projects` are real routes, not anchors
- Hero illustration (solid fill) and Capabilities illustration (stippled) are two **different** rendering techniques — build both distinctly
- Font: confirm PP Neue Montreal license or substitute General Sans / Switzer
- Implement all colors as CSS custom properties per Section 2

---

## 7. Exact-Replica Checklist
- [ ] Nav: 5 links + CTA, identical on every page
- [ ] Hero: chip / H1 / subline / 2 CTAs / illustration — same order
- [ ] Work grid: exactly 3 cards, `01/03` counter, arrow nav
- [ ] Process: exactly 4 numbered steps, icon badge + named Output each
- [ ] Capabilities: exactly 4 pillars, stippled illustration left
- [ ] CTA band: single H2, single button, faint grid bg
- [ ] Footer: 3-column sitemap + bottom bar, on every page
- [ ] Careers: dedicated page, illustration reused, single contact CTA
- [ ] Projects: dedicated page, filter pills, `VIEW PROJECT` per card
- [ ] Color: single accent green throughout, via CSS custom properties
- [ ] Radius / spacing / shadow / transition values match Section 2.3

---

## 8. Build Spec

### 8.1 Stack
- Framework: Next.js 14 App Router
- Styling: Tailwind CSS + CSS custom properties
- Deployment: Vercel

### 8.2 CSS custom properties (drop-in)
```css
:root {
  --bg: #fdfdfd;
  --bg-muted: #f7f7f7;
  --bg-glow-1: transparent;
  --bg-glow-2: transparent;
  --card: #fff;
  --footer-from: #fdfdfd;
  --footer-to: #f3f3f3;
  --border: #0000000d;
  --border-strong: #0000001a;
  --glass: #fffc;
  --glass-border: #0000000f;
  --glass-shadow: #0000000a;
  --drop-shadow-sm: 0 1px 2px #00000026;
  --accent: #0F6B3C;
  --accent-hover: #0B5230;
  --accent-soft: #E4F3EA;
  --accent-deep: #04180F;
  --btn-bg: #0F6B3C;
  --btn-glow: #0F6B3C38;
  --btn-sec-bg: #fff;
  --btn-sec-text: #111;
  --btn-text: #fff;
  --font-sans: "PP Neue Montreal", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  --font-heading: var(--font-sans);
  --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  --font-weight-light: 300;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --leading-tight: 1.25;
  --leading-relaxed: 1.625;
  --container-md: 28rem;
  --container-3xl: 48rem;
  --container-5xl: 64rem;
  --radius: 0px;
  --radius-md: .375rem;
  --radius-lg: .5rem;
  --blur-md: 12px;
  --default-transition-duration: .15s;
  --default-transition-timing-function: cubic-bezier(.4,0,.2,1);
  --ease-out: cubic-bezier(0,0,.2,1);
}
```

### 8.3 Spacing & layout
- Section vertical rhythm: `96–128px` between major sections
- Work cards: 3-col desktop / 1-col mobile
- Capabilities: 4-col stacked cards right / 1-col mobile
- Process: 4-col row with dividers / stacked mobile
- Breakpoints: `<640px` mobile / `640–1024px` tablet / `>1024px` desktop

### 8.4 Component list
```
components/
  Nav.tsx
  Hero.tsx
  WorkGrid.tsx
  WorkCard.tsx
  Process.tsx
  Capabilities.tsx
  TeamStrip.tsx
  CTABand.tsx
  Footer.tsx
app/
  page.tsx
  careers/page.tsx
  projects/page.tsx
  not-found.tsx
```

### 8.5 Exact copy blocks
- Nav CTA: `Let's Talk`
- Hero H1: `We build software that means business.`
- Hero subline: `Our adaptive team powers engineering, design, and AI operations for teams across Kampala and global markets.`
- Hero CTAs: `Book a call` / `Learn more`
- Work eyebrow: `SELECTED WORK`
- Work H2: `What we've shipped recently.`
- Work subline: `A clean look at the product systems we have designed, engineered, and launched recently to unlock business growth.`
- Process eyebrow: `THE PROCESS`
- Process H2: `How we turn ideas into reality.`
- Process subline: `Our process is built around momentum and clarity. Each phase turns uncertainty into a concrete output the next phase can depend on.`
- Capabilities eyebrow: `CAPABILITIES`
- Capabilities H2: `Built for every product need.`
- Capabilities subline: `Composable by design, our team adapts to the unique challenges of your project. Simplify operational complexity with fast, flexible solutions built for ROI at scale.`
- CTA eyebrow: `START BUILDING`
- CTA H2: `Ready to upgrade your product operations?`
- CTA subline: `Our value engineers work with you to deeply understand your business, custom-build your workspace, and provide full-stack support.`
- Footer tagline: `Product design, engineering, and AI operations from Kampala for teams across East Africa and global markets.`
- Careers eyebrow: `CAREERS`
- Careers H2: `We hire people who ship.`
- Careers description: `We do not always publish open roles. We are always looking for exceptional talent with proof of work, strong taste, and the ability to turn ideas into shipped products.`
- Projects eyebrow: `ALL PROJECTS`
- Projects H1: `Our Work`
- Projects description: `Every project is a partnership — from concept to launch, engineered with precision and care for global scale.`
- Projects CTA H2: `Ready to build?`
- Projects CTA subline: `Let's discuss how we can bring your next product to life.`

---

## 9. Open Decisions
1. **Font licensing** — PP Neue Montreal is commercial; confirm license or substitute General Sans / Switzer.
2. **Team strip** — include at launch or defer? Afro Labs has no team section.
3. **Footer watermark shape** — swap Afro Labs' landmass for Uganda's outline?
4. **In-development project slot** — launch with 3 live projects only, or add a 4th "in development" card?
5. **`--radius-sm`** — value was cut off in DevTools capture; likely `.25rem`.
