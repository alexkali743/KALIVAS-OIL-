import { useState } from "react";

export default function App() {
  const [cartAdded, setCartAdded] = useState(false);

  function handleAddToCart() {
    setCartAdded(true);
    setTimeout(() => setCartAdded(false), 2000);
  }

  return (
    <div style={{ backgroundColor: "var(--cream)", color: "var(--ink)" }} className="min-h-full">

      {/* Nav */}
      <nav
        className="sticky top-0 z-50 flex items-center justify-between px-8 py-5"
        style={{ backgroundColor: "var(--cream)", borderBottom: "1px solid var(--warm-mid)" }}
      >
        <span
          className="text-xl tracking-widest uppercase"
          style={{ fontFamily: "'Playfair Display', serif", letterSpacing: "0.2em" }}
        >
          Oro Verde
        </span>
        <div className="flex gap-8 text-sm font-medium tracking-wider uppercase" style={{ color: "var(--ink)", opacity: 0.7 }}>
          <a href="#story" className="hover:opacity-100 transition-opacity">Our Story</a>
          <a href="#product" className="hover:opacity-100 transition-opacity">Shop</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="grid min-h-screen" style={{ gridTemplateColumns: "1fr 1fr" }}>
        <div className="relative overflow-hidden" style={{ backgroundColor: "var(--warm-mid)" }}>
          <img
            src="https://images.unsplash.com/photo-1759749597861-e90685f026b4?w=900&h=1200&fit=crop&auto=format"
            alt="A bottle of premium Oro Verde olive oil"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(28,26,21,0.3) 0%, transparent 60%)" }}
          />
        </div>

        <div className="flex flex-col justify-center px-16 py-24" style={{ backgroundColor: "var(--cream)" }}>
          <p
            className="text-xs tracking-[0.3em] uppercase mb-6"
            style={{ color: "var(--olive)" }}
          >
            Single Origin · Extra Virgin
          </p>
          <h1
            className="text-6xl leading-tight mb-8"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
          >
            Pressed from<br />
            Ancient<br />
            <em>Groves</em>
          </h1>
          <p className="text-lg leading-relaxed mb-12 max-w-sm" style={{ opacity: 0.7 }}>
            Cold-pressed within hours of harvest on a family estate in the Peloponnese.
            Every bottle carries the full intensity of the Mediterranean sun.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#product"
              className="px-8 py-4 text-sm font-semibold tracking-widest uppercase transition-all"
              style={{
                backgroundColor: "var(--olive)",
                color: "var(--cream)",
                letterSpacing: "0.15em",
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#57662f")}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = "var(--olive)")}
            >
              Shop Now
            </a>
            <a
              href="#story"
              className="text-sm tracking-wider uppercase border-b pb-0.5 transition-opacity hover:opacity-60"
              style={{ borderColor: "var(--ink)", letterSpacing: "0.15em" }}
            >
              Our Story
            </a>
          </div>
        </div>
      </section>

      {/* Story */}
      <section id="story" className="grid py-32 px-16 gap-16 items-center" style={{ gridTemplateColumns: "1fr 1fr" }}>
        <div className="max-w-lg">
          <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "var(--olive)" }}>
            Est. 1947 · Kalamata, Greece
          </p>
          <h2
            className="text-5xl leading-tight mb-8"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
          >
            Three generations,<br />
            <em>one obsession.</em>
          </h2>
          <p className="text-base leading-relaxed mb-6" style={{ opacity: 0.7 }}>
            The Papadopoulos family has tended the same 400-year-old Koroneiki olive trees
            since 1947. When harvest season arrives each November, the entire family descends
            on the grove — handpicking fruit at the precise moment of perfect ripeness.
          </p>
          <p className="text-base leading-relaxed" style={{ opacity: 0.7 }}>
            The olives are cold-pressed within four hours of picking. No heat, no chemicals,
            no shortcuts. The result is an oil of exceptional depth — grassy, peppery, alive.
          </p>
        </div>

        <div className="relative overflow-hidden" style={{ height: "520px", backgroundColor: "var(--warm-mid)" }}>
          <img
            src="https://images.unsplash.com/photo-1612528908699-7f07afc94d54?w=800&h=600&fit=crop&auto=format"
            alt="Fresh green olives from the Oro Verde grove"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Features */}
      <section
        className="py-24 px-16"
        style={{ backgroundColor: "var(--ink)", color: "var(--cream)" }}
      >
        <p
          className="text-xs tracking-[0.3em] uppercase text-center mb-16"
          style={{ color: "var(--sage)" }}
        >
          Why Oro Verde
        </p>
        <div className="grid gap-12" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
          {[
            {
              icon: "❄️",
              label: "Cold Pressed",
              copy: "Extracted below 27°C to preserve polyphenols, antioxidants, and the full aromatic profile of the fruit.",
            },
            {
              icon: "📍",
              label: "Single Origin",
              copy: "Every bottle is traceable to a single estate in the Laconia region. You know exactly where your oil comes from.",
            },
            {
              icon: "🫒",
              label: "Hand Harvested",
              copy: "Picked by hand in November when polyphenol content peaks. No mechanical shakers, no bruised fruit.",
            },
          ].map(({ icon, label, copy }) => (
            <div key={label} className="flex flex-col gap-4">
              <div className="text-3xl">{icon}</div>
              <h3
                className="text-lg tracking-wide"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
              >
                {label}
              </h3>
              <p className="text-sm leading-relaxed" style={{ opacity: 0.6 }}>
                {copy}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Product Detail */}
      <section id="product" className="py-32 px-16">
        <p className="text-xs tracking-[0.3em] uppercase text-center mb-16" style={{ color: "var(--olive)" }}>
          The Bottle
        </p>
        <div className="flex flex-col md:flex-row items-center gap-20 max-w-4xl mx-auto">
          <div
            className="overflow-hidden flex-shrink-0"
            style={{ width: "320px", height: "440px", backgroundColor: "var(--warm-mid)" }}
          >
            <img
              src="https://images.unsplash.com/photo-1759749597905-e2fed85d8cd5?w=600&h=800&fit=crop&auto=format"
              alt="Oro Verde Extra Virgin Olive Oil 500ml bottle"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-6 flex-1">
            <div>
              <h2
                className="text-4xl mb-2"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
              >
                Oro Verde
              </h2>
              <p className="text-sm tracking-widest uppercase" style={{ color: "var(--olive)" }}>
                Extra Virgin Olive Oil · 500 ml
              </p>
            </div>

            <div
              className="text-4xl font-light tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              €28.00
            </div>

            <ul className="flex flex-col gap-2 text-sm" style={{ opacity: 0.7 }}>
              {[
                "Koroneiki variety, Kalamata PDO region",
                "Acidity ≤ 0.2% — well below extra-virgin threshold",
                "Harvest date: November 2025",
                "Best before: November 2027",
              ].map(item => (
                <li key={item} className="flex items-start gap-3">
                  <span style={{ color: "var(--olive)", marginTop: "2px" }}>—</span>
                  {item}
                </li>
              ))}
            </ul>

            <button
              onClick={handleAddToCart}
              className="mt-4 px-10 py-4 text-sm font-semibold tracking-widest uppercase w-fit transition-all"
              style={{
                backgroundColor: cartAdded ? "var(--sage)" : "var(--olive)",
                color: "var(--cream)",
                letterSpacing: "0.15em",
              }}
            >
              {cartAdded ? "Added ✓" : "Add to Cart"}
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        className="py-24 px-16 grid gap-12"
        style={{ backgroundColor: "var(--warm-mid)", gridTemplateColumns: "1fr 1fr" }}
      >
        {[
          {
            quote: "The most complex, peppery olive oil I have tasted outside of Crete. A revelation at this price point.",
            author: "Marguerite D.",
            role: "Food writer, Le Monde",
          },
          {
            quote: "I use it raw on everything — fresh bread, grilled vegetables, even a spoonful straight from the bottle. Extraordinary.",
            author: "Carlo Ferrini",
            role: "Michelin-starred chef, Florence",
          },
        ].map(({ quote, author, role }) => (
          <div key={author} className="flex flex-col gap-6">
            <p
              className="text-2xl leading-snug"
              style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}
            >
              "{quote}"
            </p>
            <div>
              <p className="text-sm font-semibold">{author}</p>
              <p className="text-xs tracking-wide" style={{ opacity: 0.6 }}>{role}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer
        className="flex flex-col md:flex-row items-center justify-between px-16 py-10 gap-4"
        style={{ borderTop: "1px solid var(--warm-mid)" }}
      >
        <span
          className="text-lg tracking-widest uppercase"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Oro Verde
        </span>
        <p className="text-xs" style={{ opacity: 0.5 }}>
          © 2025 Oro Verde Estate · Kalamata, Greece
        </p>
        <div className="flex gap-6 text-xs tracking-wider uppercase" style={{ opacity: 0.5 }}>
          <a href="#" className="hover:opacity-100 transition-opacity">Instagram</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Contact</a>
        </div>
      </footer>

    </div>
  );
}
