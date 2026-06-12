"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 160, damping: 28, mass: 0.2 });

  return (
    <motion.div
      className="fixed left-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-sky-400 via-cyan-300 to-violet-400"
      style={{ scaleX, width: "100%" }}
    />
  );
}
