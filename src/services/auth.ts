import axios from 'axios'

const baseURL = `https://spot-api.up.railway.app`

export default class AuthService {
  public static async login(email: string, password: string) {
    return await axios
      .post(`${baseURL}/auth`, { email, password })
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(error.response.data)
      })
  }

  public static async logout(token: string | null) {
    await axios
      .delete(`${baseURL}/auth`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(error.response.data)
      })
  }
}
