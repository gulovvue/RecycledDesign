# Framer Import Instructions
## Recycling Portfolio — Данилов М.Ф. · 1-МГ-50

---

## Quick start

### 1. Create a new Framer project
File → New Project → Blank

### 2. Add the code files
Go to **Assets panel → Code → + New Code File** and paste each file from `framer-export/` as a separate code component:

| File | Description |
|------|-------------|
| `tokens.ts` | Design tokens (colors, fonts, spacing) |
| `Nav.tsx` | Sticky navigation with blur-on-scroll |
| `Hero.tsx` | Full-screen hero with word animation |
| `ProjectSection.tsx` | Reusable project section |
| `SpecsTable.tsx` | Two-column specification table |
| `ImageGrid.tsx` | Responsive image grid (2col / 3col / 1+2) |
| `Footer.tsx` | Footer component |
| `Page.tsx` | **Root page — drag this onto the canvas** |

### 3. Add Google Fonts
In Framer: **Site Settings → Fonts → + Add Google Font**
- Space Grotesk (weights: 400, 500, 700, 800)
- Inter (weights: 400, 500, 600, 700)

### 4. Upload images
1. In Framer: **Assets panel → Images → Upload** (drag all files from `assets/` folder)
2. Right-click each uploaded image → **Copy URL**
3. Open `Page.tsx` and replace the `src` strings marked with `/* REPLACE WITH ACTUAL IMAGE */`

**Images to upload:**

| Path in archive | Used in section |
|-----------------|-----------------|
| `assets/projects/_approach/closing.jpg` | 01 hero |
| `assets/projects/_approach/example_nike.png` | 01 gallery |
| `assets/projects/_approach/example_puma.png` | 01 gallery |
| `assets/projects/_approach/example_yuto.png` | 01 gallery |
| `assets/projects/02_farm/prototype_side.png` | 02 hero |
| `assets/projects/02_farm/example_ikea.png` | 02 gallery |
| `assets/projects/02_farm/example_greenstalk.png` | 02 gallery |
| `assets/projects/02_farm/example_aerogarden.png` | 02 gallery |
| `assets/projects/02_farm/chertezh.png` | 02 drawing |
| `assets/projects/02_farm/scenario.png` | 02 specs col |
| `assets/projects/02_farm/persona.png` | 02 persona |
| `assets/projects/03_repair/env1.png` | 03 hero |
| `assets/projects/03_repair/assembly1.png` | 03 gallery |
| `assets/projects/03_repair/assembly2.png` | 03 gallery |
| `assets/projects/03_repair/env2.png` | 03 gallery |
| `assets/projects/03_repair/sketch.png` | 03 sketch |
| `assets/projects/03_repair/analog_ifixit.png` | 03 analogues |
| `assets/projects/03_repair/analog_solderbot.png` | 03 analogues |
| `assets/projects/03_repair/analog_tactix.png` | 03 analogues |
| `assets/projects/04_art/concept_battery.png` | 04 hero |
| `assets/projects/04_art/sketch.png` | 04 gallery |
| `assets/projects/04_art/moodboard.jpg` | 04 gallery |
| `assets/projects/04_art/materials.png` | 04 gallery |
| `assets/projects/04_art/chertezh_1.png` | 04 drawings |
| `assets/projects/04_art/chertezh_2.png` | 04 drawings |
| `assets/projects/04_art/bg_paper.jpg` | 04 material board |
| `assets/projects/04_art/closing.jpg` | 04 material board |

### 5. Use the Page component
Drag the **Page** component from the Assets panel onto your canvas. It assembles all sections automatically.

### 6. Publish
**File → Publish Site** (or connect a custom domain in Site Settings)

---

## Component props reference

### `<Hero />`
| Prop | Type | Default |
|------|------|---------|
| `title` | `string` | `"Переработка.\nДизайн."` |
| `subtitle` | `string` | `"[ Recycling — 4 подхода ]"` |
| `author` | `string` | `"Данилов М.Ф. — 1-МГ-50"` |
| `quote` | `string` | full Russian quote |
| `ctaLabel` | `string` | `"Смотреть проекты ↓"` |
| `ctaHref` | `string` | `"#domestic"` |

### `<ProjectSection />`
| Prop | Type | Notes |
|------|------|-------|
| `number` | `"01"–"04"` | Sets section `id` anchor |
| `approach` | `string` | Eyebrow label |
| `title` | `string` | Section heading |
| `description` | `string` | Lead paragraph |
| `accent` | `string` | Hex color |
| `darkBg` | `boolean` | `true` for section 04 |
| `heroImage` | `string` | Image URL |
| `specs` | `SpecRow[]` | `{label, value}` pairs |
| `images` | `ImageItem[]` | `{src, caption, alt}` |

### `<ImageGrid />`
| Prop | Type | Options |
|------|------|---------|
| `layout` | `string` | `"2col"` `"3col"` `"1+2"` |
| `items` | `GridImageItem[]` | `{src, caption, alt}` |
| `height` | `number` | px, default 300 |

---

## Standalone HTML
`index.html` in the project root is a fully self-contained version — no build step required. Open it directly in a browser or serve with any static file server:

```bash
npx serve .
# → http://localhost:3000
```

All archive assets are referenced with relative paths, so keep the folder structure intact.

---

*Generated for Recycling Portfolio · Данилов М.Ф. · 1-МГ-50 · 2025–2026*
