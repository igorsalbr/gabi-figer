export default function CTA() {
  const whatsappNumber = "5511987788966";
  const whatsappMessage = encodeURIComponent(
    "Olá, Gabriela! Gostaria de agendar uma consulta."
  );

  return (
    <footer id="contato" className="relative py-16 md:py-24 bg-brown-800 overflow-hidden" role="contentinfo">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-brown-700/30 rounded-full blur-3xl blob-1" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-brown-900/40 rounded-full blur-3xl blob-2" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <p className="text-brown-400 tracking-[0.2em] uppercase text-xs mb-4">
          Primeiro passo
        </p>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-cream-100 mb-6 font-semibold">
          Vamos{" "}
          <span className="italic font-normal text-cream-300">conversar?</span>
        </h2>
        <p className="text-cream-300/80 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
          Agende sua <strong>consulta psicológica online ou presencial</strong>{" "}
          e comece sua jornada de autoconhecimento e transformação.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-cream-50 text-brown-800 rounded-full font-medium hover:bg-cream-100 transition-colors duration-300 tracking-wide"
            aria-label="Agendar consulta pelo WhatsApp"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp
          </a>

          <a
            href="https://linktr.ee/psi.gabrielafiger"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-cream-300/30 text-cream-100 rounded-full font-medium hover:bg-cream-100/10 transition-colors duration-300 tracking-wide"
          >
            Agendar online
          </a>
        </div>

        <address className="not-italic">
          <div className="flex items-center justify-center gap-8 mb-6">
            <a
              href="https://instagram.com/psi.gabrielafiger"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brown-400 hover:text-cream-200 transition-colors duration-300"
              aria-label="Siga no Instagram @psi.gabrielafiger"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brown-400 hover:text-cream-200 transition-colors duration-300"
              aria-label="Contato pelo WhatsApp"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
          </div>

          <p className="text-cream-300/70 text-sm mb-2">
            <a href="mailto:gabriela.figer@gmail.com" className="hover:text-cream-100 transition-colors">
              gabriela.figer@gmail.com
            </a>
          </p>
        </address>

        <div className="mt-12 pt-8 border-t border-brown-700/50">
          <p className="text-cream-400/60 text-sm">
            Gabriela Figer &middot; Psicóloga &middot; CRP 06/216969 &middot; São Paulo, SP
          </p>
        </div>
      </div>
    </footer>
  );
}
