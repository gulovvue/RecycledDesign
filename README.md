# Recycling Portfolio — Данилов М.Ф. · Design System

A dark, typography-first design system for a one-page industrial-design portfolio landing page. Documents 4 student projects unified by the theme **Recycling — 4 подхода** (4 approaches to recycling material and object). Visual language adapted from the Nothing Studio dark portfolio template.

**Author:** Данилов М.Ф. · **Group:** 1-МГ-50 · **Year:** 2025–2026 · **Language:** Russian

## Sources

- **Figma file:** `Nothing Studio.fig` — mounted as a virtual filesystem, dark portfolio template by Nothing Studio (Canada). Pages: `/Start-here`, `/Design`. Frames: `Home`, `About`, `Showcase`, `Showcase---Showcase`, `Career`, `Contact`, `navigation---menu`. Reference assets and JSX pseudocode were extracted to `assets/figma_ref/`.
- **Brand brief:** Provided inline (Russian portfolio specification with project list, color accents, typography rules, structure spec).
- **Uploaded `.deck` files:** Listed in the brief but the `uploads/` directory was empty at task time — they are not currently available. See **Caveats** at end.

## What's in this folder

| Path | Purpose |
| --- | --- |
| `README.md` | This file. Brand context, fundamentals, iconography. |
| `SKILL.md` | Cross-compatible Agent Skill manifest. |
| `colors_and_type.css` | All design tokens (colors, type, spacing, radii, motion). Import this anywhere. |
| `assets/figma_ref/` | Raw reference imagery copied from the Figma source. |
| `assets/logos/` | Brand wordmarks (`ДМФ`, "NOTHING" wordmark from template). |
| `preview/` | Per-token & per-component preview cards (rendered into the Design System tab). |
| `ui_kits/portfolio/` | High-fidelity recreation of the landing page with re-usable JSX components. |
| `slides/` | (none — no decks provided) |

## CONTENT FUNDAMENTALS

The voice is **quiet, declarative, factual**. The copy steps out of the way so the work can speak. Inspired by industrial-design plates: short labels, real specifications, no marketing fluff.

- **Language:** Russian throughout. Eyebrow labels are often English-uppercase (`DOMESTIC RECYCLING`, `ECO APPROACH`, `DOMESTIC REPAIR`, `ART RECYCLING`) — this echoes the bilingual mode of academic-design publications.
- **Bracketed labels:** The Nothing Studio template wraps small nav/eyebrow labels in square brackets — `[ FEATURED PROJECTS ]`, `[ MENU ]`, `[ HIRE US ]`. We adopt this for English eyebrows; Russian section text is plain.
- **Casing:**
  - Hero & section H1 — **uppercase** for English ("ABOUT NOTHING!"), Title-case for Russian ("Стойка для растений").
  - Eyebrows — **UPPERCASE**, letter-spaced 0.15em.
  - Body — sentence case.
  - Captions on technical drawings — sentence case + plain numerals (`Вид спереди 800×2050мм`).
- **Pronouns:** Third-person / impersonal. The portfolio describes objects, not the designer's feelings. Author named once (footer + hero).
- **Numerals:** Section numbers (`01`, `02`, `03`, `04`) are first-class graphic elements — both as eyebrows next to the section title AND as huge ghost numerals (200–300px, `rgba(255,255,255,0.03)`) in the section background.
- **Punctuation:** Em-dash + period combo for sentence rhythm. Russian guillemets «…» for direct quotes.
- **No emoji. No exclamation overuse.** One arrow glyph (`↓`) at the end of hero; otherwise text only.
- **Specs read like a parts list:**

  ```
  Высота          2050 мм
  Ширина          800  мм
  Глубина         700  мм
  Материал        Дерево, керамика
  Система         Пегборд + съёмные горшки
  Мобильность     Колёсная база с тормозом
  ```

  Two columns, monospace-aligned, separator `\u2003` (em-space) — never tables with borders.

