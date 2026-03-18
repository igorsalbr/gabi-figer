export default function About() {
  return (
    <section id="sobre" className="py-24 bg-sand-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-sage-900 mb-4">
            Sobre mim
          </h2>
          <div className="w-16 h-0.5 bg-sage-400 mx-auto" />
        </div>

        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2 flex justify-center">
            <div className="w-48 h-48 rounded-full bg-sage-100 flex items-center justify-center">
              <span className="font-serif text-5xl text-sage-400">GF</span>
            </div>
          </div>

          <div className="md:col-span-3 space-y-5">
            <p className="text-sage-800 leading-relaxed text-lg">
              Olá! Sou a <strong>Gabriela Figer</strong>, psicóloga clínica
              formada pela <strong>PUC-SP</strong> com pós-graduação em{" "}
              <strong>Neuropsicologia pela USP</strong>.
            </p>
            <p className="text-sage-700/90 leading-relaxed">
              Acredito que cada pessoa carrega dentro de si a capacidade de
              transformação. Meu papel é oferecer um espaço de escuta genuína e
              acolhimento, onde você possa se sentir segura para explorar suas
              emoções, entender seus padrões e construir novas possibilidades.
            </p>
            <p className="text-sage-700/90 leading-relaxed">
              Com uma abordagem integrativa e embasada cientificamente, trabalho
              para que o processo terapêutico seja uma experiência de
              autoconhecimento e crescimento, respeitando o tempo e a
              singularidade de cada pessoa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
