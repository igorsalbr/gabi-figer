import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap"
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

export const metadata: Metadata = {
  title:
    "Psicóloga Gabriela Figer | Atendimento Online e Presencial em São Paulo - CRP 06/216969",
  description:
    "Psicóloga clínica Gabriela Figer (CRP 06/216969). Formada pela PUC-SP e pós-graduanda em Neuropsicologia pela USP. Atendimento online para ansiedade, depressão, autoconhecimento, relacionamentos e avaliação neuropsicológica. Agende sua consulta.",
  keywords: [
    // Nome + profissão
    "Gabriela Figer psicóloga",
    "psicóloga Gabriela Figer",
    "psicóloga CRP 06/216969",
    // Geo: cidade
    "psicóloga São Paulo",
    "psicóloga em São Paulo",
    "psicóloga SP",
    "psicólogo São Paulo",
    // Geo: formato de busca
    "psicóloga perto de mim",
    "psicóloga online Brasil",
    // Modalidade
    "psicóloga online",
    "terapia online",
    "consulta psicológica online",
    "psicóloga atendimento online",
    "terapia por videochamada",
    // Especialidades clínicas
    "terapia para ansiedade",
    "psicóloga para ansiedade",
    "tratamento para ansiedade São Paulo",
    "terapia para depressão",
    "psicóloga para depressão",
    "psicóloga autoconhecimento",
    "terapia para luto",
    "psicóloga para baixa autoestima",
    "psicóloga para autoestima",
    "problemas de relacionamento psicóloga",
    "questões profissionais psicóloga",
    "sentimento de vazio terapia",
    "falta de propósito psicóloga",
    "terapia para traumas",
    "regulação emocional psicóloga",
    // Neuropsicologia
    "neuropsicóloga São Paulo",
    "neuropsicóloga USP",
    "neuropsicologia São Paulo",
    "avaliação neuropsicológica São Paulo",
    "avaliação neuropsicológica online",
    "reabilitação cognitiva",
    // Abordagem
    "fenomenologia existencial",
    "psicanálise São Paulo",
    "psicóloga fenomenológica",
    // Formação (autoridade)
    "psicóloga PUC-SP",
    "psicóloga formada PUC",
    "neuropsicóloga formada USP",
    // Long-tail / intenção de busca
    "como funciona terapia online",
    "primeira consulta psicóloga",
    "quanto custa psicólogo São Paulo",
    "preciso de psicóloga",
    "agendar psicóloga online",
    "psicóloga que atende online"
  ],
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" }
    ],
    apple: "/apple-touch-icon.png"
  },
  authors: [{ name: "Gabriela Figer" }],
  creator: "Gabriela Figer",
  publisher: "Gabriela Figer - Psicóloga CRP 06/216969",
  openGraph: {
    title:
      "Psicóloga Gabriela Figer | Atendimento Online e Presencial em São Paulo",
    description:
      "Psicóloga clínica formada pela PUC-SP e pós-graduanda em Neuropsicologia pela USP. Atendimento online acolhedor para ansiedade, depressão, autoconhecimento e avaliação neuropsicológica. Agende agora.",
    type: "website",
    locale: "pt_BR",
    siteName: "Psicóloga Gabriela Figer",
    url: "https://gabrielafiger.com.br"
  },
  twitter: {
    card: "summary_large_image",
    title: "Psicóloga Gabriela Figer | São Paulo",
    description:
      "Psicóloga clínica - PUC-SP | Neuropsicologia - USP. Atendimento online e presencial."
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  alternates: {
    canonical: "https://gabrielafiger.com.br"
  },
  category: "health"
};

