import axios from 'axios'

const baseURL = `https://spot-api.up.railway.app`

export default class AuthService {
  public static login(email: string, password: string) {
    return new Promise<never>((resolve, reject) => {
      axios
        .post(`${baseURL}/auth`, { email, password })
        .then((response) => resolve(response.data))
        .catch((error) => reject(error.response.data))
    })
  }

  public static logout(token: string | null) {
    return new Promise<string>((resolve, reject) => {
      axios
        .delete(`${baseURL}/auth`, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        })
        .then((response) => resolve(response.data))
        .catch((error) => reject(error.response.data))
    })
  }
}
