// Page.tsx — STANDALONE, всё в одном файле, без внешних импортов
// Вставь в Framer: Assets → Code → Page.tsx (заменив старое содержимое)
// Потом раскрой Page.tsx в панели Assets → перетащи компонент Page на холст
//
// После вставки на холст замени пути к картинкам на CDN-ссылки из Framer Assets:
// Загрузи картинки через Assets → Images, скопируй URL и вставь вместо /* REPLACE */

import * as React from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"

// ─── ТОКЕНЫ ──────────────────────────────────────────────────────────────────
const T = {
  bg:       "#1A1A1A",
  bgDeep:   "#0D0D0D",
  bgFooter: "#111111",
  surface:  "#222222",
  line:     "rgba(255,255,255,0.08)",
  fg:       "#F0F0F0",
  fg2:      "#AAAAAA",
  fg3:      "#888888",
  fg4:      "#555555",
  fgFaint:  "rgba(255,255,255,0.03)",
  accents: {
    domestic: "#E8D5B0",
    eco:      "#8BFF6E",
    repair:   "#FF8C42",
    art:      "#E0DDD6",
  },
  display: "'Space Grotesk', system-ui, sans-serif",
  sans:    "'Inter', system-ui, sans-serif",
  mono:    "ui-monospace, 'SF Mono', Menlo, monospace",
  gutter:  96,
  container: 1280,
  ease: [0.16, 1, 0.3, 1] as [number,number,number,number],
}

// ─── УТИЛИТА: fade-up при скролле ────────────────────────────────────────────
function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = React.useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-8% 0px" })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: T.ease, delay }}
    >
      {children}
    </motion.div>
  )
}

// ─── КАРТОЧКА ИЗОБРАЖЕНИЯ ─────────────────────────────────────────────────────
function ImgCard({
  src, alt = "", caption, height = 420,
}: { src?: string; alt?: string; caption?: string; height?: number }) {
  return (
    <div style={{
      position: "relative", height, borderRadius: 30,
      overflow: "hidden", background: T.surface, flexShrink: 0,
    }}>
      {src
        ? <img src={src} alt={alt} style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} loading="lazy" />
        : <div style={{
            width:"100%", height:"100%", display:"flex", alignItems:"center",
            justifyContent:"center", color: T.fg3, fontFamily: T.mono,
            fontSize:11, textTransform:"uppercase", letterSpacing:"0.16em",
            background:"repeating-linear-gradient(45deg,#222 0 12px,#1f1f1f 12px 24px)",
            textAlign:"center", padding:16,
          }}>
            {/* REPLACE WITH ACTUAL IMAGE */}{alt || "Image"}
          </div>
      }
      {caption && (
        <div style={{
          position:"absolute", left:20, bottom:16,
          fontFamily: T.mono, fontSize:11, letterSpacing:"0.06em",
          textTransform:"uppercase", color:"rgba(255,255,255,0.85)",
          background:"rgba(0,0,0,0.32)", padding:"4px 10px",
          borderRadius:4, backdropFilter:"blur(4px)",
        }}>{caption}</div>
      )}
    </div>
  )
}

// ─── EYEBROW ──────────────────────────────────────────────────────────────────
function Eyebrow({ text, accent, mb = 24 }: { text: string; accent: string; mb?: number }) {
  return (
    <div style={{
      fontSize: 11, fontWeight: 600, letterSpacing: "0.15em",
      textTransform: "uppercase", color: accent, marginBottom: mb,
      fontFamily: T.sans,
    }}>{text}</div>
  )
}

// ─── ТАБЛИЦА ХАРАКТЕРИСТИК ───────────────────────────────────────────────────
function SpecsTable({ rows, accent }: { rows: {label:string;value:string}[]; accent: string }) {
  return (
    <div>
      <div style={{
        fontFamily: T.display, fontSize: 22, fontWeight: 600,
        letterSpacing: "-0.01em", color: T.fg, marginBottom: 20,
      }}>Характеристики</div>
      <dl style={{
        display:"grid", gridTemplateColumns:"160px 1fr",
        rowGap:16, columnGap:16,
        paddingTop:18, borderTop:`1px solid ${T.line}`,
        fontSize:14, margin:0,
      }}>
        {rows.map((r,i) => (
          <React.Fragment key={i}>
            <dt style={{ color:T.fg3, textTransform:"uppercase", letterSpacing:"0.08em", fontSize:11, paddingTop:2, margin:0 }}>{r.label}</dt>
            <dd style={{ color:T.fg, margin:0 }}>{r.value}</dd>
          </React.Fragment>
        ))}
      </dl>
      <div style={{ height:2, width:48, background:accent, borderRadius:1, marginTop:24 }} />
    </div>
  )
}

