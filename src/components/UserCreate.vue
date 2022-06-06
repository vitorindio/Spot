<template>
  <q-form class="bg-white q-gutter-y-sm q-pa-lg">
    <q-text v-show="id == null || id == ''" items-center justify-center row window-height>Cadastrar Usuário</q-text>

    <q-text v-show="id && id >= 0" items-center justify-center row window-height>Editar Usuário</q-text>

    <q-input readonly disable filled v-model="id" type="text" label="ID" name="id" />

    <q-input filled v-model="fullName" type="text" label="Nome Completo" name="fullName" required lazy-rules />

    <q-input filled v-model="email" type="email" label="E-mail" name="email" required :rules="mailRules" lazy-rules />

    <q-select rounded outlined v-model="userType" :options="userTypeOptions" :rules="userTypeRules" label="Função" :required="true" />

    <q-input filled v-model="password" :type="isPwd ? 'password' : 'text'" label="Senha" name="password" :rules="passwordRules">
      <template v-slot:append>
        <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />
      </template>
    </q-input>

    <q-btn label="Cadastrar" type="submit" color="primary" class="full-width" />
  </q-form>
</template>

<script lang="ts">
import { IUser } from '@/models'
import { UserType } from '@/models/enumerations/enumUserType'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'UserCreate',
  setup() {
    return {
      id: ref(null),
      fullName: ref('') || ref(),
      email: ref(''),
      password: ref(''),
      phone: ref(''),
      userType: ref(''),
      mailRules: [(val: string) => val.includes('@owse.com.br') || 'Utilize um e-mail OWSE'],
      passwordRules: [(val: string) => val.length >= 6 || 'A senha deve ter no mínimo 6 caracteres'],
      userTypeRules: [(val: string) => val.length >= 1 || 'Selecione 1 função'],
      isPwd: ref(true),
      userTypeOptions: ['Administrador', 'Usuário']
    }
  }
})
</script>
