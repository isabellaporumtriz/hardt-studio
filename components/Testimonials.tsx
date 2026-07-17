"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Reveal from "./Reveal";
import TestimonialCard from "./TestimonialCard";
import TestimonialIndicators from "./TestimonialIndicators";
import { testimonials } from "./testimonialsData";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  function previousTestimonial() {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1,
    );
  }

  function nextTestimonial() {
    setActiveIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1,
    );
  }

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) =>
        current === testimonials.length - 1 ? 0 : current + 1,
      );
    }, 6000);

    return () => window.clearInterval(interval);
  }, []);

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section
      id="depoimentos"
      className="relative overflow-hidden bg-[#05050a] py-24 text-white"
    >
      {/* Fundo animado */}
      <div className="pointer-events-none absolute inset-0">
        <div className="hero-grid absolute inset-0 opacity-20" />

        <motion.div
          className="absolute -left-24 top-20 h-80 w-80 rounded-full bg-violet-700/15 blur-[130px]"
          animate={{
            x: [0, 35, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
            opacity: [0.35, 0.7, 0.35],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-purple-600/15 blur-[150px]"
          animate={{
            x: [0, -30, 0],
            y: [0, 24, 0],
            scale: [1, 1.12, 1],
            opacity: [0.3, 0.65, 0.3],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[120px]"
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.25, 0.6, 0.25],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Cabeçalho */}
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-violet-400/25 bg-violet-500/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-violet-300">
              Experiências reais
            </span>

            <h2 className="mt-5 text-4xl font-black leading-[1.02] tracking-[-0.04em] sm:text-5xl">
              O que nossos clientes{" "}
              <span className="bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent">
                dizem sobre nós
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-white/50 sm:text-base">
              Estratégia, proximidade e execução cuidadosa em cada projeto.
            </p>
          </div>
        </Reveal>

        {/* Depoimento */}
        <div className="mx-auto mt-14 max-w-4xl">
          <TestimonialCard
            testimonial={activeTestimonial}
            activeIndex={activeIndex}
            onPrevious={previousTestimonial}
            onNext={nextTestimonial}
          />

          <TestimonialIndicators
            testimonials={testimonials}
            activeIndex={activeIndex}
            onSelect={setActiveIndex}
          />
        </div>

        {/* Aviso temporário */}
        <Reveal delay={0.2}>
          <p className="mt-8 text-center text-[11px] text-white/25">
            Substitua os textos acima por depoimentos reais antes da publicação.
          </p>
        </Reveal>
      </div>
    </section>
  );
}