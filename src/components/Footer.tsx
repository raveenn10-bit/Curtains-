import React from "react";
import { Phone } from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { PHONE_DISPLAY, buildWhatsAppUrl } from "@/data/products";

export function Footer() {
  return (
    <footer className="bg-charcoal text-ivory pt-14 pb-24 lg:pb-12 border-t border-champagne/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-ivory/15">
          <div>
            <BrandLogo variant="light" />
            <p className="text-sm text-beige/75 mt-4 leading-relaxed">
              Custom curtains and home interior decor tailored to your style and space in Galle, Sri Lanka.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold text-champagne mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm text-beige/85">
              <li><a href="#home" className="hover:text-champagne transition-colors">Home</a></li>
              <li><a href="#collections" className="hover:text-champagne transition-colors">Collections</a></li>
              <li><a href="#customizer" className="hover:text-champagne transition-colors">Custom Curtains</a></li>
              <li><a href="#gallery" className="hover:text-champagne transition-colors">Our Gallery</a></li>
              <li><a href="#about" className="hover:text-champagne transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-champagne transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold text-champagne mb-4">
              Curtain Collections
            </h3>
            <ul className="space-y-2.5 text-sm text-beige/85">
              <li><a href="#showcase" className="hover:text-champagne transition-colors">Modern & Two-Tone Curtains</a></li>
              <li><a href="#showcase" className="hover:text-champagne transition-colors">Floral & Botanical Prints</a></li>
              <li><a href="#showcase" className="hover:text-champagne transition-colors">Luxury Velvet & Jacquard</a></li>
              <li><a href="#showcase" className="hover:text-champagne transition-colors">Sheer & Double-Layer</a></li>
              <li><a href="#accessories" className="hover:text-champagne transition-colors">Wooden Rods & Accessories</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold text-champagne mb-4">
              Contact Madu Curtains
            </h3>
            <ul className="space-y-3 text-sm text-beige/85">
              <li>Galle, Sri Lanka</li>
              <li>
                <a
                  href="tel:+94779381373"
                  className="inline-flex items-center gap-2 hover:text-champagne transition-colors"
                >
                  <Phone className="w-4 h-4 text-champagne" />
                  <span>{PHONE_DISPLAY}</span>
                </a>
              </li>
              <li>
                <a
                  href={buildWhatsAppUrl("Hello Madu Curtains!")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-champagne transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4 text-champagne" />
                  <span>+94 77 938 1373</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-beige/65">
          <p>© {new Date().getFullYear()} Madu Curtains · Galle, Sri Lanka. All rights reserved.</p>
          <p>
            Developed by{" "}
            <span className="text-champagne font-semibold">
              Harsh Apex Digital Solutions
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
