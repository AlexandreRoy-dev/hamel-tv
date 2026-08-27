"use client"

import { useState } from "react"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

type FieldErrors = {
  name?: string
  email?: string
  phone?: string
  message?: string
}

type Status = "idle" | "submitting" | "success" | "error"

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const INBOX = "alex@roymarketing.ca"

export function ContactForm() {
  const { t, locale } = useLanguage()
  const c = t.contact
  const [status, setStatus] = useState<Status>("idle")
  const [errors, setErrors] = useState<FieldErrors>({})

  function validate(form: FormData): FieldErrors {
    const next: FieldErrors = {}
    const name = String(form.get("name") ?? "").trim()
    const email = String(form.get("email") ?? "").trim()
    const phone = String(form.get("phone") ?? "").trim()
    const message = String(form.get("message") ?? "").trim()
    if (name.length < 2) next.name = c.errors.name
    if (!emailPattern.test(email)) next.email = c.errors.email
    if (phone.replace(/\D/g, "").length < 10) next.phone = c.errors.phone
    if (message.length < 10) next.message = c.errors.message
    return next
  }

  async function deliver(payload: Record<string, string>) {
    const local = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
    if (local.ok) return true
    if (local.status === 400) return false

    const remote = await fetch(`https://formsubmit.co/ajax/${INBOX}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        ...payload,
        _subject: `Hamel TV: demande d'estimation de ${payload.name}`,
        _replyto: payload.email,
        _template: "table",
        _captcha: "false",
      }),
    })
    return remote.ok
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const nextErrors = validate(data)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setStatus("submitting")
    const payload = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      phone: String(data.get("phone") ?? "").trim(),
      service: String(data.get("service") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
      locale,
    }
    try {
      const sent = await deliver(payload)
      if (!sent) throw new Error("request failed")
      setStatus("success")
      form.reset()
    } catch {
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-2xl border border-brass/40 bg-brass/10 px-6 py-10 text-center"
      >
        <p className="font-heading text-2xl text-navy">{c.successTitle}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {c.successBody}
        </p>
        <Button
          type="button"
          variant="outline"
          className="mt-6 h-10 px-4"
          onClick={() => setStatus("idle")}
        >
          {c.formTitle}
        </Button>
      </div>
    )
  }

  if (status === "error") {
    return (
      <div
        role="alert"
        className="rounded-2xl border border-destructive/30 bg-destructive/5 px-6 py-10 text-center"
      >
        <p className="font-heading text-2xl">{c.errorTitle}</p>
        <p className="mt-3 text-sm text-muted-foreground">{c.errorBody}</p>
        <Button
          type="button"
          className="mt-6 h-10 px-4"
          onClick={() => setStatus("idle")}
        >
          {c.retry}
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <Field id="name" label={c.name} error={errors.name}>
        <Input
          id="name"
          name="name"
          autoComplete="name"
          required
          aria-invalid={Boolean(errors.name)}
          className="h-11 px-3"
        />
      </Field>
      <Field id="email" label={c.email} error={errors.email}>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          aria-invalid={Boolean(errors.email)}
          className="h-11 px-3"
        />
      </Field>
      <Field id="phone" label={c.phone} error={errors.phone}>
        <Input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          required
          aria-invalid={Boolean(errors.phone)}
          className="h-11 px-3"
        />
      </Field>
      <Field id="service" label={c.service}>
        <select
          id="service"
          name="service"
          defaultValue=""
          className="h-11 w-full rounded-lg border border-input bg-transparent px-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          <option value="">{c.servicePlaceholder}</option>
          {c.services.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </Field>
      <Field id="message" label={c.message} error={errors.message}>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          aria-invalid={Boolean(errors.message)}
          className="min-h-32 px-3 py-2.5"
        />
      </Field>
      <Button
        type="submit"
        disabled={status === "submitting"}
        className="h-12 w-full px-5 text-base sm:w-auto"
      >
        {status === "submitting" ? c.sending : c.submit}
      </Button>
    </form>
  )
}

function Field({
  id,
  label,
  hint,
  error,
  children,
}: {
  id: string
  label: string
  hint?: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={id}>
        {label}
        {hint ? (
          <span className="font-normal text-muted-foreground">({hint})</span>
        ) : null}
      </Label>
      {children}
      {error ? (
        <p className="text-sm text-destructive" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  )
}
