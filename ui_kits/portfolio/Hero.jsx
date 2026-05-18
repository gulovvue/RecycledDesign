// Hero.jsx — full-viewport title card. Pure typography on dark.
const Hero = () => (
  <header className="pf-hero" id="top">
    <div className="pf-hero-eyebrow">[ Recycling — 4 подхода ]</div>
    <h1 className="pf-hero-title">
      Переработка.<br />Дизайн.
    </h1>
    <div className="pf-hero-meta">
      <div>Данилов М.Ф. — 1-МГ-50</div>
      <div className="pf-hero-quote">
        «Четыре проекта, четыре подхода к переосмыслению материала: domestic, eco, repair, art.»
      </div>
    </div>
    <a href="#domestic" className="pf-hero-scroll">Смотреть проекты ↓</a>
  </header>
);
window.Hero = Hero;
