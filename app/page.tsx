import type { CSSProperties, ReactNode } from "react";

/* ----------------------------------------------------------------------------
   Hand-drawn doodle helpers (inline SVG, SaaSPlate style)
---------------------------------------------------------------------------- */

type DoodleProps = { className?: string; style?: CSSProperties };

function Squiggle({ className = "", style }: DoodleProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 90 24" fill="none" aria-hidden>
      <path
        d="M2 14C10 4 16 4 24 14S40 24 48 14 64 4 72 14s14 6 16 2"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Underline({ className = "", style }: DoodleProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 220 16" fill="none" aria-hidden>
      <path
        d="M4 11C44 4 120 3 216 8"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CurlyArrow({ className = "", style }: DoodleProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 80 90" fill="none" aria-hidden>
      <path
        d="M14 6c20 6 34 22 30 42-3 14-18 18-24 8-5-9 4-18 14-14 16 6 22 24 20 34"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M44 70l10 12 14-7"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Spark({ className = "", style }: DoodleProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 1c1 6 4 9 10 11-6 2-9 5-10 11-1-6-4-9-10-11 6-2 9-5 10-11Z"
        fill="currentColor"
      />
    </svg>
  );
}

function Ring({ className = "", style }: DoodleProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 40 40" fill="none" aria-hidden>
      <circle cx="20" cy="20" r="16" stroke="currentColor" strokeWidth="4" />
    </svg>
  );
}

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <svg viewBox="0 0 40 40" className="h-8 w-8" aria-hidden>
        <circle cx="20" cy="20" r="20" fill="var(--tomato)" />
        <circle
          cx="20"
          cy="20"
          r="9"
          stroke="#fff"
          strokeWidth="4"
          fill="none"
        />
        <line
          x1="25"
          y1="25"
          x2="30"
          y2="30"
          stroke="#fff"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
      <span className="font-display text-2xl font-semibold tracking-tight text-ink">
        Qymo
      </span>
    </div>
  );
}

/* ----------------------------------------------------------------------------
   Reusable bits
---------------------------------------------------------------------------- */

function SectionTag({
  children,
  color = "var(--orange)",
}: {
  children: ReactNode;
  color?: string;
}) {
  return (
    <div className="inline-flex flex-col items-start">
      <span
        className="text-sm font-semibold uppercase tracking-[0.18em]"
        style={{ color }}
      >
        {children}
      </span>
      <Squiggle className="mt-1 h-3 w-16" style={{ color }} />
    </div>
  );
}

function PrimaryButton({
  children,
  href = "#contact",
}: {
  children: ReactNode;
  href?: string;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-xl bg-tomato px-7 py-3.5 text-base font-semibold text-white shadow-[0_10px_24px_-8px_rgba(241,90,54,0.7)] transition hover:bg-tomato-dark hover:-translate-y-0.5"
    >
      {children}
    </a>
  );
}

function GhostButton({
  children,
  href = "#",
}: {
  children: ReactNode;
  href?: string;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center gap-2 rounded-xl border border-ink/15 bg-white/60 px-7 py-3.5 text-base font-semibold text-ink transition hover:border-ink/30 hover:bg-white"
    >
      {children}
    </a>
  );
}

/* ----------------------------------------------------------------------------
   Mini Haja marketplace mockup (the "product screenshot")
---------------------------------------------------------------------------- */

