"use client";

import React from "react";

type SmartBackLinkProps = {
  fallbackHref: string;
  children: React.ReactNode;
  className?: string;
};

export default function SmartBackLink({ fallbackHref, children, className }: SmartBackLinkProps) {
  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (typeof window === "undefined") return;

    const referrer = document.referrer;
    const sameOrigin = referrer && (() => {
      try {
        return new URL(referrer).origin === window.location.origin;
      } catch {
        return false;
      }
    })();

    if (sameOrigin && window.history.length > 1) {
      e.preventDefault();
      window.history.back();
    }
  }

  return (
    <a href={fallbackHref} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}
