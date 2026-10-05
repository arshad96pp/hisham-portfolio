import type { Metadata } from "next";
import { ListChecks, Palette, PenTool, Sparkles } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { FramerIcon } from "@/components/Icons";
import Collaboration from "@/components/Collaboration";
import { aboutPage, career, careerRange, profile, services, tools, type ToolIcon } from "@/lib/data";

export const metadata: Metadata = { title: "About" };

const toolIcons: Record<ToolIcon, typeof PenTool> = {
  figma: PenTool,
  adobe: Palette,
  jira: ListChecks,
  lovable: Sparkles,
  framer: FramerIcon as typeof PenTool,
};

const container = "mx-auto w-[min(92%,1200px)]";

export default function AboutPage() {
  const { headline } = aboutPage;
  return (
    <>
      <section className="relative pt-32 pb-16 sm:pt-32 sm:pb-24 md:pt-40 md:pb-32">
        <div className={`${container} grid gap-8 md:grid-cols-12 md:gap-16`}>
          <div className="md:col-span-7">
            <Reveal onMount y={20} duration={0.8} eased={false}>
              <p className="label-xs">[ 01 — About ]</p>
            </Reveal>
            <Reveal onMount y={30} delay={0.1} duration={1}>
              <h1 className="mt-4 font-display text-[clamp(2.5rem,9vw,7rem)] leading-[0.95] font-semibold text-balance">
                {headline.lead} <span className="font-light text-muted-foreground italic">{headline.soft}</span>
                <span className="text-primary">{headline.end}</span>
              </h1>
            </Reveal>
            <Reveal onMount y={20} delay={0.2} duration={0.8} eased={false}>
              <p className="label-xs mt-6">{aboutPage.tagline}</p>
            </Reveal>
          </div>
          <Reveal onMount y={20} delay={0.3} duration={0.8} eased={false} className="md:col-span-5 md:pt-2">
            <h2 className="font-display text-xl leading-tight font-semibold text-balance sm:text-2xl md:text-3xl">
              A {profile.role} based in <span className="text-primary">{profile.location}</span>
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">{aboutPage.summary}</p>
          </Reveal>
        </div>
      </section>

      <section aria-label="Services" className="border-y border-border/60 bg-surface/30 py-12 sm:py-16 md:py-24">
        <div className={`${container} grid grid-cols-2 gap-8 lg:grid-cols-4`}>
          {services.map((s, i) => (
            <Reveal key={s.label} y={20} delay={i * 0.1} duration={0.8} eased={false} className="flex min-w-0 flex-col gap-2">
              <span className="label-xs">{s.label}</span>
              <span className="font-display text-base font-medium sm:text-lg lg:text-2xl">{s.value}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="pt-16 pb-0 sm:pt-24 md:pt-32">
        <div className={container}>
          <Reveal y={20} duration={0.8} eased={false}>
            <p className="label-xs">[ 02 — Toolkit ]</p>
          </Reveal>
          <Reveal y={30} delay={0.1}>
            <h2 className="mt-4 font-display text-[clamp(2rem,6vw,4rem)] leading-[1.05] font-semibold text-balance">Tools I use</h2>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 lg:grid-cols-5">
            {tools.map((tool, i) => {
              const Icon = toolIcons[tool.icon];
              return (
                <Reveal
                  key={tool.name}
                  y={30}
                  delay={i * 0.08}
                  duration={0.8}
                  className="group relative isolate cursor-default overflow-hidden rounded-2xl border border-border bg-surface/40 p-6 transition-colors duration-300 hover:border-primary hover:bg-surface/60 sm:p-8"
                >
                  <div
                    aria-hidden
                    className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{ background: "var(--gradient-glow)" }}
                  />
                  <div className="flex items-start justify-between">
                    <span className="label-xs">{tool.label}</span>
                    <div className="grid size-10 place-items-center rounded-full border border-border bg-surface text-muted-foreground transition-all duration-300 group-hover:rotate-12 group-hover:border-primary group-hover:text-primary">
                      <Icon aria-hidden className="size-5" />
                    </div>
                  </div>
                  <div className="mt-8">
                    <h3 className="font-display text-xl leading-tight font-semibold sm:text-2xl">{tool.name}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground opacity-100 transition-opacity duration-300 sm:opacity-0 sm:group-hover:opacity-100">
                      {tool.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 md:py-32">
        <div className={container}>
          <Reveal y={30}>
            <h2 className="font-display text-[clamp(1.75rem,6vw,3rem)] font-semibold">Journey Through My Career</h2>
          </Reveal>
          <div className="mt-8 flex items-center gap-4 text-sm text-muted-foreground">
            <span className="font-display text-xl text-foreground">{careerRange.from}</span>
            <span aria-hidden className="h-px flex-1 bg-border" />
            <span className="font-display text-xl text-foreground">{careerRange.to}</span>
          </div>
          <ul className="mt-8 divide-y divide-border/60">
            {career.map((job, i) => (
              <Reveal key={`${job.role}-${job.period}`} y={20} delay={i * 0.1} duration={0.8} eased={false}
                as="li"
                className="grid grid-cols-1 items-start gap-2 py-6 sm:py-8 lg:grid-cols-12 lg:items-center lg:gap-8"
              >
                  <div className="flex items-center gap-3 lg:col-span-4">
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
                      <Sparkles aria-hidden className="size-4" />
                    </span>
                    <span className="font-display text-base font-medium sm:text-lg md:text-xl">{job.role}</span>
                  </div>
                  <span className="label-xs pl-[52px] lg:col-span-3 lg:pl-0">{job.period}</span>
                  <span className="pl-[52px] text-sm font-medium lg:col-span-3 lg:pl-0">{job.company}</span>
                  <span className="label-xs pl-[52px] lg:col-span-2 lg:pl-0 lg:text-right">{job.location}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <Collaboration />
    </>
  );
}
