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

export const BehanceIcon = (p: SVGProps<SVGSVGElement>) => (
  <Glyph {...p}>
    <path d="M3 18V6h4.5a3 3 0 0 1 0 6 3 3 0 0 1 0 6H3" />
    <path d="M3 12h4.5" />
    <path d="M14 13h7a3.5 3.5 0 0 0-7 0v2a3.5 3.5 0 0 0 6.64 1" />
    <path d="M16 6h3" />
  </Glyph>
);

export const FramerIcon = (p: SVGProps<SVGSVGElement>) => (
  <Glyph {...p}>
    <path d="M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7" />
  </Glyph>
);
