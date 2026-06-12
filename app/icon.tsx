import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 512,
  height: 512
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#050816",
          backgroundImage:
            "radial-gradient(circle at 30% 20%, #38bdf8, transparent 36%), radial-gradient(circle at 70% 70%, #a855f7, transparent 42%)",
          color: "white",
          fontSize: 168,
          fontWeight: 800,
          letterSpacing: "-0.12em"
        }}
      >
        OJ
      </div>
    ),
    size
  );
}
