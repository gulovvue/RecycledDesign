// SpecsTable.tsx — Two-column specification table
// Paste into Framer: Assets → Code → SpecsTable.tsx

import * as React from "react"
import { tokens } from "./tokens"

export interface SpecRow {
  label: string
  value: string
}

interface SpecsTableProps {
  title?:  string
  rows:    SpecRow[]
  accent?: string
}

export function SpecsTable({ title = "Характеристики", rows, accent }: SpecsTableProps) {
  return (
    <div style={{ fontFamily: tokens.fontSans }}>
      {title && (
        <div
          style={{
            fontFamily: tokens.fontDisplay,
            fontSize: 22,
            fontWeight: 600,
            letterSpacing: "-0.01em",
            color: tokens.fg,
            marginBottom: 20,
          }}
        >
          {title}
        </div>
      )}

      <dl
        style={{
          display: "grid",
          gridTemplateColumns: "160px 1fr",
          rowGap: 16,
          columnGap: 16,
          paddingTop: 18,
          borderTop: `1px solid ${tokens.line}`,
          fontSize: 14,
          margin: 0,
        }}
      >
        {rows.map((row, i) => (
          <React.Fragment key={i}>
            <dt
              style={{
                color: tokens.fg3,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                fontSize: 11,
                paddingTop: 2,
                margin: 0,
              }}
            >
              {row.label}
            </dt>
            <dd
              style={{
                color: tokens.fg,
                margin: 0,
              }}
            >
              {row.value}
            </dd>
          </React.Fragment>
        ))}
      </dl>

      {accent && (
        <div
          style={{
            height: 2,
            width: 48,
            background: accent,
            borderRadius: 1,
            marginTop: 24,
          }}
        />
      )}
    </div>
  )
}

export default SpecsTable
