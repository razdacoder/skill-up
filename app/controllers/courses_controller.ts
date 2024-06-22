import type { HttpContext } from '@adonisjs/core/http'

export default class CoursesController {
  async index({ inertia }: HttpContext) {
    return inertia.render('courses')
  }
}