// ─── СЕТКА ИЗОБРАЖЕНИЙ ───────────────────────────────────────────────────────
function ImgGrid({ items, cols = 3, height = 280 }: {
  items: {src?:string;alt?:string;caption?:string}[];
  cols?: 2|3; height?: number;
}) {
  return (
    <div style={{ display:"grid", gridTemplateColumns:`repeat(${cols},1fr)`, gap:16 }}>
      {items.map((it,i) => (
        <Reveal key={i} delay={i*0.07}>
          <ImgCard {...it} height={height} />
        </Reveal>
      ))}
    </div>
  )
}

// ─── NAV ──────────────────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = React.useState(false)
  React.useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 80)
    window.addEventListener("scroll", fn, { passive:true })
    return () => window.removeEventListener("scroll", fn)
  }, [])
  const links = [
    { num:"01", label:"Domestic", id:"domestic" },
    { num:"02", label:"Eco Farm", id:"farm" },
    { num:"03", label:"Repair",   id:"repair" },
    { num:"04", label:"Art",      id:"art" },
  ]
  return (
    <nav style={{
      position:"fixed", top:0, left:0, right:0, zIndex:100,
      background: scrolled ? "rgba(26,26,26,0.9)" : "transparent",
      backdropFilter: scrolled ? "blur(14px)" : "none",
      WebkitBackdropFilter: scrolled ? "blur(14px)" : "none",
      borderBottom: scrolled ? `1px solid ${T.line}` : "1px solid transparent",
      transition:"background 320ms, backdrop-filter 320ms, border-color 320ms",
    }}>
      <div style={{
        maxWidth: T.container, margin:"0 auto",
        padding:`22px ${T.gutter}px`,
        display:"flex", alignItems:"center", justifyContent:"space-between",
      }}>
        <a href="#top" style={{ fontFamily:T.display, fontWeight:700, fontSize:22, letterSpacing:"-0.02em", color:T.fg, textDecoration:"none" }}>ДМФ</a>
        <div style={{ display:"flex", gap:36 }}>
          {links.map(l => (
            <a key={l.id} href={`#${l.id}`} style={{ fontSize:13, fontFamily:T.sans, fontWeight:500, color:T.fg2, textDecoration:"none" }}>
              <span style={{ fontFamily:T.mono, fontSize:11, color:T.fg3, marginRight:8 }}>{l.num}</span>{l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

// ─── HERO ─────────────────────────────────────────────────────────────────────
function Hero() {
  const words = ["Переработка.", "Дизайн."]
  return (
    <header id="top" style={{
      position:"relative", minHeight:"100vh",
      display:"grid", gridTemplateRows:"1fr auto",
      padding:`0 ${T.gutter}px 64px`,
      maxWidth: T.container, margin:"0 auto",
    }}>
      <motion.div
        initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }}
        transition={{ duration:1, ease:T.ease, delay:0.8 }}
        style={{
          position:"absolute", top:100, left:T.gutter,
          fontFamily:T.mono, fontSize:12, color:T.fg3,
          letterSpacing:"0.12em", textTransform:"uppercase",
        }}
      >[ Recycling — 4 подхода ]</motion.div>

      <div style={{ alignSelf:"center", paddingTop:140 }}>
        <h1 style={{
          fontFamily:T.display, fontWeight:800,
          fontSize:"clamp(80px,13vw,220px)",
          lineHeight:0.9, letterSpacing:"-0.04em",
          textTransform:"uppercase", color:T.fg, margin:0,
        }}>
          {words.map((w,i) => (
            <span key={i} style={{ display:"block", overflow:"hidden" }}>
              <motion.span
                style={{ display:"inline-block" }}
                initial={{ y:"110%", opacity:0 }}
                animate={{ y:"0%", opacity:1 }}
                transition={{ duration:1.1, ease:T.ease, delay:0.2+i*0.12 }}
              >{w}</motion.span>
            </span>
          ))}
        </h1>
      </div>

      <motion.div
        initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }}
        transition={{ duration:0.9, ease:T.ease, delay:1.1 }}
      >
        <div style={{
          display:"grid", gridTemplateColumns:"1fr 1fr", gap:64,
          paddingTop:32, borderTop:`1px solid ${T.line}`,
          fontSize:13, color:T.fg3, letterSpacing:"0.08em", textTransform:"uppercase",
        }}>
          <div>Данилов М.Ф. — 1-МГ-50</div>
          <div style={{ color:T.fg2, textTransform:"none", letterSpacing:0, fontStyle:"italic", fontSize:15, lineHeight:1.6 }}>
            «Четыре проекта, четыре подхода к переосмыслению материала: domestic, eco, repair, art.»
          </div>
        </div>
        <a href="#domestic" style={{ display:"inline-block", marginTop:40, fontSize:12, color:T.fg3, letterSpacing:"0.12em", textTransform:"uppercase", textDecoration:"none" }}>
          Смотреть проекты ↓
        </a>
      </motion.div>
    </header>
  )
}

// ─── СЕКЦИЯ ПРОЕКТА ───────────────────────────────────────────────────────────
function Section({
  id, num, approach, title, description, accent, darkBg=false,
  heroSrc, specs, images,
}: {
  id:string; num:string; approach:string; title:string;
  description:string; accent:string; darkBg?:boolean;
  heroSrc?:string;
  specs:{label:string;value:string}[];
  images:{src?:string;alt?:string;caption?:string}[];
}) {
  return (
    <section id={id} style={{
      position:"relative", padding:`144px ${T.gutter}px`,
      background: darkBg ? T.bgDeep : T.bg, overflow:"hidden",
    }}>
      {/* Ghost numeral */}
      <div aria-hidden style={{
        position:"absolute", left:-10, top:-100,
        fontFamily:T.display, fontWeight:800,
        fontSize:"clamp(180px,22vw,320px)",
        lineHeight:0.85, letterSpacing:"-0.06em",
        color:T.fgFaint, pointerEvents:"none", userSelect:"none",
      }}>{num}</div>

      <div style={{ maxWidth:T.container, margin:"0 auto", position:"relative" }}>

        {/* Header */}
        <Reveal>
          <div style={{ paddingBottom:64 }}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start" }}>
              <span style={{ fontFamily:T.display, fontWeight:700, fontSize:36, letterSpacing:"-0.02em", color:T.fg }}>{num}</span>
              <span style={{ fontSize:11, fontWeight:600, letterSpacing:"0.15em", textTransform:"uppercase", color:accent }}>{approach}</span>
            </div>
            <h2 style={{
              fontFamily:T.display, fontWeight:700,
              fontSize:"clamp(48px,6vw,96px)",
              lineHeight:0.95, letterSpacing:"-0.03em", color:T.fg, margin:"64px 0 0",
            }}>{title}</h2>
            <p style={{ maxWidth:660, margin:"28px 0 0", fontSize:18, lineHeight:1.65, color:T.fg2 }}>{description}</p>
          </div>
        </Reveal>

        {/* Accent line + hero image */}
        <Reveal delay={0.1}>
          <div style={{ marginTop:64 }}>
            <div style={{ height:3, width:240, background:accent, borderRadius:2, marginBottom:24 }} />
            <ImgCard src={heroSrc} alt={title} caption={`${num} · ${approach}`} height={560} />
          </div>
        </Reveal>

        {/* Specs */}
        {specs.length > 0 && (
          <Reveal delay={0.05}>
            <div style={{ marginTop:96 }}>
              <SpecsTable rows={specs} accent={accent} />
            </div>
          </Reveal>
        )}

        {/* Gallery */}
        {images.length > 0 && (
          <div style={{ marginTop:96 }}>
            <Eyebrow text="Галерея" accent={accent} />
            <ImgGrid items={images} cols={images.length >= 3 ? 3 : 2} height={images.length >= 3 ? 260 : 380} />
          </div>
        )}
      </div>
    </section>
  )
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ background:T.bgFooter, padding:`96px ${T.gutter}px 40px`, borderTop:`1px solid ${T.line}` }}>
      <div style={{
        maxWidth:T.container, margin:"0 auto",
        display:"grid", gridTemplateColumns:"1fr 1fr 1fr",
        gap:32, paddingBottom:80,
        fontFamily:T.display, fontSize:18, color:T.fg,
      }}>
        <div>Данилов М.Ф.</div>
        <div style={{ textAlign:"center", color:T.fg3 }}>Recycling — 4 подхода</div>
        <div style={{ textAlign:"right", color:T.fg3 }}>1-МГ-50 — 2025–2026</div>
      </div>
      <div aria-hidden style={{
        fontFamily:T.display, fontWeight:800,
        fontSize:"clamp(120px,18vw,280px)",
        lineHeight:0.85, letterSpacing:"-0.04em",
        color:"#1e1e1e", textAlign:"center",
        maxWidth:T.container, margin:"0 auto", userSelect:"none",
      }}>ДМФ</div>
      <div style={{
        maxWidth:T.container, margin:"40px auto 0",
        display:"flex", justifyContent:"space-between",
        fontSize:11, color:T.fg4, letterSpacing:"0.1em", textTransform:"uppercase",
      }}>
        <div style={{ display:"flex", gap:24 }}>
          <span>СПбГУПТД</span><span>Промышленный дизайн</span>
        </div>
        <div style={{ display:"flex", gap:24 }}>
          <span>Behance</span><span>Instagram</span><span>Email</span>
        </div>
      </div>
    </footer>
  )
}

