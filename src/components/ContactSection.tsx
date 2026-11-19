"use client";

import React, { useState } from "react";
import { MapPin, Phone, Send } from "lucide-react";
import { PHONE_DISPLAY, buildWhatsAppUrl } from "@/data/products";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function ContactSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      setError("Please enter your name and inquiry message.");
      return;
    }
    setError("");
    const text = `Hello Madu Curtains!\n\nName: ${name.trim()}\nPhone: ${
      phone.trim() || "Not provided"
    }\nMessage: ${message.trim()}`;
    window.open(buildWhatsAppUrl(text), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-5 space-y-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-magenta">
              Get In Touch
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-charcoal mt-2">
              Madu Curtains
            </h2>
            <p className="text-base text-charcoal/80 mt-3">
              Reach out directly for custom curtain quotations, fabric recommendations, or window measurement guidance.
            </p>
          </div>

          <div className="space-y-4 rounded-[4px] bg-beige/65 border border-champagne/35 p-6">
            <div className="flex items-start gap-3.5">
              <MapPin className="w-5 h-5 text-plum mt-0.5 shrink-0" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-charcoal/60">
                  Location
                </p>
                <p className="text-base font-semibold text-charcoal">
                  Galle, Sri Lanka
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <Phone className="w-5 h-5 text-plum mt-0.5 shrink-0" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-charcoal/60">
                  Telephone
                </p>
                <a
                  href="tel:+94779381373"
                  className="text-base font-semibold text-charcoal hover:text-magenta transition-colors"
                >
                  {PHONE_DISPLAY}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <WhatsAppIcon className="w-5 h-5 text-plum mt-0.5 shrink-0" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-charcoal/60">
                  WhatsApp
                </p>
                <a
                  href={buildWhatsAppUrl("Hello Madu Curtains!")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-semibold text-charcoal hover:text-magenta transition-colors"
                >
                  +94 77 938 1373
                </a>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href="tel:+94779381373"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-[2px] border border-charcoal/25 hover:border-magenta px-4 py-2.5 text-sm font-semibold text-charcoal transition-colors min-h-[44px]"
              >
                <Phone className="w-4 h-4 text-plum" />
                <span>Call Now</span>
              </a>
              <a
                href={buildWhatsAppUrl("Hello Madu Curtains! I would like to inquire about custom curtains.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-[2px] bg-plum hover:bg-magenta px-4 py-2.5 text-sm font-semibold text-ivory transition-colors min-h-[44px]"
              >
                <WhatsAppIcon className="w-4 h-4 text-champagne" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleContactSubmit}
          noValidate
          className="lg:col-span-7 rounded-[4px] bg-beige/45 border border-champagne/35 p-6 sm:p-8 space-y-5"
        >
          <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-charcoal">
            Send a Direct Inquiry
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="contact-name"
                className="block text-xs font-semibold uppercase tracking-wider text-charcoal/75 mb-1.5"
              >
                Your Name *
              </label>
              <input
                id="contact-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full rounded-[3px] border border-charcoal/20 bg-ivory px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-magenta min-h-[44px]"
              />
            </div>
            <div>
              <label
                htmlFor="contact-phone"
                className="block text-xs font-semibold uppercase tracking-wider text-charcoal/75 mb-1.5"
              >
                Phone / WhatsApp Number
              </label>
              <input
                id="contact-phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="e.g. 077 000 0000"
                className="w-full rounded-[3px] border border-charcoal/20 bg-ivory px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-magenta min-h-[44px]"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="contact-message"
              className="block text-xs font-semibold uppercase tracking-wider text-charcoal/75 mb-1.5"
            >
              Message *
            </label>
            <textarea
              id="contact-message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us about your rooms, curtain styles, or window sizes..."
              className="w-full rounded-[3px] border border-charcoal/20 bg-ivory px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-magenta"
            />
          </div>
          {error && (
            <p role="alert" className="text-sm text-plum font-medium">
              {error}
            </p>
          )}
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-[2px] bg-plum hover:bg-magenta text-ivory px-7 py-3.5 text-sm font-semibold transition-colors min-h-[48px]"
          >
            <Send className="w-4 h-4 text-champagne" />
            <span>Send via WhatsApp</span>
          </button>
        </form>
      </div>
    </section>
  );
}
