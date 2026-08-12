"use client";

import { motion } from "framer-motion";
import Counter from "./Counter";
import Reveal from "./Reveal";
import StaggerReveal, { StaggerItem } from "./StaggerReveal";

const stats = [
  {
    value: 150,
    prefix: "+",
    suffix: "",
    title: "Projetos entregues",
    description: "Landing pages, identidades e conteúdos produzidos.",
  },
  {
    value: 12,
    prefix: "+",
    suffix: "M",
    title: "Pessoas impactadas",
    description: "Somando campanhas, redes sociais e anúncios.",
  },
  {
    value: 300,
    prefix: "+",
    suffix: "%",
    title: "Crescimento médio",
    description: "Em alcance e presença digital dos clientes.",
  },
  {
    value: 100,
    prefix: "",
    suffix: "%",
    title: "Clientes satisfeitos",
    description: "Relacionamentos duradouros e atendimento próximo.",
  },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-[#05050a] py-24 text-white">
      {/* Glow */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-700/15 blur-[120px]"
          animate={{
            opacity: [0.35, 0.75, 0.35],
            scale: [1, 1.18, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-fuchsia-700/10 blur-[130px]"
          animate={{
            x: [0, 35, 0],
            y: [0, -20, 0],
            opacity: [0.2, 0.45, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-violet-700/10 blur-[140px]"
          animate={{
            x: [0, -30, 0],
            y: [0, 22, 0],
            opacity: [0.2, 0.5, 0.2],
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
            <div>
              <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-violet-300">
                Números que comprovam
              </span>

              <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
                Resultados que{" "}
                <span className="bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent">
                  falam por si
                </span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-white/55">
              Estratégia, criatividade e execução trabalhando juntas para gerar
              crescimento consistente.
            </p>
          </div>
        </Reveal>

        {/* Cards */}
        <StaggerReveal className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <StaggerItem key={item.title} className="h-full">
              <motion.article
                className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl"
                whileHover={{
                  y: -10,
                  scale: 1.025,
                }}
                transition={{
                  duration: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-violet-500/0 blur-3xl transition duration-700 group-hover:bg-violet-500/20" />

                <div className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent transition duration-500 group-hover:border-violet-500/35" />

                <h3 className="relative bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-5xl font-black text-transparent">
                  <Counter
                    value={item.value}
                    prefix={item.prefix}
                    suffix={item.suffix}
                  />
                </h3>

                <h4 className="relative mt-5 text-lg font-bold">
                  {item.title}
                </h4>

                <p className="relative mt-3 text-sm leading-6 text-white/45">
                  {item.description}
                </p>

                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-700 group-hover:w-full" />
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}