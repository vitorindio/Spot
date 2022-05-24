<template>
  <section class="text-gray-600 body-font bg-gray-100">
    <div class="container h-screen xl:px-32 p-16 py-48 mx-auto flex flex-wrap justify-center items-center">
      <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
        <img src="@/assets/logotipo.svg" class="mx-auto md:ml-0" alt="Logotipo OWSE" />
        <p class="leading-relaxed mt-4 lg:text-3xl text-2xl lg:max-w-xl font-medium text-black text-center md:text-left">
          <span class="text-owse-blue">SP</span>
          <span class="text-owse-red">O</span>
          <span class="text-owse-blue">T</span>
          vai te ajudar a controlar suas horas de trabalho.
        </p>
      </div>
      <form class="lg:w-2/5 md:w-1/2 bg-white shadow-lg rounded-lg p-8 flex flex-col w-full">
        <div class="relative mb-4">
          <input
            name="email"
            placeholder="E-mail"
            class="w-full bg-white rounded border border-gray-300 focus:ring-2 focus:ring-owse-blue text-lg outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            required
          />
        </div>
        <div class="relative mb-4">
          <input
            type="password"
            name="password"
            placeholder="Senha"
            class="w-full bg-white rounded border border-gray-300 focus:ring-2 focus:ring-owse-blue outline-none text-lg text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            required
          />
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
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LoginForm'
})
</script>
