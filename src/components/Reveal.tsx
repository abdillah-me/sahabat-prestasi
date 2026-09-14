"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  /** Jenis animasi masuk. */
  variant?: "up" | "left" | "right" | "scale";
  /** Penundaan (ms) agar elemen berurutan muncul bertahap. */
  delay?: number;
  className?: string;
  /** Elemen HTML yang dirender (default: div). */
  as?: "div" | "section" | "li" | "article";
};

export default function Reveal({
  children,
  variant = "up",
  delay = 0,
  className = "",
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Hormati preferensi pengguna yang mengurangi animasi.
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setShown(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={(node: HTMLElement | null) => {
        ref.current = node;
      }}
      data-reveal={variant}
      data-shown={shown ? "true" : "false"}
      style={{ transitionDelay: shown ? `${delay}ms` : "0ms" }}
      className={className}
    >
      {children}
    </Tag>
  );
}
