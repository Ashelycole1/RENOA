# RENOA Website Audit & Recommendations

**Site reviewed:** https://renoacollective.vercel.app/ (Home, /projects, /careers)
**Review date:** 23 October 2026
**Goal:** Turn the current site into the strongest possible software-studio website for East African and global buyers.

---

## 1. Executive Summary

RENOA's site has a clean foundation: a clear one-line positioning ("We build software that means business"), a believable process, real shipped products, and a named leadership team. For a studio founded in 2026, it already looks credible at first glance.

What it lacks is what turns a *good-looking* studio site into a *lead-generating* one:

1. **Proof depth**: projects are one-paragraph cards, with no case studies, results, or client voices.
2. **Conversion path**: the "Book a call" button points to the generic `cal.com`, and there is no contact form, WhatsApp link, or inquiry flow.
3. **Trust signals**: no testimonials, client logos, security/data-protection statement, legal pages, or company registration details.
4. **Discoverability**: identical meta tags on every page, no social share image, no sitemap/blog, and a `vercel.app` domain while the email uses `renoa.tech`.
5. **Missing pages**: no About, no dedicated Service pages, no Contact, no Blog/Insights, no FAQ, no legal pages.
6. **A few bugs/inconsistencies** (listed in Section 3) that quietly hurt credibility.

**Highest-impact fixes, in order:** (1) fix the broken/wrong links and booking flow, (2) build 3 real case studies, (3) add a Contact page with WhatsApp + form, (4) move to the custom domain with proper SEO, (5) add a Services overview with engagement models.

---

## 2. Current Site Inventory (What Exists Today)

### 2.1 Pages & Navigation

| Page | URL | Status |
|---|---|---|
| Home | `/` | Live |
| Services (anchor) | `/#services` | Section only, not a page |
| Work (anchor) | `/#work` | Section only, not a page |
| Projects | `/projects` | Live, filterable list |
| Careers | `/careers` | Live, 3 open roles |

**Nav:** Services · Work · Projects · Careers · "Let's Talk" button
**Footer:** Company (Home, Services, Careers) · Work (Selected work, All projects) · Contact (hello@renoa.tech, Kampala, Uganda) · X and LinkedIn · "Book a call"

### 2.2 Homepage Sections

| Section | What it contains | Assessment |
|---|---|---|
| Hero | "We build software that means business." + Kampala studio tag, Book a call / See our work | Strong, clear |
| Stats strip | 3+ products shipped, 2026 founded, 6 team members | Honest but weak as social proof |
| Featured Work | DriveUG carousel (01/03) | Good idea, thin content |
| Selected Work | DriveUG, LAWBUDDY, Gemyte | Real products, no depth |
| Process | Consultation → Strategy → Development → Maintenance, each with an output | One of the best parts of the site |
| Capabilities | Product Design, Brand Identity, Platform Development, AI & Automation | Clear, but short on specifics |
| Leadership | 6 people with names and titles | Good start, no photos or bios |
| Final CTA | "Ready to upgrade your product operations?" + Book a call | Present, but weak destination |

### 2.3 Projects Page

Filters: All · AI · Web3 · Platform · Brand · Consulting. Five projects: DriveUG (live), LAWBUDDY (live), Gemyte (live), Konnect Web3 (in development), RENOA Brand System (live).

### 2.4 Careers Page

Positioning ("We hire people who ship") plus three roles: Senior AI/LLM Systems Engineer, Full-Stack Next.js Developer, Lead Product Designer, all Kampala/Remote, Full-Time.

---

## 3. Issues & Quick Fixes (Do These First)

