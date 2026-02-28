import {
  DollarSign,
  ShoppingCart,
  Users,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react"

type KpiCardProps = {
  title: string
  value: string
  change: string
  trend: "up" | "down"
  icon: React.ElementType
}

const KPI_DATA: KpiCardProps[] = [
  {
    title: "Total Revenue",
    value: "$1,284,392",
    change: "+12.5%",
    trend: "up",
    icon: DollarSign,
  },
  {
    title: "Orders",
    value: "12,847",
    change: "+8.2%",
    trend: "up",
    icon: ShoppingCart,
  },
  {
    title: "Active Customers",
    value: "3,421",
    change: "+4.1%",
    trend: "up",
    icon: Users,
  },
  {
    title: "Avg. Order Value",
    value: "$99.97",
    change: "-2.3%",
    trend: "down",
    icon: TrendingUp,
  },
]

export function KpiCards() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {KPI_DATA.map((kpi) => (
        <div
          key={kpi.title}
          className="flex flex-col gap-3 rounded-md border border-border bg-card p-5"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-muted-foreground">
              {kpi.title}
            </span>
            <kpi.icon
              className="size-[18px] text-muted-foreground/50"
              strokeWidth={1.25}
            />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold tabular-nums text-foreground">
              {kpi.value}
            </span>
            <span
              className={`flex items-center gap-0.5 text-xs font-medium tabular-nums ${
                kpi.trend === "up"
                  ? "text-emerald-500"
                  : "text-red-400"
              }`}
            >
              {kpi.trend === "up" ? (
                <ArrowUpRight className="size-3" strokeWidth={1.5} />
              ) : (
                <ArrowDownRight className="size-3" strokeWidth={1.5} />
              )}
              {kpi.change}
            </span>
          </div>
          <span className="text-[10px] text-muted-foreground/50">
            vs. previous period
          </span>
        </div>
      ))}
    </div>
  )
}
