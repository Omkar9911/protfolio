"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export function JarallaxBackground() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 70, damping: 22, mass: 0.35 });
  const layerOneY = useTransform(smoothProgress, [0, 1], ["0%", "18%"]);
  const layerTwoY = useTransform(smoothProgress, [0, 1], ["0%", "-14%"]);
  const layerThreeRotate = useTransform(smoothProgress, [0, 1], [0, 24]);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[2] overflow-hidden">
      <motion.div
        style={{ y: layerOneY }}
        className="absolute -left-32 top-[12vh] size-[34rem] rounded-full bg-sky-400/10 blur-3xl"
      />
      <motion.div
        style={{ y: layerTwoY }}
        className="absolute -right-36 top-[38vh] size-[38rem] rounded-full bg-violet-500/12 blur-3xl"
      />
      <motion.div
        style={{ rotate: layerThreeRotate }}
        className="absolute left-1/2 top-[18vh] h-[80rem] w-[80rem] -translate-x-1/2 rounded-full border border-sky-300/10"
      />
      <motion.div
        style={{ y: layerTwoY }}
        className="absolute bottom-[-20rem] left-[8vw] size-[42rem] rounded-full bg-emerald-300/8 blur-3xl"
      />
      <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,rgba(56,189,248,.035)_28%,transparent_48%,rgba(168,85,247,.045)_74%,transparent_100%)]" />
    </div>
  );
}