| # | Issue found | Why it matters | Fix |
|---|---|---|---|
| 1 | "Book a call" links to the generic `https://cal.com` | Your #1 conversion button leads to a third-party homepage, not your calendar | Create a Cal.com/Calendly event (e.g., "30-min Discovery Call") and link or embed it |
| 2 | **Konnect Web3** and **RENOA Brand System** both link to `driveug.vercel.app` | Visitors land on the wrong product, which looks careless | Link to the correct URLs, or to an internal case study page, or remove the link until ready |
| 3 | Konnect Web3 shows "Coming soon" but still links to DriveUG | Mixed signal | Make it a non-clickable "In development" card or a waitlist form |
| 4 | Stats say "3+ products shipped" while the projects page shows 5 (4 live) | Inconsistent numbers undermine trust | Align the numbers, or restate as "4 live products" |
| 5 | Featured Work counter shows "01 / 03" while the Projects page has 5 items | Minor, but visible | Either feature 3 deliberately or update the counter |
| 6 | "View all ?" shows a stray character (likely a broken arrow glyph) | Looks like an encoding bug | Replace with a proper arrow icon (SVG) |
| 7 | Same title and meta description on every page | Weak SEO; Careers and Projects don't rank for their own topics | Unique `<title>`, description, and OG tags per page |
| 8 | No social share image (`og:image`) and Twitter card set to `summary` | Links shared on WhatsApp/LinkedIn/X look bare | Add a 1200×630 branded OG image and use `summary_large_image` |
| 9 | Site lives on `vercel.app`, email on `renoa.tech` | Looks like a prototype to enterprise buyers | Connect `renoa.tech` (or similar) and redirect the Vercel URL |
| 10 | Services and Work only exist as anchors | They can't rank in search or be linked individually | Give each its own page (see Section 4) |
| 11 | Team shown by initials only | Feels anonymous for a "co-founders" story | Add real photos, short bios, and LinkedIn links |
| 12 | Careers "Apply" buttons: destination unclear | Applicants may hit a dead end | Link to a form or a `careers@` email with a clear process |

---

## 4. Recommended Site Map (All Pages Needed)

### 4.1 Core Pages (Must-Have)

```
/                         Home
/services                 Services overview
  /services/product-design
  /services/platform-development
  /services/ai-automation
  /services/brand-identity
  /services/mobile-money-integrations   (high-value local differentiator)
/work                     Portfolio index (replaces/merges with /projects)
  /work/driveug           Case study
  /work/lawbuddy          Case study
  /work/gemyte            Case study
  /work/konnect           Case study (when ready)
/about                    Story, mission, values, team
/process                  Detailed delivery process (or a section on /about)
/pricing                  Engagement models & starting ranges
/contact                  Form + WhatsApp + booking + location
/careers                  Roles + culture
  /careers/[role-slug]    One page per role
```

### 4.2 Growth Pages (Strongly Recommended)

```
/insights                 Blog / articles / playbooks
  /insights/[slug]
/industries               Who you build for (fintech, mobility, edtech, legal, retail, logistics)
  /industries/[slug]
/faq                      Common questions
/security                 Security & data-protection practices
/ai-lab                   (optional) Live AI demos and experiments
/start-a-project          Guided project brief / estimator
/partners                 Tech and implementation partners
```

### 4.3 Utility & Legal Pages (Required for Trust and Compliance)

```
/privacy                  Privacy policy
/terms                    Terms of use
/cookies                  Cookie notice (if using analytics/tracking)
/404                      Branded not-found page
/sitemap.xml  /robots.txt
/thank-you                Post-form conversion page (for analytics)
```

---

## 5. Page-by-Page Content Blueprint

### 5.1 Home (`/`)

**Recommended section order:**

1. **Hero:** keep the headline. Tighten the sub-headline to state *who you serve and the outcome*. Add one primary CTA ("Book a free discovery call") and one secondary ("See our work"). Add a one-line proof strip beneath it (e.g., "Live in production: DriveUG · LAWBUDDY · Gemyte").
2. **Proof strip:** replace vanity stats with outcome stats as you collect them (e.g., users onboarded, bookings processed, response time, weeks from kickoff to launch).
3. **Who we help:** 3–4 short audience cards (startups, SMEs, enterprises/NGOs, international teams hiring East African talent).
4. **Services:** 4–5 cards, each linking to its own page, each with one concrete deliverable.
5. **Featured case studies:** 3 cards with *problem → what we built → result*, each linking to a full case study.
6. **Differentiators ("Why RENOA"):** local payments expertise (MTN/Airtel Mobile Money), AI grounded in local context (Ugandan law, STEM curricula), speed, ongoing maintenance, East African cost-quality balance.
7. **Process:** keep the existing 4 steps; add typical durations and a "what you'll get" line for each.
8. **Technology & tools:** logos of the stack (Next.js, TypeScript, Gemini, etc.).
9. **Testimonials:** 2–3 quotes with names, roles, and photos (or a founder-led "built for our own products" statement until client quotes exist).
10. **Team preview:** founders with photos and a link to /about.
11. **Insights preview:** 3 latest articles (once the blog exists).
12. **FAQ strip:** 5–6 top questions (pricing, timeline, ownership of code, payment terms, support).
13. **Final CTA:** booking widget embedded directly, with an alternative "Chat on WhatsApp" button.
14. **Footer:** see Section 6.4.

