// Design tokens — Recycling Portfolio · Данилов М.Ф.
// Paste this file into Framer: Assets → Code → tokens.ts

export const tokens = {
  // ── Base colors ──────────────────────────────────────────
  bg:          "#1A1A1A",
  bgDeep:      "#0D0D0D",
  bgFooter:    "#111111",
  surface:     "#222222",
  surface2:    "#2A2A2A",

  line:        "rgba(255,255,255,0.08)",
  lineStrong:  "rgba(255,255,255,0.16)",

  fg:          "#F0F0F0",
  fg2:         "#AAAAAA",
  fg3:         "#888888",
  fg4:         "#555555",
  fgFaint:     "rgba(255,255,255,0.03)",

  // ── Project accent colors ─────────────────────────────────
  accents: {
    domestic: "#E8D5B0",  // 01 — Стойка для растений (cream)
    eco:      "#8BFF6E",  // 02 — Вертикальная ферма (acid green)
    repair:   "#FF8C42",  // 03 — Ремонтная станция (orange)
    art:      "#E0DDD6",  // 04 — Машинка-батарейка (paper)
  },

  // ── Typography ───────────────────────────────────────────
  fontDisplay: "'Space Grotesk', 'Neue Haas Grotesk Display Pro', system-ui, sans-serif",
  fontSans:    "'Inter', system-ui, -apple-system, sans-serif",
  fontMono:    "ui-monospace, 'JetBrains Mono', 'SF Mono', Menlo, monospace",

  // ── Type scale (px values for Framer) ────────────────────
  fsHero:    "clamp(80px, 13vw, 220px)",
  fsDisplay: "clamp(56px, 7vw, 112px)",
  fsH1:      "clamp(48px, 5vw, 72px)",
  fsH2:      "clamp(32px, 3.4vw, 56px)",
  fsH3:      28,
  fsBody:    17,
  fsSmall:   14,
  fsEyebrow: 11,

  // ── Spacing (px) ─────────────────────────────────────────
  space: {
    4:  16,
    5:  24,
    6:  32,
    7:  48,
    8:  64,
    9:  96,
    10: 144,
  },

  gutter:    96,
  gutterMobile: 24,
  container: 1280,

  // ── Radii ────────────────────────────────────────────────
  radiusSm:  6,
  radiusMd:  12,
  radiusLg:  20,
  radiusXl:  30,
  radiusPill: 9999,

  // ── Motion ───────────────────────────────────────────────
  easeOut:   [0.16, 1, 0.3, 1] as [number, number, number, number],
  easeInOut: [0.65, 0, 0.35, 1] as [number, number, number, number],
  durFast:   0.18,
  durBase:   0.32,
  durSlow:   0.6,
} as const

export type AccentKey = keyof typeof tokens.accents

export const accentForProject = (num: "01" | "02" | "03" | "04"): string => ({
  "01": tokens.accents.domestic,
  "02": tokens.accents.eco,
  "03": tokens.accents.repair,
  "04": tokens.accents.art,
}[num])
