"use client";

import Reveal from "./Reveal";
import StaggerReveal, { StaggerItem } from "./StaggerReveal";

const services = [
  {
    title: "Gestão de Instagram",
    description:
      "Cuidamos de todo o perfil, do planejamento à publicação.",
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="4"
          y="4"
          width="6"
          height="6"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="2"
        />
        <rect
          x="14"
          y="4"
          width="6"
          height="6"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="2"
        />
        <rect
          x="4"
          y="14"
          width="6"
          height="6"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="2"
        />
        <rect
          x="14"
          y="14"
          width="6"
          height="6"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    title: "Criação de Conteúdo",
    description:
      "Fotos, vídeos, artes e legendas que conectam e geram engajamento.",
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M4 20L8.2 19L18.4 8.8C19.2 8 19.2 6.8 18.4 6L18 5.6C17.2 4.8 16 4.8 15.2 5.6L5 15.8L4 20Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.7 7L17 10.3"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    title: "Sites e Landing Pages",
    description:
      "Páginas estratégicas que convertem leads e aumentam suas vendas.",
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="3"
          y="5"
          width="18"
          height="14"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path d="M3 9H21" stroke="currentColor" strokeWidth="2" />
        <circle cx="6.5" cy="7" r="0.8" fill="currentColor" />
        <circle cx="9" cy="7" r="0.8" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Tráfego Pago",
    description:
      "Campanhas que atraem o público certo e geram mais resultados.",
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M4 18L9 13L13 16L20 8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 8H20V13"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Estratégia Digital",
    description:
      "Planejamento completo para escalar sua marca no ambiente digital.",
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M14 5C17 2 21 3 21 3C21 3 22 7 19 10L14 15L9 10L14 5Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 10L5 11L3 14L8 15"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 15L13 19L10 21L9 16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="16.5" cy="7.5" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section
      id="servicos"
      className="relative overflow-hidden bg-[#f7f7fa] py-24 text-[#111119]"
    >
      {/* Decoração */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-violet-200/35 blur-[120px]" />

        <div className="absolute right-[-80px] top-32 h-80 w-80 rounded-full bg-purple-200/30 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Cabeçalho */}
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex rounded-full bg-violet-100 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-violet-600">
                Nossos serviços
              </span>

              <h2 className="mt-5 text-4xl font-black leading-[1.02] tracking-[-0.04em] sm:text-5xl">
                Tudo que sua marca precisa para{" "}
                <span className="bg-gradient-to-r from-violet-600 to-purple-500 bg-clip-text text-transparent">
                  crescer no digital
                </span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-black/55 sm:text-base">
              Soluções completas e personalizadas para levar sua marca ao
              próximo nível com estratégia, criatividade e execução.
            </p>
          </div>
        </Reveal>

        {/* Cards */}
        <StaggerReveal className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <article className="group relative min-h-[250px] overflow-hidden rounded-3xl border border-black/[0.05] bg-white p-6 shadow-[0_20px_50px_rgba(40,20,90,0.06)] transition duration-500 hover:-translate-y-3 hover:scale-[1.03] hover:shadow-[0_35px_80px_rgba(85,40,180,0.18)]">
                <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-violet-100/0 blur-3xl transition duration-700 group-hover:bg-violet-200/70" />

                <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-50 text-violet-600 transition duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-violet-600 group-hover:text-white">
                  {service.icon}
                </div>

                <h3 className="relative mt-8 text-base font-bold leading-5">
                  {service.title}
                </h3>

                <p className="relative mt-4 text-sm leading-6 text-black/50">
                  {service.description}
                </p>

                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-violet-600 to-fuchsia-500 transition-all duration-700 group-hover:w-full" />
              </article>
            </StaggerItem>
          ))}
        </StaggerReveal>

        {/* Botão */}
        <Reveal delay={0.2}>
          <div className="mt-10 flex justify-center">
            <a
              href="#contato"
              className="group inline-flex items-center gap-2 rounded-full border border-violet-300 bg-white px-6 py-3.5 text-sm font-bold text-violet-600 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-violet-500 hover:bg-violet-600 hover:text-white"
            >
              Conhecer todos os serviços

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
          </div>
        </Reveal>
      </div>
    </section>
  );
}