import Navigation from "@/components/Navigation";
import styles from "./page.module.css";

export const metadata = {
  title: "Careers | RENOA",
  description: "Build the next generation of African software with RENOA.",
};

export default function CareersPage() {
  return (
    <>
      <Navigation />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.pageHeader}>
            <div className={styles.eyebrow}>Join us</div>
            <h1 className={styles.title}>Build something real.</h1>
            <p className={styles.subtitle}>
              We don't have formal job listings right now. What we have is a
              real pipeline of live products, an honest team of six, and a
              clear opinion about what software should do.
            </p>
          </div>

          <section className={styles.section}>
            <h2 className={styles.sectionLabel}>What it's like to build here</h2>
            <div className={styles.valueGrid}>
              {[
                {
                  heading: "You own what you build",
                  text: "There's no middle layer between your code and the user. If something ships, you shipped it.",
                },
                {
                  heading: "The problem comes first",
                  text: "We start from a real user need, not a technology we want to use. The tech follows.",
                },
                {
                  heading: "You'll learn fast",
                  text: "Small teams move fast. You'll work across agentic AI, mobile money integrations, and Web3 in the same quarter.",
                },
                {
                  heading: "Uganda is the blueprint",
                  text: "We build for real constraints: MTN Mobile Money, intermittent data, multilingual users. Boring tech choices on purpose.",
                },
              ].map((v) => (
                <div key={v.heading} className={styles.valueCard}>
                  <h3 className={styles.valueHeading}>{v.heading}</h3>
                  <p className={styles.valueText}>{v.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.interestSection}>
            <h2 className={styles.sectionLabel}>Express interest</h2>
            <p className={styles.interestText}>
              No open roles listed doesn't mean no interest. If you're a
              developer, designer, or researcher who wants to build for the next
              billion, reach out directly. Tell us what you'd build.
            </p>
            <div className={styles.interestActions}>
              <a
                href="mailto:coleniwasiima@gmail.com?subject=I'd like to build at RENOA"
                className={styles.interestCta}
              >
                Send us a note →
              </a>
              <a href="/team" className={styles.teamLink}>
                Meet the team first
              </a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
