"use client";

import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from "react";
import styles from "./page.module.css";
import SmartBackLink from "@/components/SmartBackLink";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

type FieldName = keyof FormValues;
type FieldErrors = Partial<Record<FieldName, string>>;

const initialValues: FormValues = {
  name: "",
  email: "",
  message: "",
};

const errorMessages: Record<FieldName, string> = {
  name: "Enter your name.",
  email: "Enter a valid email address.",
  message: "Type a message before sending.",
};

function validateField(field: FieldName, value: string): string | undefined {
  const trimmedValue = value.trim();

  if (field === "email") {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedValue) ? undefined : errorMessages.email;
  }

  return trimmedValue ? undefined : errorMessages[field];
}

function validateForm(values: FormValues): FieldErrors {
  return (Object.keys(values) as FieldName[]).reduce<FieldErrors>((nextErrors, field) => {
    const error = validateField(field, values[field]);

    if (error) {
      nextErrors[field] = error;
    }

    return nextErrors;
  }, {});
}

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FieldErrors>({});
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const successRef = useRef<HTMLDivElement>(null);
  const globalErrorRef = useRef<HTMLParagraphElement>(null);

  function focusFirstInvalidField(nextErrors: FieldErrors): boolean {
    if (nextErrors.name) {
      nameRef.current?.focus();
      return true;
    }

    if (nextErrors.email) {
      emailRef.current?.focus();
      return true;
    }

    if (nextErrors.message) {
      messageRef.current?.focus();
      return true;
    }

    return false;
  }

  useEffect(() => {
    if (status === "sent") {
      successRef.current?.focus();
    }

    if (status === "error") {
      if (errors.name) {
        nameRef.current?.focus();
      } else if (errors.email) {
        emailRef.current?.focus();
      } else if (errors.message) {
        messageRef.current?.focus();
      } else {
        globalErrorRef.current?.focus();
      }
    }
  }, [status, errors.name, errors.email, errors.message]);

  function handleFieldChange(field: FieldName) {
    return (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const nextValue = event.target.value;

      setValues((currentValues) => ({
        ...currentValues,
        [field]: nextValue,
      }));

      setErrors((currentErrors) => {
        if (!currentErrors[field]) {
          return currentErrors;
        }

        const nextError = validateField(field, nextValue);
        const nextErrors = { ...currentErrors };

        if (nextError) {
          nextErrors[field] = nextError;
        } else {
          delete nextErrors[field];
        }

        return nextErrors;
      });

      if (status === "error") {
        setStatus("idle");
      }
    };
  }

  function handleFieldBlur(field: FieldName) {
    return () => {
      const nextError = validateField(field, values[field]);

      setErrors((currentErrors) => {
        const nextErrors = { ...currentErrors };

        if (nextError) {
          nextErrors[field] = nextError;
        } else {
          delete nextErrors[field];
        }

        return nextErrors;
      });
    };
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validateForm(values);
    setErrors(nextErrors);

    if (focusFirstInvalidField(nextErrors)) {
      setStatus("idle");
      return;
    }

    setStatus("sending");

    const data = new FormData(event.currentTarget);

    try {
      const res = await fetch("https://formspree.io/f/mlgobqag", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setValues(initialValues);
        setErrors({});
        setStatus("sent");
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
        <SmartBackLink fallbackHref="/" className={styles.backLink}>← Home</SmartBackLink>

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
          <div
            ref={successRef}
            className={styles.success}
            role="status"
            aria-live="polite"
            tabIndex={-1}
          >
            <p>Got it. I&apos;ll be in touch.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className={styles.form} noValidate>
            <div className={styles.field}>
              <label htmlFor="name" className={styles.label}>Name</label>
              <input
                ref={nameRef}
                id="name"
                name="name"
                type="text"
                required
                className={styles.input}
                autoComplete="name"
                value={values.name}
                onChange={handleFieldChange("name")}
                onBlur={handleFieldBlur("name")}
                aria-describedby="name-error"
                aria-invalid={errors.name ? "true" : "false"}
              />
              <div id="name-error" className={styles.fieldError} hidden={!errors.name}>
                {errors.name}
              </div>
            </div>

            <div className={styles.field}>
              <label htmlFor="email" className={styles.label}>Email</label>
              <input
                ref={emailRef}
                id="email"
                name="email"
                type="email"
                required
                className={styles.input}
                autoComplete="email"
                value={values.email}
                onChange={handleFieldChange("email")}
                onBlur={handleFieldBlur("email")}
                aria-describedby="email-error"
                aria-invalid={errors.email ? "true" : "false"}
              />
              <div id="email-error" className={styles.fieldError} hidden={!errors.email}>
                {errors.email}
              </div>
            </div>

            <div className={styles.field}>
              <label htmlFor="message" className={styles.label}>Message</label>
              <textarea
                ref={messageRef}
                id="message"
                name="message"
                required
                rows={6}
                className={styles.textarea}
                value={values.message}
                onChange={handleFieldChange("message")}
                onBlur={handleFieldBlur("message")}
                aria-describedby="message-error"
                aria-invalid={errors.message ? "true" : "false"}
              />
              <div id="message-error" className={styles.fieldError} hidden={!errors.message}>
                {errors.message}
              </div>
            </div>

            {status === "error" && (
              <p
                ref={globalErrorRef}
                className={styles.errorMsg}
                role="alert"
                tabIndex={-1}
              >
                Something went wrong. Try again or reach out directly on LinkedIn.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              aria-busy={status === "sending"}
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
