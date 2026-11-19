import React from "react";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa6";
import type { IconType } from "react-icons";
import { SOCIAL_LINKS } from "@/data/products";

const NETWORKS: { key: keyof typeof SOCIAL_LINKS; label: string; Icon: IconType }[] = [
  { key: "facebook", label: "Facebook", Icon: FaFacebookF },
  { key: "instagram", label: "Instagram", Icon: FaInstagram },
  { key: "tiktok", label: "TikTok", Icon: FaTiktok },
  { key: "whatsapp", label: "WhatsApp", Icon: FaWhatsapp },
];

interface SocialIconsProps {
  tone?: "light" | "dark";
  size?: "sm" | "md";
  className?: string;
}

export function SocialIcons({ tone = "dark", size = "md", className = "" }: SocialIconsProps) {
  const box = size === "sm" ? "w-8 h-8" : "w-11 h-11";
  const icon = size === "sm" ? "w-3.5 h-3.5" : "w-[18px] h-[18px]";
  const colors =
    tone === "light"
      ? "border-ivory/20 text-ivory hover:bg-ivory hover:text-plum"
      : "border-charcoal/15 text-charcoal hover:bg-plum hover:border-plum hover:text-ivory";

  return (
    <ul className={`flex items-center gap-2 ${className}`} aria-label="Madu Curtains on social media">
      {NETWORKS.filter((n) => SOCIAL_LINKS[n.key]).map(({ key, label, Icon }) => (
        <li key={key}>
          <a
            href={SOCIAL_LINKS[key]}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Madu Curtains on ${label}`}
            className={`${box} inline-flex items-center justify-center rounded-full border transition-colors duration-200 ${colors}`}
          >
            <Icon className={icon} aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
}
