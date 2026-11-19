import React from "react";
import Image from "next/image";
import { MapPin, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { SocialIcons } from "./SocialIcons";
import { PHONE_DISPLAY, buildWhatsAppUrl } from "@/data/products";

const COLUMNS = [
  {
    title: "Shop",
    links: [
      { label: "Modern & two-tone", href: "#showcase" },
      { label: "Floral prints", href: "#showcase" },
      { label: "Luxury velvet", href: "#showcase" },
      { label: "Sheer & double-layer", href: "#showcase" },
      { label: "Rods & accessories", href: "#accessories" },
    ],
  },
  {
    title: "Customer care",
    links: [
      { label: "Custom curtain quote", href: "#customizer" },
      { label: "How it works", href: "#how-it-works" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "Our story", href: "#about" },
      { label: "Gallery", href: "#gallery" },
      { label: "Collections", href: "#collections" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-charcoal text-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="inline-flex bg-white rounded-xl px-3 py-2">
            <Image
              src="/images/madu-logo.webp"
              alt="Madu Curtains"
              width={160}
              height={75}
              className="h-10 w-auto object-contain"
            />
          </div>
          <p className="text-sm text-beige/70 mt-5 leading-relaxed max-w-xs">
            Made-to-measure curtains, sheers and curtain hardware for homes and villas in Galle, Sri Lanka.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-beige/85">
            <li className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-champagne" aria-hidden="true" />
              Galle, Sri Lanka
            </li>
            <li>
              <a href="tel:+94779381373" className="inline-flex items-center gap-3 hover:text-ivory transition-colors">
                <Phone className="w-4 h-4 text-champagne" aria-hidden="true" />
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a
                href={buildWhatsAppUrl("Hello Madu Curtains!")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 hover:text-ivory transition-colors"
              >
                <FaWhatsapp className="w-4 h-4 text-champagne" aria-hidden="true" />
                +94 77 938 1373
              </a>
            </li>
          </ul>
          <SocialIcons tone="light" className="mt-7" />
        </div>

        <nav aria-label="Footer" className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-10">
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-champagne">
                {col.title}
              </h3>
              <ul className="mt-5 space-y-3 text-sm text-beige/80">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="hover:text-ivory transition-colors duration-200">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className="border-t border-ivory/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-beige/55">
          <p>© {new Date().getFullYear()} Madu Curtains, Galle. All rights reserved.</p>
          <p>
            Website by <span className="text-beige/80 font-medium">Harsh Apex Digital Solutions</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
