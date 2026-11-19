import React from "react";
import Image from "next/image";

interface BrandLogoProps {
  variant?: "dark" | "light";
  className?: string;
}

export function BrandLogo({ variant = "dark", className = "" }: BrandLogoProps) {
  return (
    <div
      className={`inline-flex items-center ${
        variant === "light"
          ? "rounded-xl bg-ivory px-3 py-1.5 shadow-sm"
          : ""
      } ${className}`}
    >
      <Image
        src="/images/madu-logo.webp"
        alt="Madu Curtains — Galle, Sri Lanka"
        width={180}
        height={84}
        priority
        className="h-10 sm:h-11 w-auto object-contain"
      />
    </div>
  );
}
