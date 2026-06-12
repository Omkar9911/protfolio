"use client";

import { useEffect, useState } from "react";

const sequence = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

export function useKonamiCode() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    let position = 0;

    function onKeyDown(event: KeyboardEvent) {
      const expected = sequence[position];
      const key = event.key.length === 1 ? event.key.toLowerCase() : event.key;

      if (key === expected) {
        position += 1;
        if (position === sequence.length) {
          setActive(true);
          position = 0;
          window.setTimeout(() => setActive(false), 3400);
        }
        return;
      }

      position = key === sequence[0] ? 1 : 0;
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return active;
}
