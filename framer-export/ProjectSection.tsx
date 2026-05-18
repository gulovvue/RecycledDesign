// ProjectSection.tsx — Reusable project section with scroll animations
// Paste into Framer: Assets → Code → ProjectSection.tsx
// Requires: framer-motion (already bundled in Framer)

import * as React from "react"
import { motion, useInView } from "framer-motion"
import { tokens } from "./tokens"
import { SpecsTable } from "./SpecsTable"
import { ImageGrid } from "./ImageGrid"

export interface SpecRow {
  label: string
  value: string
}

export interface ImageItem {
  src: string       // image URL or path — replace with Framer CDN URL after upload
  caption: string
}

export interface ProjectSectionProps {
  number:      "01" | "02" | "03" | "04"
  approach:    string
  title:       string
  description: string
  accent:      string
  darkBg?:     boolean
  heroImage?:  string   // /* REPLACE WITH ACTUAL IMAGE */ after upload
  specs:       SpecRow[]
  images:      ImageItem[]
}

// Fade-up wrapper that triggers on scroll into view
function Reveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode
  delay?: number
}) {
  const ref = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  )
}

export function ProjectSection({
  number,
  approach,
  title,
  description,
  accent,
  darkBg = false,
  heroImage,
  specs,
  images,
}: ProjectSectionProps) {
  return (
    <section
      id={sectionId(number)}
      style={{
        position: "relative",
        padding: `${tokens.space[10]}px ${tokens.gutter}px`,
        background: darkBg ? tokens.bgDeep : tokens.bg,
        overflow: "hidden",
      }}
    >
      {/* Ghost numeral */}
      <motion.div
        aria-hidden
        style={{
          position: "absolute",
          left: -10,
          top: -100,
          fontFamily: tokens.fontDisplay,
          fontWeight: 800,
          fontSize: "clamp(180px, 22vw, 320px)",
          lineHeight: 0.85,
          letterSpacing: "-0.06em",
          color: tokens.fgFaint,
          pointerEvents: "none",
          userSelect: "none",
          willChange: "transform",
        }}
      >
        {number}
      </motion.div>

      <div
        style={{
          maxWidth: tokens.container,
          margin: "0 auto",
          position: "relative",
        }}
      >
        {/* Section header */}
        <Reveal>
          <div style={{ paddingBottom: tokens.space[8] }}>
            {/* num + eyebrow row */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <span
                style={{
                  fontFamily: tokens.fontDisplay,
                  fontWeight: 700,
                  fontSize: 36,
                  letterSpacing: "-0.02em",
                  color: tokens.fg,
                }}
              >
                {number}
              </span>
              <span
                style={{
                  fontSize: tokens.fsEyebrow,
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: accent,
                }}
              >
                {approach}
              </span>
            </div>

            {/* Title */}
            <h2
              style={{
                fontFamily: tokens.fontDisplay,
                fontWeight: 700,
                fontSize: "clamp(48px, 6vw, 96px)",
                lineHeight: 0.95,
                letterSpacing: "-0.03em",
                color: tokens.fg,
                margin: "64px 0 0",
              }}
            >
              {title}
            </h2>

            {/* Description */}
            <p
              style={{
                maxWidth: 660,
                margin: "28px 0 0",
                fontSize: 18,
                lineHeight: 1.65,
                color: tokens.fg2,
                fontFamily: tokens.fontSans,
              }}
            >
              {description}
            </p>
          </div>
        </Reveal>

        {/* Accent slab + hero image */}
        {heroImage && (
          <Reveal delay={0.1}>
            <div style={{ marginTop: tokens.space[8] }}>
              <div
                style={{
                  height: 3,
                  width: 240,
                  background: accent,
                  borderRadius: 2,
                  marginBottom: 24,
                }}
              />
              <div
                style={{
                  height: 580,
                  borderRadius: tokens.radiusXl,
                  overflow: "hidden",
                  background: tokens.surface,
                  position: "relative",
                }}
              >
                {/* REPLACE WITH ACTUAL IMAGE — upload to Framer Assets panel first */}
                <img
                  src={heroImage}
                  alt={title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
            </div>
          </Reveal>
        )}

        {/* Specs table */}
        {specs.length > 0 && (
          <Reveal delay={0.05}>
            <div style={{ marginTop: tokens.space[9] }}>
              <SpecsTable rows={specs} accent={accent} />
            </div>
          </Reveal>
        )}

        {/* Image grid */}
        {images.length > 0 && (
          <Reveal delay={0.08}>
            <div style={{ marginTop: tokens.space[9] }}>
              <span
                style={{
                  fontSize: tokens.fsEyebrow,
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: accent,
                  display: "block",
                  marginBottom: 24,
                }}
              >
                Галерея
              </span>
              <ImageGrid
                items={images}
                layout={images.length === 3 ? "3col" : images.length === 2 ? "2col" : "1+2"}
              />
            </div>
          </Reveal>
        )}
      </div>
    </section>
  )
}

function sectionId(num: "01" | "02" | "03" | "04"): string {
  return ({ "01": "domestic", "02": "farm", "03": "repair", "04": "art" } as const)[num]
}

export default ProjectSection
