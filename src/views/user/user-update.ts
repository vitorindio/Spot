import { defineComponent } from 'vue'
//import LoginForm from '@/components/LoginForm.vue'
import StatusService from '@/services/status'

export default defineComponent({
  name: 'UserUpdate',
  async mounted() {
    const data = await StatusService.check()
    console.log(data)
  }
})
