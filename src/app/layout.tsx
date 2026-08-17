import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import { NEGOCIO } from "@/lib/site";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const body = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
  display: "swap",
});

const DESCRICAO =
  `Reiki, Tarot e Radiestesia com a terapeuta Luana (Jinpa Drolma) em ${NEGOCIO.cidade}/${NEGOCIO.estado}. ` +
  `Atendimento presencial no bairro Bonfim e também online. Nota ${NEGOCIO.googleNota} no Google.`;

export const metadata: Metadata = {
  metadataBase: new URL(NEGOCIO.site),
  title: {
    default: `${NEGOCIO.nome} — Reiki, Tarot e Radiestesia em ${NEGOCIO.cidade}/${NEGOCIO.estado}`,
    template: `%s — ${NEGOCIO.nome}`,
  },
  description: DESCRICAO,
  keywords: [
    "reiki santa maria",
    "tarot santa maria",
    "radiestesia",
    "terapia holística santa maria",
    "terapeuta holística RS",
    "reiki online",
    "leitura de tarot online",
    "Jinpa Drolma",
  ],
  authors: [{ name: `${NEGOCIO.terapeuta} — ${NEGOCIO.nomeEspiritual}` }],
  creator: NEGOCIO.nome,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: NEGOCIO.site,
    siteName: NEGOCIO.nome,
    title: `${NEGOCIO.nome} — ${NEGOCIO.tagline}`,
    description: DESCRICAO,
    images: [
      {
        url: "/assets/luana-tarot.png",
        width: 596,
        height: 596,
        alt: `${NEGOCIO.terapeuta}, terapeuta holística em ${NEGOCIO.cidade}, segurando uma carta de tarot`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${NEGOCIO.nome} — ${NEGOCIO.tagline}`,
    description: DESCRICAO,
    images: ["/assets/luana-tarot.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1b0b33",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: NEGOCIO.nome,
  description: DESCRICAO,
  url: NEGOCIO.site,
  telephone: `+55${NEGOCIO.whatsapp.slice(2)}`,
  image: `${NEGOCIO.site}/assets/luana-tarot.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Dr. Bozano, 729, sala 302",
    addressLocality: NEGOCIO.cidade,
    addressRegion: NEGOCIO.estado,
    postalCode: NEGOCIO.cep,
    addressCountry: "BR",
  },
  areaServed: [
    { "@type": "City", name: NEGOCIO.cidade },
    { "@type": "Country", name: "Brasil" },
  ],
  founder: {
    "@type": "Person",
    name: `${NEGOCIO.terapeuta} (${NEGOCIO.nomeEspiritual})`,
  },
  sameAs: [NEGOCIO.instagramUrl],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: String(NEGOCIO.googleAvaliacoes),
    bestRating: "5",
  },
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Reiki" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tarot" } },
    {
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: "Radiestesia" },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable}`}>
      <body>
        {/* Sem JS o conteúdo não pode ficar preso em opacity:0 */}
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
        <a className="skip" href="#conteudo">
          Pular para o conteúdo
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
