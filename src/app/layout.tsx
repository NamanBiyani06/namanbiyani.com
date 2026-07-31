import type { Metadata } from "next";
import { Geist_Mono, DM_Serif_Display, Caveat, Silkscreen } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider/theme-provider";

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-serif",
  style: ["italic"],
  weight: "400",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-hand",
  weight: ["400", "600"],
  subsets: ["latin"],
});

const silkscreen = Silkscreen({
  variable: "--font-pixel",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Naman Biyani",
  description: "Naman Biyani — CS @ University of Waterloo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistMono.variable} ${dmSerif.variable} ${caveat.variable} ${silkscreen.variable} font-mono text-[14px] leading-relaxed antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
