import React from "react";
import { Layers, MapPin, Ruler, Wrench } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";

const ITEMS = [
  { icon: Ruler, title: "Any size", desc: "Made to your window width & drop" },
  { icon: Layers, title: "20+ designs", desc: "Sheers, prints, velvet & two-tone" },
  { icon: Wrench, title: "Rods & accessories", desc: "Wooden & metal curtain hardware" },
  { icon: MapPin, title: "Based in Galle", desc: "Homes, villas & hotels" },
  { icon: null, title: "Quotes on WhatsApp", desc: "Message us on 077 938 1373" },
];

export function TrustStrip() {
  return (
    <section
      aria-label="Why customers choose Madu Curtains"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20"
    >
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {ITEMS.map(({ icon: Icon, title, desc }, i) => (
          <li
            key={title}
            className={`bg-white border border-beige rounded-2xl p-4 shadow-sm flex items-start gap-3 ${
              i === ITEMS.length - 1 ? "col-span-2 md:col-span-1" : ""
            }`}
          >
            <div className="w-10 h-10 rounded-xl bg-[#F6F4EF] flex items-center justify-center shrink-0 text-plum">
              {Icon ? <Icon className="w-[18px] h-[18px]" aria-hidden="true" /> : <WhatsAppIcon className="w-7 h-7" />}
            </div>
            <div className="min-w-0">
              <h2 className="font-heading font-bold text-sm text-charcoal">{title}</h2>
              <p className="text-xs text-charcoal/60 mt-0.5 leading-snug">{desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
