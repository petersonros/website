// src/components/ShufflingTitle.tsx

"use client";

import { useEffect, useState } from "react";
import type { ShufflingTitleProps } from "@/types";

const CHARS =
  "!@#$%¨&*()_+-=[]{}|;:'\",.<>?/~`ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export function ShufflingTitle({
  text,
  className,
  delay = 50,
}: ShufflingTitleProps) {
  const [displayed, setDisplayed] = useState(text);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setDisplayed(text);
      return;
    }

    let iteration = 0;

    const id = setInterval(() => {
      setDisplayed(
        text
          .split("")
          .map((char, i) =>
            i < iteration
              ? char
              : CHARS[Math.floor(Math.random() * CHARS.length)]
          )
          .join("")
      );

      iteration += 0.5;
      if (iteration >= text.length) {
        clearInterval(id);
        setDisplayed(text);
      }
    }, delay);

    return () => clearInterval(id);
  }, [text, delay]);

  return (
    <h2 className={className}>
      <span aria-hidden="true">{displayed}</span>
      <span className="sr-only">{text}</span>
    </h2>
  );
}
