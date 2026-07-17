"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import StaggerReveal, { StaggerItem } from "./StaggerReveal";

const navigation = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Cases", href: "#cases" },
  { label: "Como funciona", href: "#processo" },
  { label: "Depoimentos", href: "#depoimentos" },
];

const services = [
  "Gestão de Instagram",
  "Criação de conteúdo",
  "Landing pages",
  "Sites institucionais",
  "Estratégia digital",
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com/hardt.studIio",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/5512991699481",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-[#05050a] text-white">
      {/* Fundo animado */}
      <div className="pointer-events-none absolute inset-0">
        <div className="hero-grid absolute inset-0 opacity-15" />

        <motion.div
          className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-violet-700/15 blur-[130px]"
          animate={{
            x: [0, 35, 0],
            y: [0, -20, 0],
            scale: [1, 1.12, 1],
            opacity: [0.3, 0.65, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute -right-24 top-0 h-80 w-80 rounded-full bg-purple-600/15 blur-[140px]"
          animate={{
            x: [0, -30, 0],
            y: [0, 24, 0],
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.65, 0.3],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-[-180px] left-1/2 h-72 w-[70%] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[140px]"
          animate={{
            scaleX: [1, 1.16, 1],
            scaleY: [1, 1.22, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-8 pt-16 sm:px-8 lg:px-10 lg:pt-20">
        <StaggerReveal className="grid gap-12 border-b border-white/10 pb-14 md:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_0.8fr_0.8fr]">
          {/* Marca */}
          <StaggerItem>
            <div className="max-w-sm">
              <motion.a
                href="#inicio"
                className="group inline-flex items-center gap-3"
                aria-label="Hardt Studio"
                whileHover={{
                  x: 3,
                }}
                transition={{
                  duration: 0.25,
                }}
              >
                <motion.div
                  className="relative flex h-12 w-12 items-center justify-center"
                  whileHover={{
                    scale: 1.08,
                    rotate: 3,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 18,
                  }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-violet-600/25 blur-xl"
                    animate={{
                      opacity: [0.4, 0.85, 0.4],
                      scale: [0.92, 1.12, 0.92],
                    }}
                    transition={{
                      duration: 4.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  <Image
                    src="/logo-hardt-studio.png"
                    alt="Logo da Hardt Studio"
                    width={48}
                    height={48}
                    className="relative h-12 w-12 object-contain"
                  />
                </motion.div>

                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl font-black tracking-tight">
                      HARDT
                    </span>

                    <motion.span
                      className="bg-gradient-to-r from-violet-400 via-violet-500 to-fuchsia-500 bg-clip-text text-xl font-black tracking-tight text-transparent"
                      animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      style={{
                        backgroundSize: "200% 200%",
                      }}
                    >
                      .STUDIO
                    </motion.span>
                  </div>

                  <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.28em] text-white/35">
                    Marketing digital
                  </span>
                </div>
              </motion.a>

              <Reveal delay={0.08}>
                <p className="mt-6 text-sm leading-7 text-white/45">
                  Estratégia, conteúdo e experiências digitais para transformar
                  empresas em marcas mais fortes, profissionais e memoráveis.
                </p>
              </Reveal>

              <div className="mt-7 flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/10 bg-white/[0.035] px-4 py-2.5 text-xs font-bold text-white/60"
                    initial={{
                      opacity: 0,
                      y: 12,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    whileHover={{
                      y: -3,
                      scale: 1.04,
                      borderColor: "rgba(167,139,250,0.45)",
                      backgroundColor: "rgba(139,92,246,0.12)",
                      color: "#ffffff",
                    }}
                    whileTap={{
                      scale: 0.96,
                    }}
                    transition={{
                      duration: 0.25,
                      delay: index * 0.08,
                    }}
                  >
                    {social.label}
                  </motion.a>
                ))}
              </div>
            </div>
          </StaggerItem>

          {/* Navegação */}
          <StaggerItem>
            <div>
              <h3 className="text-sm font-bold text-white">Navegação</h3>

              <nav className="mt-6 flex flex-col gap-4">
                {navigation.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    className="group relative w-fit text-sm text-white/40"
                    whileHover={{
                      x: 6,
                      color: "#c4b5fd",
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                  >
                    <motion.span
                      className="absolute -left-4 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-violet-400"
                      initial={{
                        opacity: 0,
                        scale: 0,
                      }}
                      whileHover={{
                        opacity: 1,
                        scale: 1,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                    />

                    {item.label}

                    <motion.span
                      className="absolute -bottom-1 left-0 h-px w-full origin-left bg-gradient-to-r from-violet-400 to-transparent"
                      initial={{
                        scaleX: 0,
                      }}
                      whileHover={{
                        scaleX: 1,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                    />
                  </motion.a>
                ))}
              </nav>
            </div>
          </StaggerItem>

          {/* Serviços */}
          <StaggerItem>
            <div>
              <h3 className="text-sm font-bold text-white">Serviços</h3>

              <div className="mt-6 flex flex-col gap-4">
                {services.map((service) => (
                  <motion.span
                    key={service}
                    className="w-fit text-sm text-white/40"
                    whileHover={{
                      x: 4,
                      color: "rgba(255,255,255,0.72)",
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                  >
                    {service}
                  </motion.span>
                ))}
              </div>
            </div>
          </StaggerItem>

          {/* Contato */}
          <StaggerItem>
            <div>
              <h3 className="text-sm font-bold text-white">Contato</h3>

              <div className="mt-6 flex flex-col gap-5">
                <motion.a
                  href="mailto:contato@hardt.studio"
                  className="group w-fit"
                  whileHover={{
                    x: 4,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                >
                  <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-white/25">
                    E-mail
                  </span>

                  <span className="mt-1 block text-sm text-white/55 transition group-hover:text-violet-300">
                    contato@hardt.studio
                  </span>
                </motion.a>

                <motion.a
                  href="https://wa.me/5512999999999"
                  target="_blank"
                  rel="noreferrer"
                  className="group w-fit"
                  whileHover={{
                    x: 4,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                >
                  <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-white/25">
                    WhatsApp
                  </span>

                  <span className="mt-1 block text-sm text-white/55 transition group-hover:text-violet-300">
                    Falar com a equipe
                  </span>
                </motion.a>

                <motion.div
                  whileHover={{
                    x: 4,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                >
                  <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-white/25">
                    Atendimento
                  </span>

                  <span className="mt-1 block text-sm leading-6 text-white/55">
                    Segunda a sexta
                    <br />
                    9h às 18h
                  </span>
                </motion.div>
              </div>
            </div>
          </StaggerItem>
        </StaggerReveal>

        {/* Rodapé inferior */}
        <Reveal delay={0.2}>
          <div className="flex flex-col gap-4 pt-7 text-xs text-white/25 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Hardt Studio. Todos os direitos
              reservados.
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <motion.a
                href="#"
                className="relative transition hover:text-white/55"
                whileHover={{
                  y: -2,
                }}
              >
                Política de Privacidade
              </motion.a>

              <motion.a
                href="#"
                className="relative transition hover:text-white/55"
                whileHover={{
                  y: -2,
                }}
              >
                Termos de Uso
              </motion.a>
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}