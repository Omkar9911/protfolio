"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Terminal } from "lucide-react";
import { useKonamiCode } from "@/hooks/use-konami-code";

export function KonamiOverlay() {
  const active = useKonamiCode();

  return (
    <AnimatePresence>
      {active ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          className="fixed inset-0 z-[90] grid place-items-center bg-slate-950/70 p-6 backdrop-blur-xl"
        >
          <div className="terminal-shadow max-w-xl rounded-[2rem] border border-sky-300/20 bg-slate-950/90 p-6 text-sky-100">
            <div className="mb-4 flex items-center gap-2 text-sm text-cyan-200">
              <Terminal className="size-4" />
              easter-egg.sh
            </div>
            <pre className="whitespace-pre-wrap text-sm leading-7">
              {`> deploying hidden mode
> unlocking recruiter aura
> bonus stat: Omkar reads docs before blaming production`}
            </pre>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
