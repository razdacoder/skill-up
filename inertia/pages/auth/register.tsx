import { Head, Link, useForm } from '@inertiajs/react'
import { Loader } from 'lucide-react'
import { FormEvent } from 'react'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'

export default function Register() {
  const { data, setData, post, processing, errors } = useForm({
    fullName: '',
    email: '',
    password: '',
    password_confirmation: '',
  })

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    post('/auth/register')
  }
  return (
    <>
      <Head title="Register" />

      <main className="min-h-screen grid place-items-center">
        <div className="space-y-4 w-96 flex flex-col items-center">
          <div className="flex items-center gap-x-2">
            <img src="../resources/assets/logo.svg" alt="Logo" />
            <h2 className="text-3xl font-semibold italic">SKILLUP</h2>
          </div>
          <form
            className="w-full shadow bg-black/90 border p-6  rounded-md space-y-6"
            onSubmit={onSubmit}
          >
            <div className="space-y-2">
              <h4 className="text-2xl font-semibold">Register</h4>
              <p className="text-sm font-normal">Enter your details below to create an account.</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-sm">
                Name
              </Label>
              <Input
                value={data.fullName}
                placeholder="Name"
                name="fullName"
                id="fullName"
                onChange={(e) => setData('fullName', e.target.value)}
              />
              {errors.fullName && (
                <span className="text-red-500 text-xs font-medium">{errors.fullName}</span>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm">
                Email
              </Label>
              <Input
                value={data.email}
                placeholder="Email"
                type="email"
                name="email"
                id="email"
                onChange={(e) => setData('email', e.target.value)}
              />
              {errors.email && (
                <span className="text-red-500 text-xs font-medium">{errors.email}</span>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm">
                Password
              </Label>
              <Input
                value={data.password}
                placeholder="Password"
                type="password"
                name="password"
                id="password"
                onChange={(e) => setData('password', e.target.value)}
              />
              {errors.password && (
                <span className="text-red-500 text-xs font-medium">{errors.password}</span>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password_confirmation" className="text-sm">
                Confirm Password
              </Label>
              <Input
                value={data.password_confirmation}
                placeholder="Confirm Password"
                type="password"
                name="password_confirmation"
                id="password_confirmation"
                onChange={(e) => setData('password_confirmation', e.target.value)}
              />
              {errors.password_confirmation && (
                <span className="text-red-500 text-xs font-medium">
                  {errors.password_confirmation}
                </span>
              )}
            </div>
            <Button className="w-full flex items-center gap-x-2" disabled={processing}>
              {processing && <Loader className="size-4 animate-spin" />}Register
            </Button>
            <p className="text-sm font-medium text-center">
              Already have an account?{' '}
              <Link href="/auth/login" className="text-primary">
                Login
              </Link>{' '}
            </p>
          </form>
        </div>
      </main>
    </>
  )
}
