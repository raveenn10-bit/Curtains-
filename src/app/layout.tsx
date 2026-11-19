import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { FAQ_ITEMS } from "@/data/products";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://maducurtains.lk"),
  title: "Madu Curtains | Custom Curtains & Luxury Home Decor in Galle, Sri Lanka",
  description:
    "Explore bespoke curtains, floral drapes, sheer curtains, double-layer window treatments, and wooden curtain rods in Galle, Sri Lanka. Request a custom quotation via WhatsApp.",
  keywords: [
    "Curtains in Galle",
    "Custom Curtains Galle",
    "Curtain Designs Sri Lanka",
    "Modern Curtains Sri Lanka",
    "Madu Curtains Galle",
    "Home Decor Galle",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Madu Curtains | Custom Curtains & Home Interior Decor — Galle",
    description:
      "Beautiful Curtains. Timeless Interiors. Custom-tailored curtain designs in Galle, Sri Lanka.",
    type: "website",
    locale: "en_LK",
    images: [
      {
        url: "/images/hero-1.webp",
        width: 1400,
        height: 787,
        alt: "Madu Curtains luxury living room drapery showcase",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Madu Curtains | Custom Curtains in Galle, Sri Lanka",
    description:
      "Transform your home with beautifully crafted curtains, tailored to your style and space.",
    images: ["/images/hero-1.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Madu Curtains",
    description:
      "Custom Curtains & Home Interior Decor in Galle, Sri Lanka.",
    telephone: "+94779381373",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Galle",
      addressCountry: "LK",
    },
    areaServed: "Galle, Sri Lanka",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable}`}>
      <body className="font-sans antialiased bg-ivory text-charcoal selection:bg-magenta selection:text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
        {children}
      </body>
    </html>
  );
}
