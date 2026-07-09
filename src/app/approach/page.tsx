import Navigation from "@/components/Navigation";
import styles from "./page.module.css";

export const metadata = {
  title: "Approach | RENOA",
  description: "How RENOA builds: Agentic AI, Web3, and Gamified systems.",
};

const STACK = [
  "Next.js", "Node.js", "PostgreSQL", "Flutter", "Dart", "Java",
  "Python", "AWS", "Huawei Cloud", "Docker", "Kubernetes",
  "Africa's Talking", "Flutterwave",
];

const disciplines = [
  {
    id: "agentic-ai",
    name: "Agentic AI",
    definition:
      "Systems that don't just respond — they reason, plan, and act. We build AI that operates on behalf of users across complex, multi-step tasks without needing hand-holding.",
    example:
      "Rafiki: an AI mental-health companion that holds multi-turn conversations, escalates to human counselors when needed, and falls back to SMS for users without data.",
    color: "#14b8a6",
  },
  {
    id: "web3",
    name: "Web3",
    definition:
      "Blockchain infrastructure where the technology disappears. Users get the benefit — ownership, verifiability, trustless settlement — without needing to understand the mechanism.",
    example:
      "Velour: loyalty points backed by smart contracts. Customers earn and spend; the blockchain is invisible.",
    color: "#2dd4bf",
  },
  {
    id: "gamified",
    name: "Gamified Systems",
    definition:
      "Engagement mechanics rooted in real behavioral science. Progress, feedback loops, and social motivation applied to software that people actually need to use.",
    example:
      "DriveUG: a ride-hailing experience designed for mobile-money-first users, with reward mechanics that keep drivers and riders engaged.",
    color: "#5eead4",
  },
];

export default function ApproachPage() {
  return (
    <>
      <Navigation />
      <main className={styles.main}>
        <div className={styles.container}>
          {/* Header */}
          <div className={styles.pageHeader}>
            <div className={styles.eyebrow}>How we build</div>
            <h1 className={styles.title}>Three disciplines.</h1>
            <p className={styles.subtitle}>
              Every RENOA project lives inside at least one of these
              disciplines. Most live inside two. The interesting ones cross all
              three.
            </p>
          </div>

          {/* Discipline Sections */}
          {disciplines.map((d, i) => (
            <section
              key={d.id}
              id={d.id}
              className={`${styles.discipline} ${
                i % 2 === 1 ? styles.disciplineAlt : ""
              }`}
            >
              <div
                className={styles.disciplineAccent}
                style={{ backgroundColor: d.color }}
              />
              <div className={styles.disciplineContent}>
                <div className={styles.disciplineEyebrow} style={{ color: d.color }}>
                  0{i + 1}
                </div>
                <h2 className={styles.disciplineName}>{d.name}</h2>
                <p className={styles.disciplineDefinition}>{d.definition}</p>
                <div className={styles.exampleBlock}>
                  <span className={styles.exampleLabel}>In practice</span>
                  <p className={styles.exampleText}>{d.example}</p>
                </div>
              </div>
            </section>
          ))}

          {/* Stack Row */}
          <section className={styles.stackSection}>
            <h2 className={styles.stackTitle}>Stack</h2>
            <div className={styles.stackGrid}>
              {STACK.map((tech) => (
                <span key={tech} className={styles.techTag}>
                  {tech}
                </span>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
