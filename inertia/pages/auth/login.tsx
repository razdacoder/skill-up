import type { SharedProps } from '@adonisjs/inertia/types'
import { Head, Link, useForm, usePage } from '@inertiajs/react'
import { Loader } from 'lucide-react'
import { FormEvent } from 'react'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'

export default function Login() {
  const { data, setData, post, processing, errors } = useForm({
    email: '',
    password: '',
  })

  const { props } = usePage<SharedProps>()

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    post('/auth/login')
  }
  return (
    <>
      <Head title="Login" />

      <main className="min-h-screen grid place-items-center">
        <div className="space-y-4 w-96 flex flex-col items-center">
          <div className="flex items-center gap-x-2">
            <img src="../resources/assets/logo.svg" alt="Logo" />
            <h2 className="text-3xl font-semibold italic">SKILLUP</h2>
          </div>
          <form
            onSubmit={onSubmit}
            className="w-full shadow bg-black/90 border p-6  rounded-md space-y-6"
          >
            <div className="space-y-2">
              <h4 className="text-2xl font-semibold">Login</h4>
              <p className="text-sm font-normal">Enter your details below to login.</p>
            </div>
            {props.errors && (
              <div className="p-3 text-sm font-medium bg-red-500 rounded-md">
                {props.errors.E_INVALID_CREDENTIALS}
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm">
                Email
              </Label>
              <Input
                value={data.email}
                onChange={(e) => setData('email', e.target.value)}
                placeholder="Email"
                type="email"
                name="email"
                id="email"
              />
              {errors.email && (
                <span className="text-red-500 text-xs font-medium">{errors.email}</span>
              )}
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
              <Input
                value={data.password}
                onChange={(e) => setData('password', e.target.value)}
                placeholder="Password"
                name="password"
                id="password"
                type="password"
              />
              {errors.password && (
                <span className="text-red-500 text-xs font-medium">{errors.password}</span>
              )}
            </div>

            <Button className="w-full flex items-center gap-x-2">
              {processing && <Loader className="size-4 animate-spin" />} Login
            </Button>
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
