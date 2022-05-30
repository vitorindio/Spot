<template>
  <div class="home">
    <LoginForm />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LoginForm from '@/components/LoginForm.vue'
import StatusService from '@/http/status'

export default defineComponent({
  name: 'HomeView',
  components: { LoginForm },
  async mounted() {
    const data = await StatusService.check()
    console.log(data)
  }
})
</script>
