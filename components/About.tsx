import { Reveal } from "./Reveal";
import { intro, profile } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="relative py-16 sm:py-24 md:py-32">
      <div className="mx-auto grid w-[min(92%,1200px)] gap-6 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-3">
          <p className="label-xs">[ 01 — About ]</p>
        </div>
        <Reveal amount={0.2} className="md:col-span-9">
          <p className="font-display text-xl leading-snug text-balance sm:text-2xl md:text-3xl lg:text-4xl">
            Hi, I&apos;m <span className="text-primary">{profile.name}</span> —{" "}
            {`a `}
            {profile.role}
            {`passionate about turning complex problems into simple, seamless digital experiences. With 2+ years in UI/UX and a background in graphic design, I create intuitive interfaces that put users first.
`}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
