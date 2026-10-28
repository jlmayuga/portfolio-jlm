import { ImageResponse } from "next/og";

export const alt = "John Lester Mayuga | Senior Agile Software Engineer";
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
          padding: "72px 80px",
          background: "linear-gradient(135deg, #090405 0%, #26050b 60%, #3b0a14 100%)",
          color: "#fff7f7",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 16,
              background: "#e54b4b",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 32,
              fontWeight: 700,
              color: "white",
            }}
          >
            JL
          </div>
          <div style={{ fontSize: 28, color: "#c7a9ad" }}>jlmayuga.github.io/portfolio-jlm</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.1 }}>John Lester Mayuga</div>
          <div style={{ fontSize: 40, fontWeight: 600, color: "#fb7185", marginTop: 16 }}>
            Senior Agile Software Engineer · Full Stack Developer
          </div>
        </div>

        <div style={{ fontSize: 28, color: "#c7a9ad" }}>
          11+ years · React · Next.js · Node.js · Java · REST APIs
        </div>
      </div>
    ),
    size,
  );
}
