import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/roboto-font/roboto-font.css'
import { Cookies, Notify } from 'quasar'
import 'quasar/dist/quasar.css'
import lang from 'quasar/lang/pt-BR.js'

export default {
  config: {
    brand: {
      primary: '#0F6DB8',
      accent: '#EB5723'
    },
    notify: {
      html: true,
      position: 'top',
      progress: true,
      timeout: 3000,
      multiline: true
    }
  },
  plugins: { Cookies, Notify },
  lang: lang
}
