// Nav.tsx — Sticky navigation with blur-on-scroll effect
// Paste into Framer: Assets → Code → Nav.tsx
// Requires: framer-motion (already bundled in Framer)

import * as React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { tokens } from "./tokens"

interface NavProps {
  logoText?: string
}

const links = [
  { num: "01", label: "Domestic", id: "domestic" },
  { num: "02", label: "Eco Farm", id: "farm" },
  { num: "03", label: "Repair",   id: "repair" },
  { num: "04", label: "Art",      id: "art" },
]

export function Nav({ logoText = "ДМФ" }: NavProps) {
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "background 320ms cubic-bezier(0.16,1,0.3,1), backdrop-filter 320ms cubic-bezier(0.16,1,0.3,1)",
        background: scrolled ? "rgba(26,26,26,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? `1px solid ${tokens.line}` : "1px solid transparent",
      }}
    >
      <div
        style={{
          maxWidth: tokens.container,
          margin: "0 auto",
          padding: `22px ${tokens.gutter}px`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a
          href="#top"
          style={{
            fontFamily: tokens.fontDisplay,
            fontWeight: 700,
            fontSize: 22,
            letterSpacing: "-0.02em",
            color: tokens.fg,
            textDecoration: "none",
          }}
        >
          {logoText}
        </a>

        <div style={{ display: "flex", gap: 36 }}>
          {links.map(link => (
            <a
              key={link.id}
              href={`#${link.id}`}
              style={{
                fontSize: 13,
                fontFamily: tokens.fontSans,
                fontWeight: 500,
                color: tokens.fg2,
                textDecoration: "none",
                letterSpacing: "0.01em",
                transition: `opacity ${tokens.durFast}s`,
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.6")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
            >
              <span
                style={{
                  fontFamily: tokens.fontMono,
                  fontSize: 11,
                  color: tokens.fg3,
                  marginRight: 8,
                }}
              >
                {link.num}
              </span>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  )
}

// Framer default export
export default Nav
