import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const runtime = "edge";

export const alt = `${siteConfig.name} | Kursus Akuntansi & Perpajakan`;
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
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0d7d63 0%, #0f6353 55%, #123f38 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 999,
              background: "white",
              color: "#0d7d63",
              fontSize: 34,
              fontWeight: 800,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            SP
          </div>
          <div style={{ fontSize: 30, fontWeight: 700, color: "#f9ad24" }}>
            LKP Sahabat Prestasi
          </div>
        </div>

        <div
          style={{
            marginTop: 40,
            fontSize: 64,
            fontWeight: 800,
            lineHeight: 1.1,
            maxWidth: 900,
          }}
        >
          Kursus Akuntansi & Perpajakan
        </div>

        <div
          style={{
            marginTop: 24,
            fontSize: 30,
            color: "#cdf2e5",
            maxWidth: 900,
          }}
        >
          Brevet Pajak A & B · Akuntansi · Sertifikasi Accurate
        </div>

        <div
          style={{
            marginTop: 48,
            fontSize: 24,
            color: "#f9ad24",
            fontWeight: 600,
          }}
        >
          Dibimbing praktisi · Bersertifikat · Siap kerja
        </div>
      </div>
    ),
    { ...size }
  );
}
