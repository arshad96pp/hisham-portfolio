"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { stats } from "@/lib/data";

const DURATION = 1600;

const format = (n: number, to: number) => (to >= 100 ? String(n) : String(n).padStart(2, "0"));

/** Counts up from 0 with an ease-out-cubic curve the first time it enters the viewport. */
function Counter({ to, delay }: { to: number; delay: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduced = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView || reduced) return;
    const start = performance.now() + delay * 1000;
    let frame = 0;
    const tick = (now: number) => {
      const t = Math.max(0, Math.min(1, (now - start) / DURATION));
      setValue(Math.round((1 - Math.pow(1 - t, 3)) * to));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduced, to, delay]);

  return (
    <span
      ref={ref}
      className="font-display text-4xl leading-none font-semibold tabular-nums sm:text-5xl md:text-7xl"
    >
      {format(reduced ? to : value, to)}+
    </span>
  );
}

export default function Stats() {
  return (
    <section aria-label="Highlights" className="border-y border-border/60 bg-surface/30 py-12 sm:py-16 md:py-24">
      <div className="mx-auto grid w-[min(92%,1200px)] gap-6 sm:grid-cols-3 sm:gap-8 sm:divide-x sm:divide-border/60">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.8 }}
            className="flex flex-col items-center gap-2 sm:gap-3 sm:px-6 sm:first:pl-0 md:px-8"
          >
            <Counter to={stat.value} delay={i * 0.1} />
            <span className="label-xs max-w-[24ch] text-center leading-relaxed">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
