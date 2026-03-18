import Image from "next/image";

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-cream-50" aria-label="Sobre a psicóloga Gabriela Figer">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-brown-400 tracking-[0.2em] uppercase text-xs mb-4">
            Conheça
          </p>
          <h2 className="font-display text-5xl md:text-6xl text-brown-900 mb-4 font-semibold">
            Sobre a <span className="italic font-normal text-brown-600">psicóloga</span>
          </h2>
          <div className="w-12 h-px bg-brown-300 mx-auto" />
        </div>

        <div className="grid md:grid-cols-5 gap-16 items-center">
          <div className="md:col-span-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-3 rounded-full border border-brown-200/50 border-dashed" />
              <div className="w-52 h-52 rounded-full overflow-hidden shadow-lg">
                <Image
                  src="/gabi.jpeg"
                  alt="Gabriela Figer, psicóloga clínica em São Paulo"
                  width={208}
                  height={208}
                  className="w-full h-full object-cover scale-[1.35]"
                />
              </div>
            </div>
          </div>

          <article className="md:col-span-3 space-y-6">
            <p className="text-brown-800 leading-relaxed text-lg">
              Sou a <strong>Gabriela Figer</strong>,{" "}
              <strong>psicóloga clínica em São Paulo</strong> (CRP 06/216969),
              formada pela <strong>PUC-SP</strong> com pós-graduação em{" "}
              <strong>Neuropsicologia pela USP</strong>, com formação em
              Reabilitação Cognitiva e atuação no Hospital das Clínicas.
            </p>
            <p className="text-brown-700/90 leading-relaxed">
              Minha abordagem é guiada pela{" "}
              <strong>fenomenologia existencial</strong> e pela{" "}
              <strong>psicanálise</strong>, acreditando que cada pessoa carrega
              dentro de si a capacidade de transformação. Apaixonada por cinema e
              arte, encontro nessas linguagens ferramentas poderosas para o
              autoconhecimento.
            </p>
            <p className="text-brown-700/90 leading-relaxed">
              Ofereço <strong>atendimento psicológico online e presencial</strong>,
              criando um espaço de escuta genuína onde você possa explorar suas
              emoções, compreender seus padrões e construir novas possibilidades —
              com acolhimento e no seu tempo.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
