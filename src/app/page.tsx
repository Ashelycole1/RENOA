"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import SixStrandsCanvas from "@/components/SixStrandsCanvas";
import Navigation from "@/components/Navigation";
import ProjectCard from "@/components/ProjectCard";
import { founders } from "@/data/founders";
import { projects } from "@/data/projects";
import styles from "./page.module.css";

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <>
      <SixStrandsCanvas />
      <Navigation />
      <main>
        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.eyebrow}>Software Studio · Kampala, Uganda</div>
            <h1 className={styles.headline}>
              Turning complex code<br />
              into <span className={styles.accent}>fluid reality.</span>
            </h1>
            <p className={styles.subheadline}>
              We build agentic AI systems, Web3 infrastructure, and gamified
              digital experiences for the next billion users.
            </p>
            <div className={styles.ctaPair}>
              <Link href="/work" className={styles.ctaPrimary}>
                See the work
              </Link>
              <Link href="/contact" className={styles.ctaSecondary}>
                Start a project →
              </Link>
            </div>
          </div>
        </section>

        {/* MANIFESTO STRIP */}
        <section className={styles.manifesto}>
          <div className={styles.container}>
            <p className={styles.manifestoText}>
              Six founders. Three disciplines. One conviction: the next
              generation of transformative software will be built on this
              continent, by teams who understand its users at the deepest
              level — not as an afterthought, but as the primary design
              constraint.
            </p>
          </div>
        </section>

        {/* WORK PREVIEW */}
        <section className={styles.workPreview}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Selected work</h2>
              <Link href="/work" className={styles.seeAll}>
                All projects →
              </Link>
            </div>
            <div className={styles.projectGrid}>
              {featuredProjects.map((project) => (
                <ProjectCard
                  key={project.slug}
                  slug={project.slug}
                  name={project.name}
                  description={project.shortDescription}
                  discipline={project.discipline}
                  status={project.status}
                  founderIndices={project.founderIndices}
                />
              ))}
            </div>
          </div>
        </section>

        {/* TEAM PREVIEW */}
        <section className={styles.teamPreview}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>The team</h2>
              <Link href="/team" className={styles.seeAll}>
                Meet the team →
              </Link>
            </div>
            <div className={styles.founderNodes}>
              {founders.map((founder) => (
                <Link
                  key={founder.id}
                  href="/team"
                  className={styles.founderNode}
                  title={`${founder.name} — ${founder.role}`}
                >
                  <div
                    className={styles.nodeCircle}
                    style={{ borderColor: founder.strandColor }}
                  >
                    <div
                      className={styles.nodeInner}
                      style={{ backgroundColor: founder.strandColor }}
                    />
                  </div>
                  <span className={styles.nodeName}>{founder.name.split(" ")[0]}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* APPROACH PREVIEW */}
        <section className={styles.approachPreview}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Three disciplines</h2>
            <div className={styles.disciplineGrid}>
              {[
                {
                  name: "Agentic AI",
                  desc: "Systems that act, adapt, and reason on behalf of users — not just respond.",
                  href: "/approach#agentic-ai",
                },
                {
                  name: "Web3",
                  desc: "Blockchain infrastructure made invisible to end users. Real utility, zero jargon.",
                  href: "/approach#web3",
                },
                {
                  name: "Gamified Systems",
                  desc: "Engagement mechanics rooted in real behavior change, not superficial points.",
                  href: "/approach#gamified",
                },
              ].map((d) => (
                <Link key={d.name} href={d.href} className={styles.disciplineCard}>
                  <h3 className={styles.disciplineName}>{d.name}</h3>
                  <p className={styles.disciplineDesc}>{d.desc}</p>
                  <span className={styles.disciplineArrow}>→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* TRACTION BAR */}
        <section className={styles.tractionBar}>
          <div className={styles.container}>
            <div className={styles.tractionItems}>
              {[
                { label: "Huawei Seeds for the Future", value: "2024 Cohort" },
                { label: "Open source ranking", value: "Top 5% Uganda" },
                { label: "Expo showing", value: "Cavendish Uni 2024" },
                { label: "Live products", value: "3 in market" },
              ].map((item) => (
                <div key={item.label} className={styles.tractionItem}>
                  <span className={styles.tractionValue}>{item.value}</span>
                  <span className={styles.tractionLabel}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT CTA */}
        <section className={styles.contactCta}>
          <div className={styles.container}>
            <h2 className={styles.ctaTitle}>Have a project in mind?</h2>
            <p className={styles.ctaSubtitle}>
              We work with clients who want software that does something new.
            </p>
            <div className={styles.ctaContacts}>
              <a href="mailto:coleniwasiima@gmail.com" className={styles.contactEmail}>
                coleniwasiima@gmail.com
              </a>
              <a href="tel:+256767024153" className={styles.contactPhone}>
                +256 767 024 153
              </a>
            </div>
            <Link href="/contact" className={styles.ctaPrimary}>
              Start a conversation →
            </Link>
          </div>
        </section>

        {/* FOOTER */}
        <footer className={styles.footer}>
          <div className={styles.container}>
            <div className={styles.footerTop}>
              <span className={styles.footerLogo}>RENOA</span>
              <nav className={styles.footerNav}>
                {["Work", "Team", "Approach", "About", "Careers", "Contact"].map((name) => (
                  <Link key={name} href={`/${name.toLowerCase()}`} className={styles.footerLink}>
                    {name}
                  </Link>
                ))}
              </nav>
            </div>
            <div className={styles.footerBottom}>
              <span className={styles.footerCopy}>
                © 2024 RENOA. Kampala, Uganda.
              </span>
              <div className={styles.socials}>
                {["GitHub", "X", "LinkedIn", "TikTok"].map((s) => (
                  <a key={s} href="#" className={styles.social}>
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
