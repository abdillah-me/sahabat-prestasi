# LKP Sahabat Prestasi — Landing Page

Landing page SEO-friendly untuk **LKP Sahabat Prestasi**, lembaga kursus &
pelatihan akuntansi dan perpajakan. Dibangun dengan **Next.js (App Router) +
TypeScript + Tailwind CSS**.

## Fitur

- SEO kuat: metadata lengkap, Open Graph, JSON-LD (`EducationalOrganization` &
  `Course`), `sitemap.xml`, `robots.txt`, HTML semantik, dan render di server.
- Responsif (mobile-first) + tombol WhatsApp mengambang.
- Section: Hero, Program, Keunggulan, Alur Pendaftaran, Testimoni, FAQ, Kontak.
- Form pendaftaran (leads) dengan API route yang siap disambungkan ke Google Sheet.
- Semua konten dummy terpusat dan mudah diganti.

## Menjalankan

```bash
npm install
npm run dev      # buka http://localhost:3000
```

Build produksi:

```bash
npm run build
npm run start
```

## Mengganti Konten Dummy

Semua data (nama, nomor WhatsApp, alamat, email, media sosial, program, harga,
testimoni, FAQ) ada di satu file:

```
src/config/site.ts
```

Ubah nilai di sana, seluruh halaman ikut ter-update. Jangan lupa ganti
`siteConfig.url` dengan domain asli saat sudah online (penting untuk SEO).

## Menghubungkan Form ke Google Sheet

1. Buat Google Sheet dengan header kolom:
   `Timestamp | Nama | WhatsApp | Email | Program | Pesan`
2. Buka **Extensions > Apps Script**, tempel kode `doPost` (ada di komentar file
   `src/app/api/leads/route.ts`).
3. **Deploy > New deployment > Web app**, akses "Anyone", salin URL-nya.
4. Salin `.env.local.example` menjadi `.env.local`, isi:
   ```
   GOOGLE_SHEET_WEBHOOK_URL=https://script.google.com/macros/s/xxxx/exec
   ```
5. Restart server. Selama URL kosong, form berjalan dalam **mode dummy**.

## Status Data

Konten sudah diisi dari hasil riset (Google Business Profile, Kemendikdasmen,
Instagram): nomor WhatsApp, alamat Pekanbaru, jam operasional, rating 4,9/5,
Angkatan ke-32, No. SK, sosial media (Instagram/Threads/LinkedIn), dan program.

Yang ditandai `[KONFIRMASI]` di `src/config/site.ts` sebaiknya dicek dari data
internal:

- Email resmi (saat ini pakai placeholder Gmail)
- Nama instruktur lengkap
- Harga per program (sengaja dikosongkan → diarahkan ke WhatsApp, karena belum
  ada angka resmi. Jangan cantumkan harga sebelum dikonfirmasi)

## Yang Perlu Diganti Sebelum Live

- [ ] `siteConfig.url` di `src/config/site.ts` — ganti ke domain asli
- [ ] `public/favicon.ico` — ikon situs (idealnya logo asli dari IG @sahabat.prestasi)
- [ ] Foto asli: suasana kelas (hero), instruktur, galeri — saat ini placeholder
- [ ] Konfirmasi item `[KONFIRMASI]` di `site.ts` (email, nama instruktur, harga)
- [ ] Hubungkan Google Sheet (lihat di atas)
```
