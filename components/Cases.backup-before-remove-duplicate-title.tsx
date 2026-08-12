"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import StaggerReveal, { StaggerItem } from "./StaggerReveal";

const cases = [
  {
    category: "Landing Page · Estética",
    title: "Mônica Souza",
    description:
      "Experiência digital desenvolvida para transmitir sofisticação, confiança e autoridade, valorizando o posicionamento da profissional e facilitando a jornada até o agendamento.",
    result: "Mais autoridade e percepção de valor",
    gradient: "from-[#2c3023] via-[#73633d] to-[#11130d]",
    mockup: "MS",
    href: "https://monica-souza-lp.vercel.app/",
  },
  {
    category: "Landing Page · Arquitetura",
    title: "MADEH Arquitetura",
    description:
      "Uma presença digital sofisticada para traduzir a identidade do escritório, valorizar seus projetos e criar uma experiência coerente com o público de alto padrão.",
    result: "Posicionamento digital mais premium",
    gradient: "from-[#271d18] via-[#756255] to-[#15110f]",
    mockup: "MADEH",
    href: "https://madeh-estudio.vercel.app/",
  },
  {
    category: "Site · Instrumentos Musicais",
    title: "Imperial Instrumentos",
    description:
      "Experiência digital criada para apresentar produtos com mais clareza, fortalecer a marca e tornar a jornada do cliente mais profissional do primeiro contato à decisão.",
    result: "Experiência de marca mais profissional",
    gradient: "from-[#171717] via-[#40372b] to-[#080808]",
    mockup: "IMP",
    href: "https://imperial-instrumentos.vercel.app/",
  },
];

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

export default function Cases() {
  return (
    <section
      id="cases"
      className="relative overflow-hidden bg-[#f7f7fa] py-24 text-[#111119]"
    >
      {/* Decoração animada */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -left-32 top-16 h-80 w-80 rounded-full bg-violet-200/30 blur-[130px]"
          animate={{
            x: [0, 35, 0],
            y: [0, -22, 0],
            scale: [1, 1.12, 1],
            opacity: [0.35, 0.65, 0.35],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-purple-200/25 blur-[150px]"
          animate={{
            x: [0, -30, 0],
            y: [0, 25, 0],
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Cabeçalho */}
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex rounded-full bg-violet-100 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-violet-600">
                Projetos selecionados
              </span>

              <h2 className="mt-5 text-4xl font-black leading-[1.02] tracking-[-0.04em] sm:text-5xl">
                Marcas que ganharam uma nova{" "}
                <span className="bg-gradient-to-r from-violet-600 to-purple-500 bg-clip-text text-transparent">
                  presença digital
                </span>
              </h2>
            </div>

            <div className="flex flex-col items-start gap-5 lg:items-end">
              <p className="max-w-md text-sm leading-6 text-black/55 sm:text-base">
                Projetos desenvolvidos com estratégia, identidade e foco em
                transformar atenção em oportunidades comerciais.
              </p>

              <motion.a
                href="#contato"
                className="group inline-flex items-center gap-2 rounded-full border border-violet-300 bg-white px-5 py-3 text-sm font-bold text-violet-600"
                whileHover={{
                  y: -3,
                  scale: 1.03,
                  backgroundColor: "#7c3aed",
                  color: "#ffffff",
                  borderColor: "#7c3aed",
                }}
                whileTap={{
                  scale: 0.97,
                }}
                transition={{
                  duration: 0.25,
                }}
              >
                Quero um projeto assim

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowIcon />
                </span>
              </motion.a>
            </div>
          </div>
        </Reveal>

        {/* Cards */}
        <StaggerReveal className="mt-14 grid gap-6 lg:grid-cols-3">
          {cases.map((project, index) => (
            <StaggerItem key={project.title} className="h-full">
              <motion.a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Abrir projeto ${project.title}`}
                className="group relative block min-h-[520px] cursor-pointer overflow-hidden rounded-[30px] border border-black/[0.06] bg-[#09090f] shadow-[0_24px_70px_rgba(30,15,70,0.12)]"
                initial={{
                  opacity: 0,
                  y: 45,
                  x: index === 0 ? -35 : index === 2 ? 35 : 0,
                  scale: 0.96,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  x: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                whileHover={{
                  y: -12,
                  scale: 1.015,
                  boxShadow: "0 35px 100px rgba(67, 35, 135, 0.22)",
                }}
                transition={{
                  duration: 0.75,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {/* Fundo */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}
                />

                <motion.div
                  className="absolute inset-0 bg-[radial-gradient(circle_at_75%_15%,rgba(255,255,255,0.18),transparent_30%)] opacity-60"
                  animate={{
                    opacity: [0.45, 0.75, 0.45],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 5 + index,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:32px_32px]" />

                {/* Mockup visual */}
                <motion.div
                  className="absolute left-1/2 top-12 w-[82%] -translate-x-1/2"
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 5 + index * 0.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  whileHover={{
                    y: -15,
                    scale: 1.04,
                  }}
                >
                  <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#101017] p-2 shadow-[0_30px_70px_rgba(0,0,0,0.55)]">
                    <div className="flex h-7 items-center gap-1.5 rounded-t-xl bg-black/40 px-3">
                      <span className="h-2 w-2 rounded-full bg-white/20" />
                      <span className="h-2 w-2 rounded-full bg-white/20" />
                      <span className="h-2 w-2 rounded-full bg-white/20" />
                    </div>

                    <div className="relative flex aspect-[16/11] items-center justify-center overflow-hidden rounded-b-xl bg-black/30">
                      <motion.div
                        className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/25 blur-3xl"
                        animate={{
                          opacity: [0.35, 0.75, 0.35],
                          scale: [0.9, 1.15, 0.9],
                        }}
                        transition={{
                          duration: 4.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />

                      <div className="relative text-center">
                        <motion.div
                          className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-lg font-black text-white backdrop-blur-md"
                          whileHover={{
                            scale: 1.08,
                            rotate: 3,
                            borderColor: "rgba(167, 139, 250, 0.65)",
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 250,
                            damping: 18,
                          }}
                        >
                          {project.mockup}
                        </motion.div>

                        <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.28em] text-white/45">
                          Projeto digital
                        </p>

                        <p className="mt-2 text-xl font-black text-white">
                          {project.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Gradiente inferior */}
                <div className="absolute inset-x-0 bottom-0 h-[62%] bg-gradient-to-t from-[#07070c] via-[#07070c]/95 to-transparent" />

                {/* Conteúdo */}
                <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-violet-300">
                    {project.category}
                  </span>

                  <h3 className="mt-3 text-2xl font-black tracking-[-0.03em]">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/55">
                    {project.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/30">
                        Resultado
                      </p>

                      <p className="mt-1 text-sm font-bold text-white">
                        {project.result}
                      </p>
                    </div>

                    <motion.span
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white"
                      whileHover={{
                        scale: 1.1,
                        rotate: -4,
                        backgroundColor: "#7c3aed",
                        borderColor: "#a78bfa",
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 280,
                        damping: 18,
                      }}
                    >
                      <ArrowIcon />
                    </motion.span>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-700 group-hover:w-full" />
              </motion.a>
            </StaggerItem>
          ))}
        </StaggerReveal>

        {/* Nota */}
        <Reveal delay={0.2}>
          <p className="mt-8 text-center text-xs text-black/35">
            Projetos e resultados podem ser atualizados conforme novos cases
            forem concluídos e mensurados.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
