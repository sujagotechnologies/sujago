/** Client-side login form wired to a Supabase server action. */
"use client"

import * as React from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useFormStatus } from "react-dom"

import { loginWithPassword } from "@/app/login/actions"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

const initialState = {
  error: "",
}

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button
      type="submit"
      className="w-full"
      aria-disabled={pending}
      disabled={pending}
    >
      {pending ? "Logging in..." : "Login"}
    </Button>
  )
}

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const router = useRouter()
  const [state, formAction] = React.useActionState(
    loginWithPassword,
    initialState
  )
  const [guestError, setGuestError] = React.useState("")
  const [isGuestPending, startGuestTransition] = React.useTransition()

  const handleGuestLogin = React.useCallback(() => {
    setGuestError("")
    startGuestTransition(() => {
      void (async () => {
        try {
          const response = await fetch("/api/guest-login", {
            method: "POST",
          })
          const data = await response.json()

          if (!response.ok || !data?.success) {
            setGuestError(data?.error ?? "Guest login failed. Please try again.")
            return
          }

          router.push("/")
          router.refresh()
        } catch (error) {
          setGuestError("Guest login failed. Please try again.")
        }
      })()
    })
  }, [router])

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form action={formAction} className="p-6 md:p-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">Welcome back</h1>
                <p className="text-balance text-muted-foreground">
                  Login to your SmilingVictor account
                </p>
              </div>
              {state?.error ? (
                <p className="text-sm text-destructive" role="status">
                  {state.error}
                </p>
              ) : null}
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter Your Email"
                  autoComplete="email"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter Your Password"
                  autoComplete="current-password"
                  required
                />
              </div>
              <div className="grid gap-3">
                <SubmitButton />
                <Button
                  type="button"
                  variant="outline"
                  className="w-full"
                  onClick={handleGuestLogin}
                  aria-disabled={isGuestPending}
                  disabled={isGuestPending}
                >
                  {isGuestPending ? "Logging in as guest..." : "Continue as guest"}
                </Button>
                {guestError ? (
                  <p className="text-sm text-destructive" role="status">
                    {guestError}
                  </p>
                ) : null}
              </div>
              <div className="text-center text-sm">
                Don&apos;t have an account?{" "}
                <a href="#" className="underline underline-offset-4">
                  Sign up
                </a>
              </div>
            </div>
          </form>
          <div className="relative hidden min-h-[320px] bg-muted md:block">
            <Image
              src="/smilingvictor.png"
              alt="Smiling Victor logo"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              loading="eager"
              priority
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
