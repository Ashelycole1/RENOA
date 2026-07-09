import Navigation from "@/components/Navigation";
import styles from "./page.module.css";

export const metadata = {
  title: "About | RENOA",
  description: "The origin story, manifesto, and traction behind RENOA.",
};

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className={styles.main}>
        <div className={styles.container}>
          {/* Header */}
          <div className={styles.pageHeader}>
            <div className={styles.eyebrow}>Who we are</div>
            <h1 className={styles.title}>Built in Kampala,<br />for the next billion.</h1>
          </div>

          {/* Origin Story */}
          <section className={styles.section}>
            <h2 className={styles.sectionLabel}>Origin</h2>
            <div className={styles.sectionContent}>
              <p>
                RENOA started with six students at Cavendish University who kept
                seeing the same pattern: Western software paradigms failing
                when applied to East African realities. Mobile money systems that didn't talk
                to each other. Mental health access that required a car and a
                referral. Loyalty programs that only big chains could afford.
              </p>
              <p>
                In 2023, we decided the gap wasn't technology — it was who was
                at the table when the systems were designed. We formed RENOA to
                be that presence: a studio that builds software for African
                users from the inside out, not as a localisation afterthought.
              </p>
              <p>
                The name RENOA comes from the idea of renewal — the belief that
                the next generation of transformative software won't come from
                copying what worked elsewhere, but from designing for the
                specific, real constraints of this place: intermittent
                connectivity, mobile money as the financial layer, and users who
                speak Luganda, Acholi, or Langi as their first language.
              </p>
            </div>
          </section>

          {/* Manifesto */}
          <section className={`${styles.section} ${styles.manifestoSection}`}>
            <h2 className={styles.sectionLabel}>Manifesto</h2>
            <blockquote className={styles.manifesto}>
              Software that doesn't work for the people it was built for has
              failed, no matter how elegant the code. We build for the real
              constraint: low bandwidth, mobile payments, local languages, and
              users who don't have time for a tutorial.
              <br /><br />
              We don't use Africa as a market — we use it as a design brief.
              The solutions that emerge are better for everyone, everywhere.
            </blockquote>
          </section>

          {/* Credentials */}
          <section className={styles.section}>
            <h2 className={styles.sectionLabel}>Credentials</h2>
            <div className={styles.credentialGrid}>
              {[
                {
                  title: "Huawei Seeds for the Future",
                  desc: "Selected as part of the 2024 cohort — Huawei's flagship global ICT talent programme.",
                },
                {
                  title: "Cavendish Innovation Expo",
                  desc: "Rafiki showcased to university administration.",
                },
                {
                  title: "Open Source Ranking",
                  desc: "Consistently in the top 5% of Ugandan open-source contributors by repository activity.",
                },
                {
                  title: "Live in market",
                  desc: "Three products — Rafiki, DriveUG, Velour — actively used by real users in Kampala.",
                },
              ].map((c) => (
                <div key={c.title} className={styles.credentialCard}>
                  <h3 className={styles.credentialTitle}>{c.title}</h3>
                  <p className={styles.credentialDesc}>{c.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Uganda Framing */}
          <section className={styles.section}>
            <h2 className={styles.sectionLabel}>Building for Uganda</h2>
            <div className={styles.sectionContent}>
              <p>
                Uganda is not a simplified market. It's a specific one. Over
                17 million mobile money accounts. English as the official
                language but Luganda, Acholi, Runyankole, and 40 other
                languages spoken at home. Internet penetration at 26% but
                mobile penetration at 63%.
              </p>
              <p>
                These aren't constraints to design around — they're the
                design. Every RENOA product starts by asking: what does this
                look like if the user is on MTN data, has 5,000 UGX on their
                mobile wallet, and prefers to switch to Luganda when the
                stakes get high?
              </p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
