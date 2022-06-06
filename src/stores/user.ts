import ForgotPasswordService from '@/services/forgot-password'
import { defineStore } from 'pinia'

export const useForgotPasswordStore = defineStore('user', {
  state: () => ({
    token: null
  }),

  getters: {
    isAuthenticated: (state) => !!state.token
  },

  actions: {
    async forgotPassword(email: string) {
      await ForgotPasswordService.register(email)
        .then((response) => console.log(response))
        .catch((error) => console.log(error))
    },

    show(key: string) {
      ForgotPasswordService.show(key)
        .then((response) => console.log(response))
        .catch((error) => console.log(error))
    }
  }
})
