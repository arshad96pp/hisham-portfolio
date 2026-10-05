"use client";

import { useRef, useState, type MouseEvent } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { ease } from "./Reveal";
import { profile } from "@/lib/data";

const portraitClass = "aspect-square h-[clamp(260px,52vh,620px)] w-auto max-w-full rounded-[2rem] object-cover object-top";

// Grayscale base: fades out at the bottom and softly at the edges.
const baseMask = {
  maskImage: "linear-gradient(to bottom, black 60%, transparent 100%), radial-gradient(ellipse at center, black 60%, transparent 90%)",
  maskComposite: "intersect",
  WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
} as const;

// Colour layer: a 360px soft spotlight that follows the cursor while hovering.
const spot = "radial-gradient(circle at center, black 0%, black 25%, transparent 70%)";
const spotPos = "calc(var(--x, 0px) - 180px) calc(var(--y, 0px) - 180px)";
const spotlightMask = {
  filter: "brightness(1.06) saturate(1.1)",
  maskImage: spot,
  maskSize: "360px 360px",
  maskPosition: spotPos,
  maskRepeat: "no-repeat",
  WebkitMaskImage: spot,
  WebkitMaskSize: "360px 360px",
  WebkitMaskPosition: spotPos,
  WebkitMaskRepeat: "no-repeat",
  transition: "mask-position 0.18s ease-out, -webkit-mask-position 0.18s ease-out, opacity 0.35s ease",
} as const;

export default function Hero() {
  const section = useRef<HTMLElement>(null);
  const colour = useRef<HTMLImageElement>(null);
  const [hovering, setHovering] = useState(false);

  const { scrollYProgress } = useScroll({ target: section, offset: ["start start", "end start"] });
  const headingScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    colour.current?.style.setProperty("--x", `${e.clientX - rect.left}px`);
    colour.current?.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  const { name, role, portrait, portraitSize } = profile;

  return (
    <section
      ref={section}
      id="home"
      className="relative flex flex-col items-center justify-center pt-32 pb-16 sm:pt-32 sm:pb-24 md:pt-40 md:pb-32"
    >
      <div className="mx-auto w-[min(92%,1200px)]">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="label-xs text-center"
        >
          Hi I&apos;m {name} — a passionate {role}
        </motion.p>
        <motion.h1
          style={{ scale: headingScale }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1, ease }}
          className="mx-auto mt-4 max-w-5xl text-center font-display text-[clamp(2.4rem,9vw,6.5rem)] leading-[0.95] font-semibold text-balance"
        >
          Crafting Digital <span className="font-light text-muted-foreground italic">Experiences</span>
          <span className="text-primary">.</span>
        </motion.h1>

        <motion.div style={{ y: portraitY }} className="relative mt-16 grid place-items-center md:mt-24">
          <motion.div
            aria-hidden
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1.2 }}
            className="pointer-events-none absolute inset-x-0 top-1/2 flex -translate-y-1/2 overflow-hidden"
          >
            <div className="flex shrink-0 animate-marquee">
              {Array.from({ length: 8 }, (_, i) => (
                <span
                  key={i}
                  className="pr-16 font-display text-[clamp(3rem,12vw,11rem)] leading-none font-bold whitespace-nowrap text-foreground/6"
                >
                  Shaping the digital future.
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1.1, ease }}
            onMouseMove={onMove}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className="group relative z-10 cursor-pointer"
          >
            <div
              aria-hidden
              className="absolute -inset-10 -z-10 rounded-full transition-opacity duration-700 group-hover:opacity-80"
              style={{ background: "var(--gradient-glow)", filter: "blur(40px)" }}
            />
            <Image
              src={portrait}
              alt={`Portrait of ${name}, ${role}`}
              width={portraitSize.width}
              height={portraitSize.height}
              preload
              sizes="620px"
              className={`${portraitClass} grayscale`}
              style={baseMask}
            />
            <Image
              ref={colour}
              src={portrait}
              alt=""
              aria-hidden
              width={portraitSize.width}
              height={portraitSize.height}
              sizes="620px"
              className={`pointer-events-none absolute inset-0 ${portraitClass}`}
              style={{ ...spotlightMask, opacity: hovering ? 1 : 0 }}
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-8 flex flex-col items-center gap-3"
        >
          <span className="label-xs">Scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}>
            <ChevronDown aria-hidden className="size-5 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
