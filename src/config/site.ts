/**
 * =============================================================
 *  KONFIGURASI SITUS — LKP SAHABAT PRESTASI
 * =============================================================
 *  Sebagian besar data di bawah sudah diisi dari hasil riset
 *  (Google Business Profile, Kemendikdasmen, Instagram, dll).
 *
 *  Yang MASIH perlu dikonfirmasi/diganti data internal ditandai
 *  dengan komentar "[KONFIRMASI]". Angka biaya sengaja TIDAK
 *  dicantumkan karena belum ada data resmi — diarahkan ke WA.
 * =============================================================
 */

export const siteConfig = {
  name: "LKP Sahabat Prestasi",
  shortName: "Sahabat Prestasi",
  tagline: "Lembaga Kursus & Pelatihan Perpajakan dan Akuntansi",
  description:
    "LKP Sahabat Prestasi Pekanbaru: kursus Brevet Pajak A & B, Akuntansi Komprehensif, dan Sertifikasi Accurate Online. Dibimbing praktisi, akademisi, dan pegawai DJP. Rating 4,9/5, telah berjalan 32+ angkatan sejak 2020.",

  // Ganti dengan domain asli saat sudah live (penting untuk SEO & Open Graph)
  url: "https://sahabatprestasi.example.com",

  // ---- KONTAK (dari Google Business Profile) ----
  whatsappNumber: "6281319921905",
  whatsappDefaultMessage:
    "Halo LKP Sahabat Prestasi, saya ingin bertanya tentang program Brevet Pajak / Akuntansi.",
  phoneDisplay: "0813-1992-1905",
  // [KONFIRMASI] email resmi belum ditemukan publik — ganti jika ada.
  email: "sahabatprestasi.pku@gmail.com",
  address:
    "Jl. Duyung No. 101, Tengkerang Barat, Kec. Marpoyan Damai, Kota Pekanbaru, Riau 28124",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=0.4888121,101.4312439",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=0.4888121,101.4312439&z=16&output=embed",
  operationalHours: "Sabtu 08.00–17.00 · Minggu 08.00–12.00 WIB",
  operationalNote: "Kelas akhir pekan, cocok untuk mahasiswa & pekerja.",

  // ---- LEGALITAS ----
  establishedYear: 2020,
  establishedDate: "5 Oktober 2020",
  skNumber: "3/06.03/DPMPTSP/X/2020",
  authority: "Kemendikdasmen",

  // ---- MEDIA SOSIAL (akun asli) ----
  social: {
    instagram: "https://www.instagram.com/sahabat.prestasi/",
    threads: "https://www.threads.com/@sahabat.prestasi",
    linkedin: "https://id.linkedin.com/company/lkp-sahabat-prestasi",
  },
};

/** Fakta kepercayaan (dari riset publik). */
export const trust = {
  ratingValue: 4.9,
  ratingCount: 16,
  currentBatch: 32, // Angkatan ke-32 per Januari 2026
};

export type CurriculumModule = {
  title: string;
  topics: string[];
};

export type Program = {
  slug: string;
  title: string;
  level: string;
  duration: string;
  /** Label biaya. Karena belum ada harga resmi, diarahkan ke WhatsApp. */
  priceLabel: string;
  badge?: string;
  summary: string;
  highlights: string[];
  overview: string;
  audience: string[];
  outcomes: string[];
  curriculum: CurriculumModule[];
  format: string;
};

const PRICE_CTA = "Hubungi kami";

