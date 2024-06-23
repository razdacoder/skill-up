import { Head, Link } from '@inertiajs/react'
import { ArrowRight } from 'lucide-react'
import CourseCard from '~/components/course_card'
import DashBoardLayout from '../layout/dashboard'

export default function Home() {
  return (
    <DashBoardLayout>
      <Head title="Home" />
      <main className="space-y-4">
        <h5 className="text-sm font-medium">Dashboard</h5>

        <div className="space-y-5">
          <h3 className="text-xl font-medium">Recent Courses</h3>
          <div className="grid grid-cols-6 gap-4">
            <CourseCard isActive />
            <CourseCard isActive />
            <CourseCard isActive />
          </div>
        </div>

        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-medium">Popular Courses</h3>
            <Link
              href="/courses"
              className="text-sm font-medium text-primary flex items-center gap-x-3 group"
            >
              View All
              <ArrowRight className="size-4 group-hover:translate-x-3 transition-all" />
            </Link>
          </div>
          <div className="grid grid-cols-6 gap-4">
            <CourseCard isActive={false} />
            <CourseCard isActive={false} />
            <CourseCard isActive={false} />
            <CourseCard isActive={false} />
            <CourseCard isActive={false} />
            <CourseCard isActive={false} />
          </div>
        </div>
      </main>
    </DashBoardLayout>
  )
}

// ,
