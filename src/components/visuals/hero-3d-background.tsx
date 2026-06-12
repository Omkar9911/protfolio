"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles } from "@react-three/drei";
import type { Group, Mesh } from "three";

function FloatingGeometry({
  position,
  color,
  speed
}: {
  position: [number, number, number];
  color: string;
  speed: number;
}) {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * speed;
    meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.72;
  });

  return (
    <Float speed={1.2 + speed} floatIntensity={0.7} rotationIntensity={0.6}>
      <mesh ref={meshRef} position={position}>
        <torusKnotGeometry args={[0.42, 0.12, 96, 12]} />
        <MeshDistortMaterial color={color} roughness={0.26} metalness={0.58} distort={0.18} speed={1.2} transparent opacity={0.78} />
      </mesh>
    </Float>
  );
}

function Scene() {
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.18) * 0.06;
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.24) * 0.08;
  });

  return (
    <group ref={groupRef}>
      <Sparkles count={90} scale={[9, 4, 3]} size={2.2} speed={0.42} color="#7dd3fc" />
      <FloatingGeometry position={[-3.6, 1.2, -1.4]} color="#38bdf8" speed={0.19} />
      <FloatingGeometry position={[3.4, -0.6, -1.2]} color="#a855f7" speed={0.15} />
      <FloatingGeometry position={[0.4, 1.8, -2.1]} color="#22d3ee" speed={0.11} />
    </group>
  );
}

export function Hero3DBackground() {
  return (
    <div className="absolute inset-0 z-[2] opacity-70">
      <Canvas camera={{ position: [0, 0, 6.2], fov: 45 }} dpr={[1, 1.5]} performance={{ min: 0.45 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[2, 3, 4]} intensity={4} color="#38bdf8" />
          <pointLight position={[-4, -2, 3]} intensity={3} color="#a855f7" />
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
