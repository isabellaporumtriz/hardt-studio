"use client";

import HeroBenefits from "./HeroBenefits";
import PhoneMockup from "./PhoneMockup";
import Reveal from "./Reveal";
import StaggerReveal, { StaggerItem } from "./StaggerReveal";

const trustItems = [
  "Estratégia personalizada",
  "Atendimento humano",
  "Foco em crescimento",
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-[#05050a] pb-16 pt-24 text-white sm:pt-28 lg:pb-20 lg:pt-28"
    >
      {/* Fundo */}
      <div className="pointer-events-none absolute inset-0">
        <div className="hero-grid absolute inset-0 opacity-25" />

        <div className="absolute left-[6%] top-24 h-72 w-72 rounded-full bg-violet-700/10 blur-[120px]" />

        <div className="absolute right-[4%] top-28 h-[460px] w-[460px] rounded-full bg-purple-600/20 blur-[155px]" />

        <div className="absolute bottom-[-120px] left-1/2 h-72 w-[70%] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[140px]" />

        <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-black/40 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-12 overflow-visible lg:grid-cols-[1fr_1fr] lg:gap-0">
          {/* Conteúdo */}
          <div className="relative z-20 max-w-2xl">
            {/* Badge */}
            <Reveal>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/25 bg-violet-500/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-violet-300 backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-400 shadow-[0_0_12px_rgba(167,139,250,0.95)]" />

                Estratégia · criação · resultados
              </div>
            </Reveal>

            {/* Título */}
            <Reveal delay={0.08}>
              <h1 className="max-w-[720px] text-5xl font-black leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-[72px]">
                Marcas que{" "}
                <span className="bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
                  crescem,
                </span>
                <br />
                resultados que{" "}
                <span className="bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
                  aparecem.
                </span>
              </h1>
            </Reveal>

            {/* Descrição */}
            <Reveal delay={0.16}>
              <p className="mt-7 max-w-xl text-base leading-7 text-white/60 sm:text-lg">
                Criamos estratégias completas de marketing digital, conteúdos
                que conectam e experiências que transformam atenção em
                crescimento para sua empresa.
              </p>
            </Reveal>

            {/* Botões */}
            <StaggerReveal
              delay={0.24}
              className="mt-9 flex flex-col gap-4 sm:flex-row"
            >
              <StaggerItem>
                <a
                  href="#contato"
                  className="group flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-purple-500 px-7 py-4 text-sm font-bold text-white shadow-[0_0_35px_rgba(124,58,237,0.3)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_50px_rgba(124,58,237,0.5)]"
                >
                  Quero acelerar minha marca
                </a>
              </StaggerItem>

              <StaggerItem>
                <a
                  href="#cases"
                  className="group flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/[0.035] px-7 py-4 text-sm font-bold text-white backdrop-blur-md transition duration-300 hover:border-violet-400/45 hover:bg-violet-500/10"
                >
                  Ver nossos projetos
                </a>
              </StaggerItem>
            </StaggerReveal>

            {/* Benefícios menores */}
            <StaggerReveal
              delay={0.42}
              className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3"
            >
              {trustItems.map((item) => (
                <StaggerItem key={item}>
                  <span className="flex items-center gap-2 text-xs text-white/40">
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M5 12L10 17L19 8"
                        stroke="#A78BFA"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    {item}
                  </span>
                </StaggerItem>
              ))}
            </StaggerReveal>
          </div>

          {/* Mockup */}
          <Reveal delay={0.55} direction="right">
            <div className="relative z-10 flex min-h-[500px] w-full items-center justify-center overflow-visible lg:min-h-[580px]">
              <PhoneMockup />
            </div>
          </Reveal>
        </div>

        {/* Benefícios inferiores */}
        <Reveal delay={0.68}>
          <HeroBenefits />
        </Reveal>
      </div>
    </section>
  );
}