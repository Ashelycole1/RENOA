import Link from "next/link";
import styles from "./ProjectCard.module.css";

const STRAND_COLORS = [
  "#0d9488",
  "#14b8a6",
  "#2dd4bf",
  "#5eead4",
  "#99f6e4",
  "#0f766e",
];

interface ProjectCardProps {
  slug: string;
  name: string;
  description: string;
  discipline: "agentic-ai" | "web3" | "gamified";
  status: "Live" | "In development" | "Expo-shown";
  founderIndices: number[];
}

export default function ProjectCard({
  slug,
  name,
  description,
  discipline,
  status,
  founderIndices,
}: ProjectCardProps) {
  const statusClass =
    status === "Live"
      ? styles.statusLive
      : status === "Expo-shown"
      ? styles.statusExpo
      : styles.statusDev;

  const disciplineLabel = {
    "agentic-ai": "Agentic AI",
    web3: "Web3",
    gamified: "Gamified",
  }[discipline];

  return (
    <Link href={`/work/${slug}`} className={styles.card}>
      <div className={styles.imageArea}>
        <div className={styles.imagePlaceholder}>
          <span className={styles.disciplineLabel}>{disciplineLabel}</span>
        </div>
        <span className={`${styles.status} ${statusClass}`}>{status}</span>
      </div>
      <div className={styles.content}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.founders}>
          {founderIndices.map((idx) => (
            <span
              key={idx}
              className={styles.founderDot}
              style={{ backgroundColor: STRAND_COLORS[idx] }}
              title={`Founder ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </Link>
  );
}
