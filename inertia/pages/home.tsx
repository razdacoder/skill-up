import { Head } from '@inertiajs/react'
import CourseCard from '~/components/course_card'
import DashBoardLayout from './layout/dashboard'

export default function Home() {
  return (
    <DashBoardLayout>
      <Head title="Home" />
      <main className="space-y-3">
        <h5 className="text-sm font-medium">Dashboard</h5>

        <div className="space-y-6">
          <h3 className="text-xl font-medium">Recent Courses</h3>
          <div className="grid grid-cols-6 gap-4">
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
          </div>
        </div>
      </main>
    </DashBoardLayout>
  )
}

// ,
