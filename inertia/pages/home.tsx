import { Head, usePage } from '@inertiajs/react'

import type { SharedProps } from '@adonisjs/inertia/types'

export default function Home() {
  const { props } = usePage<SharedProps>()
  return (
    <>
      <Head title="Home" />

      <main className="min-h-screen "></main>
    </>
  )
}

// ,
