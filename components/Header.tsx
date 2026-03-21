"use client";

import { useState, useEffect } from "react";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#especialidades", label: "Especialidades" },
  { href: "#formacao", label: "Formação" },
  // { href: "#depoimentos", label: "Depoimentos" },
  { href: "#faq", label: "Dúvidas" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream-50/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav
        className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between"
        aria-label="Navegação principal"
      >
        <a href="#" className="font-display text-2xl font-semibold text-brown-800 tracking-wide">
          Gabriela Figer
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-brown-600 hover:text-brown-800 transition-colors duration-200 tracking-wide uppercase"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-brown-700"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu de navegação"
          aria-expanded={menuOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-cream-50/98 backdrop-blur-md border-t border-brown-100">
          <ul className="flex flex-col p-6 gap-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-brown-700 hover:text-brown-900 transition-colors font-display text-lg"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
