<template>
  <h1 class="text-4xl">Dashboard</h1>
  <div class="my-4"></div>
  <router-link to="/login" @click="store.logout()" class="bg-owse-blue hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full">
    Logout
  </router-link>
  <router-link to="/about" class="mx-auto my-4">Ir para About</router-link>
</template>

<script lang="ts">
import { useUserStore } from '@/stores/user'
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const store = useUserStore()
    return { store }
  }
})
</script>