export const programs: Program[] = [
  {
    slug: "brevet-pajak-a-b",
    title: "Brevet Pajak A & B",
    level: "Dasar – Menengah",
    duration: "Kelas akhir pekan (per angkatan)",
    priceLabel: PRICE_CTA,
    badge: "Program Unggulan",
    summary:
      "Program flagship kami. Pelatihan perpajakan komprehensif berbasis studi kasus, dari KUP hingga simulasi pengisian SPT. Telah berjalan 32+ angkatan.",
    highlights: [
      "KUP, PPh Orang Pribadi & Badan",
      "PPN, PBB, BPHTB & Bea Meterai",
      "Akuntansi pajak & studi kasus nyata",
      "Simulasi pengisian & pelaporan SPT",
    ],
    overview:
      "Brevet Pajak A & B adalah program unggulan LKP Sahabat Prestasi yang telah berjalan lebih dari 32 angkatan sejak 2020. Materi disusun mengikuti standar brevet pajak nasional dan diajarkan berbasis studi kasus nyata oleh praktisi, akademisi, hingga pegawai Direktorat Jenderal Pajak (DJP). Kamu akan memahami perpajakan Indonesia secara menyeluruh, mulai dari ketentuan umum, PPh Orang Pribadi & Badan, PPN, PBB, BPHTB, Bea Meterai, akuntansi pajak, hingga simulasi pengisian dan pelaporan SPT.",
    audience: [
      "Mahasiswa & fresh graduate akuntansi/perpajakan",
      "Pelaku UMKM yang ingin paham kewajiban pajak",
      "Profesional keuangan yang ingin naik level",
      "Calon konsultan pajak",
    ],
    outcomes: [
      "Memahami hak & kewajiban perpajakan (KUP)",
      "Menghitung PPh Orang Pribadi dan Badan",
      "Menghitung & melaporkan PPN, PBB, BPHTB, Bea Meterai",
      "Mengisi dan melaporkan SPT secara mandiri",
    ],
    format:
      "Kelas akhir pekan, berbasis studi kasus, dibimbing praktisi/akademisi/pegawai DJP. Kuota terbatas per angkatan.",
    curriculum: [
      {
        title: "Brevet A: Dasar Perpajakan",
        topics: [
          "Ketentuan Umum & Tata Cara Perpajakan (KUP)",
          "PPh Orang Pribadi (PPh 21)",
          "PPh Pasal 22, 23, 24, 26",
          "PBB, BPHTB & Bea Meterai",
        ],
      },
      {
        title: "Brevet B: Perpajakan Badan",
        topics: [
          "PPh Badan (PPh 25 & 29)",
          "Akuntansi pajak & rekonsiliasi fiskal",
          "PPN & PPnBM",
          "Simulasi pengisian & pelaporan SPT",
        ],
      },
    ],
  },
  {
    slug: "akuntansi-komprehensif",
    title: "Akuntansi Komprehensif",
    level: "Pemula – Menengah",
    duration: "Kelas akhir pekan (per angkatan)",
    priceLabel: PRICE_CTA,
    summary:
      "Pelatihan akuntansi praktis dari dasar hingga penyusunan laporan keuangan yang siap kerja. Fondasi kuat sebelum masuk ke perpajakan atau software akuntansi.",
    highlights: [
      "Siklus akuntansi dari jurnal hingga laporan",
      "Laporan laba rugi, neraca & arus kas",
      "Praktik pembukuan yang aplikatif",
      "Persiapan menuju dunia kerja",
    ],
    overview:
      "Program Akuntansi Komprehensif membekali kamu dengan keterampilan akuntansi yang aplikatif, mulai dari konsep dasar, siklus akuntansi, hingga penyusunan laporan keuangan yang siap dipakai di dunia kerja. Cocok sebagai fondasi sebelum mengambil Brevet Pajak atau Sertifikasi Accurate Online.",
    audience: [
      "Pemula tanpa latar belakang akuntansi",
      "Mahasiswa yang ingin memperkuat dasar keuangan",
      "Pemilik UMKM yang ingin merapikan pembukuan",
      "Calon staf accounting/keuangan",
    ],
    outcomes: [
      "Memahami persamaan & siklus akuntansi",
      "Membuat jurnal, buku besar, dan neraca saldo",
      "Menyusun laporan keuangan yang benar",
      "Siap lanjut ke Brevet Pajak atau Accurate",
    ],
    format:
      "Kelas akhir pekan dengan pendekatan bertahap, banyak latihan, dan pendampingan instruktur.",
    curriculum: [
      {
        title: "Konsep & Siklus Dasar",
        topics: [
          "Persamaan dasar akuntansi",
          "Jurnal umum & penyesuaian",
          "Buku besar & neraca saldo",
        ],
      },
      {
        title: "Laporan Keuangan",
        topics: [
          "Laporan laba rugi",
          "Laporan perubahan modal",
          "Neraca & laporan arus kas",
        ],
      },
      {
        title: "Praktik Aplikatif",
        topics: [
          "Studi kasus pembukuan usaha",
          "Penyusunan laporan sederhana",
          "Persiapan menuju software akuntansi",
        ],
      },
    ],
  },
  {
    slug: "sertifikasi-accurate-online",
    title: "Sertifikasi Accurate Online",
    level: "Menengah – Praktis",
    duration: "Kelas akhir pekan (per angkatan)",
    priceLabel: PRICE_CTA,
    badge: "Bersertifikat",
    summary:
      "Pelatihan & ujian sertifikasi Accurate Online, software akuntansi terpopuler di Indonesia. Program yang sama telah dilatihkan ke dosen FEIS UIN Suska Riau dengan hasil lulus predikat A.",
    highlights: [
      "Pengoperasian Accurate Online end-to-end",
      "Transaksi pembelian, penjualan, kas & bank",
      "Persediaan, aktiva & laporan otomatis",
      "Ujian sertifikasi Accurate",
    ],
    overview:
      "Program Sertifikasi Accurate Online mengajarkan cara mengelola pembukuan bisnis secara praktis menggunakan Accurate Online, salah satu software akuntansi paling banyak dipakai di Indonesia. Kredibilitas program ini terbukti: pada Desember 2025, instruktur LKP Sahabat Prestasi melatih dan mensertifikasi dosen akuntansi FEIS UIN Suska Riau, dan seluruh peserta lulus dengan predikat A.",
    audience: [
      "Peserta yang sudah paham akuntansi dasar",
      "Staf accounting yang ingin naik level ke software",
      "Pemilik UMKM yang ingin pembukuan rapi & otomatis",
      "Fresh graduate yang ingin nilai jual lebih",
    ],
    outcomes: [
      "Melakukan setup perusahaan & saldo awal",
      "Menginput transaksi pembelian, penjualan, kas & bank",
      "Mengelola persediaan dan aktiva tetap",
      "Menghasilkan laporan keuangan otomatis & lulus sertifikasi",
    ],
    format:
      "Kelas praktik berbasis komputer, diakhiri ujian sertifikasi Accurate Online.",
    curriculum: [
      {
        title: "Persiapan & Setup",
        topics: [
          "Pengenalan Accurate Online",
          "Membuat database perusahaan",
          "Input saldo awal & daftar akun",
        ],
      },
      {
        title: "Transaksi Operasional",
        topics: [
          "Modul pembelian & hutang",
          "Modul penjualan & piutang",
          "Kas, bank & rekonsiliasi",
        ],
      },
      {
        title: "Laporan & Sertifikasi",
        topics: [
          "Persediaan & aktiva tetap",
          "Laporan keuangan otomatis",
          "Persiapan & ujian sertifikasi",
        ],
      },
    ],
  },
  {
    slug: "sertifikasi-kompetensi",
    title: "Sertifikasi Kompetensi",
    level: "Semua tingkat",
    duration: "Sesuai jadwal batch",
    priceLabel: PRICE_CTA,
    summary:
      "Program sertifikasi untuk memperkuat bukti kompetensi di bidang perpajakan & akuntansi. Detail skema dan jadwal diinformasikan per batch.",
    highlights: [
      "Bukti kompetensi untuk CV & dunia kerja",
      "Pendampingan menuju sertifikasi",
      "Materi selaras kebutuhan industri",
      "Jadwal batch fleksibel",
    ],
    overview:
      "Program Sertifikasi Kompetensi ditujukan untuk memperkuat pengakuan atas kemampuan kamu di bidang perpajakan dan akuntansi. Program ini melengkapi pelatihan utama dengan jalur sertifikasi yang relevan dengan kebutuhan industri. Skema, badan penerbit, dan jadwal batch akan diinformasikan langsung oleh tim kami.",
    audience: [
      "Alumni pelatihan yang ingin sertifikasi lanjutan",
      "Profesional yang butuh bukti kompetensi",
      "Mahasiswa tingkat akhir menuju dunia kerja",
    ],
    outcomes: [
      "Memperkuat portofolio & CV",
      "Meningkatkan daya saing di dunia kerja",
      "Mendapat pengakuan kompetensi",
    ],
    format: "Informasi skema & jadwal sertifikasi disampaikan per batch. Hubungi kami untuk detail.",
    curriculum: [
      {
        title: "Persiapan Sertifikasi",
        topics: [
          "Review kompetensi inti",
          "Latihan & simulasi",
          "Pendampingan menuju ujian",
        ],
      },
    ],
  },
];

