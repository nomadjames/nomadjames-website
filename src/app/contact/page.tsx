"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mlgobqag", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className={styles.page}>
      <main className="container">
        <a href="/" className={styles.backLink}>← Home</a>

        <header className={styles.header}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLabel}>Get in touch</span>
          </div>
          <h1 className={styles.title}>Contact</h1>
          <p className={styles.subtitle}>
            I am available for UX research and design work, research collaborations,
            and Ableton/music tech projects.
          </p>
        </header>

        {status === "sent" ? (
          <div className={styles.success}>
            <p>Got it. I&apos;ll be in touch.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.field}>
              <label htmlFor="name" className={styles.label}>Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className={styles.input}
                autoComplete="name"
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="email" className={styles.label}>Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className={styles.input}
                autoComplete="email"
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="message" className={styles.label}>Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className={styles.textarea}
              />
            </div>

            {status === "error" && (
              <p className={styles.errorMsg}>Something went wrong. Try again or reach out directly on LinkedIn.</p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className={styles.submit}
            >
              {status === "sending" ? "Sending…" : "Send message"}
            </button>
          </form>
        )}
      </main>
    </div>
  );
}
