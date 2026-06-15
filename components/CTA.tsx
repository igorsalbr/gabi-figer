import WhatsAppLink, { WhatsAppIcon } from "./WhatsAppLink";

export default function CTA() {
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
        <p className="text-cream-300/80 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          Mande uma mensagem no <strong>WhatsApp</strong> e agende sua{" "}
          <strong>consulta psicológica</strong>. A Gabriela responde
          pessoalmente, sem compromisso.
        </p>

        <div className="flex flex-col items-center gap-4 mb-16">
          <WhatsAppLink
            source="cta"
            ariaLabel="Agendar consulta pelo WhatsApp"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-cream-50 text-brown-800 rounded-full font-medium text-lg hover:bg-cream-100 transition-colors duration-300 tracking-wide"
          >
            <WhatsAppIcon className="w-6 h-6" />
            Chamar no WhatsApp
          </WhatsAppLink>
          <p className="text-cream-400/70 text-sm">
            Atendimento online &middot; segunda a sexta
          </p>
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

            <WhatsAppLink
              source="footer_icon"
              ariaLabel="Contato pelo WhatsApp"
              className="text-brown-400 hover:text-cream-200 transition-colors duration-300"
            >
              <WhatsAppIcon className="w-6 h-6" />
            </WhatsAppLink>
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
