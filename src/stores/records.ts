import { IRecord } from '@/models'
import RecordsService from '@/services/records'
import { defineStore } from 'pinia'
import { Notify } from 'quasar'
import { useAuthStore } from './auth'

export const useRecordsStore = defineStore('records', {
  state: () => ({
    _records: [] as IRecord[]
  }),

  getters: {
    records: (state) => state._records,
    getToken() {
      const authStore = useAuthStore()
      return authStore.token
    }
  },

  actions: {
    async record(record: IRecord) {
      await RecordsService.record(record)
        .then(() => Notify.create({ message: 'Registro adicionado', color: 'positive' }))
        .catch((error) => Notify.create(`ERRO: ${error}`))
    },

    async show() {
      await RecordsService.show(this.getToken)
        .then((response) => (this._records = response))
        .catch((error) => Notify.create(`ERRO: ${error}`))
    },

    async showAll() {
      await RecordsService.showAll(this.getToken)
        .then((response) => (this._records = { ...response }))
        .catch((error) => Notify.create(`ERRO: ${error}`))
    },

    async update(id: number, record: IRecord) {
      await RecordsService.update(id, record)
        .then(() => Notify.create({ message: 'Registro atualizado', color: 'positive' }))
        .catch((error) => Notify.create(`ERRO: ${error}`))
    },

    async delete(id: number) {
      await RecordsService.delete(id)
        .then(() => Notify.create({ message: 'Registro removido', color: 'positive' }))
        .catch((error) => Notify.create(`ERRO: ${error}`))
    }
  }
})