### 5.2 Services Overview (`/services`)

- Short intro on how RENOA works with clients.
- Service cards linking to each detail page.
- "Engagement models" block: Fixed-scope project · Dedicated product squad · Retainer / maintenance · Discovery sprint.
- CTA: "Not sure what you need? Book a discovery call."

### 5.3 Individual Service Pages (template)

Each page should contain:

| Block | Content |
|---|---|
| Headline + promise | What the client gets, in one sentence |
| Who it's for | The problem or stage this service solves |
| What's included | Specific deliverables (e.g., user research, wireframes, design system, prototype) |
| How we work | Mini-process for this service |
| Tech & tools | Relevant stack |
| Related case study | One proof point |
| Typical timeline & starting budget | Even a range (e.g., "from UGX X / USD Y") filters bad leads |
| FAQs | 4–5 service-specific questions |
| CTA | Book a call / Request a quote |

**Service-specific ideas:**

- **Product Design:** discovery workshops, UX research, design systems, usability testing, accessibility.
- **Platform Development:** web apps, SaaS, marketplaces, admin dashboards, APIs, DevOps and hosting, QA.
- **AI & Automation:** chatbots, RAG over private documents, workflow automation, document processing, AI cost and safety guardrails, evaluation.
- **Brand Identity:** logo, visual language, brand guidelines, 3D/isometric assets, pitch decks.
- **Mobile Money & Payments Integrations:** MTN MoMo, Airtel Money, card payments, reconciliation, payout flows. This is a strong local differentiator and worth its own page.

### 5.4 Work / Portfolio (`/work`)

- Keep the filter bar (AI · Web3 · Platform · Brand · Consulting).
- Add status chips (Live / In development), year, and industry.
- Each card should show a thumbnail or screenshot, a one-line outcome, and tech tags.
- Add a "Start a similar project" CTA at the bottom.

### 5.5 Case Study Template (`/work/[project]`)

| Section | What to include |
|---|---|
| Hero | Project name, one-line result, live link, screenshots/device mockups |
| Snapshot | Client/Product · Industry · Year · Services · Stack · Timeline · Team |
| The challenge | The real-world problem (e.g., "Car owners in Uganda have no trusted way to rent out idle vehicles") |
| Our approach | Research, decisions, trade-offs, key design/engineering choices |
| The solution | Feature walk-through with screenshots or short video/GIFs |
| Results | Numbers if available (users, bookings, uptime, load time, accuracy); honest qualitative outcomes if not |
| Lessons / what's next | Shows maturity and a roadmap |
| Testimonial | Quote from a user, partner, or founder |
| CTA | "Building something similar? Let's talk." plus next case study |

**Priority case studies:**

- **DriveUG:** mobile money booking, owner dashboards, verification and trust mechanisms.
- **LAWBUDDY:** how the AI is grounded strictly in the 1995 Constitution, how citations/comparison work, accuracy and safety approach, disclaimer about not replacing legal advice.
- **Gemyte:** syllabus upload → Knowledge Orbs → gamified challenges; learning-science rationale.

### 5.6 About (`/about`)

- Founding story: why RENOA exists, why Kampala, why now.
- Mission, vision, and values (3–5, each with a short example of how it shows up in work).
- Team grid with photos, roles, short bios, and LinkedIn links (all six leaders).
- "How we work" principles (communication cadence, transparency, ownership).
- Company facts: founded 2026, location, registration details, languages, time zone (EAT, UTC+3, with overlap hours for Europe/US/Asia).
- Community and impact (talent development, partnerships with universities, local tech community), if applicable.

### 5.7 Pricing / Engagement Models (`/pricing`)

You don't need exact prices. Buyers need *orientation*:

- 3–4 packages (e.g., **Discovery Sprint**, **MVP Build**, **Growth Partner / Retainer**, **Custom Enterprise**).
- For each: who it's for, what's included, typical duration, and a "starting from" range or "Contact for a quote."
- Payment terms overview (milestones, deposit), IP ownership ("you own the code"), and what maintenance covers.
- A "Request a quote" CTA with a short qualification form.

### 5.8 Contact (`/contact`)

