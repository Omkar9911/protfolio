"use client";

import { useEffect, useState } from "react";

export function useRotatingText(items: readonly string[], delay = 2200) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (items.length <= 1) {
      return;
    }

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % items.length);
    }, delay);

    return () => window.clearInterval(timer);
  }, [delay, items, items.length]);

  return items[index] ?? "";
}
