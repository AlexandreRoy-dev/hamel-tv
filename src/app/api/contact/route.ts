import { NextResponse } from "next/server"

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const INBOX = "alex@roymarketing.ca"

function digitCount(value: string) {
  return value.replace(/\D/g, "").length
}

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
  if (digitCount(phone) < 10) fields.phone = "phone"
  if (message.length < 10) fields.message = "message"

  if (Object.keys(fields).length > 0) {
    return NextResponse.json({ error: "validation", fields }, { status: 400 })
  }

  const payload = {
    name,
    email,
    phone,
    service: service || "(non précisé)",
    message,
    locale,
    _subject: `Hamel TV: demande d'estimation de ${name}`,
    _replyto: email,
    _template: "table",
    _captcha: "false",
  }

  try {
    const response = await fetch(`https://formsubmit.co/ajax/${INBOX}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    })
    const text = await response.text()
    const json = text.startsWith("{") ? (JSON.parse(text) as { success?: boolean | string }) : null
    const delivered = json?.success === true || json?.success === "true"
    if (delivered) {
      console.info("[hamel-tv contact] delivered", { name, email, phone, service })
      return NextResponse.json({ ok: true })
    }
  } catch (error) {
    console.error("[hamel-tv contact] relay error", error)
  }

  return NextResponse.json({ error: "delivery" }, { status: 502 })
}
