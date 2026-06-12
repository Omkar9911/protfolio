"use client";

import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Download, ExternalLink, Mail, MapPin, Sparkles } from "lucide-react";
import { fadeUp, staggerContainer } from "@/animations/motion";
import { AnimatedCounter } from "@/components/common/animated-counter";
import { MagneticButton } from "@/components/common/magnetic-button";
import { ThemeToggle } from "@/components/common/theme-toggle";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { heroStats, profile, profileIcons, socialLinks } from "@/data/profile";
import { useRotatingText } from "@/hooks/use-rotating-text";

const HeroOrb = dynamic(() => import("@/components/visuals/hero-orb").then((module) => module.HeroOrb), {
  ssr: false,
  loading: () => <div className="absolute inset-8 rounded-full bg-sky-400/10 blur-3xl" />
});

const Hero3DBackground = dynamic(
  () => import("@/components/visuals/hero-3d-background").then((module) => module.Hero3DBackground),
  {
    ssr: false,
    loading: () => null
  }
);

export function HeroSection() {
  const rotatingTitle = useRotatingText(profile.rotatingTitles);
  const { scrollY } = useScroll();
  const orbY = useTransform(scrollY, [0, 800], [0, 130]);
  const titleY = useTransform(scrollY, [0, 800], [0, -60]);
  const AvailabilityIcon = profileIcons.availability;

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      <div className="aurora" aria-hidden="true" />
      <div className="mesh-grid absolute inset-0 z-[1]" aria-hidden="true" />
      <Hero3DBackground />
      <header className="section-shell flex items-center justify-between py-6">
        <a href="#hero" className="group relative z-20 flex items-center gap-3" aria-label="Go to top">
          <span className="grid size-11 place-items-center rounded-2xl border border-white/15 bg-white/10 font-black tracking-[-0.12em] shadow-[0_0_34px_var(--glow-blue)] backdrop-blur-xl">
            OJ
          </span>
          <span className="hidden text-sm font-medium text-muted-foreground sm:block">Omkar Jadhav</span>
        </a>
        <div className="relative z-20 flex items-center gap-3">
          <Button asChild variant="secondary" size="sm" className="hidden sm:inline-flex">
            <a href="#contact">Let&apos;s talk</a>
          </Button>
          <ThemeToggle />
        </div>
      </header>

      <div className="section-shell grid min-h-[calc(100vh-7rem)] items-center gap-12 pt-10 lg:grid-cols-[1.08fr_.92fr]">
        <motion.div
          style={{ y: titleY }}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10"
        >
          <motion.div variants={fadeUp}>
            <Badge variant="cyan" className="mb-6 gap-2">
              <span className="size-2 rounded-full bg-emerald-300 shadow-[0_0_16px_rgba(110,231,183,.8)]" />
              {profile.availability}
            </Badge>
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-balance text-5xl font-semibold tracking-[-0.08em] sm:text-7xl lg:text-8xl">
            {profile.name.split(" ")[0]}{" "}
            <span className="text-gradient">{profile.name.split(" ").slice(1).join(" ")}</span>
          </motion.h1>

          <motion.div variants={fadeUp} className="mt-6 min-h-10 text-2xl font-semibold text-sky-100 sm:text-3xl lg:text-4xl">
            <span className="mr-2 text-muted-foreground">I build as a</span>
            <motion.span
              key={rotatingTitle}
              initial={{ opacity: 0, y: 12, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0 }}
              className="text-gradient"
            >
              {rotatingTitle}
            </motion.span>
          </motion.div>

          <motion.p variants={fadeUp} className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">
            {profile.headline}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <MagneticButton>
              <Button asChild variant="glow" size="lg">
                <a href="#projects">
                  View case studies <ArrowDown className="size-4" />
                </a>
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button asChild variant="secondary" size="lg">
                <a href={profile.resumePath} download>
                  Download resume <Download className="size-4" />
                </a>
              </Button>
            </MagneticButton>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-3">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noreferrer" : undefined}
                  className="group inline-flex items-center gap-2 rounded-full border border-border bg-white/6 px-4 py-2 text-sm text-muted-foreground transition hover:-translate-y-0.5 hover:bg-white/10 hover:text-foreground"
                >
                  <Icon className="size-4" />
                  {link.label}
                  {link.external ? <ExternalLink className="size-3 opacity-60" /> : null}
                </a>
              );
            })}
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white/6 px-4 py-2 text-sm text-muted-foreground transition hover:-translate-y-0.5 hover:bg-white/10 hover:text-foreground"
            >
              <Mail className="size-4" />
              {profile.email}
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {heroStats.map((stat) => (
              <div key={stat.label} className="glass-card rounded-3xl p-4">
                <div className="text-2xl font-semibold tracking-tight">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
                </div>
                <div className="mt-1 text-sm font-medium">{stat.label}</div>
                <div className="mt-2 text-xs leading-5 text-muted-foreground">{stat.detail}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div style={{ y: orbY }} className="relative z-10 min-h-[480px]">
          <div className="absolute inset-4 rounded-[3rem] border border-white/10 bg-white/[0.045] shadow-[0_0_120px_rgba(56,189,248,.16)] backdrop-blur-2xl" />
          <HeroOrb />
          <div className="glass-card absolute bottom-6 left-4 right-4 rounded-[2rem] p-5 sm:left-8 sm:right-8">
            <div className="mb-4 flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-2xl bg-emerald-300/12 text-emerald-200">
                <AvailabilityIcon className="size-5" />
              </span>
              <div>
                <div className="font-semibold">Open to meaningful backend work</div>
                <div className="text-sm text-muted-foreground">Java • Spring Boot • Microservices • Pune</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-2xl border border-border bg-white/6 p-3">
                <MapPin className="mb-2 size-4 text-sky-200" />
                {profile.location}
              </div>
              <div className="rounded-2xl border border-border bg-white/6 p-3">
                <Sparkles className="mb-2 size-4 text-violet-200" />
                Product-minded APIs
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
