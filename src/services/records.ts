import { IAuth, IRecord } from '@/models'
import axios from 'axios'

const baseURL = `https://spot-api.up.railway.app`

export default class RecordsService {
  public static record(data: IRecord) {
    return new Promise<IRecord>((resolve, reject) => {
      axios
        .post(`${baseURL}/records`, data)
        .then((response) => resolve(response.data))
        .catch((error) => reject(error.response.data))
    })
  }

  public static show(token: IAuth['token']) {
    return new Promise<IRecord[]>((resolve, reject) => {
      axios
        .get(`${baseURL}/records`, {
          headers: { Authorization: `Bearer ${token}` }
        })
        .then((response) => resolve(response.data))
        .catch((error) => reject(error.response.data))
    })
  }

  public static showAll(token: IAuth['token']) {
    return new Promise<IRecord[]>((resolve, reject) => {
      axios
        .get(`${baseURL}/admin/records`, {
          headers: { Authorization: `Bearer ${token}` }
        })
        .then((response) => resolve(response.data))
        .catch((error) => reject(error.response.data))
    })
  }

  public static update(recordId: IRecord['record_id'], data: IRecord) {
    return new Promise<IRecord>((resolve, reject) => {
      axios
        .put(`${baseURL}/records`, { ...data, record_id: recordId })
        .then((response) => resolve(response.data))
        .catch((error) => reject(error.response.data))
    })
  }

  public static delete(recordId: IRecord['record_id']) {
    return new Promise<IRecord>((resolve, reject) => {
      axios
        .delete(`${baseURL}/records`, { data: { record_id: recordId } })
        .then((response) => resolve(response.data))
        .catch((error) => reject(error.response.data))
    })
  }
}
