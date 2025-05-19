import type React from "react"
import type { Metadata } from "next"
import { Mona_Sans as FontSans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { SidebarProvider } from "@/components/ui/sidebar"
import { PortfolioSidebar } from "@/components/portfolio-sidebar"
import { SiteHeader } from "@/components/site-header"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Vijay Haresh Ragupathy | Full Stack Developer",
  description: "Portfolio of Vijay Haresh Ragupathy, Full Stack Software Developer",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <SidebarProvider>
            <div className="flex min-h-screen flex-col md:flex-row min-w-full overflow-x-hidden">
              <PortfolioSidebar />
              <div className="flex-1 flex flex-col w-full min-w-0">
                <SiteHeader />
                <main className="flex-1 w-full">
                  <div className="min-h-[calc(100vh-3.5rem)] w-full px-4 py-6 md:px-6 md:py-8 lg:px-8 lg:py-10">
                    {children}
                  </div>
                </main>
              </div>
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
