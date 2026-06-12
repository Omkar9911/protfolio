import type { NextConfig } from "next";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  output: "standalone",
  outputFileTracingRoot: projectRoot,
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion", "@react-three/drei"]
  },
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000
  }
};

export default nextConfig;
