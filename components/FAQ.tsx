"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Como funciona o atendimento psicológico online?",
    answer:
      "O atendimento online acontece por videochamada em plataforma segura, com a mesma qualidade e sigilo do atendimento presencial. Você pode fazer a sessão de qualquer lugar, com total conforto e privacidade. A terapia online é regulamentada pelo Conselho Federal de Psicologia.",
  },
  {
    question: "Qual é a duração de uma sessão de terapia?",
    answer:
      "Cada sessão de psicoterapia tem duração de 50 minutos. A frequência recomendada é semanal, mas podemos ajustar conforme sua necessidade e momento de vida.",
  },
  {
    question: "Preciso de encaminhamento médico para procurar uma psicóloga?",
    answer:
      "Não. Você pode agendar diretamente sua consulta com a psicóloga sem necessidade de encaminhamento. Basta entrar em contato pelo WhatsApp ou pelo link de agendamento.",
  },
  {
    question: "O que é avaliação neuropsicológica?",
    answer:
      "A avaliação neuropsicológica é um processo que investiga funções cognitivas como memória, atenção, linguagem e funções executivas. É indicada para diagnóstico diferencial, planejamento de reabilitação cognitiva e acompanhamento de condições neurológicas.",
  },
  {
    question: "Qual abordagem terapêutica é utilizada?",
    answer:
      "Trabalho com base na fenomenologia existencial e na psicanálise, abordagens que buscam compreender a experiência humana de forma profunda e singular. O foco é no autoconhecimento e na construção de sentido para suas vivências.",
  },
  {
    question: "A psicóloga atende por plano de saúde?",
    answer:
      "Atualmente, o atendimento é particular. Após a sessão, emito recibo para que você solicite reembolso junto ao seu plano de saúde, caso ele ofereça essa opção.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-cream-100" aria-label="Perguntas frequentes">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-brown-400 tracking-[0.2em] uppercase text-xs mb-4">
            Tire suas dúvidas
          </p>
          <h2 className="font-display text-5xl md:text-6xl text-brown-900 mb-4 font-semibold">
            Perguntas{" "}
            <span className="italic font-normal text-brown-600">frequentes</span>
          </h2>
          <div className="w-12 h-px bg-brown-300 mx-auto" />
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-cream-50 rounded-xl border border-brown-100 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                aria-expanded={openIndex === index}
              >
                <h3 className="text-base font-semibold text-brown-800">
                  {faq.question}
                </h3>
                <svg
                  className={`w-5 h-5 text-brown-400 shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-brown-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
