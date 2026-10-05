import type { ReactNode, SVGProps } from "react";

// Brand glyphs that lucide-react no longer ships, drawn in the same 24px / 2px-stroke style.
function Glyph({ children, ...props }: SVGProps<SVGSVGElement> & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      {children}
    </svg>
  );
}

export const InstagramIcon = (p: SVGProps<SVGSVGElement>) => (
  <Glyph {...p}>
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <path d="M17.5 6.5h.01" />
  </Glyph>
);

export const LinkedinIcon = (p: SVGProps<SVGSVGElement>) => (
  <Glyph {...p}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </Glyph>
);

export const DribbbleIcon = (p: SVGProps<SVGSVGElement>) => (
  <Glyph {...p}>
    <circle cx="12" cy="12" r="10" />
    <path d="M19.1 5.1C15 8.6 9.6 10 3 9.5" />
    <path d="M21.8 13.6c-6.1-1.2-11.1 0-15.6 6.6" />
    <path d="M8.6 2.8c4 5.2 6.3 11.3 7.1 18" />
  </Glyph>
);

export const FramerIcon = (p: SVGProps<SVGSVGElement>) => (
  <Glyph {...p}>
    <path d="M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7" />
  </Glyph>
);