- Short form: name, email, company, project type (dropdown), budget range, timeline, message, optional file upload.
- Embedded booking calendar.
- **WhatsApp click-to-chat button** (essential in the East African market).
- Email (hello@renoa.tech), phone (if desired), and a map/location for Kampala.
- Expected response time ("We reply within 1 business day").
- Social links.
- Confirmation page and auto-reply email.

### 5.9 Careers (`/careers`) Enhancements

- Add "Why work at RENOA": culture, learning budget, remote/hybrid policy, how you ship, growth.
- Benefits and compensation philosophy.
- Hiring process timeline (application → portfolio review → technical task → interview → offer).
- Dedicated page per role: responsibilities, requirements, nice-to-haves, tools, salary band (if possible), apply form.
- "Don't see your role?" open application form and an internship/graduate programme if relevant.
- Add job-posting structured data so roles appear in Google for Jobs.

### 5.10 Insights / Blog (`/insights`)

Content that attracts the exact buyers RENOA wants:

- "How to integrate MTN Mobile Money and Airtel Money into your app"
- "What does it cost to build an app in Uganda/East Africa?"
- "Building an AI assistant grounded in local law: lessons from LAWBUDDY"
- "How to choose a software studio (checklist)"
- "MVP vs. full product: what to build first"
- "Hiring East African engineers: what global teams should know"
- "Responsible AI for African businesses"
- Behind-the-scenes build logs from DriveUG, Gemyte, and Konnect

Include categories, author bylines, reading time, RSS, and a newsletter signup.

### 5.11 FAQ (`/faq`)

Cover: timelines, budgets and payment terms, who owns the code and IP, how maintenance works, tech stack choices, security and data handling, working with international clients, time zones and communication, how revisions work, what happens after launch, whether you sign NDAs.

### 5.12 Security & Trust (`/security`)

- How client data and source code are handled (access control, secrets management, backups, code review).
- AI-specific practices: data not used for training without consent, human-in-the-loop, evaluation, citations.
- Compliance posture: alignment with Uganda's Data Protection and Privacy Act, 2019 and general best practice for international clients (e.g., GDPR awareness). Only state what you actually do.
- NDA and IP assignment statement.
- Contact for security disclosures.

---

## 6. Features & Functionality to Add

### 6.1 Conversion Features

