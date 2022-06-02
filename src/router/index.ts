import { useUserStore } from '@/stores/user'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import DashboardView from '../views/DashboardView.vue'
import LoginView from '../views/login-view/login-view.vue'
import UserUpdate from '../views/user/user-update.vue'
import UserView from '../views/user/user.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/user',
    name: 'User',
    component: UserView
  },
  {
    path: '/user/new',
    name: 'UserCreate',
    component: UserUpdate
  },
  {
    path: '/user/:userId/edit',
    name: 'UserEdit',
    component: UserUpdate
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  },
  {
    path: '/',
    name: 'dashboard',
    component: DashboardView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const store = useUserStore()
  console.log('isAuthenticated:', store.isAuthenticated)

  if (to.name !== 'login' && !store.isAuthenticated) return next({ name: 'login' })
  if (to.name === 'login' && store.isAuthenticated) return next({ name: 'dashboard' })
  return next()
})

export default router
