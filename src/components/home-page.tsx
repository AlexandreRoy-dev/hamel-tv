"use client"

import Image from "next/image"
import {
  Clock,
  MapPin,
  Monitor,
  Microwave,
  Dumbbell,
  Home,
  Volume2,
  Wrench,
  Star,
  Phone,
} from "lucide-react"

import { AnimateIn } from "@/components/animate-in"
import { ContactForm } from "@/components/contact-form"
import { useLanguage } from "@/components/language-provider"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import {
  ADDRESS_CITY,
  ADDRESS_LINE,
  BRANDS,
  MAPS_EMBED,
  MAPS_LINK,
  PHONE_DISPLAY,
  PHONE_TEL,
} from "@/lib/content"
import { isOpenNow } from "@/lib/hours"
import { cn } from "@/lib/utils"

const SERVICE_ICONS = [Monitor, Wrench, Volume2, Microwave, Dumbbell, Home]

export function HomePage() {
  const { t } = useLanguage()
  const open = isOpenNow()

  return (
    <>
      <section
        id="accueil"
        className="relative overflow-hidden bg-navy text-paper"
      >
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/images/electronics.jpg"
            alt=""
            fill
            priority
            className="object-cover object-[20%_center] opacity-35 sm:object-center"
          />
          <div className="absolute inset-0 bg-linear-to-r from-navy via-navy/88 to-navy/55" />
        </div>

        <div className="relative mx-auto grid min-h-[min(92vh,820px)] w-full max-w-6xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] text-brass uppercase">
              {t.hero.kicker}
            </p>
            <h1 className="mt-4 max-w-xl font-heading text-4xl leading-[1.12] text-balance sm:text-5xl lg:text-[3.4rem]">
              {t.hero.title}
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-paper/78 sm:text-lg">
              {t.hero.lede}
            </p>
            <a
              href={`tel:${PHONE_TEL}`}
              className="mt-7 inline-flex items-center gap-3 text-paper transition-colors hover:text-brass"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-brass text-navy">
                <Phone className="size-6" aria-hidden="true" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-xs font-semibold tracking-[0.18em] text-brass uppercase">
                  {t.hero.callLabel}
                </span>
                <span className="mt-1.5 font-heading text-3xl tracking-tight sm:text-4xl">
                  {PHONE_DISPLAY}
                </span>
              </span>
            </a>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={`tel:${PHONE_TEL}`}
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "h-12 bg-brass px-5 text-base text-navy hover:bg-brass/90"
                )}
              >
                <Phone className="size-4" />
                {PHONE_DISPLAY}
              </a>
              <a
                href="#contact"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "h-12 border-paper/25 bg-transparent px-5 text-base text-paper hover:bg-paper/10 hover:text-paper"
                )}
              >
                {t.hero.ctaPrimary}
              </a>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-paper/75">
              <span className="inline-flex items-center gap-1.5">
                <Star className="size-4 fill-brass text-brass" />
                <strong className="text-paper">{t.hero.rating}</strong>
                <span>{t.hero.ratingNote}</span>
              </span>
              <span className="inline-flex items-center gap-2">
                <span
                  className={cn(
                    "size-2 rounded-full",
                    open ? "bg-emerald-400" : "bg-paper/40"
                  )}
                />
                {open ? t.hero.openNow : t.hero.closedNow}
                <span className="text-paper/50">· {t.hero.hoursHint}</span>
              </span>
            </div>
          </div>

          <div className="relative hidden overflow-hidden rounded-2xl ring-1 ring-paper/15 lg:block">
            <Image
              src="/images/electronics.jpg"
              alt={t.about.photoAlt}
              width={1024}
              height={1365}
              className="aspect-3/4 h-full w-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <AnimateIn>
          <p className="text-xs font-semibold tracking-[0.22em] text-brass uppercase">
            {t.services.eyebrow}
          </p>
          <h2 className="mt-3 max-w-2xl font-heading text-3xl text-balance sm:text-4xl">
            {t.services.title}
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">{t.services.intro}</p>
        </AnimateIn>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((item, index) => {
            const Icon = SERVICE_ICONS[index] ?? Wrench
            return (
              <AnimateIn key={item.title} delay={index * 0.12} threshold={0.25}>
                <article className="h-full rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <Icon className="size-6 text-brass" aria-hidden="true" />
                  <h3 className="mt-4 font-heading text-xl">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </article>
              </AnimateIn>
            )
          })}
        </div>
      </section>

      <section id="a-propos" className="bg-navy text-paper">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-2">
          <AnimateIn>
            <div className="overflow-hidden rounded-2xl ring-1 ring-paper/10">
              <Image
                src="/images/electronics.jpg"
                alt={t.about.photoAlt}
                width={1024}
                height={1365}
                className="aspect-4/3 w-full object-cover object-center"
              />
            </div>
          </AnimateIn>
          <AnimateIn delay={0.15}>
            <p className="text-xs font-semibold tracking-[0.22em] text-brass uppercase">
              {t.about.eyebrow}
            </p>
            <h2 className="mt-3 font-heading text-3xl text-balance sm:text-4xl">
              {t.about.title}
            </h2>
            {t.about.body.map((paragraph) => (
              <p key={paragraph} className="mt-4 leading-relaxed text-paper/75">
                {paragraph}
              </p>
            ))}
            <dl className="mt-8 grid gap-4 sm:grid-cols-3">
              {t.about.facts.map((fact) => (
                <div key={fact.label} className="border-t border-paper/15 pt-3">
                  <dt className="text-xs tracking-wide text-paper/50 uppercase">
                    {fact.label}
                  </dt>
                  <dd className="mt-1 text-sm font-medium">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </AnimateIn>
        </div>
      </section>

      <section className="border-y border-border bg-card py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimateIn>
            <p className="text-xs font-semibold tracking-[0.22em] text-brass uppercase">
              {t.brands.eyebrow}
            </p>
            <h2 className="mt-3 font-heading text-3xl">{t.brands.title}</h2>
            <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
              {t.brands.note}
            </p>
          </AnimateIn>
          <ul className="mt-8 flex flex-wrap gap-2">
            {BRANDS.map((brand) => (
              <li key={brand}>
                <Badge
                  variant="secondary"
                  className="rounded-full px-3 py-1 text-sm font-medium"
                >
                  {brand}
                </Badge>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="avis" className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <AnimateIn>
          <p className="text-xs font-semibold tracking-[0.22em] text-brass uppercase">
            {t.reviews.eyebrow}
          </p>
          <h2 className="mt-3 max-w-xl font-heading text-3xl sm:text-4xl">
            {t.reviews.title}
          </h2>
        </AnimateIn>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {t.reviews.items.map((review, index) => (
            <AnimateIn key={review.name} delay={index * 0.12} threshold={0.2}>
              <blockquote className="h-full rounded-2xl border border-border bg-card p-6">
                <div className="flex gap-1 text-brass" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, star) => (
                    <Star key={star} className="size-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-[0.95rem] leading-relaxed text-foreground/90">
                  “{review.quote}”
                </p>
                <footer className="mt-5 text-sm font-medium text-muted-foreground">
                  {review.name}
                </footer>
              </blockquote>
            </AnimateIn>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-muted/60">
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-[0.9fr_1.1fr]">
          <AnimateIn>
            <p className="text-xs font-semibold tracking-[0.22em] text-brass uppercase">
              {t.contact.eyebrow}
            </p>
            <h2 className="mt-3 font-heading text-3xl sm:text-4xl">
              {t.contact.title}
            </h2>
            <p className="mt-4 text-muted-foreground">{t.contact.intro}</p>

            <div className="mt-8 space-y-6 text-sm">
              <div>
                <h3 className="inline-flex items-center gap-2 font-medium">
                  <MapPin className="size-4 text-brass" />
                  {t.contact.addressTitle}
                </h3>
                <p className="mt-2 text-muted-foreground">
                  {ADDRESS_LINE}
                  <br />
                  {ADDRESS_CITY}
                </p>
                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-block text-navy underline-offset-4 hover:underline"
                >
                  {t.contact.directions}
                </a>
              </div>
              <div>
                <h3 className="inline-flex items-center gap-2 font-medium">
                  <Clock className="size-4 text-brass" />
                  {t.contact.hoursTitle}
                </h3>
                <ul className="mt-3 space-y-1.5">
                  {t.contact.hours.map((row) => (
                    <li
                      key={row.day}
                      className="flex justify-between gap-6 border-b border-border/70 py-1.5"
                    >
                      <span>{row.day}</span>
                      <span className="text-muted-foreground">{row.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={`tel:${PHONE_TEL}`}
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "h-12 bg-navy px-5 text-base"
                )}
              >
                <Phone className="size-4" />
                {PHONE_DISPLAY}
              </a>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.15}>
            <div className="rounded-2xl border border-border bg-background p-6 shadow-sm sm:p-8">
              <h3 className="font-heading text-2xl">{t.contact.formTitle}</h3>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </AnimateIn>
        </div>

        <div className="mx-auto w-full max-w-6xl px-4 pb-20 sm:px-6">
          <div className="overflow-hidden rounded-2xl border border-border">
            <iframe
              title={t.contact.mapTitle}
              src={MAPS_EMBED}
              className="h-72 w-full grayscale-[20%] sm:h-96"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  )
}
