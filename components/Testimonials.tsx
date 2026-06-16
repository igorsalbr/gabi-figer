const testimonials = [
  {
    text: "É a primeira vez que consegui me abrir de verdade para uma psicóloga, o ambiente que ela cria proporciona isso.",
    author: "Homem, 37 anos",
  },
  {
    text: "Desde que faço os atendimentos com ela senti muita coisa mudando na minha percepção comigo mesma, até pessoas de fora já comentaram sobre como eu mudei.",
    author: "Mulher, 26 anos",
  },
  {
    text: "Me sinto muito à vontade em compartilhar minhas questões com a Gabriela. Ela proporciona um espaço seguro e importante pra mim.",
    author: "Homem, 29 anos",
  },
  {
    text: "Queria te agradecer pela sessão de ontem. Foi muito bom e importante pra mim poder falar e me expressar, saí me sentindo mais leve e feliz. Obrigada pela escuta e pelo cuidado sempre 🤍",
    author: "Menina, 16 anos",
  },
  {
    text: "Eu tinha dificuldade de concentração há anos e não sabia bem o que estava acontecendo. A avaliação neuropsicológica com a Gabriela foi o que finalmente me deu clareza — entendi como minha mente funciona e o que fazer a partir disso.",
    author: "Mulher, 34 anos",
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

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((item, index) => (
            <article
              key={index}
              className="bg-cream-100 rounded-2xl p-6 sm:p-8 border border-brown-100"
            >
              <span className="font-display text-6xl text-brown-200 leading-none block mb-4">&ldquo;</span>
              <blockquote>
                <p className="text-brown-700 leading-relaxed -mt-4">
                  {item.text}
                </p>
                <footer className="mt-4 text-sm text-brown-500/70">
                  — {item.author}
                </footer>
              </blockquote>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
