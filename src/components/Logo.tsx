import Image from "next/image";
import { siteConfig } from "@/config/site";

type LogoProps = {
  /** Ukuran gambar logo dalam px. */
  size?: number;
  /** Tampilkan teks nama di samping logo. */
  withText?: boolean;
  /** Warna teks (untuk latar terang vs gelap). */
  variant?: "dark" | "light";
};

export default function Logo({
  size = 44,
  withText = true,
  variant = "dark",
}: LogoProps) {
  return (
    <span className="flex items-center gap-2.5">
      <span
        className="relative overflow-hidden rounded-full bg-white shadow-soft ring-1 ring-black/5"
        style={{ width: size, height: size }}
      >
        <Image
          src="/logo.jpg"
          alt={`Logo ${siteConfig.name}`}
          fill
          sizes={`${size}px`}
          className="object-contain"
          priority
        />
      </span>
      {withText && (
        <span
          className={`font-display text-lg font-bold leading-tight ${
            variant === "light" ? "text-white" : "text-brand-800"
          }`}
        >
          Sahabat
          <span className={variant === "light" ? "text-accent-300" : "text-brand-500"}>
            Prestasi
          </span>
        </span>
      )}
    </span>
  );
}
