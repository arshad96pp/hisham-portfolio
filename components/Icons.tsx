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
    <path d="M2 7h7.5C11.4 7 13 8.3 13 10.2c0 1.2-.6 2.1-1.5 2.6C13 13.3 14 14.4 14 16c0 2.2-1.8 3.5-4 3.5H2V7Z" />
    <path d="M2 11h7M2 16h8" />
    <path d="M16 9h6M19 7a4 4 0 1 0 0 10 4 4 0 0 0 0-10Z" />
  </Glyph>
);

export const FramerIcon = (p: SVGProps<SVGSVGElement>) => (
  <Glyph {...p}>
    <path d="M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7" />
  </Glyph>
);
