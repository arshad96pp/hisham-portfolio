import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import type { Project } from "@/lib/data";

type CardProps = {
  project: Project;
  featured?: boolean;
  /** Heading level: h3 inside a titled section, h2 on the works index. */
  as?: "h2" | "h3";
};

export function ProjectCard({ project, featured, as: Heading = "h3" }: CardProps) {
  return (
    <Link
      href={`/works/${project.slug}`}
      className="group relative block overflow-hidden rounded-3xl border border-border bg-surface shadow-(--shadow-elevated)"
    >
      <div className={`relative ${featured ? "aspect-16/10 sm:aspect-16/8" : "aspect-4/3 sm:aspect-16/11"}`}>
        <Image
          src={project.cover}
          alt={project.name}
          fill
          sizes={featured ? "(min-width: 1300px) 1200px, 92vw" : "(min-width: 1300px) 590px, (min-width: 768px) 46vw, 92vw"}
          className="object-cover transition duration-700 group-hover:scale-[1.04]"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-background/95 via-background/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 md:p-8">
        <div className="min-w-0">
          <Heading
            className={`truncate font-display font-semibold ${
              featured ? "text-2xl sm:text-3xl md:text-4xl" : "text-xl sm:text-2xl md:text-[1.75rem]"
            }`}
          >
            {project.name}
          </Heading>
          <p className="label-xs mt-2 truncate">{project.category}</p>
        </div>
        <span className="grid size-10 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground transition group-hover:rotate-45 sm:size-12">
          <ArrowUpRight aria-hidden className="size-4 sm:size-5" />
        </span>
      </div>
    </Link>
  );
}

const reveal = { y: 40, amount: 0.2 };

/** Repeating rhythm of one wide card followed by a pair of half-width cards. */
export function ProjectGrid({ projects, headingLevel }: { projects: Project[]; headingLevel?: "h2" | "h3" }) {
  const groups: Project[][] = [];
  for (let i = 0; i < projects.length; i += 3) groups.push(projects.slice(i, i + 3));

  return (
    <div className="grid gap-4 sm:gap-6">
      {groups.map(([featured, ...pair]) => (
        <div key={featured.slug} className="contents">
          <Reveal {...reveal}>
            <ProjectCard project={featured} featured as={headingLevel} />
          </Reveal>
          {pair.length > 0 && (
            <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
              {pair.map((project) => (
                <Reveal key={project.slug} {...reveal}>
                  <ProjectCard project={project} as={headingLevel} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
