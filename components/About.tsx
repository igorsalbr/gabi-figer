import Image from "next/image";

export default function About() {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-cream-50" aria-label="Sobre a psicóloga Gabriela Figer">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-brown-400 tracking-[0.2em] uppercase text-xs mb-4">
            Quem sou eu
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-brown-900 mb-4 font-semibold">
            Conheça sua{" "}
            <span className="italic font-normal text-brown-600">psicóloga</span>
          </h2>
          <div className="w-12 h-px bg-brown-300 mx-auto" />
        </div>

        <div className="grid md:grid-cols-5 gap-16 items-center">
          <div className="md:col-span-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-3 rounded-full border border-brown-200/50 border-dashed ring-spin" />
              <div className="w-52 h-52 rounded-full overflow-hidden shadow-lg">
                <Image
                  src="/gabi2.jpeg"
                  alt="Gabriela Figer, psicóloga clínica em São Paulo"
                  width={208}
                  height={208}
                  className="w-full h-full object-cover object-[center_25%]"
                />
              </div>
            </div>
          </div>

          <article className="md:col-span-3 space-y-6">
            <p className="text-brown-800 leading-relaxed text-lg">
              Sou a <strong>Gabriela Figer</strong>,{" "}
              <strong>psicóloga clínica</strong> (CRP 06/216969), formada pela{" "}
              <strong>PUC-SP</strong> e pós-graduanda em{" "}
              <strong>Neuropsicologia pela USP</strong>, com formação em
              Reabilitação Cognitiva e atuação no Hospital das Clínicas.
            </p>
            <p className="text-brown-700/90 leading-relaxed">
              Com uma escuta orientada pela{" "}
              <strong>fenomenologia existencial</strong> e pela{" "}
              <strong>psicanálise</strong>, acredito que o encontro terapêutico é
              onde as coisas podem, finalmente, ser ditas, sentidas e
              transformadas — sem julgamentos e no seu ritmo.
            </p>
            <p className="text-brown-700/90 leading-relaxed">
              Apaixonada por cinema e arte, encontro nessas linguagens uma forma
              única de acessar o que há de mais profundo em nós — afinal, o que
              sentimos já pode ter sido pintado, escrito, filmado ou cantado por
              alguém.
            </p>
            <p className="text-brown-600/80 leading-relaxed italic">
              A arte é o uso da emoção como matéria-prima — o que dói em um,
              toca muitos.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
