import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { siteConfig, programs, getProgram, waLink } from "@/config/site";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return programs.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgram(slug);

  if (!program) {
    return { title: "Program tidak ditemukan" };
  }

  const title = `${program.title} | Kursus di ${siteConfig.shortName}`;
  const url = `${siteConfig.url}/program/${program.slug}`;

  return {
    title,
    description: program.overview,
    alternates: { canonical: `/program/${program.slug}` },
    openGraph: {
      type: "article",
      url,
      title,
      description: program.overview,
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: program.summary,
    },
  };
}

function Check({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default async function ProgramDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const program = getProgram(slug);

  if (!program) {
    notFound();
  }

  const url = `${siteConfig.url}/program/${program.slug}`;

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: program.title,
    description: program.overview,
    url,
    provider: {
      "@type": "EducationalOrganization",
      name: siteConfig.name,
      sameAs: siteConfig.url,
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: ["online", "onsite"],
      courseWorkload: program.duration,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Beranda", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Program", item: `${siteConfig.url}/#program` },
      { "@type": "ListItem", position: 3, name: program.title, item: url },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Navbar />

      <main>
        {/* Hero detail */}
        <section className="relative overflow-hidden bg-brand-700 text-white">
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand-600/60 blur-3xl" />
          <div className="container-page relative py-14 lg:py-16">
            <nav aria-label="Breadcrumb" className="text-sm text-brand-100">
              <ol className="flex flex-wrap items-center gap-2">
                <li><Link href="/" className="hover:text-white">Beranda</Link></li>
                <li aria-hidden="true" className="text-brand-300">/</li>
                <li><Link href="/#program" className="hover:text-white">Program</Link></li>
                <li aria-hidden="true" className="text-brand-300">/</li>
                <li className="text-white">{program.title}</li>
              </ol>
            </nav>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white">
                {program.level}
              </span>
              {program.badge && (
                <span className="rounded-full bg-accent-400 px-3 py-1 text-xs font-semibold text-brand-900">
                  {program.badge}
                </span>
              )}
            </div>

            <h1 className="mt-4 max-w-2xl font-display text-3xl font-extrabold leading-tight sm:text-4xl">
              {program.title}
            </h1>
            <p className="mt-4 max-w-2xl leading-relaxed text-brand-100">
              {program.summary}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/#daftar" className="btn-accent">
                Daftar Program Ini
              </Link>
              <a
                href={waLink(`Halo, saya tertarik dengan program ${program.title}. Boleh info lebih lanjut?`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Tanya via WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Info ringkas */}
        <section className="border-b border-slate-100 bg-cream">
          <div className="container-page grid gap-4 py-6 sm:grid-cols-3">
            {[
              { label: "Durasi", value: program.duration, accent: false },
              { label: "Biaya", value: program.priceLabel, accent: true },
              { label: "Tingkat", value: program.level, accent: false },
            ].map((it) => (
              <div key={it.label}>
                <p className="text-xs uppercase tracking-wide text-slate-500">{it.label}</p>
                <p className={`font-display text-sm font-bold ${it.accent ? "text-accent-600" : "text-brand-900"}`}>
                  {it.value}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Konten detail */}
        <section className="py-16">
          <div className="container-page grid gap-12 lg:grid-cols-3">
            <div className="space-y-10 lg:col-span-2">
              <div>
                <h2 className="font-display text-xl font-bold text-brand-900">Tentang Program</h2>
                <p className="mt-3 leading-relaxed text-slate-600">{program.overview}</p>
                <p className="mt-3 text-sm text-slate-500">{program.format}</p>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold text-brand-900">Kurikulum</h2>
                <div className="mt-4 space-y-4">
                  {program.curriculum.map((mod, i) => (
                    <div key={mod.title} className="rounded-3xl border border-slate-100 bg-white p-6 shadow-soft">
                      <h3 className="flex items-center gap-3 font-display font-semibold text-brand-900">
                        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-600 text-xs font-bold text-white">
                          {i + 1}
                        </span>
                        {mod.title}
                      </h3>
                      <ul className="mt-4 space-y-2.5 pl-11">
                        {mod.topics.map((topic) => (
                          <li key={topic} className="flex items-start gap-2 text-sm text-slate-600">
                            <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-500" />
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold text-brand-900">Setelah Lulus, Kamu Bisa</h2>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {program.outcomes.map((o) => (
                    <li key={o} className="flex items-start gap-2 rounded-2xl bg-cream px-4 py-3 text-sm text-slate-700">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-600" />
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-card lg:sticky lg:top-28">
                <p className="text-sm text-slate-500">Biaya &amp; jadwal batch</p>
                <p className="font-display text-xl font-bold text-accent-600">{program.priceLabel}</p>
                <p className="mt-1 text-xs text-slate-500">{program.duration}</p>
                <Link href="/#daftar" className="btn-primary mt-5 w-full">
                  Daftar Sekarang
                </Link>
                <a
                  href={waLink(`Halo, saya tertarik dengan program ${program.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline mt-2 w-full"
                >
                  Konsultasi WhatsApp
                </a>
              </div>

              <div className="rounded-3xl border border-slate-100 bg-white p-6">
                <p className="font-display text-sm font-semibold text-brand-900">Cocok untuk</p>
                <ul className="mt-3 space-y-2.5">
                  {program.audience.map((a) => (
                    <li key={a} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-400" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </section>

        {/* Program lain */}
        <section className="border-t border-slate-100 bg-cream py-14">
          <div className="container-page">
            <h2 className="font-display text-lg font-bold text-brand-900">Program Lainnya</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {programs
                .filter((p) => p.slug !== program.slug)
                .map((p) => (
                  <Link
                    key={p.slug}
                    href={`/program/${p.slug}`}
                    className="group rounded-3xl border border-slate-100 bg-white p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
                  >
                    <p className="text-xs font-semibold text-brand-600">{p.level}</p>
                    <h3 className="mt-1 font-display font-bold text-brand-900">{p.title}</h3>
                    <p className="mt-2 line-clamp-2 text-sm text-slate-600">{p.summary}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-600">
                      Lihat detail
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </span>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
