import { Head, Link } from '@inertiajs/react'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'

export default function Login() {
  return (
    <>
      <Head title="Login" />

      <main className="min-h-screen grid place-items-center">
        <div className="space-y-4 w-96 flex flex-col items-center">
          <div className="flex items-center gap-x-2">
            <img src="../resources/assets/logo.svg" alt="Logo" />
            <h2 className="text-3xl font-semibold italic">SKILLUP</h2>
          </div>
          <form className="w-full shadow bg-black/90 border p-6  rounded-md space-y-6">
            <div className="space-y-2">
              <h4 className="text-2xl font-semibold">Login</h4>
              <p className="text-sm font-normal">Enter your details below to login.</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm">
                Email
              </Label>
              <Input placeholder="Email" type="email" name="email" id="email" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-sm">
                  Password
                </Label>
                <Link href="/" className="text-primary text-sm font-medium">
                  Forgot Password?
                </Link>
              </div>
              <Input placeholder="Password" name="password" id="password" />
            </div>

            <Button className="w-full">Login</Button>
            <p className="text-sm font-medium text-center">
              Don't have an account?{' '}
              <Link href="/auth/register" className="text-primary">
                Register
              </Link>{' '}
            </p>
          </form>
        </div>
      </main>
    </>
  )
}
