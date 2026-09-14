import { NextResponse } from "next/server";
import { programs } from "@/config/site";

/**
 * =============================================================
 *  API ROUTE — PENERIMA LEADS / PENDAFTARAN
 * =============================================================
 *  Endpoint ini menerima data dari form pendaftaran lalu
 *  meneruskannya ke Google Sheet.
 *
 *  CARA MENGHUBUNGKAN KE GOOGLE SHEET (via Apps Script):
 *  1. Buka Google Sheet baru, buat kolom header:
 *     Timestamp | Nama | WhatsApp | Email | Program | Pesan
 *  2. Menu Extensions > Apps Script, tempel kode berikut:
 *
 *     function doPost(e) {
 *       const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
 *       const data = JSON.parse(e.postData.contents);
 *       sheet.appendRow([
 *         new Date(), data.name, data.whatsapp,
 *         data.email, data.program, data.message
 *       ]);
 *       return ContentService
 *         .createTextOutput(JSON.stringify({ ok: true }))
 *         .setMimeType(ContentService.MimeType.JSON);
 *     }
 *
 *  3. Deploy > New deployment > type "Web app",
 *     "Execute as: Me", "Who has access: Anyone".
 *  4. Salin URL Web App, lalu simpan di file .env.local:
 *     GOOGLE_SHEET_WEBHOOK_URL=https://script.google.com/macros/s/xxxx/exec
 *
 *  Selama URL belum diisi, endpoint tetap berjalan (mode dummy)
 *  dan hanya mencatat data ke console server.
 * =============================================================
 */

type LeadPayload = {
  name?: string;
  whatsapp?: string;
  email?: string;
  program?: string;
  message?: string;
};

const programTitles = programs.map((p) => p.title);

export async function POST(request: Request) {
  let body: LeadPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Format data tidak valid." },
      { status: 400 }
    );
  }

  const name = body.name?.trim();
  const whatsapp = body.whatsapp?.trim();
  const email = body.email?.trim();
  const program = body.program?.trim();
  const message = body.message?.trim() ?? "";

  // Validasi dasar
  if (!name || !whatsapp) {
    return NextResponse.json(
      { ok: false, error: "Nama dan nomor WhatsApp wajib diisi." },
      { status: 400 }
    );
  }

  const phoneDigits = whatsapp.replace(/\D/g, "");
  if (phoneDigits.length < 9) {
    return NextResponse.json(
      { ok: false, error: "Nomor WhatsApp tidak valid." },
      { status: 400 }
    );
  }

  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Format email tidak valid." },
      { status: 400 }
    );
  }

  const payload = {
    name,
    whatsapp,
    email: email ?? "",
    program: program && programTitles.includes(program) ? program : (program ?? ""),
    message,
  };

  const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;

  // Jika belum dikonfigurasi, jalankan mode dummy agar form tetap berfungsi.
  if (!webhookUrl) {
    console.info("[leads] (dummy mode) menerima pendaftaran:", payload);
    return NextResponse.json({
      ok: true,
      mode: "dummy",
      message:
        "Pendaftaran diterima (mode dummy). Hubungkan Google Sheet untuk menyimpan data secara permanen.",
    });
  }

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      throw new Error(`Webhook merespons status ${res.status}`);
    }

    return NextResponse.json({ ok: true, mode: "sheet" });
  } catch (err) {
    console.error("[leads] gagal mengirim ke Google Sheet:", err);
    return NextResponse.json(
      {
        ok: false,
        error:
          "Gagal menyimpan pendaftaran. Coba lagi atau hubungi kami via WhatsApp.",
      },
      { status: 502 }
    );
  }
}
