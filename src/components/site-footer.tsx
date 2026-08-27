"use client"

import { Logo } from "@/components/logo"
import { useLanguage } from "@/components/language-provider"
import { ADDRESS_CITY, ADDRESS_LINE, EMAIL, PHONE_DISPLAY, PHONE_TEL } from "@/lib/content"

export function SiteFooter() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-navy text-paper">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Logo onDark />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-paper/70">
            {t.footer.blurb}
          </p>
        </div>
        <div className="text-sm leading-relaxed text-paper/80">
          <p className="font-medium text-paper">{ADDRESS_LINE}</p>
          <p>{ADDRESS_CITY}</p>
          <a className="mt-3 block hover:text-brass" href={`tel:${PHONE_TEL}`}>
            {PHONE_DISPLAY}
          </a>
          <a className="block hover:text-brass" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </div>
        <div className="text-sm text-paper/60 md:text-right">
          <a className="mb-3 block text-paper/80 hover:text-brass" href="/a-propos-de-daisy/">
            {t.nav.daisy}
          </a>
          <p>
            © {year} Hamel TV Service. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}
