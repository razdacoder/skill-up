import { ReactNode } from 'react'
import Header from './header'
import SideBar from './sidebar'

type Props = {
  children: ReactNode
}

export default function DashBoardLayout({ children }: Props) {
  return (
    <div className="grid w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <SideBar />

      <div className="flex flex-col m-3 py-4 gap-4">
        <Header />
        <div className="mr-6">{children}</div>
      </div>
    </div>
  )
}
