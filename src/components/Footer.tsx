import Link from "next/link";
import Logo from "@/components/Logo";
import { socialMeta } from "@/components/SocialIcons";
import { siteConfig, programs, waLink } from "@/config/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-900 text-brand-100">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Logo size={44} variant="light" />
          <p className="mt-4 text-sm leading-relaxed text-brand-200/80">
            {siteConfig.tagline}. Membekali kamu dengan kompetensi akuntansi dan
            perpajakan yang siap dipakai di dunia kerja.
          </p>
          <div className="mt-5 flex gap-2">
            {socialMeta.map(({ key, label, Icon }) => (
              <a
                key={key}
                href={siteConfig.social[key]}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-accent-400 hover:text-brand-900"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold text-white">Program</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {programs.map((p) => (
              <li key={p.slug}>
                <Link href={`/program/${p.slug}`} className="text-brand-200/80 transition-colors hover:text-white">
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold text-white">Tautan</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><a href="/#tentang" className="text-brand-200/80 hover:text-white">Tentang Kami</a></li>
            <li><a href="/#keunggulan" className="text-brand-200/80 hover:text-white">Keunggulan</a></li>
            <li><a href="/#testimoni" className="text-brand-200/80 hover:text-white">Testimoni</a></li>
            <li><a href="/#lokasi" className="text-brand-200/80 hover:text-white">Lokasi</a></li>
            <li><a href="/#faq" className="text-brand-200/80 hover:text-white">FAQ</a></li>
            <li><a href="/#daftar" className="text-brand-200/80 hover:text-white">Pendaftaran</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold text-white">Kontak</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-brand-200/80">
            <li>{siteConfig.address}</li>
            <li>
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                WhatsApp: {siteConfig.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                {siteConfig.email}
              </a>
            </li>
            <li>{siteConfig.operationalHours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page py-5 pb-28 text-xs text-brand-200/70 lg:pb-5">
          <p className="text-center sm:text-left">
            Terdaftar resmi di bawah naungan {siteConfig.authority}, No. SK {siteConfig.skNumber}.
          </p>
          <div className="mt-2 border-t border-white/5 pt-3">
            <p>© {year} {siteConfig.name}. Seluruh hak cipta dilindungi.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
