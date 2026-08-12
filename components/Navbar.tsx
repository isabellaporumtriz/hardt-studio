"use client";

import Image from "next/image";
import { useState } from "react";

const navigation = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Como funciona", href: "#processo" },
  { label: "Cases", href: "#cases" },
  { label: "Sobre", href: "#sobre" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/5 bg-[#05050a]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        {/* Logo */}
        <a
          href="#inicio"
          className="group flex items-center gap-3"
          aria-label="Hardt Studio - Página inicial"
          onClick={closeMenu}
        >
          <div className="relative flex h-11 w-11 items-center justify-center">
            <div className="absolute inset-0 rounded-xl bg-violet-600/30 blur-lg transition duration-300 group-hover:bg-violet-500/50" />

            <Image
              src="/logo-hardt-studio.png"
              alt="Símbolo da Hardt Studio"
              width={44}
              height={44}
              priority
              className="relative h-11 w-11 object-contain"
            />
          </div>

          <div className="leading-none">
            <div className="flex items-baseline gap-1">
              <span className="text-lg font-black tracking-tight text-white">
                HARDT
              </span>

              <span className="text-lg font-black tracking-tight text-violet-500">
                .STUDIO
              </span>
            </div>

            <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.28em] text-white/45">
              Marketing digital
            </span>
          </div>
        </a>

        {/* Navegação desktop */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative text-sm font-medium text-white/65 transition duration-300 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Botão desktop */}
        <a
          href="https://api.whatsapp.com/send/?phone=5537958264023&text=Oiii%21%20Quero%20ver%20a%20pr%C3%A9via%20da%20landing%20page%20que%20a%20Hardt%20preparou%20para%20o%20meu%20neg%C3%B3cio%20e%20quero%20entender%20melhor%20como%20funciona%20para%20colocar%20esse%20projeto%20no%20ar.&type=phone_number&app_absent=0"
          target="_blank"
          rel="noreferrer"
          className="group hidden items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-purple-500 px-6 py-3 text-sm font-bold text-white shadow-[0_0_30px_rgba(124,58,237,0.25)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(124,58,237,0.45)] lg:flex"
        >
          Falar com especialista

          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            <path
              d="M5 12H19M13 6L19 12L13 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>

        {/* Botão menu mobile */}
        <button
          type="button"
          onClick={() => setMenuOpen((current) => !current)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white lg:hidden"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg
              width="23"
              height="23"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M6 6L18 18M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M4 7H20M4 12H20M4 17H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Menu mobile */}
      <div
        className={`overflow-hidden border-t border-white/5 bg-[#07070d]/95 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          menuOpen
            ? "max-h-[500px] opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 sm:px-8">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 text-sm font-semibold text-white/70 transition hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </a>
          ))}

          <a
            href="https://api.whatsapp.com/send/?phone=5537958264023&text=Oiii%21%20Quero%20ver%20a%20pr%C3%A9via%20da%20landing%20page%20que%20a%20Hardt%20preparou%20para%20o%20meu%20neg%C3%B3cio%20e%20quero%20entender%20melhor%20como%20funciona%20para%20colocar%20esse%20projeto%20no%20ar.&type=phone_number&app_absent=0"
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
            className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-purple-500 px-5 py-4 text-sm font-bold text-white"
          >
            Falar com especialista

            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M5 12H19M13 6L19 12L13 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </nav>
      </div>
    </header>
  );
}
