import { skills } from "@/lib/data";

/** Skills ticker: two identical tracks, each holding the list twice and sliding -50% for a seamless loop. */
export default function Marquee() {
  const items = [...skills, ...skills];
  const track = (hidden?: boolean) => (
    <div className="flex shrink-0 animate-marquee gap-12 pr-12" aria-hidden={hidden || undefined}>
      {items.map((skill, i) => (
        <span key={i} className="flex items-center gap-12 font-display text-2xl md:text-3xl">
          {skill}
          <span aria-hidden className="size-1.5 rounded-full bg-primary" />
        </span>
      ))}
    </div>
  );

  return (
    <section aria-label="Skills" className="border-y border-border/60 bg-surface/40 py-8 backdrop-blur">
      <div className="flex overflow-hidden">
        {track()}
        {track(true)}
      </div>
    </section>
  );
}
