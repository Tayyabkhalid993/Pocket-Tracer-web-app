import ReactLenis from "lenis/react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
<ReactLenis root options={{ lerp: 0.1, smoothWheel: true, duration: 1.6 }}>
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
</ReactLenis>
  )
}