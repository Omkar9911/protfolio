"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 1050);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45 } }}
          className="fixed inset-0 z-[100] grid place-items-center bg-[#050816]"
        >
          <motion.div
            initial={{ scale: 0.82, opacity: 0, rotate: -8 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 1.08, opacity: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative grid size-28 place-items-center rounded-[2rem] border border-white/15 bg-white/8 text-3xl font-black tracking-[-0.16em] text-white shadow-[0_0_80px_rgba(56,189,248,.34)] backdrop-blur-2xl"
          >
            OJ
            <span className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-sky-400/30 via-cyan-300/20 to-violet-500/30 blur-2xl" />
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
