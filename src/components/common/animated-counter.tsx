"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

type AnimatedCounterProps = {
  value: number;
  suffix?: string;
  decimals?: number;
  duration?: number;
};

export function AnimatedCounter({ value, suffix = "", decimals = 0, duration = 900 }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) {
      return;
    }

    const start = performance.now();
    const frame = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(value * eased);
      if (progress < 1) {
        requestAnimationFrame(frame);
      }
    };

    requestAnimationFrame(frame);
  }, [duration, inView, value]);

  const displayValue = decimals > 0 ? count.toFixed(decimals) : Math.round(count).toString();

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
}