### Voice samples

> _Recycling — 4 подхода_

> _«Четыре проекта, четыре подхода к переосмыслению материала: domestic, eco, repair, art.»_

> _«Модульная напольная стойка-пегборд для выращивания растений в квартире. Терракотовый корпус, колёсная база, система съёмных горшков на перфорированной панели.»_

## VISUAL FOUNDATIONS

**Aesthetic:** Dark creative-agency. Quiet confidence. Industrial-design plate energy — large photography, minimal chrome, generous negative space.

### Color
- Page sits on **`#1A1A1A`**, never pure black. Project 04 (Art) drops to **`#0D0D0D`** to feel like a gallery wall.
- Cards / sub-surfaces step up to **`#222222`**. Cards **never** have their own borders or rounded-corner-with-coloured-left-stripe accents — that's a slop pattern. Edges are soft (`border-radius: 30px`) with NO border or shadow.
- Each project gets ONE accent. Accent is used for: the eyebrow label, a 3px horizontal slab over/under the hero photo, optional annotation lines on technical drawings. **Never** as fill on large surfaces.
- Dividers are `rgba(255,255,255,0.08)` — almost invisible 1px lines, wide gaps, no boxes.

### Type
- One family does everything: a Neue Haas Grotesk Display Pro look (display weights for hero, regular/medium for body). The Figma file uses Neue Haas Grotesk Display Pro 55 / 65 / 75. **Substitute on web: `Space Grotesk` for display + `Inter` for body** (see Font substitution caveat).
- Hero headlines are massive: 10–14vw, uppercase, letter-spacing -0.03em, line-height 0.95–1.0.
- Eyebrow labels: 11–14px, uppercase, letter-spacing 0.15em, often bracketed.
- Body: 16–18px, line-height 1.65, color `#AAAAAA`. Never pure white body copy.
- Specs / data labels in display weight at 24–28px (echoes Figma "YEARS OF EXPERIENCE 17" pattern).

### Layout & spacing
- Container max **1280px**, centered.
- Side gutters: **96px desktop**, **24px mobile**.
- Vertical rhythm: sections separated by 96–144px. Inside a section, sub-blocks at 48–64px.
- 2-column rule is `40% / 60%` for spec-table+render, `50% / 50%` for closed/open paired photos.
- Images are **full-bleed** — they hit the page edges with no rounded-corner clipping at the viewport sides on the hero. Cards use `border-radius: 30px`.

### Backgrounds
- Flat colour. **No gradients, no noise, no patterns, no hand-drawn illustrations.** The dark plane IS the texture.
- Imagery does the texture work: warm, slightly desaturated lifestyle photos for Project 01; clean studio renders for 02/03; gallery-white walls for 04.
- Single repeating motif: huge ghost numerals (`01`, `02`, `03`, `04`) as background graphic on each section, 200–300px, `rgba(255,255,255,0.03)`.

### Animation
- Sections fade-up on viewport entry: `opacity 0→1`, `translateY(30px→0)`, `0.6s`, `ease-out`.
- Background numerals parallax at 0.4× scroll speed.
- Image hover: `scale(1.02)`, `0.3s`, no shadow change.
- Accent slabs slide-in from left, 0.2s delay after section.
- Hero words stagger in, 0.1s per word.
- Nav gains `backdrop-filter: blur(12px)` past 80px scroll.
- **No bounces. No spring physics. No emoji confetti.** Cubic-bezier `(0.16, 1, 0.3, 1)` for everything.

### States
- **Hover (link / nav):** `opacity: 0.7` — fastest, `180ms`.
- **Hover (image card):** `transform: scale(1.02)` — `300ms`. No shadow added.
- **Press:** opacity drops to 0.5, no scale-down.
- **Focus:** 2px outline in `--accent`, offset 2px.

