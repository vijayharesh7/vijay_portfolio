"use client"

import { usePathname } from "next/navigation"
import { ModeToggle } from "@/components/mode-toggle"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { SidebarTrigger } from "@/components/sidebar-trigger"
import { useSidebar } from "@/components/ui/sidebar"

export function SiteHeader() {
  const pathname = usePathname()
  const { isMobile } = useSidebar()

  // Format the pathname for display
  const formatPathname = () => {
    if (pathname === "/") return "vijayharesh"

    // Remove leading slash and replace with "vijayharesh/"
    const formattedPath = "vijayharesh" + pathname
    return formattedPath
  }

  return (
    <header className="sticky top-0 z-40 w-full min-w-full border-t-2 border-t-primary border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center justify-between px-4 md:px-6 w-full">
        <div className="flex items-center gap-2">
          {isMobile && <SidebarTrigger className="mr-1" />}
          <Link
            href="/"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === "/" ? "text-primary" : "text-muted-foreground",
            )}
          >
            {formatPathname()}
          </Link>
        </div>
        <ModeToggle />
      </div>
    </header>
  )
}