| Feature | Why |
|---|---|
| Embedded booking widget (Cal.com/Calendly) | Removes friction vs. an external redirect |
| WhatsApp click-to-chat (floating button + contact page) | The default business channel in Uganda and across East Africa |
| Contact form with qualification fields | Filters leads and speeds up proposals |
| "Start a project" brief builder / project estimator | Captures intent and budget early |
| Sticky header CTA ("Book a call") | Always visible on scroll |
| Exit-intent or end-of-article lead magnet | Captures visitors not ready to book |
| Downloadable assets (capabilities deck, project brief template, "Build vs. buy" checklist) | Gated lead capture |
| Newsletter signup | Long-term nurturing |
| Optional chat widget (an AI assistant trained on RENOA's services) | Demonstrates your AI capability on your own site |

### 6.2 Trust & Proof Features

- Client/partner logos and "As seen in / Built with" strip.
- Testimonials with real names and photos (or video).
- Metrics tied to each case study.
- Live product links with uptime/status or screenshots.
- Third-party profiles (Clutch, GoodFirms, GitHub, Product Hunt, LinkedIn) as they become available.
- Awards, hackathon results, certifications, and cloud-partner badges.
- Company registration and address in the footer.
- Security and privacy statements.

### 6.3 Content & Experience Features

- Interactive demo or short video for each flagship product (especially LAWBUDDY and Gemyte).
- Short **Loom-style walkthrough videos** on case studies.
- Subtle motion and 3D/isometric visuals consistent with the RENOA brand system (keep performance in mind).
- Dark/light mode (optional).
- Language support: English first; consider Luganda/Swahili landing pages for local SME audiences later.
- Prominent currency/pricing toggle (UGX / USD) on the pricing page.

### 6.4 Footer Improvements

Expand to four columns: **Company** (About, Careers, Contact, Insights) · **Services** (each service) · **Work** (case studies) · **Legal** (Privacy, Terms, Cookies, Security). Add WhatsApp, phone, newsletter signup, social links (add GitHub, Instagram, YouTube if you'll maintain them), and a "Kampala · Remote-friendly · EAT (UTC+3)" line.

### 6.5 Operations Features

- CRM integration (HubSpot Free, Notion, Airtable, or similar) so every lead is tracked.
- Email notifications and auto-replies for each form.
- Analytics with defined conversion events (booking, form submit, WhatsApp click, CV download).
- Spam protection (Cloudflare Turnstile or reCAPTCHA).
- Simple CMS (Sanity, Contentful, Notion-based, or MDX) so the team can publish case studies, articles, and jobs without redeploying.

---

## 7. SEO & Discoverability

| Area | Recommendation |
|---|---|
| Domain | Move to `renoa.tech` (or `renoa.africa` / `.co.ug`), with a 301 redirect from the Vercel URL |
| Metadata | Unique title/description/OG per page; add `og:image`; use `summary_large_image` |
| Structure | One `<h1>` per page; descriptive headings; clean URLs |
| Sitemap/robots | Generate `sitemap.xml` and `robots.txt`; submit to Google Search Console and Bing |
| Structured data | `Organization`, `LocalBusiness`/`ProfessionalService`, `Article`, `BreadcrumbList`, `FAQPage`, `JobPosting` |
| Local SEO | Google Business Profile for Kampala; consistent name/address/phone; local keywords ("software development company Kampala", "mobile money integration Uganda", "AI development Uganda") |
| Content strategy | Target long-tail keywords through the Insights blog and service pages |
| Backlinks | Directories (Clutch, GoodFirms), Ugandan and African tech communities, partner mentions, guest posts |
| Image SEO | Descriptive filenames and alt text on all screenshots |
| Internal linking | Case studies ↔ services ↔ articles |

**Keyword themes to build pages around:** software development company Uganda · mobile app development Kampala · mobile money integration (MTN MoMo/Airtel) · AI/LLM development for African businesses · RAG chatbot development · product design agency East Africa · MVP development · web3/blockchain development East Africa.

---

## 8. Performance, Accessibility & Technical Quality

Many East African users browse on mobile devices and variable connections, so speed is a competitive advantage and a direct demonstration of your engineering.

- **Performance:** target strong Core Web Vitals (LCP, INP, CLS); compress and lazy-load images (WebP/AVIF); keep any 3D or animation assets lightweight and deferrable; use a font subset.
- **Mobile-first design:** test on mid-range Android devices, not just flagship phones.
- **Accessibility:** WCAG 2.2 AA (contrast, keyboard navigation, focus states, alt text, reduced-motion support).
- **Reliability:** custom 404 page, error monitoring (e.g., Sentry), uptime monitoring.
- **Security:** HTTPS everywhere, security headers, form rate-limiting, no exposed secrets.
- **Privacy:** cookie notice if you use analytics that need consent; privacy-friendly analytics options include Plausible or Umami.
- **Testing:** cross-browser checks, Lighthouse audits on each release.

---

## 9. Messaging & Content Improvements

1. **Sharpen the audience.** "Teams across Africa and global markets" is broad. Add a line that names who you serve best (e.g., "startups, SMEs, and NGOs building digital products in East Africa; international teams that need a reliable engineering partner").
2. **Lead with outcomes, not activities.** Instead of "engineering, design, and AI operations," show what changes for the client (faster launch, automated operations, more revenue).
3. **Make the local edge explicit.** Mobile Money, Ugandan legal data, local curricula, and regional market understanding are real differentiators competitors in other regions can't copy.
4. **Be transparent about stage.** Being a young, founder-led studio is a strength if framed as senior attention, speed, and direct access to the CTO and CEO.
5. **Add specifics to Capabilities.** Each card should name 3–4 concrete deliverables and a related project.
6. **Show the people.** Real photos and short "what I do at RENOA" lines humanize the brand and are especially persuasive for international buyers.
7. **Keep tone consistent** (confident, plain-spoken, no jargon walls).

### Suggested Hero Alternatives (for A/B testing)

- "Software, AI, and design for businesses that mean business. Built in Kampala."
- "From idea to live product in weeks, not months. Product design, engineering, and AI for East African teams."
- "We build the products that power East African business: mobile money ready, AI-enabled, built to scale."

---

## 10. Analytics & Measurement Plan

| Metric | Why it matters |
|---|---|
| Booking-link clicks & completed bookings | Primary conversion |
| Contact form submissions | Secondary conversion |
| WhatsApp clicks | Likely a top channel locally |
| Case study views → CTA clicks | Shows what content sells |
| Scroll depth on Home and Services | Identifies drop-off points |
| Traffic sources (organic, LinkedIn, X, referral, direct) | Informs channel investment |
| Careers page → applications | Hiring funnel health |
| Core Web Vitals | Technical health |

Set up: Google Analytics 4 or Plausible, Google Search Console, Microsoft Clarity or Hotjar for session recordings, and UTM tagging on all social and email links.

---

## 11. Prioritized Roadmap

### Phase 1: Fix & Foundation (Week 1–2)
- [ ] Replace `cal.com` link with a real booking link; embed on Contact
- [ ] Fix wrong project links (Konnect Web3, RENOA Brand System)
- [ ] Align stats and counters (products shipped, 01/03)
- [ ] Fix the "View all ?" glyph
- [ ] Add unique meta tags per page and an OG share image
- [ ] Connect the custom domain and redirect from Vercel
- [ ] Add `/contact` page with form, WhatsApp, and email
- [ ] Add Privacy Policy and Terms pages
- [ ] Add team photos and bios

### Phase 2: Proof & Depth (Week 3–6)
- [ ] Publish 3 full case studies (DriveUG, LAWBUDDY, Gemyte)
- [ ] Build `/services` plus individual service pages
- [ ] Build `/about`
- [ ] Add testimonials or founder-voice statements
- [ ] Add tech-stack strip and "Why RENOA" section
- [ ] Add FAQ page
- [ ] Set up analytics, Search Console, and conversion events

### Phase 3: Growth (Month 2–3)
- [ ] Launch `/pricing` (engagement models)
- [ ] Launch `/insights` with 4–6 starter articles
- [ ] Add `/security` page
- [ ] Add per-role career pages and structured data
- [ ] Set up Google Business Profile and directory listings (Clutch, GoodFirms)
- [ ] Add lead magnets and a newsletter
- [ ] Connect forms to a CRM

### Phase 4: Differentiation (Month 3+)
- [ ] `/industries` pages
- [ ] AI Lab with live demos and an on-site AI assistant
- [ ] Interactive project estimator / brief builder
- [ ] Video walkthroughs of flagship products
- [ ] Localized landing pages (e.g., for SMEs in Luganda/Swahili markets)
- [ ] Case study updates with measurable results as data comes in

---

## 12. Content Checklist (What You Need to Gather)

**Brand & company**
- [ ] Final logo files, brand colors, OG image
- [ ] Company registration details and legal name
- [ ] Mission, vision, values, and founding story
- [ ] Professional photos of all six leaders and short bios

**Projects**
- [ ] Screenshots, device mockups, and short demo videos for each product
- [ ] Problem statements, key decisions, and tech stack per project
- [ ] Any metrics (users, transactions, uptime, response accuracy, launch time)
- [ ] User or partner quotes

**Commercial**
- [ ] Engagement models and starting price ranges (UGX and USD)
- [ ] Payment terms, IP/ownership policy, maintenance scope
- [ ] NDA template and contract basics

**People & hiring**
- [ ] Full job descriptions, benefits, hiring process
- [ ] Culture photos, team moments

**Operations**
- [ ] Booking link, WhatsApp Business number, phone number
- [ ] Email routing (hello@, careers@, support@)
- [ ] Social profiles to maintain

---

## 13. Quick Wins You Can Ship This Week

1. Swap the generic `cal.com` link for your real booking URL.
2. Correct the two wrong project links.
3. Add a WhatsApp button to every page.
4. Write unique page titles and descriptions.
5. Upload an OG image so shared links look professional.
6. Add real photos to the leadership section.
7. Add one proper case study for DriveUG as the template for the rest.

---

## 14. Summary Scorecard

| Area | Current | Target |
|---|---|---|
| Positioning & clarity | Strong | Strong, sharpened for audience |
| Visual identity | Clean, modern | Add real photography and product visuals |
| Social proof | Weak | Case studies, testimonials, metrics |
| Conversion path | Weak | Booking, WhatsApp, form, estimator |
| Page coverage | Minimal (3 pages) | 15–25 purposeful pages |
| SEO | Basic | Per-page SEO, schema, blog, local SEO |
| Trust & compliance | Minimal | Legal pages, security page, registration details |
| Content depth | Light | Service pages, insights, FAQ |
| Technical polish | Good base, a few bugs | Fast, accessible, monitored |

---

*Prepared from a review of the live RENOA website (home, projects, and careers pages). Recommendations on market needs reflect general industry practice for software studios and East African digital-product buyers; validate priorities against RENOA's own lead data and target clients as analytics accumulate.*
