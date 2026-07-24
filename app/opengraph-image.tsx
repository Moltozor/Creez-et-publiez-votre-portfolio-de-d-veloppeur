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
          alignItems: "center",
          justifyContent: "center",
          background: "#000000",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 320,
            fontWeight: 700,
            fontStyle: "italic",
          }}
        >
          <span style={{ color: "#ffffff" }}>S</span>
          <span style={{ color: "#ef4444" }}>K</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
