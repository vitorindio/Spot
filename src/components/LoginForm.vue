<template>
  <section class="text-gray-600 body-font bg-gray-100">
    <div class="container h-screen xl:px-32 p-16 py-48 mx-auto flex flex-wrap justify-center items-center">
      <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
        <img src="@/assets/logotipo.svg" class="mx-auto md:ml-0" alt="Logotipo OWSE" />
        <p class="leading-relaxed mt-4 lg:text-3xl text-2xl lg:max-w-xl font-medium text-black text-center md:text-left">
          SPOT vai te ajudar a controlar suas horas de trabalho.
        </p>
      </div>
      <form @submit.prevent="login" class="lg:w-2/5 md:w-1/2 bg-white shadow-lg rounded-lg p-8 flex flex-col w-full">
        <img src="@/assets/spot.svg" class="mx-auto mb-8 w-2/5" alt="Logotipo SPOT" />
        <div class="relative mb-4">
          <input
            name="email"
            placeholder="E-mail"
            class="w-full bg-white rounded border border-gray-300 focus:ring-2 focus:ring-owse-blue text-lg outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            required
            v-model="state.email"
          />
          <!-- esse span, caso tenha um erro no campo, pega a mensagem do primeiro erro ( [0] ) e mostra pro usuario -->
          <div v-if="v$.email.$error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong class="font-bold">Verifique o email e tente novamente</strong>
            <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
              <svg class="fill-current h-6 w-6 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <title>Close</title>
                <path
                  d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
                />
              </svg>
            </span>
          </div>
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
          <div v-if="v$.password.$error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong class="font-bold">Verifique a senha e tente novamente</strong>
            <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
              <svg class="fill-current h-6 w-6 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <title>Close</title>
                <path
                  d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
                />
              </svg>
            </span>
          </div>
        </div>
        <button
          type="submit"
          class="text-white border-0 py-2 px-8 focus:outline-none font-medium rounded text-xl bg-owse-blue"
          @click.prevent="login"
        >
          Entrar
        </button>
        <p class="text-sm text-owse-blue mt-3 text-center py-4">Esqueceu a senha?</p>
      </form>
    </div>
  </section>
</template>

<script lang="ts">
import useValidate from '@vuelidate/core'
import { email, helpers, minLength, required } from '@vuelidate/validators'
import { computed, defineComponent, reactive } from 'vue'
import AuthService from '@/services/auth'

export default defineComponent({
  name: 'LoginForm',
  setup() {
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

    return { state, v$ }
  },
  methods: {
    login() {
      this.v$.$validate()

      AuthService.login(this.state.email, this.state.password)
        .then((res) => {
          console.log(res) // {"type":"bearer","token":"Nw.3ce8CFIJhUiriD0VPG8VGFpHAP46yenRqUafdWXyjSwlBotSzn2jr5kLIAYy","expires_at":"2022-06-30T22:01:11.324+00:00"}
          this.$router.push('/')
        })
        .catch((err) => {
          console.error(err)
          // TODO: verificar vue-toast-notification
          // this.$toast.error('Usuário ou senha inválidos')
        })
    }
  }
})
</script>
