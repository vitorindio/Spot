import axios from 'axios'

const baseURL = `https://spot-api.up.railway.app`

export default class TestService {
  public static async check() {
    return await axios
      .get(`${baseURL}/test`)
      .then((response) => response.data)
      .catch((error) => error.response.data)
  }
}
