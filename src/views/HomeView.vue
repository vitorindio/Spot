<template>
  <div class="home">
    <LoginForm />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LoginForm from '@/components/LoginForm.vue'
import TestService from '@/http/test'

export default defineComponent({
  name: 'HomeView',
  components: { LoginForm },
  async mounted() {
    const data = await TestService.check()
    console.log(data)
  }
})
</script>
