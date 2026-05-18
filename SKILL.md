---
name: recycling-portfolio-design
description: Use this skill to generate well-branded interfaces and assets for the "Recycling Portfolio — Данилов М.Ф." dark industrial-design portfolio (1-МГ-50, 2025–2026). Russian-language, Nothing-Studio-inspired dark template covering 4 student recycling projects (Domestic / Eco Farm / Repair / Art). Contains design tokens, type/colour system, voice rules, and a UI kit.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files (colors_and_type.css, ui_kits/, preview/, assets/).

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Key guardrails specific to this brand:
- Background is `#1A1A1A`, never pure black. Project 04 sections drop to `#0D0D0D`.
- One accent per project: cream `#E8D5B0`, acid green `#8BFF6E`, orange `#FF8C42`, paper `#E0DDD6`. Accents are used as 3px slabs and eyebrow text — never as large surface fills.
- Type is display + sans only (Space Grotesk + Inter substituting for Neue Haas Grotesk Display Pro). No serifs.
- Russian language throughout, English bracketed eyebrows like `[ FEATURED PROJECTS ]`.
- No gradients, no noise, no emoji, no icons except the `↓` arrow and `[ ]` brackets.
- Only image cards have rounded corners (`30px`); everything else is square.
