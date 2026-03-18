const testimonials = [
  {
    text: "A Gabriela me ajudou a enxergar caminhos que eu não conseguia ver sozinha. O espaço da terapia se tornou um lugar de acolhimento verdadeiro, onde me sinto segura para ser quem sou.",
    author: "M.S.",
    detail: "Paciente há 1 ano",
  },
  {
    text: "Encontrei na Gabi uma profissional que realmente escuta. A terapia transformou minha forma de lidar com a ansiedade e me deu ferramentas para o dia a dia.",
    author: "A.R.",
    detail: "Paciente há 2 anos",
  },
  {
    text: "O processo terapêutico com a Gabriela mudou minha relação comigo mesma. Aprendi a me respeitar, estabelecer limites saudáveis e viver com mais leveza.",
    author: "L.C.",
    detail: "Paciente há 6 meses",
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-cream-50" aria-label="Depoimentos de pacientes">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-brown-400 tracking-[0.2em] uppercase text-xs mb-4">
            Relatos
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-brown-900 mb-4 font-semibold">
            O que dizem sobre a{" "}
            <span className="italic font-normal text-brown-600">terapia</span>
          </h2>
          <div className="w-12 h-px bg-brown-300 mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <article
              key={item.author}
              className="bg-cream-100 rounded-2xl p-6 sm:p-8 border border-brown-100"
            >
              <span className="font-display text-6xl text-brown-200 leading-none block mb-4">&ldquo;</span>
              <blockquote>
                <p className="text-brown-700 leading-relaxed mb-8 -mt-4">
                  {item.text}
                </p>
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brown-200 flex items-center justify-center">
                  <span className="font-display text-sm text-brown-600 font-semibold">
                    {item.author}
                  </span>
                </div>
                <p className="text-brown-400 text-sm">{item.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
