import { AppShell } from "@/components/app-shell"
import { KpiCards } from "@/components/kpi-cards"
import { RevenueChart } from "@/components/revenue-chart"
import { OrdersTable } from "@/components/orders-table"

export default function CfoPage() {
  return (
    <AppShell>
      <main className="flex flex-1 flex-col gap-8 p-8">
        {/* Page Header */}
        <div className="flex flex-col gap-1">
          <h1 className="text-lg font-bold text-foreground">
            CFO Analytics
          </h1>
          <p className="text-xs text-muted-foreground">
            Financial performance overview across all channels and regions
          </p>
        </div>

        {/* KPI Cards */}
        <KpiCards />

        {/* Revenue Chart */}
        <RevenueChart />

        {/* Data Grid */}
        <OrdersTable />
      </main>
    </AppShell>
  )
}
