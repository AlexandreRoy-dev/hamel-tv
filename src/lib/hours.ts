const ZONE = "America/Toronto"

function torontoParts(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: ZONE,
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    hourCycle: "h23",
  }).formatToParts(date)

  const get = (type: string) => parts.find((part) => part.type === type)?.value ?? ""
  return {
    weekday: get("weekday"),
    hour: Number(get("hour")),
    minute: Number(get("minute")),
  }
}

export function isOpenNow(date = new Date()) {
  const { weekday, hour, minute } = torontoParts(date)
  const weekend = weekday === "Sat" || weekday === "Sun"
  if (weekend) return false
  const minutes = hour * 60 + minute
  return minutes >= 9 * 60 && minutes < 17 * 60 + 30
}
