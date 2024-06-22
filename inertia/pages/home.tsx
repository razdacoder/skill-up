import { Head } from '@inertiajs/react'
import DashBoardLayout from './layout/dashboard'
import Header from './layout/header'

export default function Home() {
  return (
    <DashBoardLayout>
      <Head title="Home" />
      <main className="flex flex-col">
        <Header title="Dashboard" />
      </main>
    </DashBoardLayout>
  )
}

// ,
