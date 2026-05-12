"use client";

import { useEffect, useRef, useState } from "react";

const MARQUEE_WORDS = [
  "OVER",
  "A DECADE",
  "OF",
  "CRAFTING",
  "SOUNDS",
  "THAT",
  "MOVE",
  "CULTURE",
  "·",
];

const GENRE_WORDS = [
  "AFROBEATS",
  "AMAPIANO",
  "AFROPOP",
  "R&B",
  "HIGHLIFE",
  "AFRO-FUSION",
  "DANCEHALL",
  "DRILL",
];

const NAV_ITEMS = [
  { label: "Intro", href: "#section-intro" },
  { label: "Productions", href: "#section-productions" },
  { label: "About", href: "#section-about" },
  { label: "Artists", href: "#section-artists" },
  { label: "Discography", href: "#section-discography" },
  { label: "Contact", href: "#section-contact" },
];

const HERO_VIDEO_SRC = "";

const ABOUT_IMAGE_SRC = "/images/about.jpg";

const CONTACT = {
  calendly: "https://calendly.com/tanyarupani",
  phone: "+234 000 000 0000",
  email: "send2chopstix@gmail.com",
  instagram: "https://instagram.com/tanyarupani",
  twitter: "https://twitter.com/tanyarupani",
  spotify: "https://open.spotify.com/artist/tanyarupani",
};

const CREDITS = [
  {
    artist: "[ARTIST NAME]",
    title: "[SONG / ALBUM TITLE]",
    role: "Producer",
    year: "2024",
    cover: "",
  },
  {
    artist: "[ARTIST NAME]",
    title: "[SONG / ALBUM TITLE]",
    role: "Co-Producer",
    year: "2023",
    cover: "",
  },
  {
    artist: "[ARTIST NAME]",
    title: "[SONG / ALBUM TITLE]",
    role: "Executive Producer",
    year: "2023",
    cover: "",
  },
  {
    artist: "[ARTIST NAME]",
    title: "[SONG / ALBUM TITLE]",
    role: "Producer",
    year: "2022",
    cover: "",
  },
  {
    artist: "[ARTIST NAME]",
    title: "[SONG / ALBUM TITLE]",
    role: "Producer",
    year: "2022",
    cover: "",
  },
  {
    artist: "[ARTIST NAME]",
    title: "[SONG / ALBUM TITLE]",
    role: "Producer",
    year: "2021",
    cover: "",
  },
];

const BRAND_LOGOS = [
  "[ARTIST 01]",
  "[ARTIST 02]",
  "[ARTIST 03]",
  "[LABEL 01]",
  "[ARTIST 04]",
  "[LABEL 02]",
  "[ARTIST 05]",
  "[ARTIST 06]",
];

const STATS = [
  { value: "10+", label: "Years Active" },
  { value: "50+", label: "Production Credits" },
  { value: "3", label: "Continents" },
];

