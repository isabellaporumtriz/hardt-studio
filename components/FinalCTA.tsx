"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import StaggerReveal, { StaggerItem } from "./StaggerReveal";

const benefits = [
  "Estratégia personalizada",
  "Atendimento próximo",
  "Execução profissional",
];

function CheckIcon() {
  return (
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
  );
}

function ArrowIcon() {
  return (
    <svg
      width="18"
      height="18"
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
  );
}

export default function FinalCTA() {
  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-[#f7f7fa] py-24 text-[#111119]"
    >
      {/* Decoração externa estática */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-violet-200/35 blur-[130px]" />

        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-purple-200/30 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal>
          <motion.div
            className="relative overflow-hidden rounded-[36px] bg-[#08080f] px-6 py-16 text-white shadow-[0_35px_120px_rgba(45,20,100,0.2)] sm:px-10 lg:px-16 lg:py-20"
            whileHover={{
              y: -4,
              boxShadow: "0 45px 135px rgba(45,20,100,0.28)",
            }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* Fundo interno totalmente estático */}
            <div className="pointer-events-none absolute inset-0">
              <div className="hero-grid absolute inset-0 opacity-20" />

              <div className="absolute -left-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-violet-600/25 blur-[120px]" />

              <div className="absolute -right-20 top-0 h-80 w-80 rounded-full bg-fuchsia-600/20 blur-[130px]" />

              <div className="absolute bottom-[-130px] left-1/2 h-72 w-[75%] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[130px]" />

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_20%,rgba(255,255,255,0.08),transparent_28%)]" />
            </div>

            <div className="relative grid items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-10">
              {/* Texto */}
              <div className="max-w-3xl">
                <Reveal>
                  <span className="inline-flex rounded-full border border-violet-400/25 bg-violet-500/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-violet-300">
                    Sua marca pode ir além
                  </span>
                </Reveal>

                <Reveal delay={0.12}>
                  <h2 className="mt-6 text-4xl font-black leading-[1.02] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                    Pronto para transformar sua{" "}
                    <span className="bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
                      presença digital?
                    </span>
                  </h2>
                </Reveal>

                <Reveal delay={0.24}>
                  <p className="mt-6 max-w-2xl text-base leading-7 text-white/55 sm:text-lg">
                    Vamos construir uma estratégia sob medida para posicionar
                    sua marca, comunicar melhor e gerar novas oportunidades de
                    crescimento.
                  </p>
                </Reveal>

                <StaggerReveal
                  delay={0.34}
                  className="mt-8 flex flex-wrap gap-x-6 gap-y-3"
                >
                  {benefits.map((item) => (
                    <StaggerItem key={item}>
                      <motion.span
                        className="flex items-center gap-2 text-xs text-white/45"
                        whileHover={{
                          x: 4,
                          color: "rgba(255,255,255,0.8)",
                        }}
                        transition={{
                          duration: 0.25,
                        }}
                      >
                        <motion.span
                          whileHover={{
                            scale: 1.15,
                            rotate: -4,
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 18,
                          }}
                        >
                          <CheckIcon />
                        </motion.span>

                        {item}
                      </motion.span>
                    </StaggerItem>
                  ))}
                </StaggerReveal>
              </div>

              {/* Ação */}
              <Reveal delay={0.34} direction="right">
                <motion.div
                  className="relative lg:min-w-[310px]"
                  whileHover={{
                    y: -6,
                    scale: 1.015,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 220,
                    damping: 18,
                  }}
                >
                  {/* Glow estático */}
                  <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-violet-600/20 opacity-70 blur-3xl" />

                  <div className="relative rounded-[28px] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl sm:p-7">
                    <p className="text-sm font-bold text-white">
                      Fale com a Hardt Studio
                    </p>

                    <p className="mt-2 text-xs leading-5 text-white/40">
                      Conte um pouco sobre seu negócio e receba uma proposta
                      personalizada.
                    </p>

                    <motion.a
                      href="https://wa.me/5512999999999?text=Olá!%20Quero%20conhecer%20os%20serviços%20da%20Hardt%20Studio."
                      target="_blank"
                      rel="noreferrer"
                      className="group relative mt-6 flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-violet-600 to-purple-500 px-6 py-4 text-sm font-bold text-white shadow-[0_0_35px_rgba(124,58,237,0.32)]"
                      whileHover={{
                        y: -4,
                        scale: 1.02,
                        boxShadow: "0 0 55px rgba(124,58,237,0.55)",
                      }}
                      whileTap={{
                        scale: 0.97,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                    >
                      {/* Brilho apenas quando passa o mouse */}
                      <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
                        <span className="absolute inset-y-0 -left-[40%] w-[30%] -skew-x-12 bg-white/20 blur-md transition-transform duration-700 ease-out group-hover:translate-x-[500%]" />
                      </span>

                      <span className="relative">
                        Solicitar uma proposta
                      </span>

                      <motion.span
                        className="relative transition-transform duration-300 group-hover:translate-x-1"
                        aria-hidden="true"
                      >
                        <ArrowIcon />
                      </motion.span>
                    </motion.a>

                    <motion.a
                      href="#servicos"
                      className="mt-3 flex w-full items-center justify-center rounded-full border border-white/10 bg-white/[0.025] px-6 py-4 text-sm font-bold text-white/70"
                      whileHover={{
                        y: -2,
                        borderColor: "rgba(167,139,250,0.45)",
                        backgroundColor: "rgba(139,92,246,0.1)",
                        color: "#ffffff",
                      }}
                      whileTap={{
                        scale: 0.98,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                    >
                      Rever os serviços
                    </motion.a>

                    <p className="mt-4 text-center text-[10px] text-white/25">
                      Atendimento comercial via WhatsApp
                    </p>
                  </div>
                </motion.div>
              </Reveal>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}