// ─── ДАННЫЕ ПРОЕКТОВ ──────────────────────────────────────────────────────────
const PROJECTS = [
  {
    id: "domestic", num: "01",
    approach: "Domestic Recycling",
    title: "Стойка для растений",
    description: "Подход в промышленном дизайне, при котором повседневные объекты не утилизируются, а повторно используются с изменением формы и функции. Материал сохраняется как физическая структура — переосмысливается и становится новым функциональным решением.",
    accent: T.accents.domestic,
    darkBg: false,
    heroSrc: "", /* REPLACE WITH ACTUAL IMAGE — assets/projects/_approach/closing.jpg */
    specs: [
      { label:"Подход",       value:"Domestic Recycling — бытовая переработка" },
      { label:"Принцип",      value:"Сохранение формы + изменение функции" },
      { label:"Материал",     value:"Исходный объект без добавлений" },
      { label:"Крепление",    value:"Пазы, сгибы, существующие соединения" },
      { label:"Производство", value:"Самостоятельная сборка без специнструментов" },
    ],
    images: [
      { src:"", alt:"NikeLab Air Max — упаковка-рюкзак",   caption:"NikeLab · упаковка-рюкзак"  }, /* REPLACE WITH ACTUAL IMAGE */
      { src:"", alt:"PUMA Clever Little Bag",               caption:"Puma · Clever Little Bag"   }, /* REPLACE WITH ACTUAL IMAGE */
      { src:"", alt:"YUTO Design — упаковка-полка",         caption:"Yuto · упаковка → полка"    }, /* REPLACE WITH ACTUAL IMAGE */
    ],
  },
  {
    id: "farm", num: "02",
    approach: "Eco Approach",
    title: "Модульная вертикальная фитоферма",
    description: "Мобильная напольная фитоферма для пользователей 65–80 лет. Горшки крепятся в индивидуальные чехлы на горизонтальных пазах панели без инструментов. Перемещение без подъёма, уход без наклонов. Материал — переработанный rPP / rPET.",
    accent: T.accents.eco,
    darkBg: false,
    heroSrc: "", /* REPLACE WITH ACTUAL IMAGE — assets/projects/02_farm/prototype_side.png */
    specs: [
      { label:"Пользователь",  value:"65–80 лет" },
      { label:"Материал",      value:"Переработанный rPP / rPET" },
      { label:"База",          value:"100 × 40 см, 4 поворотных колеса" },
      { label:"Нагрузка",      value:"Кашпо 2–4 кг · рама до 40 кг" },
      { label:"Сборка",        value:"Разборная без клея" },
      { label:"Центр тяжести", value:"Низкий, равномерное распределение" },
    ],
    images: [
      { src:"", alt:"IKEA KRYDDA / VÄXER",  caption:"IKEA KRYDDA / VÄXER"      }, /* REPLACE WITH ACTUAL IMAGE */
      { src:"", alt:"GreenStalk",            caption:"GreenStalk · ярусная"     }, /* REPLACE WITH ACTUAL IMAGE */
      { src:"", alt:"AeroGarden",            caption:"AeroGarden · гидропоника" }, /* REPLACE WITH ACTUAL IMAGE */
    ],
  },
  {
    id: "repair", num: "03",
    approach: "Domestic Repair",
    title: "Ремонтная станция",
    description: "Жёсткая упаковочная коробка трансформируется в компактную ремонтную станцию для мелкой электроники без дополнительных материалов. Основание — рабочая поверхность. Крышка — задняя панель. Полосы из той же коробки — перегородки отсеков.",
    accent: T.accents.repair,
    darkBg: false,
    heroSrc: "", /* REPLACE WITH ACTUAL IMAGE — assets/projects/03_repair/env1.png */
    specs: [
      { label:"Пользователь",  value:"18–24 лет, DIY-культура" },
      { label:"Материал",      value:"Жёсткий картон (исходная коробка)" },
      { label:"Рабочая зона",  value:"Основание коробки" },
      { label:"Задняя панель", value:"Крышка коробки (вертикально)" },
      { label:"Перегородки",   value:"Полосы из той же коробки" },
      { label:"Фиксация",      value:"Пазы, загибы, вставки" },
    ],
    images: [
      { src:"", alt:"Сборка — этап 1",    caption:"Сборка — этап 1"    }, /* REPLACE WITH ACTUAL IMAGE */
      { src:"", alt:"Сборка — этап 2",    caption:"Сборка — этап 2"    }, /* REPLACE WITH ACTUAL IMAGE */
      { src:"", alt:"В работе — сверху",  caption:"В работе · сверху"  }, /* REPLACE WITH ACTUAL IMAGE */
    ],
  },
  {
    id: "art", num: "04",
    approach: "Art Recycling",
    title: "Машинка‑батарейка",
    description: "Машинка для скрутки сигарет переосмыслена как батарейка — метафора цифрового скроллинга. Два ролика — два полюса. Журнальная лента — бесконечный поток контента. Крутят рукоятку — энергия внимания, которую вы отдаёте экрану.",
    accent: T.accents.art,
    darkBg: true,
    heroSrc: "", /* REPLACE WITH ACTUAL IMAGE — assets/projects/04_art/concept_battery.png */
    specs: [
      { label:"Концепция", value:"Арт-переработка · метафорический объект" },
      { label:"Основа",    value:"Машинка для скрутки сигарет" },
      { label:"Метафора",  value:"Батарейка / цифровой скроллинг" },
      { label:"Механика",  value:"Два ролика, журнальная лента" },
      { label:"Материал",  value:"Алюминий, переработанный пластик, бумага" },
    ],
    images: [
      { src:"", alt:"Эскиз",              caption:"Эскиз · идея"            }, /* REPLACE WITH ACTUAL IMAGE */
      { src:"", alt:"Мудборд",            caption:"Мудборд · визуальный язык" }, /* REPLACE WITH ACTUAL IMAGE */
      { src:"", alt:"Материальная палитра", caption:"Материальная палитра"   }, /* REPLACE WITH ACTUAL IMAGE */
    ],
  },
]

// ─── ROOT COMPONENT ───────────────────────────────────────────────────────────
export default function Page() {
  return (
    <div style={{
      background: T.bg, color: T.fg,
      fontFamily: T.sans,
      WebkitFontSmoothing: "antialiased",
      overflowX: "hidden",
    }}>
      <Nav />
      <Hero />

      <div style={{ height:1, background:T.line, maxWidth:T.container, margin:"0 auto" }} />

      {PROJECTS.map((p, i) => (
        <React.Fragment key={p.id}>
          <Section {...p} />
          {i < PROJECTS.length - 1 && (
            <div style={{ height:1, background:T.line, maxWidth:T.container, margin:"0 auto" }} />
          )}
        </React.Fragment>
      ))}

      <Footer />
    </div>
  )
}
