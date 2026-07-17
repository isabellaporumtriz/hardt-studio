"use client";

import { animate, useInView, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

type CounterProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
};

export default function Counter({
  value,
  prefix = "",
  suffix = "",
  duration = 1.8,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.6,
  });

  const count = useMotionValue(0);

  const rounded = useTransform(count, (latest) => {
    return `${prefix}${Math.round(latest)}${suffix}`;
  });

  useEffect(() => {
    if (!isInView) {
      return;
    }

    const controls = animate(count, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
    });

    return controls.stop;
  }, [count, duration, isInView, value]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}