const SERVICES = [
  {
    number: "01",
    title: "Beat Production",
    description:
      "Custom instrumentals for artists, labels and sync placements worldwide",
  },
  {
    number: "02",
    title: "Executive Production",
    description:
      "Full project oversight — A&R, arrangement, session coordination and delivery",
  },
  {
    number: "03",
    title: "Sound Direction",
    description:
      "Defining the sonic identity of artists, brands and campaigns",
  },
  {
    number: "04",
    title: "Sync & Licensing",
    description: "Music placed in film, TV, ads and digital content globally",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      return;
    }

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;

    const handleMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }
    };

    let rafId = 0;
    const animate = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      }
      rafId = window.requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMove);
    rafId = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <main className="min-h-screen bg-[#080808] text-white">
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[60] hidden h-1.5 w-1.5 rounded-full bg-[var(--accent)] md:block"
        style={{ transform: "translate3d(-100px, -100px, 0) translate(-50%, -50%)" }}
      />
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[60] hidden h-9 w-9 rounded-full border border-[var(--accent)]/60 transition-opacity md:block"
        style={{ transform: "translate3d(-100px, -100px, 0) translate(-50%, -50%)" }}
      />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#080808]/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-8">
          <a
            href="#section-intro"
            className="font-[family-name:var(--font-bebas-neue)] text-xl tracking-[0.18em] text-white md:text-2xl"
          >
            TANYA RUPANI
          </a>

          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="font-[family-name:var(--font-space-mono)] text-[10px] uppercase tracking-[0.3em] text-white/70 transition-colors hover:text-[var(--accent)]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <span className="block h-px w-6 bg-white" />
            <span className="block h-px w-6 bg-white" />
            <span className="block h-px w-6 bg-white" />
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-[55] flex flex-col bg-[#080808] md:hidden">
          <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
            <span className="font-[family-name:var(--font-bebas-neue)] text-xl tracking-[0.18em]">
              TANYA RUPANI
            </span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
              className="flex h-10 w-10 items-center justify-center text-2xl"
            >
              ×
            </button>
          </div>
          <nav className="flex flex-1 flex-col justify-center px-6">
            <ul className="flex flex-col gap-6">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block font-[family-name:var(--font-bebas-neue)] text-5xl tracking-tight text-white transition-colors hover:text-[var(--accent)]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}

      <section
        id="section-intro"
        className="relative flex min-h-screen flex-col overflow-hidden pt-16 md:pt-20"
      >
        {HERO_VIDEO_SRC && (
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src={HERO_VIDEO_SRC}
            autoPlay
            muted
            loop
            playsInline
          />
        )}
        <div className="absolute inset-0 bg-[#111]" aria-hidden="true" />

        <div className="relative z-10 flex flex-1 flex-col">
          <div className="overflow-hidden border-y border-white/10 py-5">
            <div className="flex flex-nowrap items-center gap-10 whitespace-nowrap px-6 font-[family-name:var(--font-bebas-neue)] text-3xl tracking-[0.18em] text-white/90 md:text-4xl">
              {[...MARQUEE_WORDS, ...MARQUEE_WORDS].map((word, i) => (
                <span key={i} className="shrink-0">
                  {word}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-1 flex-col justify-center px-6 py-20 md:px-16 lg:px-24">
            <p className="mb-8 font-[family-name:var(--font-space-mono)] text-[11px] uppercase tracking-[0.32em] text-white/60">
              Music Producer · Summertime Music LTD
            </p>
            <h1 className="font-[family-name:var(--font-bebas-neue)] text-6xl leading-[0.92] tracking-tight md:text-[8rem] lg:text-[10rem]">
              <span className="block">Sound built</span>
              <span className="block italic font-[family-name:var(--font-dm-serif-display)] tracking-normal">
                different.
              </span>
            </h1>
            <p className="mt-10 max-w-xl font-[family-name:var(--font-dm-serif-display)] text-lg leading-relaxed text-white/75 md:text-xl">
              Tanya Rupani is the creative alias behind some of the most
              distinctive productions in contemporary music. From Lagos to
              London — the sound travels.
            </p>
          </div>

          <div className="flex justify-center pb-10">
            <span className="font-[family-name:var(--font-space-mono)] text-[10px] uppercase tracking-[0.4em] text-white/45">
              Scroll to discover
            </span>
          </div>
        </div>
      </section>

      <div className="overflow-hidden border-y border-white/10 bg-[#080808] py-4">
        <div className="flex flex-nowrap items-center gap-10 whitespace-nowrap px-6 font-[family-name:var(--font-space-mono)] text-xs uppercase tracking-[0.3em] text-white/75 md:text-sm">
          {[...GENRE_WORDS, ...GENRE_WORDS].map((word, i) => (
            <span key={i} className="flex shrink-0 items-center gap-10">
              {word}
              <span aria-hidden="true" className="text-[var(--accent)]">
                ·
              </span>
            </span>
          ))}
        </div>
      </div>

      <section
        id="section-productions"
        className="relative border-t border-white/10 px-6 py-24 md:px-16 md:py-32 lg:px-24"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-16 lg:flex-row lg:items-start lg:justify-between lg:gap-24">
          <div className="lg:max-w-md">
            <p className="mb-6 font-[family-name:var(--font-space-mono)] text-[11px] uppercase tracking-[0.32em] text-white/50">
              Productions
            </p>
            <h2 className="font-[family-name:var(--font-bebas-neue)] text-5xl leading-[0.95] tracking-tight md:text-6xl lg:text-7xl">
              More than beats.{" "}
              <span className="italic font-[family-name:var(--font-dm-serif-display)] tracking-normal">
                A complete creative process.
              </span>
            </h2>
          </div>

          <div className="flex flex-col gap-8 lg:max-w-md lg:pt-4">
            <p className="font-[family-name:var(--font-dm-serif-display)] text-lg leading-relaxed text-white/75 md:text-xl">
              From the first melody sketch to the final master — every project
              is handled with intention, craft, and cultural awareness.
            </p>
            <a
              href="#section-contact"
              className="group inline-flex w-fit items-center gap-2 border-b border-white/30 pb-1 font-[family-name:var(--font-space-mono)] text-xs uppercase tracking-[0.3em] text-white transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              Start a conversation
              <span
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                ↗
              </span>
            </a>
          </div>
        </div>

        <div className="mx-auto mt-20 grid max-w-6xl gap-px bg-white/10 md:grid-cols-2">
          {SERVICES.map((service) => (
            <article
              key={service.number}
              className="flex flex-col gap-6 bg-[#080808] p-8 md:p-10"
            >
              <span className="font-[family-name:var(--font-space-mono)] text-[11px] uppercase tracking-[0.32em] text-[var(--accent)]">
                {service.number}
              </span>
              <h3 className="font-[family-name:var(--font-bebas-neue)] text-3xl tracking-tight md:text-4xl">
                {service.title}
              </h3>
              <p className="font-[family-name:var(--font-dm-serif-display)] text-base leading-relaxed text-white/65 md:text-lg">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="section-about"
        className="relative border-t border-white/10 px-6 py-24 md:px-16 md:py-32 lg:px-24"
      >
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2 lg:gap-24">
          <div className="group relative aspect-[4/5] w-full overflow-hidden">
            {ABOUT_IMAGE_SRC && (
              <img
                src="/images/about.jpg"
                alt="Tanya Rupani"
                className="absolute inset-0 h-full w-full object-cover grayscale transition-[filter] duration-700 ease-out group-hover:grayscale-0"
              />
            )}
          </div>

          <div className="flex flex-col justify-center">
            <p className="mb-6 font-[family-name:var(--font-space-mono)] text-[11px] uppercase tracking-[0.32em] text-white/50">
              About
            </p>
            <blockquote className="mb-12 font-[family-name:var(--font-dm-serif-display)] text-3xl italic leading-[1.15] text-white md:text-4xl lg:text-5xl">
              “I don&apos;t chase trends. I set the temperature.”
            </blockquote>
            <div className="flex flex-col gap-6 font-[family-name:var(--font-dm-serif-display)] text-lg leading-relaxed text-white/75 md:text-xl">
              <p>
                Tanya Rupani is the studio alias of a Grammy-recognised music
                producer with over a decade of credits spanning Afrobeats,
                Afropop, R&amp;B and global fusion. Built in Lagos. Heard
                everywhere.
              </p>
              <p>
                Under Summertime Music LTD, the work extends beyond the studio
                — into music technology, artist development and building the
                infrastructure that powers the next generation of sound.
              </p>
            </div>

            <dl className="mt-14 grid grid-cols-3 gap-6 border-t border-white/10 pt-10">
              {STATS.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-2">
                  <dt className="order-2 font-[family-name:var(--font-space-mono)] text-[10px] uppercase tracking-[0.3em] text-white/50">
                    {stat.label}
                  </dt>
                  <dd className="order-1 font-[family-name:var(--font-bebas-neue)] text-5xl leading-none tracking-tight md:text-6xl">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section
        id="section-artists"
        className="relative border-t border-white/10 px-6 py-24 md:px-16 md:py-32 lg:px-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <p className="font-[family-name:var(--font-space-mono)] text-[11px] uppercase tracking-[0.32em] text-white/50">
              Roster
            </p>
            <h2 className="max-w-3xl font-[family-name:var(--font-bebas-neue)] text-4xl leading-[0.95] tracking-tight md:text-5xl lg:text-6xl">
              Sounds co-signed by{" "}
              <span className="italic font-[family-name:var(--font-dm-serif-display)] tracking-normal">
                artists who define their generation.
              </span>
            </h2>
          </div>

          <ul className="mt-20 flex flex-col border-t border-white/10">
            {BRAND_LOGOS.map((name) => (
              <li
                key={name}
                className="group flex items-baseline justify-between gap-6 border-b border-white/10 py-6 transition-colors hover:bg-white/[0.02] md:py-8"
              >
                <span className="font-[family-name:var(--font-bebas-neue)] text-4xl leading-none tracking-tight text-white/90 transition-colors group-hover:text-[var(--accent)] md:text-6xl lg:text-7xl">
                  {name}
                </span>
                <span className="shrink-0 font-[family-name:var(--font-space-mono)] text-[10px] uppercase tracking-[0.3em] text-white/45 md:text-xs">
                  [Genre / Year]
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="section-discography"
        className="relative border-t border-white/10 px-6 py-24 md:px-16 md:py-32 lg:px-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <p className="font-[family-name:var(--font-space-mono)] text-[11px] uppercase tracking-[0.32em] text-white/50">
              Discography
            </p>
            <h2 className="font-[family-name:var(--font-bebas-neue)] text-5xl leading-[0.95] tracking-tight md:text-6xl lg:text-7xl">
              Records that{" "}
              <span className="italic font-[family-name:var(--font-dm-serif-display)] tracking-normal">
                travelled.
              </span>
            </h2>
          </div>

          <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {CREDITS.map((credit, i) => (
              <article key={i} className="flex flex-col gap-4">
                <div className="relative aspect-square w-full overflow-hidden bg-[#1a1a1a]">
                  {credit.cover ? (
                    <img
                      src={credit.cover}
                      alt={`${credit.artist} — ${credit.title}`}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-6 text-center">
                      <span className="font-[family-name:var(--font-bebas-neue)] text-2xl leading-tight tracking-tight text-white/80 md:text-3xl">
                        {credit.artist}
                      </span>
                      <span className="font-[family-name:var(--font-dm-serif-display)] text-sm italic leading-snug text-white/55 md:text-base">
                        {credit.title}
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <div className="flex flex-col gap-1">
                    <span className="font-[family-name:var(--font-bebas-neue)] text-xl tracking-tight md:text-2xl">
                      {credit.artist}
                    </span>
                    <span className="font-[family-name:var(--font-dm-serif-display)] text-sm italic leading-snug text-white/65 md:text-base">
                      {credit.title}
                    </span>
                  </div>
                  <span className="shrink-0 font-[family-name:var(--font-space-mono)] text-[10px] uppercase tracking-[0.3em] text-white/45">
                    {credit.year}
                  </span>
                </div>
                <span className="font-[family-name:var(--font-space-mono)] text-[10px] uppercase tracking-[0.3em] text-[var(--accent)]">
                  {credit.role}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="section-contact"
        className="relative border-t border-white/10 px-6 py-24 md:px-16 md:py-32 lg:px-24"
      >
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="mb-6 font-[family-name:var(--font-space-mono)] text-[11px] uppercase tracking-[0.32em] text-white/50">
              Contact
            </p>
            <h2 className="font-[family-name:var(--font-bebas-neue)] text-5xl leading-[0.95] tracking-tight md:text-6xl lg:text-7xl">
              Let&apos;s make{" "}
              <span className="italic font-[family-name:var(--font-dm-serif-display)] tracking-normal">
                something real.
              </span>
            </h2>
            <p className="mt-8 max-w-md font-[family-name:var(--font-dm-serif-display)] text-lg leading-relaxed text-white/75 md:text-xl">
              Whether you&apos;re an artist, label, brand or builder — if the
              vision aligns, the conversation starts here.
            </p>
          </div>

          <div className="flex flex-col gap-px bg-white/10">
            <a
              href={CONTACT.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-6 bg-[#080808] px-6 py-6 transition-colors hover:bg-white/[0.04] md:px-8 md:py-7"
            >
              <span className="flex flex-col gap-1">
                <span className="font-[family-name:var(--font-space-mono)] text-[10px] uppercase tracking-[0.3em] text-white/45">
                  Book a call
                </span>
                <span className="font-[family-name:var(--font-bebas-neue)] text-2xl tracking-tight transition-colors group-hover:text-[var(--accent)] md:text-3xl">
                  Schedule on Calendly
                </span>
              </span>
              <span
                aria-hidden="true"
                className="text-xl transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                ↗
              </span>
            </a>

            <a
              href={`mailto:${CONTACT.email}`}
              className="group flex items-center justify-between gap-6 bg-[#080808] px-6 py-6 transition-colors hover:bg-white/[0.04] md:px-8 md:py-7"
            >
              <span className="flex flex-col gap-1">
                <span className="font-[family-name:var(--font-space-mono)] text-[10px] uppercase tracking-[0.3em] text-white/45">
                  Email
                </span>
                <span className="font-[family-name:var(--font-bebas-neue)] text-2xl tracking-tight transition-colors group-hover:text-[var(--accent)] md:text-3xl">
                  {CONTACT.email}
                </span>
              </span>
              <span
                aria-hidden="true"
                className="text-xl transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                ↗
              </span>
            </a>

            <a
              href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
              className="group flex items-center justify-between gap-6 bg-[#080808] px-6 py-6 transition-colors hover:bg-white/[0.04] md:px-8 md:py-7"
            >
              <span className="flex flex-col gap-1">
                <span className="font-[family-name:var(--font-space-mono)] text-[10px] uppercase tracking-[0.3em] text-white/45">
                  Phone
                </span>
                <span className="font-[family-name:var(--font-bebas-neue)] text-2xl tracking-tight transition-colors group-hover:text-[var(--accent)] md:text-3xl">
                  {CONTACT.phone}
                </span>
              </span>
              <span
                aria-hidden="true"
                className="text-xl transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                ↗
              </span>
            </a>

            <div className="grid grid-cols-3 gap-px bg-white/10">
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-3 bg-[#080808] px-6 py-5 transition-colors hover:bg-white/[0.04] md:px-8"
              >
                <span className="font-[family-name:var(--font-space-mono)] text-[10px] uppercase tracking-[0.3em] text-white/70 transition-colors group-hover:text-[var(--accent)]">
                  Instagram
                </span>
                <span
                  aria-hidden="true"
                  className="text-sm transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                  ↗
                </span>
              </a>
              <a
                href={CONTACT.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-3 bg-[#080808] px-6 py-5 transition-colors hover:bg-white/[0.04] md:px-8"
              >
                <span className="font-[family-name:var(--font-space-mono)] text-[10px] uppercase tracking-[0.3em] text-white/70 transition-colors group-hover:text-[var(--accent)]">
                  Twitter
                </span>
                <span
                  aria-hidden="true"
                  className="text-sm transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                  ↗
                </span>
              </a>
              <a
                href={CONTACT.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-3 bg-[#080808] px-6 py-5 transition-colors hover:bg-white/[0.04] md:px-8"
              >
                <span className="font-[family-name:var(--font-space-mono)] text-[10px] uppercase tracking-[0.3em] text-white/70 transition-colors group-hover:text-[var(--accent)]">
                  Spotify
                </span>
                <span
                  aria-hidden="true"
                  className="text-sm transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                  ↗
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative border-t border-white/10 px-6 py-10 md:px-16 lg:px-24">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 font-[family-name:var(--font-space-mono)] text-[10px] uppercase tracking-[0.3em] text-white/50 md:flex-row md:items-center md:justify-between">
          <p>
            © 2025 Summertime Music LTD · Tanya Rupani. All rights reserved.
          </p>
          <div className="flex flex-col gap-3 md:flex-row md:gap-8">
            <a
              href="https://inspire.codes"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 transition-colors hover:text-[var(--accent)]"
            >
              inspire.codes <span aria-hidden="true">↗</span>
            </a>
            <a
              href="https://summertimemusic.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 transition-colors hover:text-[var(--accent)]"
            >
              Summertime Music LTD <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
