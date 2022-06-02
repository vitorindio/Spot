<template>
  <div class="home">
    <section class="text-gray-600 body-font bg-gray-100">
      <div class="container h-screen xl:px-32 p-16 py-48 mx-auto flex flex-wrap justify-center items-center">
        <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <img src="@/assets/logotipo.svg" class="mx-auto md:ml-0" alt="Logotipo OWSE" />
          <p class="leading-relaxed mt-4 lg:text-3xl text-2xl lg:max-w-xl font-medium text-black text-center md:text-left">
            SPOT vai te ajudar a controlar suas horas de trabalho.
          </p>
        </div>
        <LoginForm />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LoginForm from '@/components/LoginForm.vue'
import StatusService from '@/services/status'

export default defineComponent({
  name: 'HomeView',
  components: { LoginForm },
  async mounted() {
    const data = await StatusService.check()
    console.log(data)
  }
})
</script>
