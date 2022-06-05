<template>
  <q-form class="bg-white q-gutter-y-sm q-pa-lg">
    <q-text items-center justify-center row window-height>Cadastro de Usuário</q-text>

    <q-input filled v-model="fullName" type="text" label="Nome Completo" name="fullName" required lazy-rules />

    <q-input filled v-model="email" type="email" label="E-mail" name="email" required :rules="mailRules" lazy-rules />

    <q-select
      rounded
      outlined
      v-model="userType"
      :options="userTypeOptions.options"
      :rules="userTypeRules"
      label="Função"
      :required="true"
    />

    <q-input filled v-model="password" :type="isPwd ? 'password' : 'text'" label="Senha" name="password" :rules="passwordRules">
      <template v-slot:append>
        <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />
      </template>
    </q-input>

    <q-btn label="Cadastrar" type="submit" color="primary" class="full-width" />

    <router-link to="#" class="block q-mt-sm text-primary">Esqueceu a senha?</router-link>
  </q-form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'UserCreate',
  setup() {
    return {
      fullName: ref(''),
      email: ref(''),
      password: ref(''),
      phone: ref(''),
      userType: ref(''),
      mailRules: [(val: string) => val.includes('@owse.com.br') || 'Utilize um e-mail OWSE'],
      passwordRules: [(val: string) => val.length >= 6 || 'A senha deve ter no mínimo 6 caracteres'],
      userTypeRules: [(val: string) => val.length >= 1 || 'Selecione 1 função'],
      isPwd: ref(true),
      userTypeOptions: {
        options: ['Administrador', 'Usuário']
      }
    }
  }
})
</script>
