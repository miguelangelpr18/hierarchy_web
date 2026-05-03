import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px 96px",
          background: "#FBFAF6",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
        }}
      >
        {/* Lime accent blob top-right */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-80px",
            width: "480px",
            height: "480px",
            borderRadius: "50%",
            background: "rgba(196,245,66,0.35)",
          }}
        />

        {/* Logo row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "56px",
          }}
        >
          {/* h monogram */}
          <div
            style={{
              width: "52px",
              height: "52px",
              background: "#0F0F12",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "16px",
              color: "#FBFAF6",
              fontSize: "32px",
              fontWeight: "700",
              letterSpacing: "-1px",
            }}
          >
            h
          </div>
          <span
            style={{
              fontSize: "28px",
              fontWeight: "700",
              color: "#0F0F12",
              letterSpacing: "-0.5px",
            }}
          >
            hierarchy
          </span>
          {/* lime bar */}
          <div
            style={{
              height: "4px",
              width: "80px",
              background: "#C4F542",
              marginLeft: "4px",
              marginTop: "14px",
              alignSelf: "flex-end",
            }}
          />
        </div>

        {/* Main headline */}
        <div
          style={{
            fontSize: "68px",
            fontWeight: "800",
            color: "#0F0F12",
            lineHeight: "1.05",
            letterSpacing: "-2px",
            maxWidth: "900px",
          }}
        >
          hierarchy —{" "}
          <span style={{ color: "#52525B" }}>webs que cargan</span>{" "}
          <span
            style={{
              background: "#C4F542",
              color: "#0F0F12",
              padding: "0 12px",
              borderRadius: "6px",
            }}
          >
            3x más rápido
          </span>
        </div>

        {/* Sub */}
        <div
          style={{
            marginTop: "32px",
            fontSize: "26px",
            fontWeight: "400",
            color: "#52525B",
            letterSpacing: "-0.3px",
          }}
        >
          Páginas web profesionales para negocios mexicanos · MTY, MX
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
