import React from "react";

/** Official WhatsApp logo used on every WhatsApp button/link. */
export function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/images/whatsapp-icon.png"
      alt=""
      aria-hidden="true"
      width={192}
      height={192}
      loading="lazy"
      decoding="async"
      className={`${className} shrink-0 rounded-full select-none pointer-events-none`}
    />
  );
}
