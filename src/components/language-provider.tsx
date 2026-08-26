"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react"

import { copy, type Copy, type Locale } from "@/lib/content"

const STORAGE_KEY = "hamel-tv-locale"
const listeners = new Set<() => void>()

function emit() {
  listeners.forEach((listener) => listener())
}

function subscribe(listener: () => void) {
  listeners.add(listener)
  window.addEventListener("storage", listener)
  return () => {
    listeners.delete(listener)
    window.removeEventListener("storage", listener)
  }
}

function readLocale(): Locale {
  const stored = window.localStorage.getItem(STORAGE_KEY)
  return stored === "en" ? "en" : "fr"
}

type LanguageContextValue = {
  locale: Locale
  t: Copy
  setLocale: (locale: Locale) => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(subscribe, readLocale, () => "fr" as Locale)

  useEffect(() => {
    document.documentElement.lang = locale === "fr" ? "fr-CA" : "en-CA"
  }, [locale])

  const setLocale = useCallback((next: Locale) => {
    window.localStorage.setItem(STORAGE_KEY, next)
    emit()
  }, [])

  const value = useMemo(
    () => ({
      locale,
      t: copy[locale],
      setLocale,
    }),
    [locale, setLocale]
  )

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return context
}
