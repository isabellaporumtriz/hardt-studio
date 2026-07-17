"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { Testimonial } from "./testimonialsData";
import TestimonialControls from "./TestimonialControls";

type TestimonialCardProps = {
  testimonial: Testimonial;
  activeIndex: number;
  onPrevious: () => void;
  onNext: () => void;
};

export default function TestimonialCard({
  testimonial,
  activeIndex,
  onPrevious,
  onNext,
}: TestimonialCardProps) {
  return (
    <motion.article
      className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.035] p-7 shadow-[0_30px_100px_rgba(0,0,0,0.3)] backdrop-blur-xl sm:p-10 lg:p-12"
      initial={{
        opacity: 0,
        y: 40,
        scale: 0.97,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      whileHover={{
        y: -4,
        borderColor: "rgba(139, 92, 246, 0.3)",
      }}
      transition={{
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* Brilhos internos */}
      <motion.div
        className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-violet-600/15 blur-[80px]"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.45, 0.8, 0.45],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="pointer-events-none absolute -bottom-24 -left-20 h-56 w-56 rounded-full bg-purple-700/10 blur-[90px]"
        animate={{
          x: [0, 20, 0],
          y: [0, -12, 0],
          opacity: [0.35, 0.65, 0.35],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Aspas */}
      <motion.div
        className="relative text-7xl font-black leading-none text-violet-500/25"
        animate={{
          opacity: [0.35, 0.65, 0.35],
          y: [0, -4, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        “
      </motion.div>

      {/* Conteúdo que troca */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{
            opacity: 0,
            y: 22,
            filter: "blur(8px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          exit={{
            opacity: 0,
            y: -16,
            filter: "blur(6px)",
          }}
          transition={{
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {/* Estrelas */}
          <div className="relative -mt-5 flex gap-1 text-violet-400">
            {Array.from({ length: 5 }).map((_, index) => (
              <motion.svg
                key={index}
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                initial={{
                  opacity: 0,
                  scale: 0.5,
                  rotate: -12,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <path d="M12 2.8L14.8 8.5L21.1 9.4L16.5 13.8L17.6 20.1L12 17.1L6.4 20.1L7.5 13.8L2.9 9.4L9.2 8.5L12 2.8Z" />
              </motion.svg>
            ))}
          </div>

          <blockquote className="relative mt-7 min-h-[150px] text-xl font-semibold leading-8 tracking-[-0.02em] text-white/90 sm:text-2xl sm:leading-10">
            “{testimonial.quote}”
          </blockquote>

          <div className="relative mt-9 flex flex-col gap-6 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <motion.div
                className="flex h-12 w-12 items-center justify-center rounded-full border border-violet-400/30 bg-gradient-to-br from-violet-500/30 to-purple-900/30 text-xs font-black text-violet-200"
                initial={{
                  opacity: 0,
                  scale: 0.7,
                  rotate: -12,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                }}
                whileHover={{
                  scale: 1.1,
                  rotate: 6,
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 18,
                }}
              >
                {testimonial.initials}
              </motion.div>

              <div>
                <p className="font-bold text-white">{testimonial.name}</p>

                <p className="mt-1 text-xs text-white/40">
                  {testimonial.role}
                </p>
              </div>
            </div>

            <TestimonialControls
              onPrevious={onPrevious}
              onNext={onNext}
            />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Linha luminosa */}
      <div className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-violet-500 to-transparent transition-all duration-700 group-hover:w-4/5" />
    </motion.article>
  );
}