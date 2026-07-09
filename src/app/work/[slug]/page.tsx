import { notFound } from "next/navigation";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { projects } from "@/data/projects";
import { founders, STRAND_COLORS } from "@/data/founders";
import styles from "./page.module.css";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const projectFounders = project.founderIndices.map((i) => founders[i]);
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <>
      <Navigation />
      <main className={styles.main}>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.heroBreadcrumb}>
              <Link href="/work" className={styles.breadcrumbLink}>Work</Link>
              <span className={styles.breadcrumbSep}>/</span>
              <span>{project.name}</span>
            </div>
            <div className={styles.heroMeta}>
              <span className={`${styles.status} ${
                project.status === "Live"
                  ? styles.statusLive
                  : styles.statusDev
              }`}>
                {project.status}
              </span>
              <span className={styles.discipline}>
                {project.discipline === "agentic-ai"
                  ? "Agentic AI"
                  : project.discipline === "web3"
                  ? "Web3"
                  : "Gamified"}
              </span>
            </div>
            <h1 className={styles.heroTitle}>{project.name}</h1>
            <p className={styles.heroDesc}>{project.shortDescription}</p>
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.liveLink}
              >
                View live ↗
              </a>
            )}
          </div>
          <div className={styles.heroImageArea}>
            <div className={styles.heroImagePlaceholder}>
              <span className={styles.heroImageLabel}>{project.name}</span>
            </div>
          </div>
        </section>

        {/* Content */}
        <div className={styles.container}>
          <div className={styles.content}>
            {/* Problem */}
            {project.problem && (
              <section className={styles.section}>
                <h2 className={styles.sectionTitle}>The problem</h2>
                <p className={styles.sectionText}>{project.problem}</p>
              </section>
            )}

            {/* The Build */}
            {project.build && (
              <section className={styles.section}>
                <h2 className={styles.sectionTitle}>The build</h2>
                <p className={styles.sectionText}>{project.build}</p>
                {project.stack && (
                  <div className={styles.stack}>
                    {project.stack.map((tech) => (
                      <span key={tech} className={styles.techTag}>
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </section>
            )}

            {/* The Result */}
            {project.result && (
              <section className={styles.section}>
                <h2 className={styles.sectionTitle}>The result</h2>
                <p className={styles.sectionText}>{project.result}</p>
              </section>
            )}

            {/* Founder Credits */}
            <section className={styles.founderCredit}>
              <div className={styles.founderCreditLabel}>Led by</div>
              <div className={styles.founderCreditList}>
                {projectFounders.map((founder) => (
                  <Link
                    key={founder.id}
                    href="/team"
                    className={styles.founderCreditItem}
                  >
                    <span
                      className={styles.founderDot}
                      style={{ backgroundColor: founder.strandColor }}
                    />
                    <span>{founder.name}</span>
                    <span className={styles.founderRole}>{founder.role}</span>
                  </Link>
                ))}
              </div>
            </section>

            {/* Next Project */}
            <div className={styles.nextProject}>
              <div className={styles.nextLabel}>Next project</div>
              <Link href={`/work/${nextProject.slug}`} className={styles.nextLink}>
                {nextProject.name} →
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
