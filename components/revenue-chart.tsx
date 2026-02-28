"use client"

import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts"

const REVENUE_DATA = [
  { month: "Jan", revenue: 86400, orders: 1840 },
  { month: "Feb", revenue: 92100, orders: 1920 },
  { month: "Mar", revenue: 88700, orders: 1780 },
  { month: "Apr", revenue: 101300, orders: 2140 },
  { month: "May", revenue: 98500, orders: 2020 },
  { month: "Jun", revenue: 112800, orders: 2310 },
  { month: "Jul", revenue: 108400, orders: 2180 },
  { month: "Aug", revenue: 118900, orders: 2450 },
  { month: "Sep", revenue: 115200, orders: 2380 },
  { month: "Oct", revenue: 124700, orders: 2510 },
  { month: "Nov", revenue: 132400, orders: 2680 },
  { month: "Dec", revenue: 128400, orders: 2640 },
]

function CustomTooltip({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number; dataKey: string }>; label?: string }) {
  if (!active || !payload?.length) return null

  return (
    <div className="rounded-md border border-border bg-card px-3 py-2 shadow-lg">
      <p className="mb-1 text-[10px] font-medium text-muted-foreground">{label}</p>
      {payload.map((entry) => (
        <p key={entry.dataKey} className="font-mono text-xs tabular-nums text-foreground">
          {entry.dataKey === "revenue"
            ? `$${entry.value.toLocaleString()}`
            : entry.value.toLocaleString()}{" "}
          <span className="text-muted-foreground">{entry.dataKey}</span>
        </p>
      ))}
    </div>
  )
}

export function RevenueChart() {
  return (
    <div className="flex flex-col gap-4 rounded-md border border-border bg-card p-5">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <span className="text-sm font-bold text-foreground">Revenue</span>
          <span className="text-xs text-muted-foreground">
            Monthly revenue overview
          </span>
        </div>
        <div className="flex gap-4">
          <div className="flex items-center gap-1.5">
            <div className="size-1.5 rounded-full bg-foreground" />
            <span className="text-[10px] text-muted-foreground">Revenue</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="size-1.5 rounded-full bg-muted-foreground/40" />
            <span className="text-[10px] text-muted-foreground">Orders</span>
          </div>
        </div>
      </div>
      <div className="h-[280px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={REVENUE_DATA} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#fafafa" stopOpacity={0.05} />
                <stop offset="100%" stopColor="#fafafa" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              stroke="rgba(255,255,255,0.04)"
              strokeDasharray="3 3"
              vertical={false}
            />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#a1a1aa", fontSize: 11 }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#a1a1aa", fontSize: 11 }}
              tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#fafafa"
              strokeWidth={1.5}
              fill="url(#revenueGrad)"
              dot={false}
              activeDot={{ r: 3, fill: "#fafafa", strokeWidth: 0 }}
            />
            <Area
              type="monotone"
              dataKey="orders"
              stroke="rgba(161,161,170,0.4)"
              strokeWidth={1}
              fill="transparent"
              dot={false}
              activeDot={{ r: 3, fill: "#a1a1aa", strokeWidth: 0 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
