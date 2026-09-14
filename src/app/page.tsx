import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import LeadForm from "@/components/LeadForm";
import Faq from "@/components/Faq";
import Reveal from "@/components/Reveal";
import BottomNav from "@/components/BottomNav";
import { socialMeta } from "@/components/SocialIcons";
import {
  siteConfig,
  programs,
  programMeta,
  advantages,
  steps,
  testimonials,
  instructors,
  stats,
  trust,
  credentials,
  waLink,
} from "@/config/site";

/* ---------- ikon kecil ---------- */
function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth={2}
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
      />
    </svg>
  );
}

function Stars({ rating }: { rating: number }) {
  return (
    <div
      className="flex items-center gap-0.5 text-accent-400"
      aria-label={`Rating ${rating} dari 5`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="h-4 w-4"
          viewBox="0 0 20 20"
          fill={i < Math.round(rating) ? "currentColor" : "none"}
          stroke="currentColor"
        >
          <path
            strokeWidth={1.2}
            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
          />
        </svg>
      ))}
    </div>
  );
}

/** Ikon keunggulan — masing-masing berbeda agar tidak monoton. */
function AdvantageIcon({
  name,
  className = "",
}: {
  name: string;
  className?: string;
}) {
  const paths: Record<string, React.ReactNode> = {
    teacher: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.26 10.147a60.436 60.436 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.905 59.905 0 0 1 12 3.493a59.902 59.902 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
      />
    ),
    case: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
      />
    ),
    star: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
      />
    ),
    history: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    ),
    partner: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
      />
    ),
    calendar: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
      />
    ),
  };
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.6}
      stroke="currentColor"
      aria-hidden="true"
    >
      {paths[name] ?? paths.star}
    </svg>
  );
}

