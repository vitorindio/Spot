<template>
  <section>
    <h1>Dashboard</h1>
    <h2 class="fontSize">Dashboard</h2>
    <router-link to="/">Dashboard</router-link>
    |
    <router-link to="/about">About</router-link>
    |
    <router-link to="/login" @click="store.logout()">Logout</router-link>
    <br />
    <br />
    <code>v-if="admin"</code>
    <p>Componente Tabela do Administrador</p>
    <AdminDash />
    <code>v-else="user"</code>
    <p>Componente Tabela do Usuário</p>
  </section>
</template>

<script lang="ts">
import AdminDash from '@/components/AdminDash.vue'
import { useAuthStore } from '@/stores/auth'
import { defineComponent } from 'vue'

export default defineComponent({
  components: { AdminDash }
})
</script>

<style scoped>
.fontSize {
  font-size: xx-large;
}
</style>
