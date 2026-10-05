"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { ease } from "./Reveal";
import { nav, profile } from "@/lib/data";

const linkBase = "rounded-full px-4 py-2 text-sm transition hover:bg-surface-elevated hover:text-foreground";
const mobileLink = "rounded-xl px-4 py-3 text-base text-foreground transition hover:bg-surface-elevated";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu on navigation and on Escape.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
  }
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => href === pathname;

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease }}
        className="fixed top-3 left-1/2 z-50 flex w-[min(94%,1100px)] -translate-x-1/2 items-center justify-between rounded-full border border-border/60 bg-surface/60 px-3 py-2 backdrop-blur-xl md:top-5"
      >
        <Link href="/" className="flex items-center gap-2 rounded-full bg-surface-elevated/80 py-1.5 pr-4 pl-1.5">
          <span className="grid size-8 place-items-center rounded-full bg-primary font-display text-sm font-bold text-primary-foreground">
            {profile.initial}
          </span>
          <span className="text-sm font-medium">{profile.name}</span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {nav.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`${linkBase} ${isActive(link.href) ? "bg-surface-elevated text-foreground" : "text-muted-foreground"}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="group hidden items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition hover:bg-primary hover:text-primary-foreground md:inline-flex"
          >
            Hire Me
            <ArrowUpRight aria-hidden className="size-4 transition group-hover:rotate-45" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="grid size-10 place-items-center rounded-full bg-surface-elevated/80 text-foreground md:hidden"
          >
            {open ? <X aria-hidden className="size-4" /> : <Menu aria-hidden className="size-4" />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-16 left-1/2 z-40 w-[min(94%,1100px)] -translate-x-1/2 rounded-2xl border border-border/60 bg-surface/95 p-4 backdrop-blur-xl md:hidden"
          >
            <nav aria-label="Mobile" className="flex flex-col">
              {nav.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={`${mobileLink} ${isActive(link.href) ? "bg-surface-elevated" : ""}`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-xl bg-primary px-4 py-3 text-sm font-medium text-primary-foreground"
              >
                Hire Me <ArrowUpRight aria-hidden className="size-4" />
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
