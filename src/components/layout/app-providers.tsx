"use client";

import { useEffect } from "react";
import { BackToTop } from "@/components/effects/back-to-top";
import { CommandPalette } from "@/components/effects/command-palette";
import { KonamiOverlay } from "@/components/effects/konami-overlay";
import { JarallaxBackground } from "@/components/effects/jarallax-background";
import { LoadingScreen } from "@/components/effects/loading-screen";
import { MouseFollower } from "@/components/effects/mouse-follower";
import { ParticleField } from "@/components/effects/particle-field";
import { ScrollProgress } from "@/components/effects/scroll-progress";
import { FloatingDock } from "@/components/layout/floating-dock";
import { useGsapReveal } from "@/hooks/use-gsap-reveal";
import { useThemeStore } from "@/stores/theme-store";

export function AppProviders({ children }: { children: React.ReactNode }) {
  const theme = useThemeStore((state) => state.theme);

  useGsapReveal();

  useEffect(() => {
    document.documentElement.classList.toggle("light", theme === "light");
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <JarallaxBackground />
      <ParticleField />
      <MouseFollower />
      <CommandPalette />
      <KonamiOverlay />
      <FloatingDock />
      <BackToTop />
      {children}
    </>
  );
}
