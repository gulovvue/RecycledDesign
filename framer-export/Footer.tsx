// Footer.tsx — Simple portfolio footer
// Paste into Framer: Assets → Code → Footer.tsx

import * as React from "react"
import { tokens } from "./tokens"

interface FooterProps {
  author?:    string
  title?:     string
  group?:     string
  year?:      string
  logoText?:  string
}

export function Footer({
  author   = "Данилов М.Ф.",
  title    = "Recycling — 4 подхода",
  group    = "1-МГ-50",
  year     = "2025–2026",
  logoText = "ДМФ",
}: FooterProps) {
  return (
    <footer
      style={{
        background: tokens.bgFooter,
        padding: `96px ${tokens.gutter}px 40px`,
        borderTop: `1px solid ${tokens.line}`,
      }}
    >
      {/* Three-column summary row */}
      <div
        style={{
          maxWidth: tokens.container,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 32,
          paddingBottom: 80,
          fontFamily: tokens.fontDisplay,
          fontSize: 18,
          color: tokens.fg,
        }}
      >
        <div>{author}</div>
        <div style={{ textAlign: "center", color: tokens.fg3 }}>{title}</div>
        <div style={{ textAlign: "right", color: tokens.fg3 }}>
          {group} — {year}
        </div>
      </div>

      {/* Giant wordmark */}
      <div
        aria-hidden
        style={{
          fontFamily: tokens.fontDisplay,
          fontWeight: 800,
          fontSize: "clamp(120px, 18vw, 280px)",
          lineHeight: 0.85,
          letterSpacing: "-0.04em",
          color: "#1e1e1e",
          textAlign: "center",
          maxWidth: tokens.container,
          margin: "0 auto",
          userSelect: "none",
        }}
      >
        {logoText}
      </div>

      {/* Bottom bar */}
      <div
        style={{
          maxWidth: tokens.container,
          margin: "40px auto 0",
          display: "flex",
          justifyContent: "space-between",
          fontSize: 11,
          color: tokens.fg4,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
        }}
      >
        <div style={{ display: "flex", gap: 24 }}>
          <span>СПбГУПТД</span>
          <span>Промышленный дизайн</span>
        </div>
        <div style={{ display: "flex", gap: 24 }}>
          <span>Behance</span>
          <span>Instagram</span>
          <span>Email</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
