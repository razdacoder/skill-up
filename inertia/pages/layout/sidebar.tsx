import { Link, usePage } from '@inertiajs/react'
import {
  BookOpen,
  HelpCircle,
  LibraryBig,
  LogOutIcon,
  MessageSquareText,
  PanelsTopLeft,
  Settings,
} from 'lucide-react'
import { cn } from '~/lib/utils'

const routes = [
  {
    label: 'Dashboard',
    route: '/',
    icon: PanelsTopLeft,
  },
  {
    label: 'Library',
    route: '/library',
    icon: LibraryBig,
  },
  {
    label: 'My Courses',
    route: '/courses',
    icon: BookOpen,
  },

  {
    label: 'Messages',
    route: '/messages',
    icon: MessageSquareText,
  },

  {
    label: 'Settings',
    route: '/settings',
    icon: Settings,
  },
]

export default function SideBar() {
  const { url } = usePage()
  return (
    <aside className="bg-black/50 border rounded-2xl m-3">
      <div className="flex h-full flex-col gap-8 py-4">
        <div className="flex items-center gap-x-2 justify-center">
          <img src="../resources/assets/logo.svg" alt="Logo" className="size-8" />
          <h2 className="text-xl font-semibold italic">SKILLUP</h2>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4 space-y-4">
            {routes.map((route) => {
              const isActive = route.route === url
              return (
                <Link
                  href={route.route}
                  className={cn(
                    'flex items-center gap-3 rounded-lg px-3 py-3 transition-all hover:bg-primary/20',
                    isActive && 'bg-primary hover:bg-primary/90'
                  )}
                >
                  <route.icon className="h-4 w-4" />
                  {route.label}
                </Link>
              )
            })}
          </nav>
        </div>
        <div className="px-2 space-y-3">
          <Link href="/help" className="text-sm flex items-center gap-x-2 px-3 py-2">
            <HelpCircle className="size-4" />
            Help
          </Link>
          <Link
            href="/auth/logout"
            method="post"
            className="text-sm flex items-center gap-x-2 px-3 py-2"
          >
            <LogOutIcon className="size-4" />
            Logout
          </Link>
        </div>
      </div>
    </aside>
  )
}
