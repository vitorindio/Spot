<template>
  <section>
    <h1>Dashboard</h1>
    <code>v-if="admin"</code>
    <p>Componente Tabela do Administrador</p>
    <AdminDash />
    <code>v-else="user"</code>
    <p>Componente Tabela do Usuário</p>
  </section>
</template>

<script lang="ts">
import AdminDash from '@/components/AdminDash.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: { AdminDash }
})
</script>
