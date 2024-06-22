import { Head } from '@inertiajs/react'
import DashBoardLayout from './layout/dashboard'

export default function Home() {
  // const { props } = usePage<SharedProps>()
  return (
    <DashBoardLayout>
      <Head title="Home" />
      <main className="min-h-screen "></main>
    </DashBoardLayout>
  )
}

// ,
