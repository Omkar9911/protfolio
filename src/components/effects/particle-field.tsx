"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
};

export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const context = canvas.getContext("2d");
    if (!context || reducedMotion) {
      return;
    }

    const targetCanvas = canvas;
    const drawingContext = context;
    let animation = 0;
    let width = window.innerWidth;
    let height = window.innerHeight;
    const particles: Particle[] = Array.from({ length: Math.min(70, Math.floor(width / 20)) }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.28,
      vy: (Math.random() - 0.5) * 0.28,
      size: Math.random() * 1.6 + 0.35
    }));

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      targetCanvas.width = width * window.devicePixelRatio;
      targetCanvas.height = height * window.devicePixelRatio;
      targetCanvas.style.width = `${width}px`;
      targetCanvas.style.height = `${height}px`;
      drawingContext.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
    }

    function draw() {
      drawingContext.clearRect(0, 0, width, height);
      drawingContext.fillStyle = "rgba(125, 211, 252, 0.55)";

      for (const particle of particles) {
        particle.x += particle.vx;
        particle.y += particle.vy;
        if (particle.x < 0 || particle.x > width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > height) particle.vy *= -1;
        drawingContext.beginPath();
        drawingContext.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        drawingContext.fill();
      }

      for (let i = 0; i < particles.length; i += 1) {
        for (let j = i + 1; j < particles.length; j += 1) {
          const a = particles[i];
          const b = particles[j];
          const distance = Math.hypot(a.x - b.x, a.y - b.y);
          if (distance < 120) {
            drawingContext.strokeStyle = `rgba(56, 189, 248, ${0.12 * (1 - distance / 120)})`;
            drawingContext.lineWidth = 1;
            drawingContext.beginPath();
            drawingContext.moveTo(a.x, a.y);
            drawingContext.lineTo(b.x, b.y);
            drawingContext.stroke();
          }
        }
      }

      animation = requestAnimationFrame(draw);
    }

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animation);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none fixed inset-0 z-[1] opacity-45" />;
}
