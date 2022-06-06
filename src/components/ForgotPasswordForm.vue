<template>
  <q-form autofocus class="bg-white q-gutter-y-sm q-pa-lg">
    <img src="@/assets/spot.svg" alt="Logotipo SPOT" class="q-mx-auto q-mb-lg q-px-xl" style="height: 40px" />
    <q-input
      filled
      v-model="store.email"
      type="email"
      label="E-mail"
      :rules="[(val) => val.includes('@owse.com.br') || 'Utilize um e-mail OWSE']"
      lazy-rules
      required
      :disable="userKey ? true : false"
      :readonly="userKey ? true : false"
    />
    <q-input
      v-show="userKey"
      filled
      v-model="password"
      :type="isPwd ? 'password' : 'text'"
      label="Nova senha"
      :rules="[(val) => val.length >= 6 || 'A senha deve ter no mínimo 6 caracteres']"
      lazy-rules
    >
      <template v-slot:append>
        <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />
      </template>
    </q-input>
    <q-input
      v-show="userKey"
      filled
      v-model="passwordConfirmation"
      :type="isPwd ? 'password' : 'text'"
      label="Confirmação"
      :rules="[(val) => val === store.password || 'As senhas não conferem']"
      lazy-rules
    />
    <q-btn @click.once="onSubmit()" :label="userKey ? 'Redefinir' : 'Recuperar'" color="primary" class="full-width q-mb-sm" />
    <router-link v-show="!userKey" userKey to="/login" size="sm">Voltar para Login</router-link>
  </q-form>
</template>

<script lang="ts">
import { useForgotPasswordStore } from '@/stores'
import { storeToRefs } from 'pinia'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    userKey: { type: String, required: false }
  },

  setup(props) {
    const store = useForgotPasswordStore()

    const isPwd = ref(true)
    const { email, password, passwordConfirmation } = storeToRefs(store)

    function onSubmit() {
      if (props.userKey) {
        store.update(props.userKey, store.password, store.passwordConfirmation)
      } else {
        store.forgotPassword(store.email)
      }
    }

    return { store, email, password, passwordConfirmation, isPwd, onSubmit }
  },

  mounted() {
    if (this.userKey) {
      this.store.show(this.userKey)
    }
  }
})
</script>
