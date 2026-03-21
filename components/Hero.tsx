import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center bg-cream-100 overflow-hidden"
      aria-label="Apresentação"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-20 -right-32 w-96 h-96 bg-brown-100/40 rounded-full blur-3xl blob-1" />
        <div className="absolute -bottom-40 -left-20 w-125 h-125 bg-cream-300/50 rounded-full blur-3xl blob-2" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-brown-200/20 rounded-full blur-2xl blob-3" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="order-2 md:order-1">
          <div className="hero-text-enter">
            <p className="text-brown-500 font-medium tracking-[0.2em] uppercase text-xs mb-6">
              Psicóloga Clínica &middot; CRP 06/216969
            </p>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-brown-900 leading-[0.95] mb-8 font-semibold">
              Gabriela
              <br />
              <span className="italic font-normal text-brown-700">Figer</span>
            </h1>
          </div>
          <div className="hero-text-enter-delay">
            <p className="text-lg md:text-xl text-brown-700/80 leading-relaxed mb-4 max-w-lg">
              <strong>Psicóloga em São Paulo</strong> com formação pela PUC-SP e
              pós-graduanda em <strong>Neuropsicologia pela USP</strong>.
            </p>
            <p className="text-base text-brown-600/70 leading-relaxed mb-4 max-w-lg">
              <strong>Atendimento online</strong> — um espaço seguro para você
              se expressar e encontrar novos sentidos.
            </p>
            <p className="text-sm text-brown-600/60 leading-relaxed mb-4 max-w-lg">
              Orientada pela Fenomenologia e Psicanálise, atendo adolescentes e
              adultos que buscam escuta atenta e acolhimento. Você não precisa
              carregar tudo sozinho. Estou aqui para caminhar ao seu lado em
              direção a uma vida com mais leveza.
            </p>
            <p className="text-sm text-brown-500/60 mb-10 max-w-lg">
              Ansiedade &middot; Depressão &middot; Autoconhecimento &middot;
              Relacionamentos &middot; Avaliação neuropsicológica
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://linktr.ee/psi.gabrielafiger"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-brown-800 text-cream-100 rounded-full font-medium hover:bg-brown-900 transition-colors duration-300 tracking-wide"
              >
                Agendar consulta
              </a>
              <a
                href="#sobre"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-brown-300 text-brown-700 rounded-full font-medium hover:bg-brown-50 transition-colors duration-300 tracking-wide"
              >
                Saiba mais
              </a>
            </div>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center hero-photo-enter">
          <div className="relative">
            <div className="absolute -inset-4 rounded-full border-2 border-brown-200/50 border-dashed ring-spin" />
            <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl shadow-brown-200/30 bg-[#f0ece6]">
              <Image
                src="/final.png"
                alt="Psicóloga Gabriela Figer - Atendimento em São Paulo"
                width={640}
                height={640}
                className="w-full h-full object-cover object-[48%_25%]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
