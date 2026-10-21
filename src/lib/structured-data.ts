import {
  ADDRESS_COUNTRY,
  ADDRESS_LINE,
  ADDRESS_LOCALITY,
  ADDRESS_POSTAL_CODE,
  ADDRESS_REGION,
  BRANDS,
  EMAIL,
  GOOGLE_REVIEWS_URL,
  IMAGE_ABOUT,
  IMAGE_HERO,
  MAPS_LINK,
  PHONE_TEL,
  PLACE_LATITUDE,
  PLACE_LONGITUDE,
  SEO_DESCRIPTION,
  SITE_URL,
  copy,
} from "@/lib/content"

const pageUrl = `${SITE_URL}/`
const areaServed = copy.fr.hero.kicker

/** ElectronicsRepair is a LocalBusiness subtype. Facts come from the page copy. */
export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ElectronicsRepair",
    "@id": `${pageUrl}#atelier`,
    name: "Hamel TV Service",
    description: SEO_DESCRIPTION,
    url: pageUrl,
    image: [`${SITE_URL}${IMAGE_HERO}`, `${SITE_URL}${IMAGE_ABOUT}`],
    telephone: PHONE_TEL,
    email: EMAIL,
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS_LINE,
      addressLocality: ADDRESS_LOCALITY,
      addressRegion: ADDRESS_REGION,
      postalCode: ADDRESS_POSTAL_CODE,
      addressCountry: ADDRESS_COUNTRY,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: PLACE_LATITUDE,
      longitude: PLACE_LONGITUDE,
    },
    hasMap: MAPS_LINK,
    sameAs: [GOOGLE_REVIEWS_URL],
    areaServed,
    knowsLanguage: ["fr", "en"],
    knowsAbout: [...BRANDS],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:30",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: copy.fr.nav.services,
      itemListElement: copy.fr.services.items.map((item) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: item.title,
          description: item.body,
          areaServed,
        },
      })),
    },
  }
}
