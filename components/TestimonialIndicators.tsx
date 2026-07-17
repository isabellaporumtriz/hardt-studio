"use client";

import { motion } from "framer-motion";
import type { Testimonial } from "./testimonialsData";

type TestimonialIndicatorsProps = {
  testimonials: Testimonial[];
  activeIndex: number;
  onSelect: (index: number) => void;
};

export default function TestimonialIndicators({
  testimonials,
  activeIndex,
  onSelect,
}: TestimonialIndicatorsProps) {
  return (
    <div className="mt-7 flex justify-center gap-2">
      {testimonials.map((testimonial, index) => {
        const isActive = activeIndex === index;

        return (
          <motion.button
            key={`${testimonial.name}-${index}`}
            type="button"
            onClick={() => onSelect(index)}
            className={`h-2 rounded-full ${
              isActive
                ? "bg-violet-500"
                : "bg-white/20 hover:bg-white/40"
            }`}
            animate={{
              width: isActive ? 32 : 8,
              opacity: isActive ? 1 : 0.7,
            }}
            whileHover={{
              scale: 1.12,
            }}
            whileTap={{
              scale: 0.9,
            }}
            transition={{
              type: "spring",
              stiffness: 320,
              damping: 24,
            }}
            aria-label={`Abrir depoimento ${index + 1}`}
          />
        );
      })}
    </div>
  );
}