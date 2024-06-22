/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const AuthController = () => import('#controllers/auth_controller')
import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'
router.on('/').renderInertia('home', { version: 6 })
router.on('/about').renderInertia('about')

router
  .group(() => {
    router
      .get('/register', [AuthController, 'register_show'])
      .as('register_show')
      .use(middleware.guest())

    router.get('/login', [AuthController, 'login_show']).as('login_show').use(middleware.guest())
  })
  .prefix('/auth')
  .as('auth')
