import styles from "./FounderCard.module.css";
import Image from "next/image";

interface FounderCardProps {
  name: string;
  role: string;
  statement: string;
  strandColor: string;
  imageSrc?: string;
  socialLink?: string;
}

export default function FounderCard({
  name,
  role,
  statement,
  strandColor,
  imageSrc,
  socialLink,
}: FounderCardProps) {
  return (
    <div className={styles.card}>
      <div
        className={styles.strandLine}
        style={{ backgroundColor: strandColor }}
      ></div>
      <div className={styles.imageContainer}>
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={name}
            fill
            className={styles.image}
            style={{ objectFit: "cover" }}
          />
        ) : (
          <div className={styles.imagePlaceholder}></div>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.role} style={{ color: strandColor }}>
          {role}
        </div>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.statement}>{statement || "—"}</p>
        {socialLink && (
          <a
            href={socialLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Connect →
          </a>
        )}
      </div>
    </div>
  );
}
