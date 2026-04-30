import { Cormorant_Garamond, Inter } from "next/font/google";

// next/font fetches once at build time and self-hosts the files.
// No runtime requests to Google — DSGVO-konform.
export const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

export const inter = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});
