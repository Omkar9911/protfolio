"use client";

import { motion } from "framer-motion";
import { navItems } from "@/constants/navigation";
import { ThemeToggle } from "@/components/common/theme-toggle";
import { cn } from "@/lib/utils";

export function FloatingDock() {
  return (
    <motion.nav
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
      aria-label="Primary navigation"
      className="fixed bottom-4 left-1/2 z-40 hidden -translate-x-1/2 items-center gap-1 rounded-full border border-border bg-background/58 p-2 shadow-2xl shadow-sky-950/40 backdrop-blur-2xl md:flex"
    >
      {navItems.map((item) => {
        const Icon = item.icon;
        return (
          <motion.a
            key={item.href}
            href={item.href}
            whileHover={{ y: -6, scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            className={cn(
              "group relative flex size-11 items-center justify-center rounded-full text-muted-foreground transition hover:bg-white/10 hover:text-foreground"
            )}
            aria-label={item.label}
          >
            <Icon className="size-4" />
            <span className="pointer-events-none absolute -top-11 rounded-full border border-border bg-background/90 px-3 py-1 text-xs opacity-0 shadow-xl backdrop-blur-xl transition group-hover:opacity-100">
              {item.label}
            </span>
          </motion.a>
        );
      })}
      <div className="ml-1 h-8 w-px bg-border" />
      <ThemeToggle />
    </motion.nav>
  );
}
