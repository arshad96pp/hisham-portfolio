import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { ProjectGrid } from "@/components/Works";
import Collaboration from "@/components/Collaboration";
import { projects } from "@/lib/data";

export const metadata: Metadata = { title: "Works" };

export default function WorksPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 sm:pt-32 sm:pb-24 md:pt-40 md:pb-32">
        <div className="mx-auto w-[min(92%,1200px)]">
          <Reveal onMount y={20} duration={0.8} eased={false}>
            <p className="label-xs">[ 02 — Selected Works ]</p>
          </Reveal>
          <Reveal onMount y={30} delay={0.1} duration={1}>
            <h1 className="mt-4 font-display text-[clamp(2.5rem,10vw,7rem)] leading-[0.95] font-semibold text-balance">
              Latest Works
            </h1>
          </Reveal>
          <Reveal onMount y={20} delay={0.2} duration={0.8} eased={false}>
            <p className="mt-6 max-w-xl text-sm text-muted-foreground sm:text-base md:text-lg">
              A selection of app and web projects — each one built around clarity, thoughtful interaction and careful
              visual detail.
            </p>
          </Reveal>
        </div>
      </section>
      <section className="pb-32">
        <div className="mx-auto w-[min(92%,1200px)]">
          <ProjectGrid projects={projects} headingLevel="h2" />
        </div>
      </section>
      <Collaboration />
    </>
  );
}
