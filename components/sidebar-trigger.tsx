"use client"

import { Button } from "@/components/ui/button"
import { useSidebar } from "@/components/ui/sidebar"
import { PanelLeft } from "lucide-react"
import { cn } from "@/lib/utils"

export function SidebarTrigger({ className }: { className?: string }) {
  const { toggleSidebar } = useSidebar()

  return (
    <Button variant="ghost" size="icon" className={cn("h-7 w-7", className)} onClick={toggleSidebar}>
      <PanelLeft className="h-[1.2rem] w-[1.2rem]" />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  )
}
