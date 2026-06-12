"use client";

import type { MouseEvent } from "react";

export function useSpotlight() {
  return {
    onMouseMove(event: MouseEvent<HTMLElement>) {
      const rect = event.currentTarget.getBoundingClientRect();
      event.currentTarget.style.setProperty("--x", `${event.clientX - rect.left}px`);
      event.currentTarget.style.setProperty("--y", `${event.clientY - rect.top}px`);
    }
  };
}
