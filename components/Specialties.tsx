"use client";

const specialties = [
  {
    title: "Terapia para Ansiedade",
    description:
      "Tratamento psicológico para ansiedade, crises de pânico e estresse. Estratégias para recuperar o equilíbrio emocional e a qualidade de vida.",
  },
  {
    title: "Depressão",
    description:
      "Suporte terapêutico para depressão e dificuldades emocionais, com abordagem integrativa baseada em evidências.",
  },
  {
    title: "Autoconhecimento",
    description:
      "Processo terapêutico para compreender seus padrões emocionais, fortalecer sua identidade e construir uma vida com mais propósito.",
  },
  {
    title: "Problemas de Relacionamento",
    description:
      "Acompanhamento para quem deseja compreender e melhorar seus vínculos afetivos, comunicação e dinâmicas relacionais.",
  },
  {
    title: "Questões Profissionais e Acadêmicas",
    description:
      "Apoio para lidar com pressões do trabalho, escolhas de carreira, desempenho acadêmico e conflitos no ambiente profissional.",
  },
  {
    title: "Autoestima",
    description:
      "Trabalho terapêutico para fortalecer a relação consigo mesma, reconhecer seu valor e desenvolver uma autoimagem mais saudável.",
  },
  {
    title: "Sentimento de Vazio",
    description:
      "Acolhimento para quem enfrenta falta de propósito, desconexão ou sensação de vazio existencial — buscando novos sentidos para a vida.",
  },
  {
    title: "Luto e Perdas",
    description:
      "Acompanhamento acolhedor para a elaboração de perdas — concretas ou simbólicas — respeitando o tempo de cada processo.",
  },
  {
    title: "Traumas",
    description:
      "Suporte terapêutico para a elaboração de experiências traumáticas, ajudando a ressignificar vivências e recuperar a sensação de segurança.",
  },
  {
    title: "Regulação Emocional",
    description:
      "Desenvolvimento de recursos para identificar, compreender e lidar com suas emoções de forma mais equilibrada no dia a dia.",
  },
  {
    title: "Avaliação Neuropsicológica",
    description:
      "Avaliação das funções cognitivas como memória, atenção e funções executivas. Diagnóstico e planejamento de reabilitação cognitiva.",
  },
];

function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
  const rect = e.currentTarget.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;
  e.currentTarget.style.setProperty("--glow-x", `${x}%`);
  e.currentTarget.style.setProperty("--glow-y", `${y}%`);
}

export default function Specialties() {
  return (
    <section
      id="especialidades"
      className="py-16 md:py-24 bg-brown-800 text-cream-100"
      aria-label="Áreas de atuação da psicóloga"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-brown-300 tracking-[0.2em] uppercase text-xs mb-4">
            Como posso ajudar
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-cream-100 mb-4 font-semibold">
            Áreas de{" "}
            <span className="italic font-normal text-cream-300">atuação</span>
          </h2>
          <div className="w-12 h-px bg-brown-500 mx-auto mb-6" />
          <p className="text-cream-300/80 max-w-2xl mx-auto text-lg">
            Cada pessoa é única. O processo terapêutico é construído de forma
            personalizada, respeitando suas necessidades e seu momento de vida.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((item, index) => (
            <article
              key={item.title}
              onMouseMove={handleMouseMove}
              className="card-glow group relative bg-brown-700/50 backdrop-blur-sm rounded-2xl p-8 transition-all duration-300 border border-brown-600/30 hover:border-brown-500/50"
            >
              <span className="font-display text-5xl text-brown-500/30 absolute top-4 right-6 font-bold">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-2xl text-cream-100 mb-3 font-semibold relative">
                {item.title}
              </h3>
              <p className="text-cream-300/70 leading-relaxed text-sm relative">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
