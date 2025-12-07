"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { ChevronsUpDown, LogOut, Settings, Trash2 } from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { createSupabaseBrowserClient } from "@/lib/supabase/client"

export function NavUser({
  user,
}: {
  user: {
    name: string
    email: string
    avatar: string
  }
}) {
  const { isMobile } = useSidebar()
  const router = useRouter()
  const [isSigningOut, startSigningOut] = React.useTransition()
  const [logoutError, setLogoutError] = React.useState<string | null>(null)
  const [isSettingsOpen, setIsSettingsOpen] = React.useState(false)
  const [firstName, setFirstName] = React.useState("")
  const [lastName, setLastName] = React.useState("")
  const [displayName, setDisplayName] = React.useState(user.name)
  const [settingsError, setSettingsError] = React.useState<string | null>(null)
  const [isSaving, setIsSaving] = React.useState(false)
  const [isDeleting, setIsDeleting] = React.useState(false)

  const nameForUi = displayName || user.name
  const initials =
    nameForUi
      .split(" ")
      .map((part) => part[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() || "ME"

  const handleSignOut = React.useCallback(() => {
    setLogoutError(null)
    startSigningOut(() => {
      void (async () => {
        try {
          const supabase = createSupabaseBrowserClient()
          const { error } = await supabase.auth.signOut()
          if (error) {
            setLogoutError(error.message)
            return
          }
          router.push("/login")
          router.refresh()
        } catch (err) {
          setLogoutError(
            err instanceof Error ? err.message : "Unable to sign out."
          )
        }
      })()
    })
  }, [router])

  React.useEffect(() => {
    const normalizedName = user.name?.trim() ?? ""
    const [first = "", ...rest] = normalizedName.split(" ").filter(Boolean)
    setFirstName(first)
    setLastName(rest.join(" "))
    setDisplayName(normalizedName)
  }, [user.email, user.name])

  const handleSave = React.useCallback(() => {
    setSettingsError(null)
    const trimmedFirst = firstName.trim()
    const trimmedLast = lastName.trim()
    setIsSaving(true)

    void (async () => {
      try {
        const supabase = createSupabaseBrowserClient()
        const { error, data } = await supabase.auth.updateUser({
          data: {
            first_name: trimmedFirst,
            last_name: trimmedLast,
            full_name: `${trimmedFirst} ${trimmedLast}`.trim(),
          },
        })

        if (error) {
          setSettingsError(error.message)
          return
        }

        const updatedName =
          `${trimmedFirst} ${trimmedLast}`.trim() ||
          data?.user?.user_metadata?.full_name ||
          user.name

        setDisplayName(updatedName)
        setIsSettingsOpen(false)
      } catch (err) {
        setSettingsError(
          err instanceof Error ? err.message : "Unable to update profile."
        )
      } finally {
        setIsSaving(false)
      }
    })()
  }, [firstName, lastName, user.name])

  const handleDeleteAccount = React.useCallback(() => {
    setSettingsError(null)
    setIsDeleting(true)

    void (async () => {
      try {
        const response = await fetch("/api/account/delete", {
          method: "DELETE",
        })

        if (!response.ok) {
          const payload = (await response.json().catch(() => null)) as
            | { error?: string }
            | null
          throw new Error(payload?.error || "Unable to delete account.")
        }

        const supabase = createSupabaseBrowserClient()
        await supabase.auth.signOut()

        setIsSettingsOpen(false)
        router.push("/login")
        router.refresh()
      } catch (err) {
        setSettingsError(
          err instanceof Error ? err.message : "Unable to delete account."
        )
      } finally {
        setIsDeleting(false)
      }
    })()
  }, [router])

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <Sheet open={isSettingsOpen} onOpenChange={setIsSettingsOpen}>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton
                size="lg"
                className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
              >
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage src={user.avatar} alt={nameForUi} />
                  <AvatarFallback className="rounded-lg">
                    {initials}
                  </AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">{nameForUi}</span>
                  <span className="truncate text-xs">{user.email}</span>
                </div>
                <ChevronsUpDown className="ml-auto size-4" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
              side={isMobile ? "bottom" : "right"}
              align="end"
              sideOffset={4}
            >
              <DropdownMenuLabel className="p-0 font-normal">
                <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                  <Avatar className="h-8 w-8 rounded-lg">
                    <AvatarImage src={user.avatar} alt={nameForUi} />
                    <AvatarFallback className="rounded-lg">
                      {initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">{nameForUi}</span>
                    <span className="truncate text-xs">{user.email}</span>
                  </div>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <SheetTrigger asChild>
                <DropdownMenuItem
                  onSelect={(event) => event.preventDefault()}
                  className="gap-2"
                >
                  <Settings className="size-4" />
                  Settings
                </DropdownMenuItem>
              </SheetTrigger>
              <DropdownMenuSeparator />
              {logoutError ? (
                <div className="px-2 pb-1 text-xs text-destructive">
                  {logoutError}
                </div>
              ) : null}
              <DropdownMenuItem
                onSelect={(event) => {
                  event.preventDefault()
                  handleSignOut()
                }}
                disabled={isSigningOut || isDeleting}
              >
                <LogOut />
                {isSigningOut ? "Signing out..." : "Log out"}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <SheetContent
            side={isMobile ? "bottom" : "right"}
            className="sm:max-w-md"
          >
            <SheetHeader className="p-6 pb-2">
              <SheetTitle>Account settings</SheetTitle>
              <SheetDescription>
                Update your profile details or remove your account.
              </SheetDescription>
            </SheetHeader>
            <div className="space-y-4 px-6">
              {settingsError ? (
                <div className="text-sm text-destructive">{settingsError}</div>
              ) : null}
              <div className="grid gap-2">
                <Label htmlFor="first-name">First name</Label>
                <Input
                  id="first-name"
                  name="firstName"
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                  placeholder="Enter first name"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input
                  id="last-name"
                  name="lastName"
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                  placeholder="Enter last name"
                />
              </div>
            </div>
            <SheetFooter className="p-6 pt-2">
              <Button
                type="button"
                onClick={handleSave}
                disabled={isSaving || isDeleting}
              >
                {isSaving ? "Saving..." : "Save changes"}
              </Button>
              <Button
                type="button"
                variant="destructive"
                className="justify-between"
                onClick={handleDeleteAccount}
                disabled={isSaving || isDeleting}
              >
                <span>{isDeleting ? "Deleting..." : "Delete account"}</span>
                <Trash2 className="size-4" />
              </Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
