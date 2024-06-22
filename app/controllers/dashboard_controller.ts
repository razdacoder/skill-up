import type { HttpContext } from '@adonisjs/core/http'

export default class DashboardController {
  async index({ inertia }: HttpContext) {
    inertia.share({ title: 'Dashboard' })
    return inertia.render('home')
  }
}
