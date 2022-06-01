import axios from 'axios'

const baseURL = `https://spot-api.up.railway.app`

export default class ForgotPasswordService {
  public async register(email: string) {
    return await axios
      .post(`${baseURL}/users/forgot-password`, { redirectUrl: 'https://spot-owse.vercel.app/forgot-password', email })
      .then((response) => response.data)
      .catch((error) => error.response.data)
  }

  public async show(key: string) {
    return await axios
      .get(`${baseURL}/users/forgot-password/${key}`)
      .then((response) => response.data)
      .catch((error) => error.response.data)
  }

  public async update(key: string, password?: string, passwordConfirmation?: string) {
    return await axios
      .put(`${baseURL}/users/forgot-password`, { key, password, passwordConfirmation })
      .then((response) => response.data)
      .catch((error) => error.response.data)
  }
}
