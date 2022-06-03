<template>
  <q-form @submit.prevent="store.login(email, password)" class="bg-white q-gutter-y-sm q-pa-lg">
    <img src="@/assets/spot.svg" alt="Logotipo SPOT" class="q-mx-auto q-mb-lg q-px-xl" style="height: 40px" />
    <q-input filled v-model="email" type="email" label="E-mail" name="email" required :rules="mailRules" lazy-rules />
    <q-input
      filled
      v-model="password"
      :type="isPwd ? 'password' : 'text'"
      label="Senha"
      name="password"
      required
      :rules="passwordRules"
      lazy-rules
    >
      <template v-slot:append>
        <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />
      </template>
    </q-input>
    <q-btn label="Entrar" type="submit" color="primary" class="full-width" />
    <router-link to="#" class="block q-mt-sm text-primary">Esqueceu a senha?</router-link>
  </q-form>
</template>

<script lang="ts">
import { useUserStore } from '@/stores/user'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'LoginForm',
  setup() {
    const store = useUserLoginStore()

    return {
      store,
      email: ref(''),
      password: ref(''),
      isPwd: ref(true),
      mailRules: [(val: string) => val.includes('@owse.com.br') || 'Utilize um e-mail OWSE'],
      passwordRules: [(val: string) => val.length >= 6 || 'A senha deve ter no mínimo 6 caracteres']
    }
  }
})
</script>
