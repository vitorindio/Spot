import { useAuthStore } from '@/stores'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import DashboardView from '../views/DashboardView.vue'
import ForgotPasswordView from '../views/ForgotPasswordView.vue'
import LoginView from '../views/LoginView.vue'
import StatusView from '../views/StatusView.vue'
import UserUpdate from '../views/user/UserUpdateView.vue'
import UserView from '../views/user/UserView.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/:pathMatch(.*)*', redirect: '/' },
  {
    path: '/',
    alias: '/dashboard',
    component: DashboardView,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    component: LoginView,
    meta: { requiresAuth: false }
  },
  {
    path: '/forgot-password',
    component: ForgotPasswordView,
    meta: { requiresAuth: false }
  },
  {
    path: '/user',
    component: UserView,
    meta: { requiresAuth: true }
  },
  {
    path: '/user/new',
    component: UserUpdate,
    meta: { requiresAuth: true }
  },
  {
    path: '/user/:userId/edit',
    component: UserUpdate,
    meta: { requiresAuth: true }
  },
  {
    path: '/about',
    component: AboutView,
    meta: { requiresAuth: true }
  },
  {
    path: '/status',
    component: StatusView,
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const store = useAuthStore()

  if (to.meta.requiresAuth && !store.isAuthenticated) return next({ path: '/login' })
  if (!to.meta.requiresAuth && store.isAuthenticated) return next({ path: '/dashboard' })

  return next()
})

export default router
