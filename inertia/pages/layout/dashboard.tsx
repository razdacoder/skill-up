import { ReactNode } from 'react'
import SideBar from './sidebar'

type Props = {
  children: ReactNode
}

export default function DashBoardLayout({ children }: Props) {
  return (
    <div className="grid h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <SideBar />
      {children}
    </div>
  )
}
