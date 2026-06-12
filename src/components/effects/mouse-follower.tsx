"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function MouseFollower() {
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 260, damping: 30 });
  const springY = useSpring(y, { stiffness: 260, damping: 30 });

  useEffect(() => {
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setEnabled(canHover && !reducedMotion);

    function onMove(event: PointerEvent) {
      x.set(event.clientX - 18);
      y.set(event.clientY - 18);
    }

    if (canHover && !reducedMotion) {
      window.addEventListener("pointermove", onMove);
    }

    return () => window.removeEventListener("pointermove", onMove);
  }, [x, y]);

  if (!enabled) {
    return null;
  }

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[70] size-9 rounded-full border border-sky-300/40 bg-sky-300/10 shadow-[0_0_34px_var(--glow-blue)] mix-blend-screen"
      style={{ x: springX, y: springY }}
    />
  );
}
