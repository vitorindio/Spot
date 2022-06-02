import router from '@/router'
import AuthService from '@/services/auth'
import { defineStore } from 'pinia'
import { Cookies } from 'quasar'
import { Notify } from 'quasar'

export const useUserStore = defineStore('user', {
  state: () => ({
    token: Cookies.get('token') || null
  }),

  getters: {
    isAuthenticated: (state) => !!state.token
  },

  actions: {
    async login(email: string, password: string) {
      await AuthService.login(email, password)
        .then(({ token }) => {
          this.token = token
          Cookies.set('token', token)
          return router.push('/')
        })
        .catch((error) => {
          Notify.create(`ERRO: ${error.message}`)
          this.token = null
          throw error
        })
    },

    logout() {
      AuthService.logout(this.token)
        .then(() => {
          this.token = null
          Cookies.remove('token')
          return router.push('/login')
        })
        .catch((error) => {
          Notify.create(`ERRO: Favor, atualize a página`)
          throw error
        })
    }
  }
})
