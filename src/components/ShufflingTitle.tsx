// src/components/ShufflingTitle.tsx

"use client";

import { useEffect, useState } from "react";
import type { ShufflingTitleProps } from "@/types";


export function ShufflingTitle({ text, className, delay = 50 }: ShufflingTitleProps) {
  const [displayed, setDisplayed] = useState(text);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (intervalId) clearInterval(intervalId);

    const chars = "!@#$%¨&*()_+-=[]{}|;:'\",.<>?/~`";
    let iteration = 0;

    const newInterval = setInterval(() => {
      setDisplayed((prev) =>
        prev
          .split("")
          .map((_, i) => {
            if (i < iteration) return text[i];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      iteration += 1 / 2;
      if (iteration >= text.length) {
        clearInterval(newInterval);
        setDisplayed(text);
      }
    }, delay);

    setIntervalId(newInterval);

    return () => clearInterval(newInterval);
  }, [text, delay, intervalId]);

  return <h2 className={className}>{displayed}</h2>;
}

