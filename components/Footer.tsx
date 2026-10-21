"use client";

import { usePathname } from "next/navigation";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { BehanceIcon, InstagramIcon, LinkedinIcon } from "./Icons";
import { profile, socials } from "@/lib/data";

const socialIcons = { Instagram: InstagramIcon, LinkedIn: LinkedinIcon, Behance: BehanceIcon };

const pill =
  "inline-flex max-w-full items-center gap-2 rounded-full border border-border bg-surface px-3 py-2 text-muted-foreground transition hover:border-primary hover:text-foreground sm:px-4";

// Inner pages use a roomier footer with a narrower container than the home page.
const variants = {
  home: {
    footer: "py-10 md:py-12",
    container: "w-[min(94%,1200px)]",
    links: "gap-2.5 md:gap-3",
    resume: "gap-2",
    arrow: "size-3.5",
  },
  page: {
    footer: "py-12 md:py-16",
    container: "w-[min(92%,1200px)]",
    links: "max-w-full gap-2 sm:gap-3 md:gap-4",
    resume: "gap-1.5 text-xs font-medium sm:text-sm",
    arrow: "size-4 transition group-hover:rotate-45",
  },
};

export default function Footer() {
  const v = variants[usePathname() === "/" ? "home" : "page"];
  return (
    <footer id="contact" className={`border-t border-border/60 bg-surface/40 ${v.footer}`}>
      <div className={`mx-auto flex ${v.container} flex-col items-center gap-6 text-center md:flex-row md:flex-wrap md:items-center md:justify-between md:gap-5 md:text-left`}>
        <div className="flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded-full bg-primary font-display text-sm font-bold text-primary-foreground">
            {profile.initial}
          </span>
          <div>
            <p className="text-sm font-medium">{profile.name}</p>
            <p className="label-xs">{profile.footerRole}</p>
          </div>
        </div>

        <div className={`flex flex-wrap items-center justify-center text-xs sm:text-sm ${v.links}`}>
          <a href={`mailto:${profile.email}`} className={pill}>
            <Mail aria-hidden className="size-3.5 shrink-0" />
            <span className="truncate">{profile.email}</span>
          </a>
          <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className={pill}>
            <Phone aria-hidden className="size-3.5 shrink-0" />
            <span>{profile.phone}</span>
          </a>
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className={`group inline-flex items-center rounded-full bg-foreground px-3 py-2 text-background transition hover:bg-primary hover:text-primary-foreground sm:px-4 ${v.resume}`}
          >
            Download resume <ArrowUpRight aria-hidden className={v.arrow} />
          </a>
        </div>

        <div className="flex items-center gap-2">
          {socials.map(({ label, href }) => {
            const Icon = socialIcons[label];
            return (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid size-9 place-items-center rounded-full border border-border bg-surface text-muted-foreground transition hover:border-primary hover:text-primary"
              >
                <Icon className="size-4" />
              </a>
            );
          })}
        </div>
      </div>
      <p className="label-xs mt-8 text-center">© 2026 — Crafted &amp; developed by {profile.name}</p>
    </footer>
  );
}
