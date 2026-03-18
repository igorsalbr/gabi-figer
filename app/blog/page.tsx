import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | Psicóloga Gabriela Figer - Artigos sobre Saúde Mental e Psicologia",
  description:
    "Artigos sobre psicologia, saúde mental, ansiedade, autoconhecimento, neuropsicologia e bem-estar. Conteúdo por Gabriela Figer, psicóloga em São Paulo (CRP 06/216969).",
  alternates: {
    canonical: "https://gabrielafiger.com.br/blog",
  },
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-cream-50">
      <div className="max-w-4xl mx-auto px-6 py-32">
        <Link
          href="/"
          className="text-brown-500 hover:text-brown-700 transition-colors text-sm mb-8 inline-block"
        >
          &larr; Voltar ao início
        </Link>

        <h1 className="font-display text-5xl md:text-6xl text-brown-900 font-semibold mb-4">
          Blog
        </h1>
        <p className="text-brown-600 text-lg mb-16 max-w-2xl">
          Artigos sobre <strong>psicologia</strong>, <strong>saúde mental</strong>,{" "}
          <strong>autoconhecimento</strong> e <strong>neuropsicologia</strong>.
          Conteúdo para ajudar você a entender melhor suas emoções e cuidar do
          seu bem-estar.
        </p>

        <div className="bg-cream-100 rounded-2xl p-12 text-center border border-brown-100">
          <p className="font-display text-2xl text-brown-700 mb-4">Em breve</p>
          <p className="text-brown-500">
            Novos artigos sobre saúde mental, ansiedade, relacionamentos e
            neuropsicologia estão a caminho.
          </p>
          <p className="text-brown-400 mt-6 text-sm">
            Enquanto isso, acompanhe o conteúdo no{" "}
            <a
              href="https://instagram.com/psi.gabrielafiger"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brown-600 underline hover:text-brown-800"
            >
              Instagram @psi.gabrielafiger
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
