// ImageGrid.tsx — Responsive image grid with multiple layout options
// Paste into Framer: Assets → Code → ImageGrid.tsx

import * as React from "react"
import { motion, useInView } from "framer-motion"
import { tokens } from "./tokens"

export interface GridImageItem {
  src:      string   // /* REPLACE WITH ACTUAL IMAGE */ — use Framer CDN URL after upload
  caption?: string
  alt?:     string
}

interface ImageGridProps {
  items:    GridImageItem[]
  layout?:  "2col" | "3col" | "1+2"
  height?:  number
}

function ImageCard({
  item,
  height = 320,
  delay = 0,
}: {
  item: GridImageItem
  height?: number
  delay?: number
}) {
  const ref = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-8% 0px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay }}
      style={{
        position: "relative",
        height,
        borderRadius: tokens.radiusXl,
        overflow: "hidden",
        background: tokens.surface,
      }}
      whileHover={{ scale: 1.015 }}
    >
      {item.src ? (
        /* REPLACE WITH ACTUAL IMAGE — upload to Framer Assets panel and copy CDN URL */
        <img
          src={item.src}
          alt={item.alt ?? item.caption ?? ""}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          loading="lazy"
        />
      ) : (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "repeating-linear-gradient(45deg, #222 0 12px, #1f1f1f 12px 24px)",
            color: tokens.fg3,
            fontFamily: tokens.fontMono,
            fontSize: 11,
            textTransform: "uppercase",
            letterSpacing: "0.16em",
          }}
        >
          {/* REPLACE WITH ACTUAL IMAGE */}
          {item.alt ?? "Image"}
        </div>
      )}
      {item.caption && (
        <div
          style={{
            position: "absolute",
            left: 20,
            bottom: 16,
            fontFamily: tokens.fontMono,
            fontSize: 11,
            color: "rgba(255,255,255,0.85)",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            background: "rgba(0,0,0,0.32)",
            padding: "4px 10px",
            borderRadius: 4,
            backdropFilter: "blur(4px)",
          }}
        >
          {item.caption}
        </div>
      )}
    </motion.div>
  )
}

export function ImageGrid({ items, layout = "3col", height = 300 }: ImageGridProps) {
  if (layout === "3col") {
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 16,
        }}
      >
        {items.map((item, i) => (
          <ImageCard key={i} item={item} height={height} delay={i * 0.06} />
        ))}
      </div>
    )
  }

  if (layout === "2col") {
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 16,
        }}
      >
        {items.map((item, i) => (
          <ImageCard key={i} item={item} height={height + 60} delay={i * 0.08} />
        ))}
      </div>
    )
  }

  // "1+2" — one large left, two stacked right
  const [first, ...rest] = items
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "2fr 1fr",
        gap: 16,
      }}
    >
      <ImageCard item={first} height={(height + 60) * 2 + 16} delay={0} />
      <div style={{ display: "grid", gap: 16 }}>
        {rest.slice(0, 2).map((item, i) => (
          <ImageCard key={i} item={item} height={height + 60} delay={0.08 + i * 0.08} />
        ))}
      </div>
    </div>
  )
}

export default ImageGrid
