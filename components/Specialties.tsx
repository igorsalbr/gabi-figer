const specialties = [
  {
    title: "Ansiedade e Estresse",
    description:
      "Estratégias para lidar com preocupações excessivas, crises de ansiedade e o impacto do estresse no dia a dia.",
    icon: "🌿",
  },
  {
    title: "Autoconhecimento",
    description:
      "Um processo de descoberta pessoal para entender seus padrões emocionais e desenvolver uma relação mais saudável consigo mesma.",
    icon: "🌱",
  },
  {
    title: "Relacionamentos",
    description:
      "Trabalho terapêutico focado em vínculos afetivos, comunicação e construção de relações mais saudáveis.",
    icon: "🌻",
  },
  {
    title: "Neuropsicologia",
    description:
      "Avaliação e reabilitação neuropsicológica com foco nas funções cognitivas como memória, atenção e funções executivas.",
    icon: "🧠",
  },
  {
    title: "Luto e Perdas",
    description:
      "Acompanhamento acolhedor no processo de elaboração de perdas, sejam elas concretas ou simbólicas.",
    icon: "🍂",
  },
  {
    title: "Desenvolvimento Pessoal",
    description:
      "Suporte para transições de vida, tomada de decisões e construção de uma vida com mais propósito e equilíbrio.",
    icon: "✨",
  },
];

export default function Specialties() {
  return (
    <section id="especialidades" className="py-24 bg-warm-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-sage-900 mb-4">
            Áreas de atuação
          </h2>
          <div className="w-16 h-0.5 bg-sage-400 mx-auto mb-6" />
          <p className="text-sage-600 max-w-2xl mx-auto text-lg">
            Cada pessoa é única, e o processo terapêutico é construído de forma
            personalizada para atender às suas necessidades.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((item) => (
            <div
              key={item.title}
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-sage-100"
            >
              <span className="text-3xl mb-4 block">{item.icon}</span>
              <h3 className="font-serif text-xl text-sage-800 mb-3">
                {item.title}
              </h3>
              <p className="text-sage-600 leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
