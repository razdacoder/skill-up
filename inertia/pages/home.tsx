import { Head, Link } from '@inertiajs/react'

export default function Home(props: { version: number }) {
  return (
    <>
      <Head title="Homepage" />

      <div className="container text-red-500">
        <div className="text-red-500">Hey {props.version}</div>
        <Link href="/about">About</Link>

        <span>
          Adonis Inertia
          <a href="https://docs.adonisjs.com/guides/inertia">AdonisJS documentation</a>.
        </span>
      </div>
    </>
  )
}

// ,
