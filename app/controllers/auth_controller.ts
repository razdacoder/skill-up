import User from '#models/user'
import { loginValidator, registerValidation } from '#validators/auth'
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

  async login_store({ request, auth, response }: HttpContext) {
    const data = await request.validateUsing(loginValidator)
    const user = await User.verifyCredentials(data.email, data.password)
    await auth.use('web').login(user)
    return response.redirect().toRoute('home')
  }

  async logout({ auth, response }: HttpContext) {
    await auth.use('web').logout()
    return response.redirect().toRoute('auth.login_show')
  }
}
