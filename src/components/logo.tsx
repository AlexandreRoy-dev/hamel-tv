import { cn } from "@/lib/utils"

export function Logo({
  className,
  onDark = false,
}: {
  className?: string
  onDark?: boolean
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        viewBox="0 0 40 40"
        className="size-9 shrink-0"
        aria-hidden="true"
      >
        <rect
          x="4"
          y="6"
          width="32"
          height="22"
          rx="3.5"
          className="fill-navy stroke-brass"
          strokeWidth="1.6"
        />
        <rect x="8" y="10" width="24" height="14" rx="1.2" className="fill-brass/90" />
        <path
          d="M14 32h12"
          className="stroke-brass"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M16 28v4M24 28v4"
          className="stroke-brass"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-heading text-[1.35rem] tracking-tight",
            onDark ? "text-paper" : "text-foreground"
          )}
        >
          Hamel TV
        </span>
        <span
          className={cn(
            "mt-0.5 text-[0.65rem] font-medium tracking-[0.18em] uppercase",
            onDark ? "text-paper/55" : "text-muted-foreground"
          )}
        >
          Service
        </span>
      </span>
    </span>
  )
}
