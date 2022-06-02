<template>
  <section class="text-gray-600 body-font bg-gray-100">
    <div class="container h-screen xl:px-32 p-16 py-48 mx-auto flex flex-wrap justify-center items-center">
      <form class="lg:w-2/5 md:w-1/2 bg-white shadow-lg rounded-lg p-8 flex flex-col w-full">
        <div class="form-group mb-3 input-group">
          <label class="block text-sm font-medium text-gray-700 text-left" for="email">Nome Completo</label>
          <div class="form-group mb-1">
            <input
              type="text"
              placeholder="Placeholder"
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:ring-2 focus:ring-owse-blue focus:outline-none grid place-items-center"
            />
          </div>
        </div>
        <div class="form-group mb-4">
          <label class="block text-sm font-medium text-gray-700 text-left" for="email">Email</label>
          <input
            type="email"
            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:ring-2 focus:ring-owse-blue focus:outline-none"
            id="exampleInput125"
            placeholder="Email address"
          />
        </div>
        <div class="form-group mb-4">
          <label class="block text-sm font-medium text-gray-700 text-left" for="email">Senha</label>
          <input
            type="password"
            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:ring-2 focus:ring-owse-blue focus:outline-none"
            id="exampleInput125"
            placeholder="Email address"
          />
        </div>
        <div class="form-group mb-4">
          <label class="block text-sm font-medium text-gray-700 text-left" for="email">Telefone</label>
          <input
            type="password"
            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:ring-2 focus:ring-owse-blue focus:outline-none"
            id="exampleInput125"
            placeholder="Email address"
          />
        </div>
        <div class="form-group mb-4">
          <label class="block text-sm font-medium text-gray-700 text-left" for="email">Tipo de Usuário</label>
          <select
            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:ring-2 focus:ring-owse-blue focus:outline-none"
            id="grid-state"
          >
            <option>Administrador</option>
            <option>Colaborador</option>
          </select>
        </div>
        <button
          type="submit"
          class="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none font-medium rounded text-xl bg-owse-blue active:shadow-lg transition duration-150 ease-in-out"
        >
          Cadastrar
        </button>
      </form>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'UserUpdate'
})
</script>
