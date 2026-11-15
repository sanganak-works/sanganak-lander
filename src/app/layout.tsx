import type { Metadata } from "next";
import { Bricolage_Grotesque, Noto_Sans_Devanagari, Noto_Sans_Arabic } from "next/font/google";
import localFont from "next/font/local";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const displayFont = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const hindiFont = Noto_Sans_Devanagari({
  variable: "--font-wordmark-hi",
  weight: "700",
  subsets: ["devanagari"],
  display: "swap",
  preload: false,
});
const urduFont = Noto_Sans_Arabic({
  variable: "--font-wordmark-ur",
  weight: "600",
  subsets: ["arabic"],
  display: "swap",
  preload: false,
});

// Paper Term (SIL OFL 1.1, see ./fonts/paper-term/OFL.txt): Paper Mono with
// the single-story a, slashed zero and coding ligatures baked in.
const monoFont = localFont({
  src: [
    { path: "./fonts/paper-term/PaperTerm-Regular.woff2", weight: "400" },
    { path: "./fonts/paper-term/PaperTerm-Medium.woff2", weight: "500" },
    { path: "./fonts/paper-term/PaperTerm-Bold.woff2", weight: "700" },
  ],
  style: "normal",
  declarations: [{ prop: "font-family", value: "Paper Term" }],
  variable: "--font-mono",
  display: "swap",
  adjustFontFallback: false,
  // Turbopack names the family after the JS identifier in --font-mono and
  // ignores the font-family declaration above, so list "Paper Term" here too.
  fallback: [
    "Paper Term",
    "ui-monospace",
    "SFMono-Regular",
    "Menlo",
    "Monaco",
    "Consolas",
    "Liberation Mono",
    "Courier New",
    "monospace",
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sanganak.ai"),
  title: "Sanganak",
  description:
    "We advise about and build outcome-oriented agents for those outside the tech bubble",
  openGraph: {
    title: "Sanganak",
    description: "Frontier technology, for the rest of the world.",
    siteName: "Sanganak",
    type: "website",
    url: "/",
  },
  icons: {
    icon: "/brand/logo-crop.png",
    shortcut: "/brand/logo-crop.png",
    apple: "/brand/logo-crop.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${displayFont.variable} ${monoFont.variable} ${hindiFont.variable} ${urduFont.variable}`}>
      <body>
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
