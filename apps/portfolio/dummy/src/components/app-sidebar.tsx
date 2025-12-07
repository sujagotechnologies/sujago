"use client"

import * as React from "react"
import {
  // AudioWaveform,
  BookOpen,
  Bot,
  // Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { NAV_ITEMS, PROJECTS, HERO } from "@/lib/portfolio-data"
import { createSupabaseBrowserClient } from "@/lib/supabase/client"

// This is sample data.
const data = {
  user: {
    name: "Guest",
    email: "guest@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: HERO.name,
      logo: GalleryVerticalEnd,
      // plan: "Enterprise",
    },
    // {
    //   name: "Acme Corp.",
    //   logo: AudioWaveform,
    //   plan: "Startup",
    // },
    // {
    //   name: "Evil Corp.",
    //   logo: Command,
    //   plan: "Free",
    // },
  ],
  navMain: [
    {
      title: "Playground",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "History",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Models",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
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
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [user, setUser] = React.useState(data.user)
  const navItems = React.useMemo(
    () =>
      NAV_ITEMS.map((item, index) => ({
        title: item.label,
        url: `#${item.id}`,
        icon: item.icon,
        isActive: index === 0,
      })),
    []
  )
  const projectNavItems = React.useMemo(
    () =>
      PROJECTS.map((project) => ({
        name: project.name,
        url: project.liveLink || "#projects",
        icon: Frame,
      })),
    []
  )
  const sectionIds = React.useMemo(() => NAV_ITEMS.map((item) => item.id), [])
  const [activeSection, setActiveSection] = React.useState(sectionIds[0] ?? "")

  React.useEffect(() => {
    let isMounted = true

    const loadUser = async () => {
      try {
        const supabase = createSupabaseBrowserClient()
        const { data: userData } = await supabase.auth.getUser()

        if (!userData.user || !isMounted) return

        const metadata = (userData.user.user_metadata ?? {}) as Record<
          string,
          string
        >
        const email =
          userData.user.email ??
          metadata.email ??
          metadata.preferred_email ??
          data.user.email
        const firstName = metadata.first_name ?? ""
        const lastName = metadata.last_name ?? ""
        const combinedName = `${firstName} ${lastName}`.trim()
        const name =
          metadata.full_name ??
          (combinedName || undefined) ??
          metadata.name ??
          metadata.user_name ??
          (email ? email.split("@")[0] : data.user.name)

        setUser({
          name: name || data.user.name,
          email: email || data.user.email,
          avatar: "/smilingvictor.png",
        })
      } catch {
        // Ignore and keep fallback user.
      }
    }

    void loadUser()

    return () => {
      isMounted = false
    }
  }, [])

  React.useEffect(() => {
    if (!sectionIds.length) return

    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

      if (visible[0]?.target.id) {
        setActiveSection(visible[0].target.id)
      }
    }, {
      rootMargin: "-30% 0px -40% 0px",
      threshold: [0.15, 0.3, 0.5],
    })

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [sectionIds])

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navItems} activeId={activeSection} />
        <NavProjects projects={projectNavItems} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
