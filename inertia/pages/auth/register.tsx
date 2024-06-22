import { Head } from '@inertiajs/react'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'

export default function Register() {
  return (
    <>
      <Head title="Register" />

      <main className="min-h-screen grid place-items-center">
        <div className="space-y-4 w-96 flex flex-col items-center">
          <div className="flex items-center gap-x-2">
            <img src="../resources/assets/logo.svg" alt="Logo" />
            <h2 className="text-3xl font-semibold italic">SKILLUP</h2>
          </div>
          <form className="w-full shadow bg-black/90 border p-6  rounded-md space-y-6">
            <div className="space-y-2">
              <h4 className="text-2xl font-semibold">Register</h4>
              <p className="text-sm font-normal">Enter your details below to create an account.</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-sm">
                Name
              </Label>
              <Input placeholder="Name" name="fullName" id="fullName" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm">
                Email
              </Label>
              <Input placeholder="Email" type="email" name="email" id="email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm">
                Password
              </Label>
              <Input placeholder="Password" name="password" id="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password_confirmation" className="text-sm">
                Confirm Password
              </Label>
              <Input
                placeholder="Confirm Password"
                name="password_confirmation"
                id="password_confirmation"
              />
            </div>
            <Button className="w-full">Register</Button>
          </form>
        </div>
      </main>
    </>
  )
}
