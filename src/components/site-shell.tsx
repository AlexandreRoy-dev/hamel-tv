"use client"

import type { ReactNode } from "react"

import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { useLanguage } from "@/components/language-provider"

export function SiteShell({ children }: { children: ReactNode }) {
  const { t } = useLanguage()

  return (
    <>
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-background focus:px-3 focus:py-2"
      >
        {t.skip}
      </a>
      <SiteHeader />
      <main id="contenu" className="flex-1">
        {children}
      </main>
      <SiteFooter />
    </>
  )
}
