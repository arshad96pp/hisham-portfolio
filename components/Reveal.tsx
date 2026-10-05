"use client";

import { motion, MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

export const ease = [0.22, 1, 0.36, 1] as const;

export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Initial vertical offset in px. */
  y?: number;
  delay?: number;
  duration?: number;
  /** Fraction of the element that must be visible before it animates. */
  amount?: number;
  /** Animate on mount instead of when scrolled into view (page headers). */
  onMount?: boolean;
  /** Use the custom ease curve; plain motion defaults otherwise. */
  eased?: boolean;
  as?: "div" | "li";
};

/** Fades and lifts its children into place, once. */
export function Reveal({ children, className, y = 30, delay = 0, duration = 0.9, amount, onMount, eased = true, as = "div" }: RevealProps) {
  const Tag = as === "li" ? motion.li : motion.div;
  const transition = { duration, delay, ...(eased && { ease }) };
  return onMount ? (
    <Tag className={className} initial={{ opacity: 0, y }} animate={{ opacity: 1, y: 0 }} transition={transition}>
      {children}
    </Tag>
  ) : (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={transition}
    >
      {children}
    </Tag>
  );
}
