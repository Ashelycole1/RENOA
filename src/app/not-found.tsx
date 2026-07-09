import Link from "next/link";
import Navigation from "@/components/Navigation";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <>
      <Navigation />
      <main className={styles.main}>
        <div className={styles.content}>
          <div className={styles.code}>404</div>
          <h1 className={styles.title}>Page not found.</h1>
          <p className={styles.text}>This page doesn't exist. Maybe it hasn't been built yet.</p>
          <Link href="/" className={styles.backLink}>
            ← Back to RENOA
          </Link>
        </div>
      </main>
    </>
  );
}
