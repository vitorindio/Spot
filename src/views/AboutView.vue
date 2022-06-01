<template>
  <div class="flex flex-col h-screen">
    <h1 class="mx-auto">Página Sobre</h1>
    <div class="m-auto">
      <p>State: {{ store.counter }}</p>
      <p>Getter * 2: {{ store.doubleCount }}</p>
      <button @click="store.increment()">Incrementar</button>
      <hr />
      <router-link to="/dashboard" class="mx-auto">Ir para Dashboard</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useCounter } from '@/stores/counter'

export default defineComponent({
  setup() {
    const store = useCounter()
    return { store }
  }
})
</script>
