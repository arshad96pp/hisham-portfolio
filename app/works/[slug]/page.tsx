import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { ProjectCard } from "@/components/Works";
import Collaboration from "@/components/Collaboration";
import { projects } from "@/lib/data";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/works/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return project ? { title: project.name, description: project.description } : {};
}

const container = "mx-auto w-[min(92%,1200px)]";
const block = "pb-16 sm:pb-24 md:pb-32";

export default async function ProjectPage({ params }: PageProps<"/works/[slug]">) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();
  const project = projects[index];
  const next = projects[(index + 1) % projects.length];

  const meta = [
    { label: "Industry", value: project.category },
    { label: "Client", value: project.client },
    { label: "Platform", value: project.platform },
  ];

  return (
    <>
      <section className="relative pt-32 pb-16 sm:pt-32 sm:pb-24 md:pt-40 md:pb-32">
        <div className={container}>
          <Reveal onMount y={20} duration={0.8} eased={false} className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
            <Link href="/works" className="transition hover:text-foreground">
              Works
            </Link>
            <span className="opacity-40">/</span>
            <span className="text-foreground/70">{project.category}</span>
          </Reveal>

          <div className="mt-6 grid items-end gap-8 sm:mt-8 md:grid-cols-12 md:gap-16">
            <Reveal onMount y={30} delay={0.1} duration={1} className="col-span-12 md:col-span-8">
              <h1 className="font-display text-[clamp(2.5rem,10vw,7rem)] leading-[0.95] font-semibold text-balance">
                {project.name}
              </h1>
            </Reveal>
            <Reveal onMount y={20} delay={0.2} duration={0.8} eased={false} className="col-span-12 md:col-span-4">
              <p className="max-w-md text-sm text-muted-foreground sm:text-base md:text-lg">{project.description}</p>
            </Reveal>
          </div>

          <Reveal
            onMount
            y={20}
            delay={0.3}
            duration={0.8}
            eased={false}
            className="mt-8 flex flex-col items-start gap-6 border-t border-border/60 pt-8 sm:mt-16 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between"
          >
            <dl className="flex flex-wrap gap-x-8 gap-y-6 sm:gap-x-16">
              {meta.map(({ label, value }) => (
                <div key={label}>
                  <dt className="label-xs">{label}</dt>
                  <dd className="mt-2 text-base font-medium tracking-tight">{value}</dd>
                </div>
              ))}
            </dl>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-11 items-center justify-center gap-2 rounded-full bg-primary px-5 text-sm font-medium tracking-tight text-primary-foreground shadow-(--shadow-cta) transition-all duration-200 hover:gap-3 hover:brightness-105"
            >
              Visit site
              <ArrowUpRight aria-hidden className="size-4 transition-transform duration-200 group-hover:rotate-45" />
            </a>
          </Reveal>
        </div>
      </section>

      <section className={block}>
        <div className={`${container} grid gap-4 sm:gap-6 md:grid-cols-2`}>
          {project.mockups.map((src, i) => (
            <Reveal key={i} y={40} amount={0.2} delay={i * 0.1} className="group overflow-hidden rounded-3xl border border-border bg-surface shadow-(--shadow-elevated)">
              <div className="relative aspect-4/3 overflow-hidden">
                <Image
                  src={src}
                  alt={`${project.name} mockup ${i + 1}`}
                  fill
                  sizes="(min-width: 1300px) 590px, (min-width: 768px) 46vw, 92vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className={block}>
        <div className={`${container} grid gap-8 md:grid-cols-12 md:gap-16`}>
          <div className="md:col-span-3">
            <p className="label-xs">[ Overview ]</p>
          </div>
          <Reveal amount={0.2} className="md:col-span-9">
            <p className="mb-4 text-sm leading-relaxed text-muted-foreground sm:mb-6 sm:text-base md:text-lg">
              {project.description}
            </p>
          </Reveal>
        </div>
      </section>

      <section className={block}>
        <div className={`${container} grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6`}>
          {project.gallery.map((src, i) => (
            <Reveal key={i} y={30} delay={i * 0.08} duration={0.8} className="group overflow-hidden rounded-xl border border-border bg-surface sm:rounded-2xl">
              <div className="relative aspect-3/4 overflow-hidden">
                <Image
                  src={src}
                  alt={`${project.name} gallery ${i + 1}`}
                  fill
                  sizes="(min-width: 1300px) 285px, (min-width: 768px) 23vw, 46vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.06]"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className={block}>
        <div className={container}>
          <p className="label-xs mb-6">[ Next project ]</p>
          <ProjectCard project={next} featured as="h2" />
        </div>
      </section>

      <Collaboration />
    </>
  );
}
