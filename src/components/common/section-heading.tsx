"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/animations/motion";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, align = "left", className }: SectionHeadingProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={cn("mb-12 max-w-3xl", align === "center" && "mx-auto text-center", className)}
    >
      <motion.div variants={fadeUp}>
        <Badge variant="outline" className="mb-5 uppercase tracking-[0.28em]">
          {eyebrow}
        </Badge>
      </motion.div>
      <motion.h2 variants={fadeUp} className="text-balance text-3xl font-semibold tracking-tight sm:text-5xl">
        {title}
      </motion.h2>
      <motion.p variants={fadeUp} className="mt-5 text-base leading-8 text-muted-foreground sm:text-lg">
        {description}
      </motion.p>
    </motion.div>
  );
}
