import type { HttpContext } from '@adonisjs/core/http'

export default class AuthController {
  async register_show({ inertia }: HttpContext) {
    return inertia.render('auth/register')
  }
}
