"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import StaggerReveal, { StaggerItem } from "./StaggerReveal";

const steps = [
  {
    number: "01",
    title: "Diagnóstico",
    description:
      "Entendemos seu negócio, mercado, concorrência e objetivos.",
  },
  {
    number: "02",
    title: "Estratégia",
    description:
      "Planejamos toda a comunicação e definimos o caminho ideal.",
  },
  {
    number: "03",
    title: "Criação",
    description:
      "Produzimos identidade, conteúdos, páginas e materiais.",
  },
  {
    number: "04",
    title: "Execução",
    description:
      "Publicamos, implementamos e colocamos tudo para funcionar.",
  },
  {
    number: "05",
    title: "Crescimento",
    description:
      "Analisamos métricas e evoluímos continuamente sua marca.",
  },
];

export default function Process() {
  return (
    <section
      id="processo"
      className="relative overflow-hidden bg-white py-24"
    >
      {/* Fundo animado */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute left-1/2 top-32 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-100 blur-[120px]"
          animate={{
            scale: [1, 1.22, 1],
            opacity: [0.45, 0.8, 0.45],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-fuchsia-100/50 blur-[130px]"
          animate={{
            x: [0, 30, 0],
            y: [0, -18, 0],
            opacity: [0.25, 0.5, 0.25],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute -right-24 top-20 h-80 w-80 rounded-full bg-purple-100/50 blur-[140px]"
          animate={{
            x: [0, -28, 0],
            y: [0, 20, 0],
            opacity: [0.25, 0.55, 0.25],
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
          <div className="text-center">
            <span className="inline-flex rounded-full bg-violet-100 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-violet-600">
              Como funciona
            </span>

            <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] text-[#111119] sm:text-5xl">
              Um processo{" "}
              <span className="bg-gradient-to-r from-violet-600 to-purple-500 bg-clip-text text-transparent">
                simples e eficiente
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-black/50 sm:text-base">
              Da estratégia à execução, cada etapa é conduzida para transformar
              ideias em uma presença digital consistente e comercialmente
              eficiente.
            </p>
          </div>
        </Reveal>

        {/* Timeline */}
        <div className="relative mt-20">
          {/* Linha de fundo */}
          <div className="absolute left-[8%] right-[8%] top-10 hidden h-[2px] bg-violet-100 lg:block" />

          {/* Linha animada */}
          <motion.div
            className="absolute left-[8%] right-[8%] top-10 hidden h-[2px] origin-left bg-gradient-to-r from-violet-300 via-violet-600 to-fuchsia-500 lg:block"
            initial={{
              scaleX: 0,
            }}
            whileInView={{
              scaleX: 1,
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              duration: 1.5,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          />

          <StaggerReveal className="grid gap-10 lg:grid-cols-5">
            {steps.map((step, index) => (
              <StaggerItem key={step.number} className="h-full">
                <motion.article
                  className="group relative text-center"
                  initial={{
                    opacity: 0,
                    y: 38,
                    scale: 0.96,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.35,
                  }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {/* Conector vertical no mobile */}
                  {index < steps.length - 1 && (
                    <motion.div
                      className="absolute left-1/2 top-20 h-10 w-px -translate-x-1/2 bg-gradient-to-b from-violet-400 to-violet-100 lg:hidden"
                      initial={{
                        scaleY: 0,
                        opacity: 0,
                      }}
                      whileInView={{
                        scaleY: 1,
                        opacity: 1,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.5,
                        delay: 0.35 + index * 0.08,
                      }}
                    />
                  )}

                  {/* Círculo */}
                  <motion.div
                    className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-violet-200 bg-white shadow-[0_20px_50px_rgba(90,60,180,0.08)]"
                    whileHover={{
                      y: -8,
                      scale: 1.08,
                      borderColor: "#8b5cf6",
                      boxShadow: "0 24px 65px rgba(124, 58, 237, 0.22)",
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 18,
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500/15 via-fuchsia-400/5 to-transparent"
                      animate={{
                        opacity: [0.4, 0.85, 0.4],
                        scale: [0.95, 1.08, 0.95],
                      }}
                      transition={{
                        duration: 3.8 + index * 0.25,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />

                    <motion.div
                      className="absolute -inset-2 rounded-full border border-violet-300/0"
                      whileHover={{
                        borderColor: "rgba(167, 139, 250, 0.35)",
                        scale: 1.08,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                    />

                    <span className="relative bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-xl font-black text-transparent">
                      {step.number}
                    </span>
                  </motion.div>

                  {/* Conteúdo */}
                  <motion.div
                    whileHover={{
                      y: -3,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                  >
                    <h3 className="mt-8 text-xl font-bold text-[#111119]">
                      {step.title}
                    </h3>

                    <p className="mx-auto mt-4 max-w-[190px] text-sm leading-6 text-black/50">
                      {step.description}
                    </p>
                  </motion.div>

                  {/* Ponto sobre a linha */}
                  <motion.div
                    className="absolute left-1/2 top-[37px] hidden h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-violet-500 shadow-[0_0_18px_rgba(139,92,246,0.7)] lg:block"
                    initial={{
                      scale: 0,
                      opacity: 0,
                    }}
                    whileInView={{
                      scale: 1,
                      opacity: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 280,
                      damping: 18,
                      delay: 0.45 + index * 0.12,
                    }}
                  />
                </motion.article>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </div>
    </section>
  );
}