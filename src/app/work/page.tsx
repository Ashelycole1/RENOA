"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { STRAND_COLORS, founders } from "@/data/founders";
import styles from "./page.module.css";

const DISCIPLINES = ["All", "Agentic AI", "Web3", "Gamified"];

export default function WorkPage() {
  const [activeDiscipline, setActiveDiscipline] = useState("All");
  const [activeFounder, setActiveFounder] = useState<number | null>(null);

  const filtered = projects.filter((p) => {
    const matchDiscipline =
      activeDiscipline === "All" ||
      (activeDiscipline === "Agentic AI" && p.discipline === "agentic-ai") ||
      (activeDiscipline === "Web3" && p.discipline === "web3") ||
      (activeDiscipline === "Gamified" && p.discipline === "gamified");

    const matchFounder =
      activeFounder === null || p.founderIndices.includes(activeFounder);

    return matchDiscipline && matchFounder;
  });

  // Sort live first
  const sorted = [...filtered].sort((a, b) => {
    if (a.status === "Live" && b.status !== "Live") return -1;
    if (b.status === "Live" && a.status !== "Live") return 1;
    return 0;
  });

  return (
    <>
      <Navigation />
      <main className={styles.main}>
        <div className={styles.container}>
          {/* Header */}
          <div className={styles.pageHeader}>
            <div className={styles.eyebrow}>Our work</div>
            <h1 className={styles.title}>Projects</h1>
            <p className={styles.subtitle}>
              Each project is a proof point — real software, real users, real
              outcomes.
            </p>
          </div>

          {/* Filters */}
          <div className={styles.filters}>
            <div className={styles.disciplineFilters}>
              {DISCIPLINES.map((d) => (
                <button
                  key={d}
                  className={`${styles.filterBtn} ${
                    activeDiscipline === d ? styles.filterActive : ""
                  }`}
                  onClick={() => setActiveDiscipline(d)}
                >
                  {d}
                </button>
              ))}
            </div>
            <div className={styles.founderFilters}>
              <span className={styles.founderFilterLabel}>By founder:</span>
              {founders.map((f, idx) => (
                <button
                  key={f.id}
                  className={`${styles.founderFilterDot} ${
                    activeFounder === idx ? styles.founderDotActive : ""
                  }`}
                  style={{
                    backgroundColor: STRAND_COLORS[idx],
                    opacity: activeFounder === null || activeFounder === idx ? 1 : 0.3,
                  }}
                  onClick={() =>
                    setActiveFounder(activeFounder === idx ? null : idx)
                  }
                  title={f.name}
                />
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className={styles.grid}>
            {sorted.map((p) => (
              <ProjectCard
                key={p.slug}
                slug={p.slug}
                name={p.name}
                description={p.shortDescription}
                discipline={p.discipline}
                status={p.status}
                founderIndices={p.founderIndices}
              />
            ))}
            {sorted.length === 0 && (
              <p className={styles.empty}>No projects match the selected filters.</p>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
