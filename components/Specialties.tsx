"use client";

const specialties = [
  {
    title: "Ansiedade",
    description:
      "Trabalho com pessoas que vivem sob tensão constante, crises de ansiedade e dificuldade de desacelerar. Juntos, buscamos formas de recuperar o equilíbrio emocional e a qualidade de vida.",
  },
  {
    title: "Depressão",
    description:
      "Acompanho pessoas que estão atravessando momentos de muita dor, vazio ou desânimo. Ofereço um espaço seguro para que esse sofrimento possa ser acolhido e elaborado.",
  },
  {
    title: "Autoconhecimento",
    description:
      "Ajudo você a compreender seus padrões emocionais, fortalecer sua identidade e construir uma vida com mais sentido — no seu ritmo, sem pressa.",
  },
  {
    title: "Problemas de Relacionamento",
    description:
      "Trabalho com quem deseja entender melhor seus vínculos afetivos, sua forma de se comunicar e os padrões que se repetem nas relações.",
  },
  {
    title: "Questões Profissionais e Acadêmicas",
    description:
      "Acompanho pessoas que enfrentam pressão no trabalho, dificuldades acadêmicas, dúvidas sobre carreira ou conflitos no ambiente profissional.",
  },
  {
    title: "Autoestima",
    description:
      "Trabalho com quem quer fortalecer a relação consigo mesmo, reconhecer seu valor e desenvolver uma autoimagem mais honesta e gentil.",
  },
  {
    title: "Sentimento de Vazio",
    description:
      "Acolho quem enfrenta falta de propósito, desconexão ou aquela sensação difícil de nomear — e que, juntos, tentamos transformar em novos sentidos.",
  },
  {
    title: "Luto e Perdas",
    description:
      "Acompanho processos de luto — concretos ou simbólicos — com cuidado e sem pressa. Cada perda tem seu tempo, e estou aqui para caminhar ao seu lado nesse processo.",
  },
  {
    title: "Traumas",
    description:
      "Trabalho com a elaboração de experiências traumáticas, ajudando a ressignificar o que foi vivido e a recuperar a sensação de segurança no próprio corpo e na própria história.",
  },
  {
    title: "Regulação Emocional",
    description:
      "Ajudo você a identificar, compreender e lidar com suas emoções de forma mais equilibrada — desenvolvendo recursos que fazem diferença no dia a dia.",
  },
  {
    title: "Avaliação Neuropsicológica",
    description:
      "Realizo avaliações das funções cognitivas — memória, atenção, linguagem e funções executivas — com diagnóstico detalhado e, quando necessário, um plano de reabilitação cognitiva individualizado.",
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
