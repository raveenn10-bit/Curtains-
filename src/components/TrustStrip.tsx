import React from "react";
import { Layers, MapPin, MessageCircle, Ruler, Wrench } from "lucide-react";

const ITEMS = [
  { icon: Ruler, title: "Made to measure", desc: "Cut to your window size" },
  { icon: Layers, title: "20+ designs", desc: "Sheers, prints & velvets" },
  { icon: MessageCircle, title: "Free WhatsApp quote", desc: "Quick, clear replies" },
  { icon: Wrench, title: "Rods & accessories", desc: "Wood & metal hardware" },
  { icon: MapPin, title: "Based in Galle", desc: "Serving the South coast" },
];

export function TrustStrip() {
  return (
    <section aria-label="Why customers choose Madu Curtains" className="bg-ivory border-b border-charcoal/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ul className="grid grid-cols-2 md:grid-cols-5 divide-charcoal/10 md:divide-x">
          {ITEMS.map(({ icon: Icon, title, desc }, i) => (
            <li
              key={title}
              className={`flex items-center gap-3 py-5 md:px-5 first:md:pl-0 ${
                i === ITEMS.length - 1 ? "col-span-2 md:col-span-1" : ""
              }`}
            >
              <Icon className="w-5 h-5 shrink-0 text-plum" strokeWidth={1.6} aria-hidden="true" />
              <div className="min-w-0">
                <p className="text-sm font-semibold text-charcoal leading-tight">{title}</p>
                <p className="text-xs text-charcoal/65 mt-0.5">{desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
