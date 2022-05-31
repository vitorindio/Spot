import { createRouter, createWebHistory, RouteRecordRaw, useRoute } from 'vue-router'
import LoginView from '../views/login-view/login-view.vue'
//import HomeView from '../views/home-view/home-view.vue'
import UserView from '../views/user/user.vue'
import UserUpdate from '../views/user/user-update.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  // {
  //   path: '/home-view',
  //   name: 'home',
  //   component: HomeView
  // },
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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
