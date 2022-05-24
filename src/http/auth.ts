import axios from 'axios'

const baseURL = `https://spot-api.up.railway.app/`

export default class AuthService {
  public static async login(email: string, password: string) {
    return await axios
      .post(`${baseURL}/auth`, { email, password })
      .then((response) => response.data)
      .catch((error) => error.response.data)
  }

  public static async logout() {
    return await axios
      .delete(`${baseURL}/auth`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then((response) => response.data)
      .catch((error) => error.response.data)
  }
}
