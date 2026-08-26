import type { Metadata } from "next"
import { Geist, Newsreader } from "next/font/google"

import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
})

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
})

export const metadata: Metadata = {
  title: "Hamel TV Service | Réparation d’appareils électroniques à Sherbrooke",
  description:
    "Réparation de téléviseurs, micro-ondes et appareils exerciseurs à Sherbrooke. Installation TV murale, systèmes de son et service à domicile. 2685, rue Galt Ouest.",
  openGraph: {
    title: "Hamel TV Service",
    description:
      "Réparation et installation d’appareils électroniques à Sherbrooke et les environs.",
    locale: "fr_CA",
    type: "website",
  },
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr-CA"
      className={`${geistSans.variable} ${newsreader.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        {children}
      </body>
    </html>
  )
}
