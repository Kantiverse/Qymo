import { ImageResponse } from "next/og";

export const alt = "Qymo — a solutions studio that ships. Makers of Haja.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#fdf6ec",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "9999px",
              background: "#f15a36",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <div
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "9999px",
                border: "7px solid #ffffff",
              }}
            />
            <div
              style={{
                position: "absolute",
                right: "16px",
                bottom: "18px",
                width: "18px",
                height: "7px",
                borderRadius: "9999px",
                background: "#ffffff",
                transform: "rotate(45deg)",
              }}
            />
          </div>
          <div style={{ fontSize: "40px", fontWeight: 700, color: "#2b2b2b" }}>
            Qymo
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              fontSize: "82px",
              fontWeight: 700,
              color: "#2b2b2b",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            We build real solutions that ship.
          </div>
          <div style={{ fontSize: "34px", color: "#5c5751", maxWidth: "900px" }}>
            A Nigerian product studio that designs, builds and ships software —
            makers of Haja.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              fontSize: "26px",
              fontWeight: 600,
              color: "#ffffff",
              background: "#f15a36",
              padding: "10px 22px",
              borderRadius: "9999px",
            }}
          >
            qymo.ng
          </div>
          <div style={{ fontSize: "26px", color: "#5c5751" }}>
            makers of haja.shop
          </div>
        </div>
      </div>
    ),
    size
  );
}
