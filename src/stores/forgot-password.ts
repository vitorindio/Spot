import router from '@/router'
import ForgotPasswordService from '@/services/forgot-password'
import { defineStore } from 'pinia'
import { Notify } from 'quasar'

export const useForgotPasswordStore = defineStore('forgot-password', {
  state: () => ({
    email: ''
  }),

  actions: {
    async forgotPassword(email: string) {
      await ForgotPasswordService.register(email)
        .then(() => Notify.create({ message: 'E-mail enviado com sucesso!', type: 'success' }))
        .catch(() => Notify.create({ message: 'E-mail não cadastrado!', type: 'negative' }))
    },

    async show(key: string) {
      await ForgotPasswordService.show(key)
        .then((response) => (this.email = response))
        .catch(() => {
          Notify.create({ message: 'Chave inválida', type: 'negative' })
          return router.push('/login')
        })
    },

    async update(key: string, password: string, passwordConfirmation: string) {
      await ForgotPasswordService.update(key, password, passwordConfirmation)
        .then(() => {
          Notify.create({ message: 'Senha alterada com sucesso!', type: 'success' })
          return router.push('/login')
        })
        .catch((error) => Notify.create({ message: error, type: 'negative' }))
    }
  }
})