// Schema 1: MedicalBusiness (mais específico que ProfessionalService)
const medicalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "@id": "https://gabrielafiger.com.br/#business",
  name: "Psicóloga Gabriela Figer",
  description:
    "Consultório de psicologia clínica e neuropsicologia em São Paulo. Atendimento online para ansiedade, depressão, autoconhecimento, relacionamentos e avaliação neuropsicológica.",
  url: "https://gabrielafiger.com.br",
  telephone: "+5511987788966",
  email: "gabriela.figer@gmail.com",
  priceRange: "$$",
  image: "https://gabrielafiger.com.br/final.png",
  currenciesAccepted: "BRL",
  paymentAccepted: "Dinheiro, PIX, Cartão de Crédito",
  medicalSpecialty: ["Psychiatry"],
  availableService: [
    {
      "@type": "MedicalTherapy",
      name: "Psicoterapia Individual",
      description:
        "Atendimento psicológico individual online e presencial para ansiedade, depressão, autoconhecimento e desenvolvimento pessoal."
    },
    {
      "@type": "MedicalTherapy",
      name: "Terapia para Relacionamentos",
      description:
        "Acompanhamento terapêutico para quem deseja compreender e melhorar seus vínculos afetivos e dinâmicas relacionais."
    },
    {
      "@type": "MedicalTest",
      name: "Avaliação Neuropsicológica",
      description:
        "Avaliação das funções cognitivas como memória, atenção, linguagem e funções executivas para diagnóstico e reabilitação."
    }
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "São Paulo",
    addressRegion: "SP",
    addressCountry: "BR"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -23.5505,
    longitude: -46.6333
  },
  areaServed: [
    { "@type": "City", name: "São Paulo" },
    { "@type": "State", name: "São Paulo" },
    { "@type": "Country", name: "Brasil" }
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "20:00"
    }
  ],
  sameAs: [
    "https://instagram.com/psi.gabrielafiger",
    "https://linktr.ee/psi.gabrielafiger"
  ]
};

// Schema 2: Person (profissional de saúde)
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://gabrielafiger.com.br/#person",
  name: "Gabriela Figer",
  jobTitle: "Psicóloga Clínica",
  description:
    "Psicóloga clínica em São Paulo (CRP 06/216969), formada pela PUC-SP com pós-graduação em Neuropsicologia pela USP. Especialista em ansiedade, autoconhecimento e avaliação neuropsicológica.",
  url: "https://gabrielafiger.com.br",
  image: "https://gabrielafiger.com.br/final.png",
  telephone: "+5511987788966",
  email: "gabriela.figer@gmail.com",
  worksFor: {
    "@id": "https://gabrielafiger.com.br/#business"
  },
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Professional License",
      name: "CRP 06/216969",
      recognizedBy: {
        "@type": "Organization",
        name: "Conselho Regional de Psicologia de São Paulo"
      }
    }
  ],
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Pontifícia Universidade Católica de São Paulo",
      alternateName: "PUC-SP"
    },
    {
      "@type": "CollegeOrUniversity",
      name: "Universidade de São Paulo",
      alternateName: "USP"
    }
  ],
  knowsAbout: [
    "Psicologia Clínica",
    "Neuropsicologia",
    "Avaliação Neuropsicológica",
    "Reabilitação Cognitiva",
    "Terapia para Ansiedade",
    "Terapia para Depressão",
    "Fenomenologia Existencial",
    "Psicanálise",
    "Problemas de Relacionamento",
    "Autoconhecimento",
    "Autoestima",
    "Regulação Emocional",
    "Traumas",
    "Terapia Online"
  ],
  sameAs: [
    "https://instagram.com/psi.gabrielafiger",
    "https://linktr.ee/psi.gabrielafiger"
  ]
};

// Schema 3: BreadcrumbList
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Início",
      item: "https://gabrielafiger.com.br"
    }
  ]
};

// Schema 4: WebSite (habilita sitelinks no Google)
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Psicóloga Gabriela Figer",
  url: "https://gabrielafiger.com.br",
  description:
    "Site oficial da psicóloga Gabriela Figer - Atendimento online e presencial em São Paulo.",
  inLanguage: "pt-BR",
  publisher: {
    "@id": "https://gabrielafiger.com.br/#person"
  }
};

const allSchemas = [
  medicalBusinessSchema,
  personSchema,
  breadcrumbSchema,
  websiteSchema
];

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <meta name="geo.region" content="BR-SP" />
        <meta name="geo.placename" content="São Paulo" />
        <meta name="geo.position" content="-23.5505;-46.6333" />
        <meta name="ICBM" content="-23.5505, -46.6333" />
        <link rel="me" href="https://instagram.com/psi.gabrielafiger" />
        <link
          rel="alternate"
          type="text/plain"
          href="https://gabrielafiger.com.br/llms.txt"
          title="LLM Summary"
        />
        <link
          rel="alternate"
          type="text/plain"
          href="https://gabrielafiger.com.br/llms-full.txt"
          title="LLM Full Content"
        />
        {allSchemas.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
