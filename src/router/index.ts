import { useUserLoginStore } from '@/stores/users/user-login'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import DashboardView from '../views/DashboardView.vue'
import LoginView from '../views/LoginView.vue'
import UserUpdate from '../views/user/UserUpdateView.vue'
import UserView from '../views/user/UserView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  },
  {
    path: '/',
    name: 'dashboard',
    component: DashboardView
  },
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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const store = useUserLoginStore()
  console.log('isAuthenticated:', store.isAuthenticated)

  if (to.name !== 'login' && !store.isAuthenticated) return next({ name: 'login' })
  if (to.name === 'login' && store.isAuthenticated) return next({ name: 'dashboard' })

  return next()
})

export default router