function HajaMockup() {
  const products = [
    { name: "Wireless Neckband", shop: "Kano Gadget Hub", price: "₦13,200", tone: "var(--teal)" },
    { name: "Silk Head Scarf", shop: "Style & Stitch", price: "₦6,800", tone: "var(--orange)" },
    { name: "Bluetooth Speaker", shop: "DeviceBay", price: "₦22,000", tone: "var(--tomato)" },
    { name: "Urban Tee (Black)", shop: "Haja Test Shop", price: "₦16,500", tone: "#c879d6" },
  ];
  return (
    <div className="relative rounded-[28px] border border-black/5 bg-white p-3 shadow-[0_40px_80px_-30px_rgba(80,50,20,0.35)]">
      {/* top bar */}
      <div className="flex items-center justify-between rounded-2xl bg-cream px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-6 w-6 rounded-lg bg-tomato" />
          <span className="font-display text-sm font-semibold text-ink">Haja</span>
        </div>
        <div className="hidden flex-1 px-4 sm:block">
          <div className="flex h-7 items-center rounded-full bg-white px-3 text-[11px] text-ink-soft shadow-sm">
            Search products, stores &amp; services…
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-7 w-7 rounded-full bg-white shadow-sm" />
          <span className="h-7 w-12 rounded-full bg-tomato/90" />
        </div>
      </div>

      <div className="flex gap-3 p-1 pt-3">
        {/* sidebar */}
        <div className="hidden w-32 shrink-0 flex-col gap-2 rounded-2xl bg-cream/70 p-3 sm:flex">
          {["Products", "Used market", "Map", "Stores", "Sell"].map((l, i) => (
            <div
              key={l}
              className={`flex items-center gap-2 rounded-lg px-2 py-1.5 text-[11px] ${
                i === 0 ? "bg-white font-semibold text-ink shadow-sm" : "text-ink-soft"
              }`}
            >
              <span
                className="h-2.5 w-2.5 rounded-sm"
                style={{ background: i === 0 ? "var(--tomato)" : "#d8cdbd" }}
              />
              {l}
            </div>
          ))}
          <div className="mt-2 rounded-xl bg-gradient-to-br from-orange/90 to-tomato p-2.5 text-white">
            <p className="text-[10px] leading-tight font-semibold">Nearby used deals</p>
            <p className="mt-1 text-[9px] opacity-90">12 within 5km</p>
          </div>
        </div>

        {/* product grid */}
        <div className="flex-1">
          <div className="mb-2 flex items-center justify-between px-1">
            <span className="font-display text-sm font-semibold text-ink">Recommended</span>
            <span className="text-[10px] text-ink-soft">More →</span>
          </div>
          <div className="grid grid-cols-2 gap-2.5">
            {products.map((p) => (
              <div
                key={p.name}
                className="rounded-2xl border border-black/5 bg-white p-2.5 shadow-sm"
              >
                <div
                  className="mb-2 h-14 rounded-xl"
                  style={{
                    background: `linear-gradient(135deg, ${p.tone}22, ${p.tone}55)`,
                  }}
                />
                <p className="truncate text-[11px] font-semibold text-ink">{p.name}</p>
                <p className="truncate text-[9px] text-ink-soft">{p.shop}</p>
                <div className="mt-1 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-ink">{p.price}</span>
                  <span
                    className="rounded-full px-2 py-0.5 text-[8px] font-semibold text-white"
                    style={{ background: p.tone }}
                  >
                    Add
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------------------
   Page
---------------------------------------------------------------------------- */

const navLinks = ["Solutions", "Work", "About", "Process"];

export default function Home() {
  return (
    <main className="relative w-full overflow-x-hidden bg-cream text-ink">
      {/* ---------------- NAV ---------------- */}
      <header className="sticky top-0 z-50 border-b border-black/5 bg-cream/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <Logo />
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="text-sm font-medium text-ink-soft transition hover:text-ink"
              >
                {l}
              </a>
            ))}
          </div>
          <PrimaryButton href="#contact">Work with us</PrimaryButton>
        </nav>
      </header>

      {/* ---------------- HERO ---------------- */}
      <section className="relative mx-auto max-w-6xl px-5 pt-16 pb-10 text-center sm:pt-24">
        <Spark className="absolute left-[8%] top-24 h-5 w-5 text-tomato/70" />
        <Ring className="absolute right-[12%] top-20 h-9 w-9 text-orange/60" />
        <CurlyArrow className="absolute left-[3%] top-1/2 hidden h-24 w-20 text-orange/70 lg:block" />
        <Squiggle className="absolute right-[4%] top-[42%] hidden h-6 w-24 text-teal/70 lg:block" />
        <Spark className="absolute right-[22%] bottom-10 h-4 w-4 text-orange/70" />

        <h1 className="font-display mx-auto max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-7xl">
          We build{" "}
          <span className="relative whitespace-nowrap text-tomato">
            real solutions
            <Underline className="absolute -bottom-3 left-0 h-4 w-full text-orange" />
          </span>{" "}
          that ship
        </h1>

        <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-ink-soft">
          Qymo is a product studio that designs, builds and ships software people
          actually use. We turn rough ideas into living products — like Haja, our
          own marketplace connecting local stores, services and used deals across
          Nigeria.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <PrimaryButton href="#contact">Work with us</PrimaryButton>
          <GhostButton href="https://haja.shop">
            See Haja, live<span aria-hidden>→</span>
          </GhostButton>
        </div>

        <div className="relative mx-auto mt-16 max-w-4xl">
          <div className="absolute -inset-x-10 -top-6 bottom-0 -z-10 rounded-[40px] bg-gradient-to-b from-peach/70 to-transparent blur-2xl" />
          <div className="animate-floaty-slow">
            <HajaMockup />
          </div>
          <Spark className="absolute -left-4 -top-4 h-6 w-6 text-tomato" />
          <CurlyArrow className="absolute -right-10 top-10 hidden h-20 w-16 rotate-12 text-orange/70 lg:block" />
        </div>
      </section>

      {/* ---------------- VALUE STRIP ---------------- */}
      <section className="mx-auto max-w-6xl px-5 py-12">
        <p className="mb-7 text-center text-sm font-medium text-ink-soft">
          A small studio that takes products from idea to launched
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 opacity-80">
          {["Strategy", "Product design", "Web & mobile", "Backend & scale", "Launch"].map((b) => (
            <span
              key={b}
              className="font-display text-xl font-semibold tracking-tight text-ink/70"
            >
              {b}
            </span>
          ))}
        </div>
      </section>

      {/* ---------------- WHY QYMO ---------------- */}
      <section id="about" className="relative mx-auto max-w-6xl px-5 py-20">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="relative">
            <div className="rounded-[28px] border border-black/5 bg-white p-6 shadow-[0_30px_70px_-35px_rgba(80,50,20,0.4)]">
              <div className="mb-4 flex items-center justify-between">
                <span className="font-display text-base font-semibold">Shipping log</span>
                <span className="rounded-full bg-teal/15 px-2.5 py-0.5 text-[11px] font-semibold text-teal">
                  On track
                </span>
              </div>
              {([
                ["Discovery & scoping", 100, "var(--teal)"],
                ["Design system", 100, "var(--orange)"],
                ["Build & integrate", 80, "var(--tomato)"],
                ["Launch", 45, "#c879d6"],
              ] as const).map(([label, pct, tone]) => (
                <div key={label} className="mb-3.5 last:mb-0">
                  <div className="mb-1.5 flex justify-between text-[12px] text-ink-soft">
                    <span>{label}</span>
                    <span>{pct}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-cream-deep">
                    <div
                      className="h-2 rounded-full"
                      style={{ width: `${pct}%`, background: tone }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <CurlyArrow className="absolute -left-12 bottom-4 hidden h-20 w-16 text-orange/60 lg:block" />
          </div>

          <div>
            <SectionTag>About us</SectionTag>
            <h2 className="font-display mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
              Why Qymo?
            </h2>
            <p className="mt-4 max-w-md text-ink-soft">
              We&apos;re builders first. Instead of decks and theory, we ship
              working software fast — then refine it with real users until it
              earns its place.
            </p>
            <div className="mt-8 grid gap-x-8 gap-y-7 sm:grid-cols-2">
              {([
                ["Ship, don't stall", "We move from idea to a usable product in weeks, not quarters."],
                ["Built to scale", "Foundations that hold up as your users and data grow."],
                ["Design that converts", "Interfaces people understand instantly and enjoy using."],
                ["Owners, not vendors", "We treat your product like our own — Haja proves it."],
              ] as const).map(([title, body]) => (
                <div key={title} className="flex gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-tomato/15 text-tomato">
                    <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none">
                      <path
                        d="M5 13l4 4L19 7"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-semibold text-ink">{title}</h3>
                    <p className="mt-1 text-sm text-ink-soft">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- HAJA FLAGSHIP SPOTLIGHT ---------------- */}
      <section id="work" className="relative py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-cream-deep to-peach/80 px-6 py-14 sm:px-12">
            <Ring className="absolute right-10 top-8 h-10 w-10 text-tomato/40" />
            <Spark className="absolute left-8 bottom-10 h-5 w-5 text-orange/60" />

            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <SectionTag color="var(--tomato)">Flagship product</SectionTag>
                <h2 className="font-display mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
                  Meet Haja
                </h2>
                <p className="mt-4 max-w-md text-ink-soft">
                  Haja is the marketplace we built and run ourselves — buy from
                  local stores, find services, and discover nearby used deals
                  across Nigeria. It&apos;s proof of what Qymo ships.
                </p>

                <div className="mt-7 grid grid-cols-3 gap-4">
                  {([
                    ["Stores", "shop local"],
                    ["Services", "book & hire"],
                    ["Used", "nearby deals"],
                  ] as const).map(([big, small]) => (
                    <div key={small} className="rounded-2xl bg-white/70 p-3 text-center shadow-sm">
                      <div className="font-display text-2xl font-semibold text-tomato">{big}</div>
                      <div className="mt-0.5 text-[11px] leading-tight text-ink-soft">{small}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <PrimaryButton href="https://haja.shop">Visit haja.shop</PrimaryButton>
                  <GhostButton href="#contact">Build something like it</GhostButton>
                </div>
              </div>

              <div className="animate-floaty">
                <HajaMockup />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- CAPABILITIES ---------------- */}
      <section id="solutions" className="relative mx-auto max-w-6xl px-5 py-20">
        <div className="text-center">
          <div className="flex justify-center">
            <SectionTag>What we build</SectionTag>
          </div>
          <h2 className="font-display mx-auto mt-4 max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl">
            One studio, the whole product
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-soft">
            From the first sketch to the live release, Qymo covers every layer so
            you don&apos;t have to stitch together five vendors.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            {
              t: "Web & marketplace apps",
              d: "Multi-vendor platforms, storefronts and dashboards — like Haja — built to handle real traffic.",
              tone: "var(--tomato)",
              icon: "M4 7h16M4 12h16M4 17h10",
            },
            {
              t: "Mobile experiences",
              d: "Fast, native-feeling apps your customers reach for daily, on the devices they actually own.",
              tone: "var(--orange)",
              icon: "M8 3h8v18H8zM11 18h2",
            },
            {
              t: "Product & UX design",
              d: "Design systems and flows that make complex products feel obvious and convert better.",
              tone: "var(--teal)",
              icon: "M12 3v18M3 12h18",
            },
            {
              t: "Payments & integrations",
              d: "Wire in payments, maps, logistics and the tools your workflow depends on.",
              tone: "#c879d6",
              icon: "M3 10h18M3 6h18v12H3z",
            },
            {
              t: "Backend & scale",
              d: "APIs and infrastructure that stay fast and reliable as your numbers climb.",
              tone: "var(--tomato)",
              icon: "M4 6h16v4H4zM4 14h16v4H4z",
            },
            {
              t: "Launch & iterate",
              d: "We ship, watch how people use it, and keep improving until it works.",
              tone: "var(--orange)",
              icon: "M12 3l3 6 6 .5-4.5 4 1.5 6-6-3.5L6 19.5 7.5 13.5 3 9.5 9 9z",
            },
          ].map((c) => (
            <div
              key={c.t}
              className="group rounded-3xl border border-black/5 bg-white p-7 shadow-[0_20px_50px_-35px_rgba(80,50,20,0.5)] transition hover:-translate-y-1 hover:shadow-[0_28px_60px_-30px_rgba(80,50,20,0.45)]"
            >
              <span
                className="inline-flex h-12 w-12 items-center justify-center rounded-2xl"
                style={{ background: `${c.tone}1f`, color: c.tone }}
              >
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
                  <path
                    d={c.icon}
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <h3 className="font-display mt-5 text-xl font-semibold">{c.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- PROCESS ---------------- */}
      <section id="process" className="relative mx-auto max-w-6xl px-5 py-20">
        <div className="rounded-[36px] bg-ink px-6 py-14 text-cream sm:px-12">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-orange">
              How we work
            </span>
            <h2 className="font-display mx-auto mt-3 max-w-2xl text-4xl font-semibold leading-tight text-cream sm:text-5xl">
              From idea to launched, in four moves
            </h2>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {([
              ["01", "Listen", "We dig into the problem, the users and what success really means."],
              ["02", "Design", "We map the flows and design an interface people get instantly."],
              ["03", "Build", "We ship a working product fast, in tight, visible iterations."],
              ["04", "Launch & grow", "We release, learn from real usage, and keep sharpening it."],
            ] as const).map(([n, t, d]) => (
              <div key={n} className="relative">
                <span className="font-display text-4xl font-semibold text-orange/80">{n}</span>
                <h3 className="font-display mt-2 text-xl font-semibold text-white">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/70">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- MANIFESTO ---------------- */}
      <section className="relative mx-auto max-w-4xl px-5 py-20 text-center">
        <Spark className="mx-auto mb-6 h-7 w-7 text-tomato" />
        <blockquote className="font-display text-3xl font-medium leading-snug text-ink sm:text-4xl">
          We&apos;d rather show you a product that&apos;s{" "}
          <span className="relative whitespace-nowrap text-tomato">
            already live
            <Underline className="absolute -bottom-2 left-0 h-3 w-full text-orange" />
          </span>{" "}
          than a pitch about one we might build.
        </blockquote>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Logo />
          <span className="hidden text-sm text-ink-soft sm:inline">
            — the studio behind Haja
          </span>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section id="contact" className="relative mx-auto max-w-6xl px-5 pb-24">
        <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-tomato to-orange px-6 py-16 text-center text-white sm:px-12">
          <Ring className="absolute left-10 top-10 h-12 w-12 text-white/30" />
          <Spark className="absolute right-12 bottom-12 h-7 w-7 text-white/50" />
          <Squiggle className="absolute right-10 top-12 hidden h-6 w-24 text-white/40 lg:block" />

          <h2 className="font-display mx-auto max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl">
            Have an idea worth shipping?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-white/90">
            Tell us what you&apos;re trying to build. We&apos;ll come back with a
            clear path to a real, working product.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="mailto:hello@qymo.ng"
              className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-3.5 text-base font-semibold text-tomato shadow-lg transition hover:-translate-y-0.5"
            >
              Start a project
            </a>
            <a
              href="https://haja.shop"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/40 px-8 py-3.5 text-base font-semibold text-white transition hover:bg-white/10"
            >
              Explore Haja →
            </a>
          </div>
        </div>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="border-t border-black/5 bg-cream">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row">
          <Logo />
          <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2 text-sm text-ink-soft">
            {navLinks.map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-ink">
                {l}
              </a>
            ))}
            <a href="https://haja.shop" className="hover:text-ink">
              Haja
            </a>
            <a href="mailto:hello@qymo.ng" className="hover:text-ink">
              Contact
            </a>
          </div>
          <p className="text-sm text-ink-soft">© {new Date().getFullYear()} Qymo. Built to ship.</p>
        </div>
      </footer>
    </main>
  );
}
