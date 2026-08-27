"use client"

import Image from "next/image"

import { AnimateIn } from "@/components/animate-in"
import { useLanguage } from "@/components/language-provider"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function DaisyPage() {
  const { t } = useLanguage()

  return (
    <article className="bg-navy text-paper">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <AnimateIn>
          <p className="text-xs font-semibold tracking-[0.22em] text-brass uppercase">
            {t.daisy.kicker}
          </p>
          <h1 className="mt-4 font-heading text-4xl leading-[1.12] text-balance sm:text-5xl lg:text-[3.4rem]">
            {t.daisy.title}
          </h1>
        </AnimateIn>

        <AnimateIn delay={0.15} className="mt-10 sm:mt-14">
          <figure className="overflow-hidden rounded-2xl ring-1 ring-paper/15">
            <Image
              src="/images/daisy.jpg"
              alt={t.daisy.photoAlt}
              width={1600}
              height={1200}
              priority
              className="h-auto w-full object-cover object-center"
            />
          </figure>
        </AnimateIn>

        <AnimateIn delay={0.25}>
          <a
            href="/"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "mt-10 inline-flex h-11 border-paper/25 bg-transparent px-5 text-paper hover:bg-paper/10 hover:text-paper"
            )}
          >
            {t.daisy.back}
          </a>
        </AnimateIn>
      </div>
    </article>
  )
}
