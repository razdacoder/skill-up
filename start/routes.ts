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
const DashboardController = () => import('#controllers/dashboard_controller')

router
  .group(() => {
    router.get('/', [DashboardController, 'index']).as('home')
    router.get('courses', [DashboardController, 'courses']).as('courses')
    router.get('library', [DashboardController, 'library']).as('library')
    router.get('messages', [DashboardController, 'messages']).as('messages')
    router.get('settings', [DashboardController, 'settings']).as('settings')
  })
  .use(middleware.auth())

router
  .group(() => {
    router
      .get('/register', [AuthController, 'register_show'])
      .as('register_show')
      .use(middleware.guest())

    router
      .post('/register', [AuthController, 'register_store'])
      .as('register_store')
      .use(middleware.guest())

    router.get('/login', [AuthController, 'login_show']).as('login_show').use(middleware.guest())
    router.post('/login', [AuthController, 'login_store']).as('login_store').use(middleware.guest())
    router.post('/logout', [AuthController, 'logout']).as('logout').use(middleware.auth())
  })
  .prefix('/auth')
  .as('auth')