/** Warna & ikon khas tiap program agar kartunya tidak seragam. */
const programVisual: Record<string, { bg: string; icon: React.ReactNode }> = {
  "brevet-pajak-a-b": {
    bg: "bg-gradient-to-br from-brand-600 to-brand-800",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
      />
    ),
  },
  "akuntansi-komprehensif": {
    bg: "bg-gradient-to-br from-brand-500 to-brand-700",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
      />
    ),
  },
  "sertifikasi-accurate-online": {
    bg: "bg-gradient-to-br from-brand-400 to-brand-600",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
      />
    ),
  },
  "sertifikasi-kompetensi": {
    bg: "bg-gradient-to-br from-accent-500 to-accent-600",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172m0 0a6.75 6.75 0 0 0-3.044 0"
      />
    ),
  },
};

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* ============ HERO ============ */}
        <section id="beranda" className="relative overflow-hidden bg-cream">
          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand-100/60 blur-3xl" />
          <div className="pointer-events-none absolute -left-24 top-40 h-72 w-72 rounded-full bg-accent-100/60 blur-3xl" />

          <div className="container-page relative grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
            <div className="animate-fade-up">
              <span className="section-eyebrow">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
                LKP Resmi di Pekanbaru · Sejak 2020
              </span>

              <h1 className="mt-5 font-display text-[2.5rem] font-extrabold leading-[1.12] tracking-tight text-brand-900 sm:text-5xl sm:leading-[1.08]">
                Siap Naik Level Jadi{" "}
                <span className="accent-underline text-brand-700">
                  Ahli Pajak
                </span>{" "}
                &amp; Akuntansi?
              </h1>

              <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg">
                Brevet Pajak A &amp; B, kini Angkatan ke-{trust.currentBatch}.
                Dibimbing praktisi, akademisi, dan pegawai DJP, berbasis studi
                kasus nyata. Dipercaya sejak 2020.
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-2 text-xs font-medium text-brand-800">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 shadow-soft">
                  <Stars rating={trust.ratingValue} /> {trust.ratingValue}/5
                  Google
                </span>
                <span className="rounded-full bg-white px-3 py-1.5 shadow-soft">
                  Angkatan ke-{trust.currentBatch}
                </span>
                <span className="rounded-full bg-white px-3 py-1.5 shadow-soft">
                  Terdaftar {siteConfig.authority}
                </span>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Daftar via WhatsApp
                  <Arrow className="h-4 w-4" />
                </a>
                <a href="#program" className="btn-outline">
                  Lihat Program
                </a>
              </div>

              <dl className="mt-12 flex max-w-md divide-x divide-slate-300/70">
                {stats.map((s, i) => (
                  <div key={s.label} className={i === 0 ? "pr-6" : "px-6"}>
                    <dt className="font-display text-3xl font-extrabold text-brand-700">
                      {s.value}
                    </dt>
                    <dd className="mt-1 text-xs font-medium text-slate-500">
                      {s.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Visual hero */}
            <div className="relative animate-fade-up">
              <div className="relative mx-auto max-w-md">
                {/* Panel branded menampilkan logo */}
                <div className="relative aspect-square overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-600 to-brand-800 shadow-float">
                  <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent-400/30 blur-2xl" />
                  <div className="pointer-events-none absolute -left-8 bottom-0 h-40 w-40 rounded-full bg-accent-400/25 blur-2xl" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                    <span className="relative h-44 w-44 overflow-hidden rounded-full bg-white p-3 shadow-float sm:h-52 sm:w-52">
                      <Image
                        src="/logo.jpg"
                        alt={`Logo ${siteConfig.name}`}
                        fill
                        sizes="(max-width: 640px) 176px, 208px"
                        className="object-contain p-3"
                        priority
                      />
                    </span>
                    <p className="mt-6 font-display text-lg font-bold text-white">
                      LKP Sahabat Prestasi
                    </p>
                    <p className="mt-1 text-sm text-brand-100">
                      Perpajakan &amp; Akuntansi · Pekanbaru
                    </p>
                  </div>
                </div>

                {/* Kartu sertifikat melayang */}
                <div className="absolute -left-4 top-10 flex items-center gap-3 rounded-2xl bg-white p-3 shadow-float sm:-left-8">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-100 text-accent-600">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.6}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0"
                      />
                    </svg>
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-brand-900">
                      Sertifikat Resmi
                    </p>
                    <p className="text-[11px] text-slate-500">
                      Untuk semua program
                    </p>
                  </div>
                </div>

                {/* Kartu rating melayang */}
                <div className="absolute -bottom-4 right-0 rounded-2xl bg-white p-3 shadow-float sm:-right-6">
                  <Stars rating={trust.ratingValue} />
                  <p className="mt-1 text-xs text-slate-500">
                    <span className="font-semibold text-brand-900">
                      {trust.ratingValue}/5
                    </span>{" "}
                    di Google ({trust.ratingCount} ulasan)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ TENTANG / KREDIBILITAS ============ */}
        <section id="tentang" className="py-20 lg:py-24">
          <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal variant="left">
              <p className="text-sm font-semibold uppercase tracking-wider text-accent-600">
                Tentang Kami
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold leading-tight text-brand-900 sm:text-4xl">
                Lembaga pajak &amp; akuntansi{" "}
                <span className="accent-underline text-brand-700">
                  terpercaya di Pekanbaru
                </span>
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                LKP Sahabat Prestasi berdiri pada {siteConfig.establishedDate}{" "}
                di Pekanbaru dan terdaftar resmi di bawah naungan{" "}
                {siteConfig.authority} (No. SK {siteConfig.skNumber}). Sejak
                awal, kami fokus mencetak SDM yang siap kerja dan siap
                sertifikasi di bidang perpajakan dan akuntansi.
              </p>
              <p className="mt-3 leading-relaxed text-slate-600">
                Program Brevet Pajak kami telah berjalan lebih dari{" "}
                {trust.currentBatch} angkatan, dengan pengajar yang merupakan
                praktisi, akademisi, hingga pegawai DJP aktif.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {socialMeta.map(({ key, label, Icon }) => (
                  <a
                    key={key}
                    href={siteConfig.social[key]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-brand-700 transition-colors hover:border-brand-300 hover:bg-brand-50"
                  >
                    <Icon className="h-4 w-4" />
                    {label}
                  </a>
                ))}
              </div>
            </Reveal>

            <div className="grid gap-4">
              {credentials.map((c, i) => (
                <Reveal
                  as="div"
                  variant="right"
                  delay={i * 120}
                  key={c.title}
                  className="flex items-start gap-4 rounded-3xl border border-slate-100 bg-white p-5 shadow-soft"
                >
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.6}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m9 12.75 2.25 2.25 4.5-4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-display text-base font-bold text-brand-900">
                      {c.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                      {c.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ PROGRAM (course cards) ============ */}
        <section id="program" className="bg-cream py-20 lg:py-24">
          <div className="container-page">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-xl">
                <p className="text-sm font-semibold uppercase tracking-wider text-accent-600">
                  Program
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-brand-900 sm:text-4xl">
                  Pilih jalur yang sesuai tujuanmu
                </h2>
                <p className="mt-3 text-slate-600">
                  Dari fondasi akuntansi hingga sertifikasi, semua berbasis
                  praktik.
                </p>
              </div>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline hidden shrink-0 md:inline-flex"
              >
                Tanya jadwal batch
                <Arrow className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {programs.map((p, idx) => {
                const meta = programMeta[p.slug];
                return (
                  <Reveal
                    as="div"
                    variant="up"
                    delay={idx * 100}
                    key={p.slug}
                    className="h-full"
                  >
                    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-soft transition-all hover:-translate-y-1 hover:shadow-card">
                      {/* header visual kartu: warna & ikon berbeda per program */}
                      <div
                        className={`relative h-32 overflow-hidden ${programVisual[p.slug]?.bg ?? "bg-brand-600"}`}
                      >
                        <div
                          className="absolute inset-0 opacity-[0.12]"
                          style={{
                            backgroundImage:
                              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                            backgroundSize: "16px 16px",
                          }}
                        />
                        <div className="absolute -right-3 -top-3 flex h-24 w-24 items-center justify-center text-white/25">
                          <svg
                            className="h-16 w-16"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.2}
                            stroke="currentColor"
                          >
                            {programVisual[p.slug]?.icon}
                          </svg>
                        </div>
                        <div className="absolute left-4 top-4 flex flex-col items-start gap-2">
                          <span className="rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-brand-700">
                            {p.level}
                          </span>
                          {p.badge && (
                            <span className="rounded-full bg-accent-400 px-3 py-1 text-xs font-semibold text-brand-900">
                              {p.badge}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex flex-1 flex-col p-6">
                        <div className="flex items-center gap-2">
                          {meta && <Stars rating={meta.rating} />}
                          {meta && (
                            <span className="text-xs text-slate-500">
                              {meta.rating} ({meta.reviews})
                            </span>
                          )}
                        </div>

                        <h3 className="mt-3 font-display text-base font-bold text-brand-900">
                          {p.title}
                        </h3>
                        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-slate-600">
                          {p.summary}
                        </p>

                        <div className="mt-4 flex items-center gap-1.5 text-xs text-slate-500">
                          <svg
                            className="h-4 w-4 text-brand-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.6}
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                          </svg>
                          {p.duration}
                        </div>

                        <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                          <p className="text-sm font-semibold text-accent-600">
                            {p.priceLabel}
                          </p>
                          <Link
                            href={`/program/${p.slug}`}
                            aria-label={`Lihat detail ${p.title}`}
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-white transition-colors group-hover:bg-brand-700"
                          >
                            <Arrow className="h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============ KEUNGGULAN ============ */}
        <section id="keunggulan" className="py-20 lg:py-24">
          <div className="container-page">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-accent-600">
                Keunggulan
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold leading-tight text-brand-900 sm:text-4xl">
                Bukan sekadar teori, kami siapkan kamu untuk dunia kerja
              </h2>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {advantages.map((item, i) => (
                <Reveal
                  as="div"
                  variant="up"
                  delay={(i % 3) * 100}
                  key={item.title}
                  className="group relative rounded-3xl border border-slate-200/70 bg-white p-6 transition-all hover:border-brand-200 hover:shadow-card"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-600 text-white transition-colors group-hover:bg-brand-700">
                    <AdvantageIcon name={item.icon} className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-base font-bold text-brand-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ INSTRUKTUR ============ */}
        <section id="instruktur" className="bg-cream py-20 lg:py-24">
          <div className="container-page grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-accent-600">
                Tim Pengajar
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold leading-tight text-brand-900 sm:text-4xl">
                Diajar oleh mereka yang benar-benar praktik di lapangan
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                Materi kami dibawakan oleh kombinasi praktisi, akademisi, dan
                pegawai Direktorat Jenderal Pajak, jadi kamu belajar dari
                pengalaman nyata, bukan sekadar buku teks.
              </p>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-6"
              >
                Tanya tim pengajar
                <Arrow className="h-4 w-4" />
              </a>
            </div>

            <div className="space-y-4">
              {instructors.map((m, i) => (
                <Reveal
                  as="div"
                  variant="right"
                  delay={i * 120}
                  key={m.name}
                  className="flex items-center gap-4 rounded-2xl border border-slate-200/70 bg-white p-4 sm:p-5"
                >
                  <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-brand-600 font-display text-lg font-bold text-white">
                    {m.initials}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-base font-bold text-brand-900">
                      {m.name}
                    </h3>
                    <p className="text-sm text-slate-500">{m.role}</p>
                  </div>
                  <span className="hidden flex-shrink-0 rounded-full bg-accent-100 px-3 py-1 text-xs font-semibold text-accent-700 sm:inline">
                    {m.focus}
                  </span>
                </Reveal>
              ))}
              <p className="pl-1 text-xs text-slate-400">
                Foto & profil lengkap instruktur menyusul.
              </p>
            </div>
          </div>
        </section>

        {/* ============ ALUR PENDAFTARAN ============ */}
        <section id="alur" className="py-20 lg:py-24">
          <div className="container-page">
            <div className="overflow-hidden rounded-[2rem] bg-brand-700 px-6 py-14 shadow-card sm:px-12">
              <div className="mx-auto max-w-2xl text-center">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-accent-300">
                  Alur
                </span>
                <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">
                  Empat Langkah Mulai Belajar
                </h2>
              </div>

              <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {steps.map((step, i) => (
                  <Reveal
                    as="li"
                    variant="up"
                    delay={i * 120}
                    key={step.title}
                    className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/10"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-400 font-display text-base font-bold text-brand-900">
                      {i + 1}
                    </span>
                    <h3 className="mt-4 font-display text-base font-bold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-brand-100">
                      {step.description}
                    </p>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* ============ TESTIMONI ============ */}
        <section id="testimoni" className="bg-cream py-20 lg:py-24">
          <div className="container-page">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-accent-600">
                  Testimoni
                </p>
                <h2 className="mt-2 font-display text-3xl font-bold text-brand-900 sm:text-4xl">
                  Apa kata alumni kami
                </h2>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-soft ring-1 ring-slate-200/70">
                <Stars rating={trust.ratingValue} />
                <span className="text-sm font-semibold text-brand-900">
                  {trust.ratingValue}/5
                </span>
                <span className="text-xs text-slate-500">
                  · {trust.ratingCount} ulasan Google
                </span>
              </div>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {testimonials.map((t, i) => (
                <Reveal as="div" variant="up" delay={i * 120} key={t.name}>
                  <figure className="flex h-full flex-col rounded-3xl border border-slate-100 bg-white p-7 shadow-soft">
                    <svg
                      className="h-8 w-8 text-accent-300"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.57-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                    </svg>
                    <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">
                      {t.quote}
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-100 font-display font-bold text-brand-700">
                        {t.name.charAt(0)}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-brand-900">
                          {t.name}
                        </p>
                        <p className="text-xs text-slate-500">{t.role}</p>
                      </div>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ FAQ ============ */}
        <section id="faq" className="py-20 lg:py-24">
          <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="text-sm font-semibold uppercase tracking-wider text-accent-600">
                FAQ
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold leading-tight text-brand-900 sm:text-4xl">
                Pertanyaan yang sering diajukan
              </h2>
              <p className="mt-3 text-slate-600">
                Belum menemukan jawaban? Tim kami siap membantu.
              </p>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-6"
              >
                Tanya via WhatsApp
                <Arrow className="h-4 w-4" />
              </a>
            </div>
            <Faq />
          </div>
        </section>

        {/* ============ LOKASI ============ */}
        <section id="lokasi" className="bg-cream py-20 lg:py-24">
          <div className="container-page">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-accent-600">
                Lokasi
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold text-brand-900 sm:text-4xl">
                Kunjungi kelas kami di Pekanbaru
              </h2>
              <p className="mt-3 text-slate-600">
                {siteConfig.operationalNote}
              </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.3fr]">
              <div className="space-y-4">
                <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-soft">
                  <p className="font-display text-sm font-semibold text-brand-900">
                    Alamat
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    {siteConfig.address}
                  </p>
                  <a
                    href={siteConfig.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:underline"
                  >
                    Buka di Google Maps
                    <Arrow className="h-4 w-4" />
                  </a>
                </div>
                <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-soft">
                  <p className="font-display text-sm font-semibold text-brand-900">
                    Jam Operasional
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    {siteConfig.operationalHours}
                  </p>
                  <p className="mt-3 font-display text-sm font-semibold text-brand-900">
                    Kontak
                  </p>
                  <a
                    href={waLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-sm text-brand-600 hover:underline"
                  >
                    WhatsApp: {siteConfig.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="overflow-hidden rounded-3xl border border-slate-100 shadow-soft">
                <iframe
                  title="Lokasi LKP Sahabat Prestasi"
                  src={siteConfig.mapsEmbedUrl}
                  className="h-full min-h-[320px] w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ============ DAFTAR / KONTAK ============ */}
        <section id="daftar" className="py-20 lg:py-24">
          <div className="container-page">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-accent-600">
                Pendaftaran
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold text-brand-900 sm:text-4xl">
                Daftar &amp; konsultasi gratis
              </h2>
              <p className="mt-3 text-slate-600">
                Isi formulir di bawah, tim kami akan menghubungi kamu via
                WhatsApp untuk membantu memilih program yang tepat.
              </p>
            </div>

            <Reveal
              variant="up"
              className="overflow-hidden rounded-[2rem] bg-white shadow-card ring-1 ring-slate-200/70"
            >
              <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
                {/* Kolom info berlatar warna */}
                <div
                  id="kontak"
                  className="relative flex flex-col justify-between overflow-hidden bg-brand-700 p-8 text-white sm:p-10"
                >
                  <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-600/50 blur-3xl" />
                  <div className="pointer-events-none absolute -bottom-16 -left-10 h-52 w-52 rounded-full bg-accent-400/15 blur-3xl" />

                  <div className="relative">
                    <h3 className="font-display text-xl font-bold sm:text-2xl">
                      Hubungi Kami
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-brand-100">
                      Lebih suka bertanya langsung? Semua kanal ada di sini.
                    </p>

                    <div className="mt-8 space-y-2">
                      <ContactRow
                        icon="pin"
                        label="Alamat"
                        value={siteConfig.address}
                        href={siteConfig.mapsUrl}
                      />
                      <ContactRow
                        icon="phone"
                        label="WhatsApp / Telp"
                        value={siteConfig.phoneDisplay}
                        href={waLink()}
                      />
                      <ContactRow
                        icon="mail"
                        label="Email"
                        value={siteConfig.email}
                        href={`mailto:${siteConfig.email}`}
                      />
                      <ContactRow
                        icon="clock"
                        label="Jam Operasional"
                        value={siteConfig.operationalHours}
                      />
                    </div>
                  </div>

                  <div className="relative mt-8 flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3">
                    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-white/15">
                      <svg
                        className="h-5 w-5 text-accent-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.6}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                    </span>
                    <p className="text-xs leading-relaxed text-brand-100">
                      Terdaftar resmi di bawah naungan {siteConfig.authority},
                      No. SK {siteConfig.skNumber}.
                    </p>
                  </div>
                </div>

                {/* Kolom form */}
                <div className="p-8 sm:p-10">
                  <LeadForm />
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat />
      <BottomNav />
    </>
  );
}

function ContactRow({
  label,
  value,
  href,
  icon,
}: {
  label: string;
  value: string;
  href?: string;
  icon: "pin" | "phone" | "mail" | "clock";
}) {
  const icons: Record<string, React.ReactNode> = {
    pin: (
      <>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
        />
      </>
    ),
    phone: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
      />
    ),
    mail: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
      />
    ),
    clock: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    ),
  };

  const content = (
    <>
      <p className="text-xs font-semibold uppercase tracking-wide text-accent-300">
        {label}
      </p>
      <p className="mt-0.5 text-sm leading-relaxed text-white/90">{value}</p>
    </>
  );

  return (
    <div className="flex items-start gap-3 rounded-2xl px-3 py-2.5 transition-colors hover:bg-white/5">
      <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-white/10 text-accent-300">
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.6}
          stroke="currentColor"
        >
          {icons[icon]}
        </svg>
      </span>
      <div className="min-w-0">
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:opacity-90"
          >
            {content}
          </a>
        ) : (
          content
        )}
      </div>
    </div>
  );
}
