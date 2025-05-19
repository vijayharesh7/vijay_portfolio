"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Briefcase, Code, Download, Github, Home, Linkedin, Mail, User, Folder, GraduationCap } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export function PortfolioSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar collapsible="icon" className="w-64 md:w-64 shrink-0">
      <SidebarHeader className="flex flex-col items-center justify-center py-6">
        <Avatar className="h-16 w-16 mb-2 md:h-20 md:w-20">
          <AvatarImage src="/profile.png" alt="Vijay Haresh" className="object-cover" />
          <AvatarFallback>VH</AvatarFallback>
        </Avatar>
        <h2 className="text-lg font-bold">Vijay Haresh</h2>
        <p className="text-sm text-muted-foreground">Full Stack Developer</p>
        <div className="flex gap-2 mt-2">
          <Button variant="outline" size="icon" asChild>
            <a href="https://github.com/vijayharesh7" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a
              href="https://www.linkedin.com/in/vijay-haresh-ragupathy-67245418b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a href="mailto:vjharesh7899@gmail.com">
              <Mail className="h-4 w-4" />
              <span className="sr-only">Email</span>
            </a>
          </Button>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/"} tooltip="Home">
                  <Link href="/">
                    <Home />
                    <span>Home</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/about"} tooltip="About">
                  <Link href="/about">
                    <User />
                    <span>About</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/experience"} tooltip="Experience">
                  <Link href="/experience">
                    <Briefcase />
                    <span>Experience</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/projects"} tooltip="Projects">
                  <Link href="/projects">
                    <Folder />
                    <span>Projects</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/skills"} tooltip="Skills">
                  <Link href="/skills">
                    <Code />
                    <span>Skills</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/education"} tooltip="Education">
                  <Link href="/education">
                    <GraduationCap />
                    <span>Education</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/contact"} tooltip="Contact">
                  <Link href="/contact">
                    <Mail />
                    <span>Contact</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4">
        <Button className="w-full" asChild>
          <a
            href="https://dc642vukkw.ufs.sh/f/0KuDxNoUojPJQ12LPexlKJw01iaZtXxNE2AG5DCsgLfYeMkj"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </a>
        </Button>
      </SidebarFooter>
    </Sidebar>
  )
}
