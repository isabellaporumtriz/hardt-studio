"use client";

import Image from "next/image";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import type { MouseEvent } from "react";

export default function PhoneMockup() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 90,
    damping: 18,
    mass: 0.6,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 90,
    damping: 18,
    mass: 0.6,
  });

  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-4, 4]);
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [4, -4]);
  const moveX = useTransform(smoothX, [-0.5, 0.5], [-8, 8]);
  const moveY = useTransform(smoothY, [-0.5, 0.5], [-5, 5]);

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      className="relative flex w-full items-center justify-center overflow-visible"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1000,
      }}
      initial={{
        opacity: 0,
        scale: 0.92,
        x: 35,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        x: 0,
      }}
      transition={{
        duration: 1,
        delay: 0.25,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <motion.div
        className="pointer-events-none absolute h-[460px] w-[460px] rounded-full bg-violet-600/20 blur-[120px]"
        animate={{
          opacity: [0.45, 0.8, 0.45],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="relative z-10"
        style={{
          rotateX,
          rotateY,
          x: moveX,
          y: moveY,
          transformStyle: "preserve-3d",
        }}
        animate={{
          translateY: [0, -12, 0],
        }}
        transition={{
          translateY: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      >
        <Image
          src="/images/phones.png"
          alt="Celulares exibindo projetos da Hardt Studio"
          width={900}
          height={900}
          priority
          className="h-auto w-[650px] max-w-none select-none object-contain drop-shadow-[0_40px_90px_rgba(0,0,0,0.55)] lg:w-[720px]"
        />
      </motion.div>
    </motion.div>
  );
}