import { HomePage } from "@/components/home-page"
import { LanguageProvider } from "@/components/language-provider"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { copy } from "@/lib/content"

export default function Page() {
  return (
    <LanguageProvider>
      <a
        href="#accueil"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-background focus:px-3 focus:py-2"
      >
        {copy.fr.skip}
      </a>
      <SiteHeader />
      <main className="flex-1">
        <HomePage />
      </main>
      <SiteFooter />
    </LanguageProvider>
  )
}
