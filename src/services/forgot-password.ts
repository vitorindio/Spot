import axios from 'axios'

const baseURL = `https://spot-api.up.railway.app`

export default class ForgotPasswordService {
  public static register(email: string) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${baseURL}/users/forgot-password`, { email, redirectUrl: 'https://spot-owse.vercel.app/forgot-password' })
        .then((response) => resolve(response.data))
        .catch((error) => reject(error.response.data))
    })
  }

  public static show(key: string) {
    return new Promise<never>((resolve, reject) => {
      axios
        .get(`${baseURL}/users/forgot-password/${key}`)
        .then((response) => resolve(response.data))
        .catch((error) => reject(error.response.data))
    })
  }

  public static update(key: string, password: string, passwordConfirmation: string) {
    return new Promise((resolve, reject) => {
      axios
        .put(`${baseURL}/users/forgot-password`, { key, password, passwordConfirmation })
        .then((response) => resolve(response.data))
        .catch((error) => reject(error.response.data))
    })
  }
}
