<template>
  <form
    @submit.prevent="store.login(state.email, state.password)"
    class="lg:w-2/5 md:w-1/2 bg-white shadow-lg rounded-lg p-8 flex flex-col w-full q-gutter-md"
  >
    <img src="@/assets/spot.svg" class="mx-auto mb-8 w-2/5" alt="Logotipo SPOT" />
    <q-input filled v-model="state.email" label="E-mail" name="email" required :rules="mailRules" lazy-rules />
    <q-input filled v-model="state.password" type="password" label="Senha" name="password" required :rules="passwordRules" lazy-rules />
    <q-btn type="submit" color="primary" label="Entrar" />
    <p class="text-sm text-owse-blue mt-3 text-center py-4">Esqueceu a senha?</p>
  </form>
</template>

<script lang="ts">
import { useUserStore } from '@/stores/user'
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  name: 'LoginForm',
  setup() {
    const store = useUserStore()

    const state = reactive({
      email: '',
      password: ''
    })

    return {
      store,
      state,
      mailRules: [(val: string) => val.includes('@owse.com.br') || 'Utilize um e-mail OWSE'],
      passwordRules: [(val: string) => val.length >= 6 || 'A senha deve ter no mínimo 6 caracteres']
    }
  }
})
</script>
