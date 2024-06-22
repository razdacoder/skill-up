import { Head } from '@inertiajs/react'
import DashBoardLayout from './layout/dashboard'

export default function Home() {
  return (
    <DashBoardLayout>
      <Head title="Home" />
      <main className="m-3 py-4"></main>
    </DashBoardLayout>
  )
}

// ,
