import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const runtime = "edge";
export const alt = "Omkar Jadhav — Java Backend Developer";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          backgroundColor: "#050816",
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(56,189,248,.55), transparent 30%), radial-gradient(circle at 80% 0%, rgba(168,85,247,.5), transparent 32%), linear-gradient(135deg, #050816, #08112b 56%, #120923)",
          color: "white"
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 8, textTransform: "uppercase", color: "#7dd3fc" }}>Portfolio</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 82, fontWeight: 800, letterSpacing: "-0.06em" }}>{profile.shortName}</div>
          <div style={{ maxWidth: 860, fontSize: 34, lineHeight: 1.25, color: "#dbeafe" }}>{profile.headline}</div>
        </div>
        <div style={{ display: "flex", gap: 18, fontSize: 24, color: "#c4b5fd" }}>
          <span>Spring Boot</span>
          <span>•</span>
          <span>Microservices</span>
          <span>•</span>
          <span>Payments</span>
          <span>•</span>
          <span>Pune</span>
        </div>
      </div>
    ),
    size
  );
}
