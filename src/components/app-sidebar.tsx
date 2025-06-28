"use client"
import * as React from "react";
import { HandCoins, Gauge, SquarePen, Landmark, ReceiptText, NotepadText, Settings2 } from "lucide-react"
import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    email: "m@example.com",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/protected/dashboard",
      icon: Gauge
    },
    {
      title: "Registration",
      url: "/protected/registration",
      icon: SquarePen,
    },
    {
      title: "Cash Vouchers",
      url: "/protected/cash-voucher",
      icon: HandCoins,
      items: [
        {
          title: "Cash Receipt Voucher",
          url: "/protected/cash-receipt-voucher",
        },
        {
          title: "Cash Paid Voucher",
          url: "/protected/cash-paid-voucher",
        }
      ],
    },
    {
      title: "Bank Vouchers",
      url: "/protected/bank-voucher",
      icon: Landmark,
      items: [
        {
          title: "Bank Receipt Voucher",
          url: "/protected/bank-receipt-voucher",
        },
        {
          title: "Bank Paid Voucher",
          url: "/protected/bank-paid-voucher",
        }
      ],
    },
    {
      title: "Journal Voucher",
      url: "/protected/journal-voucher",
      icon: ReceiptText
    },
    {
      title: "Report",
      url: "/protected/report",
      icon: NotepadText,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        {/* Optional: Add your team switcher or logo here */}
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}