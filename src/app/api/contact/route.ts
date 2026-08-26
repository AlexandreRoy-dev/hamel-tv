import { NextResponse } from "next/server"

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request) {
  const body = await request.json().catch(() => null)
  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "invalid" }, { status: 400 })
  }

  const name = String(Reflect.get(body, "name") ?? "").trim()
  const email = String(Reflect.get(body, "email") ?? "").trim()
  const phone = String(Reflect.get(body, "phone") ?? "").trim()
  const service = String(Reflect.get(body, "service") ?? "").trim()
  const message = String(Reflect.get(body, "message") ?? "").trim()
  const locale = String(Reflect.get(body, "locale") ?? "fr").trim()

  const fields: Record<string, string> = {}
  if (name.length < 2) fields.name = "name"
  if (!emailPattern.test(email)) fields.email = "email"
  if (message.length < 10) fields.message = "message"

  if (Object.keys(fields).length > 0) {
    return NextResponse.json({ error: "validation", fields }, { status: 400 })
  }

  console.info("[hamel-tv contact]", { name, email, phone, service, locale, message })

  return NextResponse.json({ ok: true })
}
