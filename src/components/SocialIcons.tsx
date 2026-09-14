import type { IconType } from "react-icons";
import { FaInstagram, FaThreads, FaLinkedinIn } from "react-icons/fa6";

export type SocialKey = "instagram" | "threads" | "linkedin";

export type SocialMetaItem = {
  key: SocialKey;
  label: string;
  Icon: IconType;
};

/** Metadata sosial media (label + ikon brand dari react-icons). */
export const socialMeta: SocialMetaItem[] = [
  { key: "instagram", label: "Instagram", Icon: FaInstagram },
  { key: "threads", label: "Threads", Icon: FaThreads },
  { key: "linkedin", label: "LinkedIn", Icon: FaLinkedinIn },
];
