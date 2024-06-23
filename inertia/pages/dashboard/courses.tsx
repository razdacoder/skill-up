import { Head } from '@inertiajs/react'
import CourseCard from '~/components/course_card'
import DashBoardLayout from '../layout/dashboard'

export default function Course() {
  return (
    <DashBoardLayout>
      <Head title="Courses" />
      <main className="space-y-4">
        <h5 className="text-sm font-medium">Library</h5>

        <div className="space-y-5">
          <h3 className="text-xl font-medium">All Courses</h3>
          <div className="grid grid-cols-6 gap-4">
            <CourseCard isActive={false} />
            <CourseCard isActive={false} />
            <CourseCard isActive={false} />
            <CourseCard isActive={false} />
            <CourseCard isActive={false} />
            <CourseCard isActive={false} />
            <CourseCard isActive={false} />
            <CourseCard isActive={false} />
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
