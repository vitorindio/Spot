<template>
  <q-form @submit.prevent="this.store.forgotPassword(this.email)" class="bg-white q-gutter-y-sm q-pa-lg">
    <img src="@/assets/spot.svg" alt="Logotipo SPOT" class="q-mx-auto q-mb-lg q-px-xl" style="height: 40px" />
    <q-input filled v-model="email" type="email" label="E-mail" name="email" required :rules="mailRules" lazy-rules />
    <q-btn label="Recuperar" type="submit" color="primary" class="full-width q-mb-sm" />
    <router-link to="/login" size="sm">Voltar para Login</router-link>
  </q-form>
</template>

<script lang="ts">
import { useForgotPasswordStore } from '@/stores'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const store = useForgotPasswordStore()

    return {
      store,
      email: ref(''),
      mailRules: [(val: string) => val.includes('@owse.com.br') || 'Utilize um e-mail OWSE']
    }
  }
})
</script>
