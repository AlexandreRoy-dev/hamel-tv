"use client"

import { useEffect, useRef, useState, useSyncExternalStore, type ReactNode } from "react"

import { cn } from "@/lib/utils"

type AnimateInProps = {
  children: ReactNode
  className?: string
  delay?: number
  threshold?: number
}

function subscribeReducedMotion(onChange: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)")
  media.addEventListener("change", onChange)
  return () => media.removeEventListener("change", onChange)
}

export function AnimateIn({
  children,
  className,
  delay = 0,
  threshold = 0.35,
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [revealed, setRevealed] = useState(false)
  const reduceMotion = useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false
  )
  const visible = reduceMotion || revealed

  useEffect(() => {
    const node = ref.current
    if (!node || reduceMotion) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true)
          observer.disconnect()
        }
      },
      { threshold }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [reduceMotion, threshold])

  return (
    <div
      ref={ref}
      className={cn("anim-in", visible && "is-in", className)}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  )
}
