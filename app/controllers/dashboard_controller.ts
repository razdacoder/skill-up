import type { HttpContext } from '@adonisjs/core/http'

export default class DashboardController {
  async index({ inertia }: HttpContext) {
    inertia.share({ title: 'Dashboard' })
    return inertia.render('dashboard/home')
  }

  async courses({ inertia }: HttpContext) {
    return inertia.render('dashboard/courses')
  }

  async library({ inertia }: HttpContext) {
    return inertia.render('dashboard/library')
  }

  async messages({ inertia }: HttpContext) {
    return inertia.render('dashboard/messages')
  }

  async settings({ inertia }: HttpContext) {
    return inertia.render('dashboard/settings')
  }
}
