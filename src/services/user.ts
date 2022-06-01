import axios from 'axios'

const baseURL = `https://spot-api.up.railway.app`

export default class UserService {
  public async register(fullName: string, email: string) {
    return await axios
      .post(`${baseURL}/admin/register`, { redirectUrl: 'https://spot-owse.vercel.app/register', fullName, email })
      .then((response) => response.data)
      .catch((error) => error.response.data)
  }

  public async show(key: string) {
    return await axios
      .get(`${baseURL}/admin/register/${key}`)
      .then((response) => response.data)
      .catch((error) => error.response.data)
  }

  public async update(key: string, fullName: string, password?: string, passwordConfirmation?: string, phone?: string) {
    return await axios
      .put(`${baseURL}/admin/register`, { key, fullName, password, passwordConfirmation, phone })
      .then((response) => response.data)
      .catch((error) => error.response.data)
  }
}