### Borders & shadows
- Borders only as 1px hairlines on row dividers (`var(--line)` = `rgba(255,255,255,0.08)`). No card borders.
- Shadows are barely there (`--shadow-soft`), or absent. Pop shadow `--shadow-pop` is reserved for floating focus states (rare).
- Accent slabs (3px) are flat colour, no shadow.

### Transparency & blur
- Sticky nav: `rgba(26,26,26,0.85)` + `backdrop-filter: blur(12px)`. Activated only after scroll > 80px.
- Otherwise transparency is reserved for the ghost numerals (`rgba(255,255,255,0.03)`) and dividers (`rgba(255,255,255,0.08)`).

### Corner radii
- `30px` — image cards (Figma standard).
- `28px` — wide video block.
- `12px` — buttons / chips.
- `0` — section containers, dividers, type. Squared everywhere except pictures.

### Imagery rules
- Hero photos full-bleed, top-aligned crop on Project 01 (lifestyle), centre on 02/03 (product), gallery-wall on 04.
- Slight warmth in 01; neutral in 02/03; high-key gallery white in 04.
- No drop shadows, no rounded vignettes, no inset borders.
- Renders sit on `#222222` plates with 30px radius.
- Technical drawings: white lines on `#222222`, never inverted to black-on-white.

## ICONOGRAPHY

The brand uses **almost no icons**. The aesthetic is: type-first, photography-first.

- **Logo wordmark:** `ДМФ` (left side of nav) and the inherited "NOTHING" oversized footer wordmark (`assets/figma_ref/NOTHING.svg`) — kept as a homage to the source template, retitled `ДМФ` for the Russian portfolio. See `assets/logos/`.
- **Single glyph used in chrome:** the down-arrow `↓` (Unicode) at the end of the hero, signalling "scroll".
- **Bracketed labels** `[ … ]` substitute for icons in nav/eyebrows.
- **No icon font, no icon library imported.** If a future need arises, link **Lucide** from CDN (`https://unpkg.com/lucide-static@latest/`) — its 1.5px stroke style is closest to the design language. **This is a substitution flag, not a current dependency.**
- **Social link names** are spelled out (`LINKEDIN`, `INSTAGRAM`) — no icons.
- **Emoji** are not used.
- **Section numerals** (`01–04`) play the role icons usually do: visual anchor + index. They appear twice per section: small as eyebrow, huge as ghost background.

## CAVEATS / OPEN ITEMS

1. **Fonts substituted.** The Figma file uses **Neue Haas Grotesk Display Pro** (commercial). For the live site we substitute **Space Grotesk** (display) + **Inter** (body) from Google Fonts — closest free metrics + tone. **Please supply licensed Neue Haas TTFs/WOFF2s** if available; drop them in `fonts/` and update `colors_and_type.css`.
2. **Uploaded `.deck` files were not present** in the project filesystem at task time despite being listed in the brief. No slides were generated. If you intended to share decks of project documentation, please re-upload via the Import menu.
3. **No real photography of student projects.** All preview imagery is template-stock from the Nothing Studio Figma file used as placeholder. The UI kit landing page leaves explicit `image-slot`-style placeholder boxes labelled `Hero photo · Стойка для растений`, etc. **Please supply real renders/photos of each of the 4 projects** to finish the deliverable.
4. **No Russian-specific punctuation tweaks** (e.g. proper non-breaking spaces before units, `&nbsp;800мм` → `800\u202Fмм`). Easy to add once final copy is in.

## INDEX

- [`colors_and_type.css`](./colors_and_type.css) — design tokens
- [`SKILL.md`](./SKILL.md) — Agent-Skill manifest
- [`preview/`](./preview/) — design-system cards (rendered into the Design System tab)
- [`ui_kits/portfolio/`](./ui_kits/portfolio/) — landing page recreation
- [`assets/figma_ref/`](./assets/figma_ref/) — Figma source imagery
- [`assets/logos/`](./assets/logos/) — wordmarks
