"use client";

import { useEffect } from "react";

export function useGsapReveal() {
  useEffect(() => {
    let cleanup = () => {};

    async function run() {
      const gsapModule = await import("gsap");
      const scrollTriggerModule = await import("gsap/ScrollTrigger");
      const gsap = gsapModule.gsap;
      const ScrollTrigger = scrollTriggerModule.ScrollTrigger;

      gsap.registerPlugin(ScrollTrigger);
      const context = gsap.context(() => {
        gsap.utils.toArray<HTMLElement>("[data-gsap='fade-up']").forEach((element) => {
          gsap.fromTo(
            element,
            { y: 42, opacity: 0, filter: "blur(10px)" },
            {
              y: 0,
              opacity: 1,
              filter: "blur(0px)",
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: {
                trigger: element,
                start: "top 82%",
                once: true
              }
            }
          );
        });
      });

      cleanup = () => context.revert();
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reducedMotion) {
      void run();
    }

    return () => cleanup();
  }, []);
}
