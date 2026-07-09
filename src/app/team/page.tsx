import Navigation from "@/components/Navigation";
import FounderCard from "@/components/FounderCard";
import { founders } from "@/data/founders";
import styles from "./page.module.css";

export const metadata = {
  title: "Team | RENOA",
  description: "Meet the six founders behind RENOA.",
};

export default function TeamPage() {
  return (
    <>
      <Navigation />
      <main className={styles.main}>
        <div className={styles.container}>
          {/* Header */}
          <div className={styles.pageHeader}>
            <div className={styles.eyebrow}>The people</div>
            <h1 className={styles.title}>Six founders,<br />one system.</h1>
            <p className={styles.subtitle}>
              RENOA is built by six people who decided that the best way to
              understand software was to build it together — from Kampala.
            </p>
          </div>

          {/* Six Strands Visual */}
          <div className={styles.strandsViz} aria-hidden="true">
            {founders.map((founder, i) => (
              <div key={founder.id} className={styles.strandTrack}>
                <div
                  className={styles.strandLine}
                  style={{
                    backgroundColor: founder.strandColor,
                    animationDelay: `${i * 0.1}s`,
                  }}
                />
                <div
                  className={styles.strandDot}
                  style={{ backgroundColor: founder.strandColor }}
                />
              </div>
            ))}
          </div>

          {/* Founder Cards */}
          <div className={styles.grid}>
            {founders.map((founder) => (
              <FounderCard
                key={founder.id}
                name={founder.name}
                role={founder.role}
                statement={founder.statement}
                strandColor={founder.strandColor}
                imageSrc={founder.imageSrc}
                socialLink={founder.socialLink}
              />
            ))}
          </div>

          {/* Careers Link */}
          <div className={styles.careersLink}>
            <p>
              Want to build with us?{" "}
              <a href="/careers" className={styles.careersAnchor}>
                See open roles →
              </a>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
