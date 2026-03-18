import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gabriela Figer | Psicóloga - CRP 06/216969",
  description:
    "Psicóloga clínica com formação pela PUC-SP e pós-graduação em Neuropsicologia pela USP. Atendimento acolhedor e personalizado.",
  keywords: [
    "psicóloga",
    "psicologia",
    "neuropsicologia",
    "terapia",
    "São Paulo",
    "Gabriela Figer",
  ],
  openGraph: {
    title: "Gabriela Figer | Psicóloga",
    description:
      "Psicóloga clínica com formação pela PUC-SP e pós-graduação em Neuropsicologia pela USP.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
