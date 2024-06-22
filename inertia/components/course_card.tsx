import { Link } from '@inertiajs/react'
import { BookOpenText, Timer } from 'lucide-react'
import { formatPrice } from '~/lib/utils'
import { Button } from './ui/button'

type Props = {
  isActive: boolean
}

export default function CourseCard({ isActive }: Props) {
  return (
    <div className="bg-black/50 rounded-xl p-4 border w-full drop-shadow-sm space-y-4">
      <img src="resources/assets/image.jpg" alt="Course Image" className="rounded-lg" />
      <div className="space-y-6">
        <h5 className=" font-medium">SMS Expert</h5>
        <div className="space-y-2">
          {isActive && (
            <>
              <div className="w-full h-2 bg-slate-300 rounded-full">
                <div className="w-9/12 h-2 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-xs font-medium flex justify-between items-center text-slate-200">
                <span>Course completed</span>
                <span>86%</span>
              </div>
            </>
          )}

          {!isActive && (
            <div className="flex items-center gap-x-4">
              <div className="flex gap-x-2 items-center">
                <BookOpenText className="size-4" />
                <span className="text-xs font-medium">25 Lessons</span>
              </div>
              <div className="flex gap-x-2 items-center">
                <Timer className="size-4" />
                <span className="text-xs font-medium">12 Hours</span>
              </div>
            </div>
          )}

          {isActive && (
            <div className="">
              <Button asChild className="w-full h-8" variant="secondary">
                <Link href="#">Go to course</Link>
              </Button>
            </div>
          )}

          {!isActive && (
            <div className="flex justify-between items-center">
              <div className="">
                <span className="text-sm font-medium text-primary">{formatPrice(30000)}</span>
              </div>
              <Button asChild size="sm" className="h-8">
                <Link className="text-sm font-medium" href="#">
                  Buy now
                </Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
