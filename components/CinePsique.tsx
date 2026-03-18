const episodes = [
  { title: "Taxi Driver", subtitle: "Solidão e identidade" },
  { title: "Psicose", subtitle: "O medo e o inconsciente" },
  { title: "Past Lives", subtitle: "Luto e reencontro" },
  { title: "Clube da Luta", subtitle: "Masculinidade e autodestruição" },
  { title: "Whiplash", subtitle: "Obsessão e autoexigência" },
  { title: "A Ghost Story", subtitle: "O luto e a passagem do tempo" },
];

export default function CinePsique() {
  return (
    <section className="py-24 bg-brown-900 text-cream-100" aria-label="Luz Câmera Psique - Cinema e Psicologia">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-brown-400 tracking-[0.2em] uppercase text-xs mb-4">
              Conteúdo
            </p>
            <h2 className="font-display text-5xl md:text-6xl text-cream-100 mb-6 font-bold leading-[0.95]">
              Luz, Câmera,
              <br />
              <span className="italic font-normal text-cream-300">Psiquê</span>
            </h2>
            <p className="text-cream-300/80 leading-relaxed mb-6 text-lg">
              Cinema e arte são ferramentas poderosas de autoconhecimento.
              No <strong>Luz Câmera Psiquê</strong>, analiso filmes sob a ótica
              da psicologia — explorando temas como identidade, relacionamentos,
              luto e saúde mental.
            </p>
            <p className="text-cream-400/60 leading-relaxed mb-8">
              Acompanhe no Instagram para reflexões que conectam a sétima arte
              com a jornada de cada um de nós.
            </p>
            <a
              href="https://instagram.com/psi.gabrielafiger"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-cream-200 hover:text-cream-100 transition-colors font-medium tracking-wide"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              @psi.gabrielafiger
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {episodes.map((ep) => (
              <div
                key={ep.title}
                className="bg-brown-800/80 rounded-xl p-5 border border-brown-700/50 hover:border-brown-600/50 transition-colors"
              >
                <h3 className="font-display text-xl font-bold text-cream-100 mb-1 leading-tight">
                  {ep.title}
                </h3>
                <p className="text-cream-400/60 text-sm italic">{ep.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
