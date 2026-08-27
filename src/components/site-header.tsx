"use client"

import { useState } from "react"
import { Menu, Phone } from "lucide-react"

import { Logo } from "@/components/logo"
import { useLanguage } from "@/components/language-provider"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { PHONE_DISPLAY, PHONE_TEL, type Locale } from "@/lib/content"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { href: "/#services", key: "services" },
  { href: "/#a-propos", key: "about" },
  { href: "/#avis", key: "reviews" },
  { href: "/#contact", key: "contact" },
] as const

export function SiteHeader() {
  const { t, locale, setLocale } = useLanguage()
  const [open, setOpen] = useState(false)
  const links = NAV_LINKS.map((link) => ({
    href: link.href,
    label: t.nav[link.key],
  }))

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-[4.25rem] w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="/" className="rounded-md focus-visible:ring-2 focus-visible:ring-ring">
          <Logo />
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Principal">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LangSwitch locale={locale} setLocale={setLocale} label={t.lang.label} />
          <a
            href={`tel:${PHONE_TEL}`}
            className={cn(
              buttonVariants({ variant: "default" }),
              "h-10 px-3 sm:px-4"
            )}
          >
            <Phone className="size-4" />
            <span className="hidden sm:inline">{PHONE_DISPLAY}</span>
            <span className="sm:hidden">{t.nav.call}</span>
          </a>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="outline"
                  size="icon"
                  className="md:hidden"
                  aria-label={t.nav.menu}
                />
              }
            >
              <Menu className="size-4" />
            </SheetTrigger>
            <SheetContent side="right" className="bg-background">
              <SheetHeader>
                <SheetTitle className="sr-only">{t.nav.menu}</SheetTitle>
                <Logo />
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4" aria-label={t.nav.menu}>
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-2 py-3 text-base font-medium hover:bg-muted"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <div className="px-4">
                <a
                  href={`tel:${PHONE_TEL}`}
                  className={cn(
                    buttonVariants({ variant: "default" }),
                    "h-11 w-full px-4"
                  )}
                >
                  <Phone className="size-4" />
                  {t.nav.call} · {PHONE_DISPLAY}
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

function LangSwitch({
  locale,
  setLocale,
  label,
}: {
  locale: Locale
  setLocale: (locale: Locale) => void
  label: string
}) {
  return (
    <div
      role="group"
      aria-label={label}
      className="flex rounded-lg border border-border bg-card p-0.5 text-xs font-semibold"
    >
      {(["fr", "en"] as const).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLocale(code)}
          className={cn(
            "rounded-md px-2 py-1 uppercase transition-colors",
            locale === code
              ? "bg-navy text-paper"
              : "text-muted-foreground hover:text-foreground"
          )}
          aria-pressed={locale === code}
        >
          {code}
        </button>
      ))}
    </div>
  )
}
