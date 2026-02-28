import {
  CheckCircle2,
  AlertCircle,
  RefreshCw,
  Zap,
  ArrowUpRight,
  Package,
} from "lucide-react"

type LogEntry = {
  id: string
  timestamp: string
  message: string
  type: "success" | "info" | "warning" | "action"
}

const MOCK_LOGS: LogEntry[] = [
  {
    id: "1",
    timestamp: "14:32:07",
    message: "Inventory sync completed — 2,847 SKUs updated across 3 warehouses",
    type: "success",
  },
  {
    id: "2",
    timestamp: "14:28:43",
    message: "Draft order #DRF-4891 auto-promoted to confirmed status",
    type: "action",
  },
  {
    id: "3",
    timestamp: "14:25:11",
    message: "Price engine recalculated 156 products for EU region",
    type: "info",
  },
  {
    id: "4",
    timestamp: "14:22:58",
    message: "Low stock alert: 12 SKUs below reorder threshold in US-East",
    type: "warning",
  },
  {
    id: "5",
    timestamp: "14:19:30",
    message: "Customer segment 'VIP-Tier-1' refreshed — 342 members",
    type: "success",
  },
  {
    id: "6",
    timestamp: "14:15:02",
    message: "Shipping rates updated for Q1 carrier contracts",
    type: "action",
  },
  {
    id: "7",
    timestamp: "14:11:47",
    message: "Workflow 'abandoned-cart-recovery' triggered 28 emails",
    type: "info",
  },
  {
    id: "8",
    timestamp: "14:08:15",
    message: "Payment gateway health check — all 4 processors nominal",
    type: "success",
  },
]

const iconMap = {
  success: CheckCircle2,
  info: RefreshCw,
  warning: AlertCircle,
  action: Zap,
}

const dotColor = {
  success: "bg-emerald-500/70",
  info: "bg-foreground/30",
  warning: "bg-amber-500/70",
  action: "bg-foreground/50",
}

export function ExecutionLogs() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground/60">
          System Events
        </span>
        <button className="flex items-center gap-1 text-[10px] text-muted-foreground transition-colors duration-150 hover:text-foreground">
          View all
          <ArrowUpRight className="size-3" strokeWidth={1.25} />
        </button>
      </div>

      <div className="relative flex flex-col">
        {/* Timeline line */}
        <div className="absolute left-[5px] top-2 bottom-2 w-px bg-border" />

        {MOCK_LOGS.map((log) => (
          <div
            key={log.id}
            className="group relative flex items-start gap-4 py-2 pl-5"
          >
            {/* Dot on the timeline */}
            <div className={`absolute left-[3px] top-[11px] size-[5px] rounded-full ${dotColor[log.type]}`} />

            <span className="shrink-0 font-mono text-[11px] tabular-nums text-muted-foreground/50">
              {log.timestamp}
            </span>
            <span className="font-mono text-[12px] leading-relaxed text-muted-foreground transition-colors duration-150 group-hover:text-foreground">
              {log.message}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
