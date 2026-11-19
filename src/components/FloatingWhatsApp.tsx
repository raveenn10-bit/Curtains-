import React from "react";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { buildWhatsAppUrl } from "@/data/products";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function FloatingWhatsApp() {
  const waHref = buildWhatsAppUrl(
    "Hello Madu Curtains! I would like to inquire about custom curtains."
  );

  return (
    <>
      {/* Desktop Floating WhatsApp Button */}
      <a
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Madu Curtains on WhatsApp"
        className="hidden lg:inline-flex fixed bottom-6 right-6 z-40 w-14 h-14 items-center justify-center rounded-full bg-[#25D366] hover:bg-[#1ebe5b] text-white shadow-md transition-colors duration-200"
      >
        <FaWhatsapp className="w-7 h-7" aria-hidden="true" />
      </a>

      {/* Mobile Sticky Inquiry Bar */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-ivory/95 backdrop-blur-md border-t border-champagne/35 px-4 py-2.5 flex items-center gap-3 shadow-sm">
        <a
          href="tel:+94779381373"
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-[2px] border border-charcoal/20 bg-ivory text-charcoal py-2.5 text-xs font-semibold min-h-[44px]"
        >
          <Phone className="w-4 h-4 text-plum" />
          <span>Call 077 938 1373</span>
        </a>
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-[2px] bg-plum text-ivory py-2.5 text-xs font-semibold min-h-[44px]"
        >
          <WhatsAppIcon className="w-4 h-4 text-champagne" />
          <span>WhatsApp Quote</span>
        </a>
      </div>
    </>
  );
}