/** Mencari program berdasarkan slug. */
export function getProgram(slug: string): Program | undefined {
  return programs.find((p) => p.slug === slug);
}

/** Rating tampilan singkat untuk kartu program (mengacu rating lembaga). */
export const programMeta: Record<string, { rating: number; reviews: number }> = {
  "brevet-pajak-a-b": { rating: 4.9, reviews: 16 },
  "akuntansi-komprehensif": { rating: 4.9, reviews: 16 },
  "sertifikasi-accurate-online": { rating: 4.9, reviews: 16 },
  "sertifikasi-kompetensi": { rating: 4.9, reviews: 16 },
};

/** Statistik yang ditampilkan di hero (dari riset). */
export const stats = [
  { value: "4,9/5", label: "Rating Google" },
  { value: "32+", label: "Angkatan Brevet" },
  { value: "2020", label: "Berpengalaman Sejak" },
];

/** Poin kredibilitas untuk section Tentang. */
export const credentials = [
  {
    title: "Terdaftar Resmi",
    description: `Di bawah naungan ${siteConfig.authority}, No. SK ${siteConfig.skNumber}.`,
  },
  {
    title: "Rekam Jejak Panjang",
    description: "Program Brevet Pajak telah berjalan 32+ angkatan sejak 2020.",
  },
  {
    title: "Dipercaya Perguruan Tinggi",
    description:
      "Melatih & mensertifikasi dosen akuntansi FEIS UIN Suska Riau (2025), seluruh peserta lulus predikat A.",
  },
];

