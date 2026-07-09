"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import styles from "./page.module.css";

type ProjectType = "client-work" | "partnership" | "talent";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    type: "client-work" as ProjectType,
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production this would send to an API
    setSubmitted(true);
  };

  return (
    <>
      <Navigation />
      <main className={styles.main}>
        <div className={styles.container}>
          {/* Header */}
          <div className={styles.pageHeader}>
            <div className={styles.eyebrow}>Get in touch</div>
            <h1 className={styles.title}>Let's build<br />something.</h1>
          </div>

          <div className={styles.twoCol}>
            {/* Direct contact */}
            <div className={styles.directContact}>
              <h2 className={styles.colLabel}>Direct</h2>
              <div className={styles.contactItem}>
                <span className={styles.contactType}>Email</span>
                <a href="mailto:coleniwasiima@gmail.com" className={styles.contactValue}>
                  coleniwasiima@gmail.com
                </a>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactType}>Phone</span>
                <a href="tel:+256767024153" className={styles.contactValue}>
                  +256 767 024 153
                </a>
              </div>
              <div className={styles.socials}>
                <h3 className={styles.socialsLabel}>Socials</h3>
                {[
                  { name: "GitHub", href: "https://github.com" },
                  { name: "X / Twitter", href: "https://x.com" },
                  { name: "LinkedIn", href: "https://linkedin.com" },
                  { name: "TikTok", href: "https://tiktok.com" },
                ].map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                  >
                    {s.name} ↗
                  </a>
                ))}
              </div>
            </div>

            {/* Inquiry Form */}
            <div className={styles.formSide}>
              <h2 className={styles.colLabel}>Project inquiry</h2>
              {submitted ? (
                <div className={styles.successMsg}>
                  <span className={styles.successIcon}>✓</span>
                  <p>We've received your message. We'll be in touch within 2 business days.</p>
                </div>
              ) : (
                <form className={styles.form} onSubmit={handleSubmit}>
                  <div className={styles.field}>
                    <label htmlFor="name" className={styles.label}>Name</label>
                    <input
                      id="name"
                      type="text"
                      required
                      className={styles.input}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                    />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="email" className={styles.label}>Email</label>
                    <input
                      id="email"
                      type="email"
                      required
                      className={styles.input}
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@example.com"
                    />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>I'm interested in</label>
                    <div className={styles.typeGroup}>
                      {([
                        { value: "client-work", label: "Client work" },
                        { value: "partnership", label: "Partnership" },
                        { value: "talent", label: "Joining the team" },
                      ] as const).map((opt) => (
                        <button
                          key={opt.value}
                          type="button"
                          className={`${styles.typeBtn} ${
                            form.type === opt.value ? styles.typeBtnActive : ""
                          }`}
                          onClick={() => setForm({ ...form, type: opt.value })}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="message" className={styles.label}>Message</label>
                    <textarea
                      id="message"
                      required
                      className={styles.textarea}
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about what you want to build..."
                    />
                  </div>
                  <button type="submit" className={styles.submitBtn}>
                    Send message →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
