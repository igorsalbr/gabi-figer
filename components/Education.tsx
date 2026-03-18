const timeline = [
  {
    period: "Pós-graduação",
    title: "Neuropsicologia",
    institution: "Universidade de São Paulo (USP)",
    description:
      "Especialização em avaliação neuropsicológica e reabilitação cognitiva, com atuação no Hospital das Clínicas da Faculdade de Medicina da USP.",
  },
  {
    period: "Graduação",
    title: "Psicologia",
    institution: "Pontifícia Universidade Católica de São Paulo (PUC-SP)",
    description:
      "Formação em Psicologia com ênfase em fenomenologia existencial e psicanálise. Base sólida em prática clínica e pesquisa.",
  },
];

export default function Education() {
  return (
    <section id="formacao" className="py-16 md:py-24 bg-cream-100" aria-label="Formação acadêmica">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-brown-400 tracking-[0.2em] uppercase text-xs mb-4">
            Trajetória
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-brown-900 mb-4 font-semibold">
            Formação{" "}
            <span className="italic font-normal text-brown-600">acadêmica</span>
          </h2>
          <div className="w-12 h-px bg-brown-300 mx-auto" />
        </div>

        <div className="space-y-8">
          {timeline.map((item) => (
            <div
              key={item.title}
              className="relative bg-cream-50 rounded-2xl p-8 md:p-10 border border-brown-100 shadow-sm"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="shrink-0">
                  <span className="inline-block text-sm font-semibold text-brown-700 tracking-[0.1em] uppercase bg-brown-100 px-4 py-2 rounded-full">
                    {item.period}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-3xl text-brown-800 mb-1 font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-brown-600 font-medium mb-3 text-base">
                    {item.institution}
                  </p>
                  <p className="text-brown-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
