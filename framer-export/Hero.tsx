// Hero.tsx — Full-screen hero section with word-by-word animation
// Paste into Framer: Assets → Code → Hero.tsx
// Requires: framer-motion (already bundled in Framer)

import * as React from "react"
import { motion, Variants } from "framer-motion"
import { tokens } from "./tokens"

interface HeroProps {
  title?:    string
  subtitle?: string
  author?:   string
  group?:    string
  quote?:    string
  ctaLabel?: string
  ctaHref?:  string
}

const wordVariants: Variants = {
  hidden: { y: "110%", opacity: 0 },
  visible: (i: number) => ({
    y: "0%",
    opacity: 1,
    transition: {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.2 + i * 0.12,
    },
  }),
}

const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 20 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay },
  }),
}

export function Hero({
  title    = "Переработка.\nДизайн.",
  subtitle = "[ Recycling — 4 подхода ]",
  author   = "Данилов М.Ф. — 1-МГ-50",
  group    = "1-МГ-50",
  quote    = "«Четыре проекта, четыре подхода к переосмыслению материала: domestic, eco, repair, art.»",
  ctaLabel = "Смотреть проекты ↓",
  ctaHref  = "#domestic",
}: HeroProps) {
  const lines = title.split("\n")

  return (
    <header
      id="top"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "grid",
        gridTemplateRows: "1fr auto",
        padding: `0 ${tokens.gutter}px 64px`,
        maxWidth: tokens.container,
        margin: "0 auto",
      }}
    >
      {/* Eyebrow tag */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.8}
        style={{
          position: "absolute",
          top: 100,
          left: tokens.gutter,
          fontFamily: tokens.fontMono,
          fontSize: 12,
          color: tokens.fg3,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
        }}
      >
        {subtitle}
      </motion.div>

      {/* Giant title */}
      <div style={{ alignSelf: "center", paddingTop: 140, overflow: "hidden" }}>
        <h1
          style={{
            fontFamily: tokens.fontDisplay,
            fontWeight: 800,
            fontSize: "clamp(80px, 13vw, 220px)",
            lineHeight: 0.9,
            letterSpacing: "-0.04em",
            textTransform: "uppercase",
            color: tokens.fg,
            margin: 0,
          }}
        >
          {lines.map((line, li) => (
            <span key={li} style={{ display: "block", overflow: "hidden" }}>
              <motion.span
                style={{ display: "inline-block" }}
                variants={wordVariants}
                initial="hidden"
                animate="visible"
                custom={li}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>
      </div>

      {/* Bottom meta row */}
      <div>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1.1}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            paddingTop: 32,
            borderTop: `1px solid ${tokens.line}`,
            fontSize: 13,
            color: tokens.fg3,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          <div>{author}</div>
          <div
            style={{
              color: tokens.fg2,
              textTransform: "none",
              letterSpacing: 0,
              fontStyle: "italic",
              fontSize: 15,
              lineHeight: 1.6,
            }}
          >
            {quote}
          </div>
        </motion.div>

        <motion.a
          href={ctaHref}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1.3}
          style={{
            display: "inline-block",
            marginTop: 40,
            fontSize: 12,
            fontFamily: tokens.fontSans,
            color: tokens.fg3,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            textDecoration: "none",
          }}
        >
          {ctaLabel}
        </motion.a>
      </div>
    </header>
  )
}

export default Hero