export type Instructor = {
  name: string;
  role: string;
  focus: string;
  initials: string;
};

/** Instruktur / mentor. Sebagian nama dari dokumentasi publik; [KONFIRMASI] & lengkapi. */
export const instructors: Instructor[] = [
  {
    name: "Praktisi & Akademisi",
    role: "Pengajar Brevet Pajak",
    focus: "Perpajakan berbasis studi kasus",
    initials: "PA",
  },
  {
    name: "Pegawai DJP (Praktisi)",
    role: "Narasumber Perpajakan",
    focus: "Praktik pajak lapangan",
    initials: "DJP",
  },
  {
    name: "Romi Chandra",
    role: "Instruktur Accurate Online",
    focus: "Sertifikasi Accurate",
    initials: "RC",
  },
];

export type Advantage = {
  title: string;
  description: string;
  /** Nama ikon (dipetakan di komponen). */
  icon:
    | "teacher"
    | "case"
    | "star"
    | "history"
    | "partner"
    | "calendar";
};

export const advantages: Advantage[] = [
  {
    title: "Pengajar Praktisi & Akademisi",
    description:
      "Diajar langsung oleh praktisi, akademisi, hingga pegawai DJP aktif, bukan sekadar teori.",
    icon: "teacher",
  },
  {
    title: "Belajar Berbasis Studi Kasus",
    description:
      "Materi disampaikan lewat kasus nyata di lapangan sehingga langsung bisa diterapkan.",
    icon: "case",
  },
  {
    title: "Rating 4,9/5 dari Alumni",
    description:
      "Reputasi tervalidasi lewat ulasan Google, lingkungan belajar nyaman dan pengajar berkualitas.",
    icon: "star",
  },
  {
    title: "Rekam Jejak 32+ Angkatan",
    description:
      "Konsisten menyelenggarakan Brevet Pajak sejak 2020 dengan ratusan alumni.",
    icon: "history",
  },
  {
    title: "Dipercaya Institusi Pendidikan",
    description:
      "Menjadi mitra pelatihan & sertifikasi Accurate untuk dosen UIN Suska Riau.",
    icon: "partner",
  },
  {
    title: "Jadwal Akhir Pekan",
    description:
      "Kelas Sabtu & Minggu, ramah untuk mahasiswa dan pekerja yang sibuk di hari kerja.",
    icon: "calendar",
  },
];

