import { defineComponent } from 'vue'
//import LoginForm from '@/components/LoginForm.vue'
import StatusService from '@/http/status'

export default defineComponent({
  name: 'UserUpdate',
  async mounted() {
    const data = await StatusService.check()
    console.log(data)
  }
})
