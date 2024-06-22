import User from '#models/user'
import { registerValidation } from '#validators/auth'
import type { HttpContext } from '@adonisjs/core/http'

export default class AuthController {
  async register_show({ inertia }: HttpContext) {
    return inertia.render('auth/register')
  }

  async login_show({ inertia }: HttpContext) {
    return inertia.render('auth/login')
  }

  async register_store({ request, auth, response }: HttpContext) {
    const data = await request.validateUsing(registerValidation)
    const user = await User.create(data)
    await auth.use('web').login(user)
    return response.redirect().toRoute('home')
  }
}
