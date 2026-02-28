const ENTERPRISE_TOOLS = [
  "manage_catalog",
  "manage_draft_orders",
  "manage_locations",
  "manage_inventory",
  "manage_customers",
  "manage_promotions",
  "manage_gift_cards",
  "manage_pricing",
  "manage_channels",
  "manage_workflows",
  "manage_payments",
  "manage_shipping",
  "manage_analytics",
] as const

export function ToolsList() {
  return (
    <div className="flex flex-col gap-3">
      <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground/60">
        Enterprise Tools
      </span>
      <div className="flex flex-wrap gap-2">
        {ENTERPRISE_TOOLS.map((tool) => (
          <span
            key={tool}
            className="inline-flex items-center rounded-md border border-border bg-secondary px-2.5 py-1 font-mono text-[11px] text-muted-foreground transition-colors duration-150 hover:text-foreground"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  )
}
