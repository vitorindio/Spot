<template>
  <div>
    <Menu as="div" class="relative inline-block text-left">
      <div>
        <MenuButton
          class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
        >
          Options
          <ChevronDownIcon class="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </MenuButton>
      </div>

      <transition
        enter-active-class="transition ease-out duration-100"
        enter-from-class="transform opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100"
        leave-active-class="transition ease-in duration-75"
        leave-from-class="transform opacity-100 scale-100"
        leave-to-class="transform opacity-0 scale-95"
      >
        <MenuItems
          class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div class="py-1">
            <MenuItem v-slot="{ active }">
              <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Account settings</a>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Support</a>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">License</a>
            </MenuItem>
            <form method="POST" action="#">
              <MenuItem v-slot="{ active }">
                <button
                  type="submit"
                  :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block w-full text-left px-4 py-2 text-sm']"
                >
                  Sign out
                </button>
              </MenuItem>
            </form>
          </div>
        </MenuItems>
      </transition>
    </Menu>
  </div>

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
            :disabled="hasToken"
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
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/solid'
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
  components: {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    ChevronDownIcon
  },
  data() {
    return {
      hasToken: false
    }
  },
  methods: {
    toggleMenu() {
      this.$refs.menu.toggle()
    }
  }
})
</script>
