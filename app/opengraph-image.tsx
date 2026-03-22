import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "AlignedFlow Systems — Web Design for Small Businesses & Creators"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#0a0f1a",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          padding: "60px",
        }}
      >
        {/* Subtle top-left glow */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            left: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(8,145,178,0.15) 0%, transparent 70%)",
          }}
        />
        {/* Subtle bottom-right glow */}
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            right: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(34,211,238,0.10) 0%, transparent 70%)",
          }}
        />

        {/* Brand name */}
        <div
          style={{
            fontSize: "72px",
            fontWeight: "bold",
            color: "#ffffff",
            letterSpacing: "-2px",
            textAlign: "center",
            lineHeight: 1.1,
          }}
        >
          AlignedFlow Systems
        </div>

        {/* Divider */}
        <div
          style={{
            width: "80px",
            height: "4px",
            background: "#22d3ee",
            borderRadius: "2px",
            margin: "28px 0",
          }}
        />

        {/* Subtext */}
        <div
          style={{
            fontSize: "30px",
            color: "#22d3ee",
            textAlign: "center",
            fontWeight: 500,
            letterSpacing: "0px",
          }}
        >
          Web Design for Small Businesses &amp; Creators
        </div>
      </div>
    ),
    { ...size }
  )
}
