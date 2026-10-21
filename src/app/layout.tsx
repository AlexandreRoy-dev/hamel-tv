import type { Metadata } from "next"
import { Geist, Newsreader } from "next/font/google"

import { LanguageProvider } from "@/components/language-provider"
import { SiteShell } from "@/components/site-shell"
import {
  copy,
  IMAGE_ABOUT,
  SEO_DESCRIPTION,
  SEO_SHARE_DESCRIPTION,
  SEO_TITLE,
  SITE_URL,
} from "@/lib/content"
import { localBusinessJsonLd } from "@/lib/structured-data"

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

const pageUrl = `${SITE_URL}/`

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SEO_TITLE,
  description: SEO_DESCRIPTION,
  alternates: {
    canonical: pageUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: SEO_TITLE,
    description: SEO_SHARE_DESCRIPTION,
    locale: "fr_CA",
    type: "website",
    url: pageUrl,
    siteName: "Hamel TV Service",
    images: [
      {
        url: IMAGE_ABOUT,
        width: 1536,
        height: 1024,
        alt: copy.fr.about.photoAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_TITLE,
    description: SEO_SHARE_DESCRIPTION,
    images: [IMAGE_ABOUT],
  },
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr-CA"
      className={`${geistSans.variable} ${newsreader.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd()).replace(/</g, "\\u003c"),
          }}
        />
        <LanguageProvider>
          <SiteShell>{children}</SiteShell>
        </LanguageProvider>
      </body>
    </html>
  )
}
