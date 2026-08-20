const logoDesigns = [
  { src: "/assets/graphic-design/eats-frieday-everyday.png", name: "Eat's Frieday" },
  { src: "/assets/graphic-design/shcy-frost-fb-logo.png", name: "Schy Frost" },
  { src: "/assets/graphic-design/Takoyachy-logo.png", name: "Takoyachy" },
  { src: "/assets/graphic-design/schyler-tacos.jpg", name: "Schyler Tacos" },
  { src: "/assets/graphic-design/seoul-street-food-circle.png", name: "Seoul Street Food" },
  { src: "/assets/graphic-design/doho-taiyaki.png", name: "Doho Taiyaki" },
  { src: "/assets/graphic-design/mugiwara-fb.png", name: "Mugiwara Takoyaki" },
  { src: "/assets/graphic-design/schylers-kitchen-colored.png", name: "Schyler's Kitchen" },
];

const r3Variants = [
  { src: "/assets/graphic-design/R3/R3-no-bg.png", name: "R3 primary mark" },
  { src: "/assets/graphic-design/R3/R3-only.jpg", name: "R3 monogram" },
  { src: "/assets/graphic-design/R3/EXPR3SS.jpg", name: "Express" },
  { src: "/assets/graphic-design/R3/R3FILL%202.jpg", name: "Refill" },
  { src: "/assets/graphic-design/R3/R3FRESH.jpg", name: "Refresh" },
  { src: "/assets/graphic-design/R3/FR3EZE.jpg", name: "Freeze" },
];

export default function LogoDesigns() {
  return (
    <section id="logo-designs" className="section logo-design-section">
      <div className="section-heading centered logo-design-heading">
        <p className="eyebrow">Creative Hobby</p>
        <h2>
          Creating logos with <span>character and purpose</span>.
        </h2>
        <p>
          Outside software engineering, I enjoy shaping visual identities—from playful food brands to flexible logo systems built around a single idea.
        </p>
      </div>

      <div className="logo-wall" aria-label="Food and retail logo designs">
        {logoDesigns.map((logo) => (
          <figure className="logo-tile" key={logo.src}>
            <div className="logo-artwork">
              <img src={logo.src} alt={`${logo.name} logo design`} loading="lazy" />
            </div>
            <figcaption>{logo.name}</figcaption>
          </figure>
        ))}
      </div>

      <article className="r3-brand-system">
        <div className="r3-copy">
          <p className="eyebrow">One mark, multiple ideas</p>
          <h3>R3 Identity System</h3>
          <p>
            A consolidated wordmark study that uses the R3 monogram across Express, Refill, Refresh, and Freeze variations.
          </p>
        </div>
        <div className="r3-variants">
          {r3Variants.map((variant) => (
            <figure key={variant.src}>
              <img src={variant.src} alt={`R3 ${variant.name} logo variation`} loading="lazy" />
              <figcaption>{variant.name}</figcaption>
            </figure>
          ))}
        </div>
      </article>
    </section>
  );
}
