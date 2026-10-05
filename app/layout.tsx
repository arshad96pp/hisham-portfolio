import type { Metadata, Viewport } from "next";
import { Inter, Inter_Tight, JetBrains_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { MotionProvider } from "@/components/Reveal";
import { profile } from "@/lib/data";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], weight: ["300", "400", "500", "600"] });
const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});
const jetbrains = JetBrains_Mono({ variable: "--font-jetbrains", subsets: ["latin"], weight: ["400", "500"] });

const description = `Portfolio of ${profile.name} — ${profile.role} crafting intuitive, visually engaging app and web experiences.`;

export const metadata: Metadata = {
  title: { default: `${profile.name} — ${profile.role}`, template: `%s — ${profile.name}` },
  description,
  authors: [{ name: profile.name }],
  openGraph: { title: `${profile.name} — ${profile.role}`, description, type: "website" },
};

export const viewport: Viewport = {
  themeColor: "#08090b",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${interTight.variable} ${jetbrains.variable}`}>
      <body>
        <MotionProvider>
          <SmoothScroll />
          <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
            <div aria-hidden className="pointer-events-none fixed inset-0 -z-10" style={{ background: "var(--gradient-radial)" }} />
            <div aria-hidden className="grain pointer-events-none fixed inset-0 -z-10 opacity-35 mix-blend-overlay" />
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </MotionProvider>
      </body>
    </html>
  );
}
