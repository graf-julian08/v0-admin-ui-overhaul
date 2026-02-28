"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BrainCircuit,
  BarChart3,
  ShoppingCart,
  Package,
  Warehouse,
  Users,
  Crown,
  Megaphone,
  Gift,
  Globe,
  Smartphone,
  Store,
  FileText,
  MapPin,
  Workflow,
  Settings,
  CreditCard,
  UsersRound,
  ShieldCheck,
  Hexagon,
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar"

const navGroups = [
  {
    label: "Command",
    items: [
      { title: "Atlas AI Command", href: "/", icon: BrainCircuit },
      { title: "CFO Analytics", href: "/cfo", icon: BarChart3 },
    ],
  },
  {
    label: "Commerce",
    items: [
      { title: "Orders", href: "/orders", icon: ShoppingCart },
      { title: "Products", href: "/products", icon: Package },
      { title: "Inventory", href: "/inventory", icon: Warehouse },
    ],
  },
  {
    label: "Relationships",
    items: [
      { title: "Customers", href: "/customers", icon: Users },
      { title: "VIP Concierge Logs", href: "/vip-logs", icon: Crown },
    ],
  },
  {
    label: "Growth",
    items: [
      { title: "Promotions & Campaigns", href: "/promotions", icon: Megaphone },
      { title: "Gift Cards", href: "/gift-cards", icon: Gift },
    ],
  },
  {
    label: "Channels",
    items: [
      { title: "Storefront", href: "/storefront", icon: Globe },
      { title: "Mobile App", href: "/mobile", icon: Smartphone },
      { title: "Point of Sale", href: "/pos", icon: Store },
    ],
  },
  {
    label: "Content & Storefront",
    items: [
      { title: "Pages & Layouts", href: "/content", icon: FileText },
    ],
  },
  {
    label: "Global Operations",
    items: [
      { title: "Locations", href: "/locations", icon: MapPin },
    ],
  },
  {
    label: "Automation",
    items: [
      { title: "Workflows", href: "/workflows", icon: Workflow },
    ],
  },
  {
    label: "System",
    items: [
      { title: "Settings", href: "/settings", icon: Settings },
      { title: "Payments", href: "/payments", icon: CreditCard },
      { title: "Team", href: "/team", icon: UsersRound },
      { title: "Data Privacy", href: "/privacy", icon: ShieldCheck },
    ],
  },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="px-4 py-5">
        <Link href="/" className="flex items-center gap-2.5">
          <Hexagon className="size-5 text-foreground" strokeWidth={1.25} />
          <span className="text-sm font-bold tracking-tight text-foreground group-data-[collapsible=icon]:hidden">
            ATLAS OS
          </span>
        </Link>
      </SidebarHeader>

      <SidebarContent className="px-2">
        {navGroups.map((group) => (
          <SidebarGroup key={group.label} className="py-1">
            <SidebarGroupLabel className="px-3 text-[10px] font-medium uppercase tracking-widest text-muted-foreground/60">
              {group.label}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        asChild
                        isActive={isActive}
                        tooltip={item.title}
                        className="h-8 transition-colors duration-150 ease-in-out"
                      >
                        <Link href={item.href}>
                          <item.icon className="size-[18px] shrink-0 text-muted-foreground" strokeWidth={1.25} />
                          <span className="text-[13px] text-muted-foreground group-data-[active=true]:text-foreground">
                            {item.title}
                          </span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter className="px-4 py-4">
        <div className="flex items-center gap-2.5 group-data-[collapsible=icon]:justify-center">
          <div className="flex size-7 items-center justify-center rounded-md bg-[rgba(255,255,255,0.06)] text-xs font-medium text-foreground">
            A
          </div>
          <div className="flex flex-col group-data-[collapsible=icon]:hidden">
            <span className="text-xs font-medium text-foreground">Admin</span>
            <span className="text-[10px] text-muted-foreground">Enterprise</span>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
