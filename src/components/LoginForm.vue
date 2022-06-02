<template>
  <section class="text-gray-600 body-font bg-gray-100">
    <div class="container h-screen xl:px-32 p-16 py-48 mx-auto flex flex-wrap justify-center items-center">
      <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
        <img src="@/assets/logotipo.svg" class="mx-auto md:ml-0" alt="Logotipo OWSE" />
        <p class="leading-relaxed mt-4 lg:text-3xl text-2xl lg:max-w-xl font-medium text-black text-center md:text-left">
          SPOT vai te ajudar a controlar suas horas de trabalho.
        </p>
      </div>
      <form
        @submit.prevent="store.login(state.email, state.password)"
        class="lg:w-2/5 md:w-1/2 bg-white shadow-lg rounded-lg p-8 flex flex-col w-full"
      >
        <img src="@/assets/spot.svg" class="mx-auto mb-8 w-2/5" alt="Logotipo SPOT" />
        <div class="relative mb-4">
          <input
            name="email"
            placeholder="E-mail"
            class="w-full bg-white rounded border border-gray-300 focus:ring-2 focus:ring-owse-blue text-lg outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            required
            v-model="state.email"
          />
          <span v-if="v$.email.$error">
            {{ v$.email.$errors[0].$message }}
          </span>
        </div>
        <div class="relative mb-4">
          <input
            type="password"
            name="password"
            placeholder="Senha"
            class="w-full bg-white rounded border border-gray-300 focus:ring-2 focus:ring-owse-blue outline-none text-lg text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            required
            v-model="state.password"
          />
          <span v-if="v$.password.$error">
            {{ v$.password.$errors[0].$message }}
          </span>
        </div>
        <button type="submit" class="text-white border-0 py-2 px-8 focus:outline-none font-medium rounded text-xl bg-owse-blue">
          Entrar
        </button>
        <p class="text-sm text-owse-blue mt-3 text-center py-4">Esqueceu a senha?</p>
      </form>
    </div>
  </section>
</template>

<script lang="ts">
import { useUserStore } from '@/stores/user'
import useValidate from '@vuelidate/core'
import { email, helpers, minLength, required } from '@vuelidate/validators'
import { computed, defineComponent, reactive } from 'vue'

export default defineComponent({
  name: 'LoginForm',
  setup() {
    const store = useUserStore()

    const state = reactive({
      email: '',
      password: ''
    })

    const mustBeOwse = (value: string) => value.includes('owse.com.br')

    const rules = computed(() => {
      return {
        email: {
          required,
          email,
          mustBeOwse: helpers.withMessage('Utilize um email OWSE', mustBeOwse)
        },
        password: { required, minLength: minLength(3) }
      }
    })

    const v$ = useValidate(rules, state)

    return { store, state, v$ }
  }
})
</script>
