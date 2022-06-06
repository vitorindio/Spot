<template>
  <nav v-show="store.isAuthenticated">
    <router-link to="/">Dashboard</router-link>
    |
    <router-link to="/about">About</router-link>
    |
    <router-link to="/user/new">Cadastrar Usuário</router-link>
    |
    <router-link to="/login" @click="store.logout()">Logout</router-link>
  </nav>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue'
import { useAuthStore } from '@/stores'

export default defineComponent({
  setup() {
    const store = useAuthStore()

    return { store }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.body--light {
  background-color: var(--q-light);
}
</style>
