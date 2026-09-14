"use client";

import { useEffect, useState } from "react";
import Logo from "@/components/Logo";
import { siteConfig, waLink } from "@/config/site";

const navItems = [
  { label: "Tentang", href: "#tentang" },
  { label: "Program", href: "#program" },
  { label: "Instruktur", href: "#instruktur" },
  { label: "Testimoni", href: "#testimoni" },
  { label: "Lokasi", href: "#lokasi" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors ${
        scrolled
          ? "border-b border-slate-100 bg-white/90 backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <nav className="container-page flex h-20 items-center justify-between py-4">
        <a href="#beranda" aria-label={siteConfig.name}>
          <Logo size={44} />
        </a>

        <ul className="hidden items-center gap-1 rounded-full border border-slate-100 bg-white/70 px-2 py-1.5 shadow-soft lg:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-brand-50 hover:text-brand-700"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          <a href="#kontak" className="btn-outline">
            Konsultasi
          </a>
          <a href="#daftar" className="btn-primary">
            Daftar Sekarang
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white p-2.5 text-slate-700 lg:hidden"
          aria-label="Buka menu navigasi"
          aria-expanded={open}
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-100 bg-white lg:hidden">
          <ul className="container-page flex flex-col gap-1 py-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-brand-50"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="mt-2 flex flex-col gap-2">
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="btn-outline w-full"
              >
                Konsultasi WhatsApp
              </a>
              <a href="#daftar" onClick={() => setOpen(false)} className="btn-primary w-full">
                Daftar Sekarang
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
