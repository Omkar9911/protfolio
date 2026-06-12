"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/common/section-heading";
import { techWall } from "@/data/profile";

export function StackWallSection() {
  return (
    <section id="stack" className="section-shell">
      <SectionHeading
        eyebrow="Tech stack wall"
        title="The tools behind the engineering story."
//         description="A dynamic, all-at-once stack showcase. Add or remove technologies with the NEXT_PUBLIC_TECH_STACK environment variable."
        align="center"
      />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.035 } }
        }}
        className="glass-card relative overflow-hidden rounded-[2.5rem] p-5 sm:p-8"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,.16),transparent_32%),radial-gradient(circle_at_80%_30%,rgba(168,85,247,.14),transparent_28%),radial-gradient(circle_at_50%_90%,rgba(16,185,129,.12),transparent_30%)]" />
        <div className="relative grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {techWall.map((tech, index) => (
            <motion.div
              key={tech}
              variants={{
                hidden: { opacity: 0, y: 24, scale: 0.92 },
                visible: { opacity: 1, y: 0, scale: 1 }
              }}
              whileHover={{ y: -8, scale: 1.04, rotate: index % 2 === 0 ? 1.5 : -1.5 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-white/7 px-4 py-4 text-center text-sm font-semibold text-foreground shadow-lg shadow-black/10 backdrop-blur transition"
            >
              <span className="absolute inset-x-3 top-0 h-px bg-gradient-to-r from-transparent via-sky-300/70 to-transparent opacity-0 transition group-hover:opacity-100" />
              {tech}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
