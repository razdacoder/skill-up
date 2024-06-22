export default function CourseCard() {
  return (
    <div className="bg-black/50 rounded-xl p-4 border w-full drop-shadow-sm space-y-4">
      <img src="resources/assets/image.jpg" alt="Course Image" className="rounded-lg" />
      <div className="space-y-6">
        <h5 className=" font-medium">SMS Expert</h5>
        <div className="space-y-2">
          <div className="w-full h-2 bg-slate-300 rounded-full">
            <div className="w-9/12 h-2 bg-green-500 rounded-full"></div>
          </div>
          <div className="text-xs font-medium flex justify-between items-center text-slate-200">
            <span>Course completed</span>
            <span>86%</span>
          </div>
        </div>
      </div>
    </div>
  )
}
