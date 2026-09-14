import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { siteConfig, programs, trust } from "@/config/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Kursus Brevet Pajak & Akuntansi di Pekanbaru`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "kursus brevet pajak Pekanbaru",
    "brevet pajak A dan B",
    "kursus pajak Pekanbaru",
    "kursus akuntansi Pekanbaru",
    "pelatihan akuntansi Riau",
    "sertifikasi accurate online",
    "kursus accurate Pekanbaru",
    "LKP Sahabat Prestasi",
    "lembaga kursus perpajakan",
    "akuntansi komprehensif",
    siteConfig.name,
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Brevet Pajak & Akuntansi Pekanbaru`,
    description: siteConfig.description,
    // Gambar OG dibuat otomatis oleh src/app/opengraph-image.tsx
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Brevet Pajak & Akuntansi Pekanbaru`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "education",
};

/** JSON-LD structured data untuk membantu SEO (Google Rich Results). */
function StructuredData() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: `+${siteConfig.whatsappNumber}`,
    foundingDate: "2020-10-05",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. Duyung No. 101, Tengkerang Barat, Marpoyan Damai",
      addressLocality: "Pekanbaru",
      addressRegion: "Riau",
      postalCode: "28124",
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 0.4888121,
      longitude: 101.4312439,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: trust.ratingValue,
      reviewCount: trust.ratingCount,
      bestRating: 5,
    },
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.threads,
      siteConfig.social.linkedin,
    ],
  };

  const courseList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: programs.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Course",
        name: p.title,
        description: p.summary,
        provider: {
          "@type": "EducationalOrganization",
          name: siteConfig.name,
          sameAs: siteConfig.url,
        },
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseList) }}
      />
    </>
  );
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
