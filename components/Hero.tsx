export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-warm-50">
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <p className="text-sage-600 font-medium tracking-wide uppercase text-sm mb-4">
            Psicóloga Clínica &middot; CRP 06/216969
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-sage-900 leading-tight mb-6">
            Gabriela
            <br />
            Figer
          </h1>
          <p className="text-lg md:text-xl text-sage-700/80 leading-relaxed mb-8 max-w-lg">
            Um espaço seguro para você se reconectar consigo mesma e encontrar
            novos caminhos com acolhimento e cuidado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://linktr.ee/psi.gabrielafiger"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-sage-600 text-white rounded-full font-medium hover:bg-sage-700 transition-colors duration-300"
            >
              Agendar consulta
            </a>
            <a
              href="#sobre"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-sage-300 text-sage-700 rounded-full font-medium hover:bg-sage-50 transition-colors duration-300"
            >
              Saiba mais
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-sage-100 flex items-center justify-center shadow-lg">
            <span className="font-serif text-6xl md:text-7xl text-sage-500">
              GF
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
