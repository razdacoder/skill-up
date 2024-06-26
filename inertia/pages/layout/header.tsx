import type { SharedProps } from '@adonisjs/inertia/types'
import { usePage } from '@inertiajs/react'
import { Input } from '~/components/ui/input'
import { getInitial } from '~/lib/utils'

export default function Header() {
  const { props } = usePage<SharedProps>()
  return (
    <div className="flex items-center justify-between mr-6">
      <form action="">
        <Input placeholder="Search courses..." className="rounded-full w-96" />
      </form>

      <div>
        <div className="flex gap-x-3 items-center">
          {props.user?.avatarUrl ? (
            <img src={props.user?.avatarUrl} />
          ) : (
            <div className="size-10 rounded-full bg-primary/20 font-medium flex justify-center items-center">
              {getInitial(props.user?.fullName as string)}
            </div>
          )}
          <div>
            <h4 className="text-sm font-medium">{props.user?.fullName}</h4>
            <h6 className="text-xs font-medium">{props.user?.email}</h6>
          </div>
        </div>
      </div>
    </div>
  )
}
