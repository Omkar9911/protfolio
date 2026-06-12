"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Stars } from "@react-three/drei";
import type { Mesh } from "three";

function OrbMesh() {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) {
      return;
    }
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.16;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.22;
  });

  return (
    <Float speed={1.3} rotationIntensity={0.55} floatIntensity={1.4}>
      <mesh ref={meshRef} scale={1.62}>
        <icosahedronGeometry args={[1.28, 5]} />
        <MeshDistortMaterial
          color="#38bdf8"
          emissive="#7c3aed"
          emissiveIntensity={0.24}
          roughness={0.28}
          metalness={0.45}
          distort={0.42}
          speed={1.6}
        />
      </mesh>
    </Float>
  );
}

export function HeroOrb() {
  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 42 }} dpr={[1, 1.7]} performance={{ min: 0.5 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.7} />
          <pointLight position={[3, 2, 5]} intensity={5} color="#38bdf8" />
          <pointLight position={[-4, -2, 3]} intensity={3} color="#a855f7" />
          <Stars radius={65} depth={28} count={900} factor={3.2} saturation={0} fade speed={0.5} />
          <OrbMesh />
        </Suspense>
      </Canvas>
    </div>
  );
}
