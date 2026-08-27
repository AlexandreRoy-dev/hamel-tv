import type { Metadata } from "next"

import { DaisyPage } from "@/components/daisy-page"

export const metadata: Metadata = {
  title: "À propos de Daisy | Hamel TV Service",
  description: "À propos de Daisy, Hamel TV Service à Sherbrooke.",
}

export default function Page() {
  return <DaisyPage />
}
