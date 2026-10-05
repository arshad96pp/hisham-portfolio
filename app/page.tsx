import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Stats from "@/components/Stats";
import { ProjectGrid } from "@/components/Works";
import Collaboration from "@/components/Collaboration";
import { projects } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Stats />
      <section id="works" className="py-16 sm:py-24 md:py-32">
        <div className="mx-auto w-[min(92%,1200px)]">
          <div className="mb-8 flex flex-col gap-4 sm:gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="label-xs">[ 02 — Selected Works ]</p>
              <h2 className="mt-3 font-display text-[clamp(2rem,7vw,3.75rem)] font-semibold">Latest Works</h2>
            </div>
            <Link
              href="/works"
              className="hidden items-center gap-1.5 rounded-full border border-border bg-surface px-4 py-2 text-sm text-muted-foreground transition hover:border-primary hover:text-primary md:inline-flex"
            >
              See all projects <ArrowUpRight aria-hidden className="size-4" />
            </Link>
          </div>
          <ProjectGrid projects={projects.slice(0, 3)} />
        </div>
      </section>
      <Collaboration variant="home" />
    </>
  );
}
