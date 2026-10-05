import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { profile } from "@/lib/data";

// The home page uses slightly larger fixed type steps; inner pages use fluid clamp() sizes.
const variants = {
  home: {
    container: "w-[min(94%,1200px)]",
    card: "py-14 md:py-20",
    heading: "text-3xl sm:text-4xl md:text-6xl",
    body: "text-sm",
    closing: "mt-16 md:mt-24 text-4xl sm:text-5xl md:text-7xl",
  },
  page: {
    container: "w-[min(92%,1200px)]",
    card: "py-12 sm:py-16 md:py-24",
    heading: "text-balance text-[clamp(1.75rem,7vw,4rem)] leading-[1.05]",
    body: "text-sm sm:text-base",
    closing: "mt-16 sm:mt-24 md:mt-32 text-[clamp(2rem,8vw,5rem)] leading-[1.05]",
  },
};

export default function Collaboration({ variant = "page" }: { variant?: keyof typeof variants }) {
  const v = variants[variant];
  return (
    <section className="pt-0 pb-16 sm:pb-24 md:pb-32">
      <div className={`mx-auto ${v.container}`}>
        <Reveal duration={1} eased={false}>
          <a
            href={`mailto:${profile.email}`}
            className={`group relative block overflow-hidden rounded-3xl border border-border bg-surface px-6 text-center ${v.card}`}
          >
            <div aria-hidden className="absolute inset-0 opacity-60" style={{ background: "var(--gradient-glow)" }} />
            <p className="label-xs relative">[ Let&apos;s collaborate ]</p>
            <h3 className={`relative mt-4 font-display font-semibold ${v.heading}`}>need a design partner?</h3>
            <p className={`relative mx-auto mt-4 max-w-md text-muted-foreground ${v.body}`}>
              Let&apos;s work together to make your vision a reality.
            </p>
            <span className="relative mt-8 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-primary px-5 text-sm font-medium tracking-tight text-primary-foreground shadow-(--shadow-cta) transition-all duration-200 group-hover:gap-3 hover:brightness-105">
              Start a project
              <ArrowUpRight aria-hidden className="size-4 transition-transform duration-200 group-hover:rotate-45" />
            </span>
          </a>
        </Reveal>
        <h4 className={`font-display font-semibold text-balance text-muted-foreground/70 ${v.closing}`}>
          Let&apos;s create something <span className="text-foreground">awesome together.</span>
        </h4>
      </div>
    </section>
  );
}
