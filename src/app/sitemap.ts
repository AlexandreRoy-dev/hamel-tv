import type { MetadataRoute } from "next"

import {
  IMAGE_ABOUT,
  IMAGE_BACKGROUND,
  IMAGE_HERO,
  SITE_URL,
} from "@/lib/content"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: "2026-10-21",
      changeFrequency: "monthly",
      priority: 1,
      images: [
        `${SITE_URL}${IMAGE_HERO}`,
        `${SITE_URL}${IMAGE_ABOUT}`,
        `${SITE_URL}${IMAGE_BACKGROUND}`,
      ],
    },
  ]
}