export const steps = [
  {
    title: "Konsultasi",
    description:
      "Hubungi kami via WhatsApp atau isi form. Tim kami bantu pilih program & info batch terbaru.",
  },
  {
    title: "Daftar",
    description:
      "Amankan kursi kamu di angkatan berikutnya. Kuota per angkatan terbatas.",
  },
  {
    title: "Belajar",
    description:
      "Ikuti kelas akhir pekan, kerjakan studi kasus, dan konsultasi langsung dengan instruktur.",
  },
  {
    title: "Sertifikat",
    description:
      "Selesaikan program dan dapatkan sertifikat sebagai bukti kompetensimu.",
  },
];

/** Testimoni — parafrase dari ulasan Google publik (bukan kutipan verbatim). */
export const testimonials = [
  {
    name: "Alumni Brevet Pajak",
    role: "Ulasan Google",
    quote:
      "Lingkungan belajarnya nyaman dan pengajarnya sangat baik. Sangat membantu memahami perpajakan.",
  },
  {
    name: "Alumni",
    role: "Ulasan Google",
    quote:
      "Sangat direkomendasikan buat yang ingin memperdalam perpajakan. Bukan cuma teori, tapi juga wawasan praktis di lapangan.",
  },
  {
    name: "Peserta Pelatihan",
    role: "Ulasan Google",
    quote:
      "Pengajarnya praktisi, akademisi, sekaligus pegawai DJP. Suasana kelas nyaman dan materinya menarik.",
  },
];

export const faqs = [
  {
    question: "Apakah cocok untuk pemula tanpa background akuntansi?",
    answer:
      "Bisa. Untuk yang benar-benar baru, kami sarankan mulai dari Akuntansi Komprehensif sebagai fondasi sebelum masuk ke Brevet Pajak. Materi disampaikan bertahap dan berbasis studi kasus.",
  },
  {
    question: "Apakah mendapat sertifikat resmi?",
    answer:
      "Ya. Peserta yang menyelesaikan program menerima sertifikat. Untuk Accurate Online tersedia jalur ujian sertifikasi resmi software tersebut.",
  },
  {
    question: "Apakah ada kelas online untuk yang di luar Pekanbaru?",
    answer:
      "Silakan tanyakan ketersediaan kelas online untuk batch berjalan via WhatsApp. Tim kami akan menginformasikan opsi yang tersedia.",
  },
  {
    question: "Kapan jadwal kelasnya?",
    answer:
      "Kelas diadakan di akhir pekan (Sabtu & Minggu), sehingga ramah untuk mahasiswa dan pekerja. Jadwal batch terbaru dapat ditanyakan langsung ke kami.",
  },
  {
    question: "Bagaimana cara mendaftar?",
    answer:
      "Cukup hubungi kami via WhatsApp di 0813-1992-1905 atau isi formulir pendaftaran di halaman ini. Tim kami akan memandu proses selanjutnya.",
  },
];

/** Membuat tautan WhatsApp dengan pesan opsional. */
export function waLink(message?: string) {
  const text = encodeURIComponent(message ?? siteConfig.whatsappDefaultMessage);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
}
