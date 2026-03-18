const testimonials = [
  {
    text: "A Gabriela me ajudou a enxergar caminhos que eu não conseguia ver sozinha. O espaço da terapia se tornou um lugar de acolhimento verdadeiro.",
    author: "M.S.",
    detail: "Paciente há 1 ano",
  },
  {
    text: "Encontrei na Gabi uma profissional que realmente escuta. Me sinto segura para falar sobre qualquer coisa, sem julgamento.",
    author: "A.R.",
    detail: "Paciente há 2 anos",
  },
  {
    text: "A terapia com a Gabriela transformou a minha relação comigo mesma. Aprendi a me respeitar e a estabelecer limites saudáveis.",
    author: "L.C.",
    detail: "Paciente há 6 meses",
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 bg-warm-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-sage-900 mb-4">
            Depoimentos
          </h2>
          <div className="w-16 h-0.5 bg-sage-400 mx-auto mb-6" />
          <p className="text-sage-600 max-w-2xl mx-auto">
            O que dizem sobre o processo terapêutico
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.author}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-sand-200"
            >
              <svg
                className="w-8 h-8 text-sage-300 mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-sage-700 leading-relaxed mb-6 italic">
                &ldquo;{item.text}&rdquo;
              </p>
              <div>
                <p className="font-medium text-sage-800">{item.author}</p>
                <p className="text-sage-500 text-sm">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
