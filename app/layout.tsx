import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Psicóloga Gabriela Figer | Atendimento Online e Presencial em São Paulo - CRP 06/216969",
  description:
    "Psicóloga clínica Gabriela Figer (CRP 06/216969). Formada pela PUC-SP com pós-graduação em Neuropsicologia pela USP. Atendimento online e presencial para ansiedade, autoconhecimento, terapia de casal e avaliação neuropsicológica. Agende sua consulta.",
  keywords: [
    "psicóloga São Paulo",
    "psicóloga online",
    "psicóloga SP",
    "terapia online",
    "psicóloga PUC-SP",
    "neuropsicóloga USP",
    "neuropsicologia São Paulo",
    "avaliação neuropsicológica",
    "terapia para ansiedade",
    "psicóloga para autoconhecimento",
    "terapia de casal São Paulo",
    "psicóloga CRP 06/216969",
    "Gabriela Figer psicóloga",
    "consulta psicológica online",
    "reabilitação cognitiva",
    "fenomenologia existencial",
    "psicanálise São Paulo",
  ],
  authors: [{ name: "Gabriela Figer" }],
  creator: "Gabriela Figer",
  openGraph: {
    title: "Psicóloga Gabriela Figer | Atendimento Online e Presencial - SP",
    description:
      "Psicóloga clínica formada pela PUC-SP com pós em Neuropsicologia pela USP. Atendimento acolhedor para ansiedade, autoconhecimento e avaliação neuropsicológica.",
    type: "website",
    locale: "pt_BR",
    siteName: "Psicóloga Gabriela Figer",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://gabrielafiger.com.br",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Psicóloga Gabriela Figer",
  description:
    "Psicóloga clínica com formação pela PUC-SP e pós-graduação em Neuropsicologia pela USP. Atendimento online e presencial para ansiedade, autoconhecimento, neuropsicologia e terapia de casal.",
  url: "https://gabrielafiger.com.br",
  telephone: "+5511987788966",
  email: "gabriela.figer@gmail.com",
  priceRange: "$$",
  image: "https://gabrielafiger.com.br/og-image.jpg",
  address: {
    "@type": "PostalAddress",
    addressLocality: "São Paulo",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -23.5505,
    longitude: -46.6333,
  },
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Professional License",
      name: "CRP 06/216969",
    },
  ],
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Pontifícia Universidade Católica de São Paulo (PUC-SP)",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "Universidade de São Paulo (USP)",
    },
  ],
  knowsAbout: [
    "Psicologia Clínica",
    "Neuropsicologia",
    "Avaliação Neuropsicológica",
    "Reabilitação Cognitiva",
    "Terapia para Ansiedade",
    "Fenomenologia Existencial",
    "Psicanálise",
    "Terapia de Casal",
    "Autoconhecimento",
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "20:00",
  },
  sameAs: [
    "https://instagram.com/psi.gabrielafiger",
    "https://linktr.ee/psi.gabrielafiger",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
