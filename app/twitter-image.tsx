import { ImageResponse } from "next/og";

export const alt = "Siffleur Kevin — Développeur Frontend";
export const size = {
  width: 1200,
  height: 630,
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
          alignItems: "flex-start",
          justifyContent: "center",
          background: "#000000",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 32,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#ef4444",
            marginBottom: 24,
          }}
        >
          // développeur frontend
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 96,
            fontWeight: 700,
            fontStyle: "italic",
            color: "#ffffff",
          }}
        >
          Siffleur Kevin
        </div>
      </div>
    ),
    { ...size }
  );
}
