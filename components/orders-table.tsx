import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ArrowUpRight } from "lucide-react"

type OrderRow = {
  id: string
  customer: string
  product: string
  amount: string
  status: "Completed" | "Processing" | "Refunded" | "Pending"
  date: string
}

const ORDERS: OrderRow[] = [
  {
    id: "ORD-7291",
    customer: "Alexandra Chen",
    product: "Premium Collection",
    amount: "$2,490.00",
    status: "Completed",
    date: "2026-02-28",
  },
  {
    id: "ORD-7290",
    customer: "Marcus Webb",
    product: "Essential Kit",
    amount: "$890.00",
    status: "Processing",
    date: "2026-02-28",
  },
  {
    id: "ORD-7289",
    customer: "Sophie Laurent",
    product: "Executive Set",
    amount: "$4,200.00",
    status: "Completed",
    date: "2026-02-27",
  },
  {
    id: "ORD-7288",
    customer: "James Okoro",
    product: "Starter Pack",
    amount: "$340.00",
    status: "Pending",
    date: "2026-02-27",
  },
  {
    id: "ORD-7287",
    customer: "Elena Vasquez",
    product: "Premium Collection",
    amount: "$2,490.00",
    status: "Completed",
    date: "2026-02-27",
  },
  {
    id: "ORD-7286",
    customer: "David Kim",
    product: "Luxury Bundle",
    amount: "$6,100.00",
    status: "Completed",
    date: "2026-02-26",
  },
  {
    id: "ORD-7285",
    customer: "Maria Santos",
    product: "Essential Kit",
    amount: "$890.00",
    status: "Refunded",
    date: "2026-02-26",
  },
  {
    id: "ORD-7284",
    customer: "Thomas Wright",
    product: "Executive Set",
    amount: "$4,200.00",
    status: "Processing",
    date: "2026-02-25",
  },
]

const statusStyle: Record<OrderRow["status"], string> = {
  Completed: "text-emerald-500",
  Processing: "text-foreground",
  Refunded: "text-red-400",
  Pending: "text-amber-500",
}

export function OrdersTable() {
  return (
    <div className="flex flex-col gap-4 rounded-md border border-border bg-card">
      <div className="flex items-center justify-between px-5 pt-5">
        <div className="flex flex-col gap-1">
          <span className="text-sm font-bold text-foreground">
            Recent Orders
          </span>
          <span className="text-xs text-muted-foreground">
            Latest transactions across all channels
          </span>
        </div>
        <button className="inline-flex items-center gap-1 rounded-md bg-foreground px-3 py-1.5 text-xs font-medium text-background transition-opacity duration-150 hover:opacity-90">
          View All
          <ArrowUpRight className="size-3" strokeWidth={1.5} />
        </button>
      </div>
      <Table>
        <TableHeader>
          <TableRow className="border-border hover:bg-transparent">
            <TableHead className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground/60">
              Order
            </TableHead>
            <TableHead className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground/60">
              Customer
            </TableHead>
            <TableHead className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground/60">
              Product
            </TableHead>
            <TableHead className="text-right text-[11px] font-medium uppercase tracking-wider text-muted-foreground/60">
              Amount
            </TableHead>
            <TableHead className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground/60">
              Status
            </TableHead>
            <TableHead className="text-right text-[11px] font-medium uppercase tracking-wider text-muted-foreground/60">
              Date
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {ORDERS.map((order) => (
            <TableRow
              key={order.id}
              className="border-border transition-colors duration-150 hover:bg-[rgba(255,255,255,0.02)]"
            >
              <TableCell className="font-mono text-xs tabular-nums text-foreground">
                {order.id}
              </TableCell>
              <TableCell className="text-xs text-muted-foreground">
                {order.customer}
              </TableCell>
              <TableCell className="text-xs text-muted-foreground">
                {order.product}
              </TableCell>
              <TableCell className="text-right font-mono text-xs tabular-nums text-foreground">
                {order.amount}
              </TableCell>
              <TableCell>
                <span
                  className={`text-xs font-medium ${statusStyle[order.status]}`}
                >
                  {order.status}
                </span>
              </TableCell>
              <TableCell className="text-right font-mono text-[11px] tabular-nums text-muted-foreground/60">
                {order.date}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
