<template>
  <section>
    <h1 class="fontSize">Sobre</h1>
    <div>
      <p>State: {{ store.counter }}</p>
      <p>Getter * 2: {{ store.doubleCount }}</p>
      <button @click="store.increment()">Incrementar</button>
      <hr />
      <router-link to="/dashboard">Ir para Dashboard</router-link>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useCounterStore } from '@/stores/counter'

export default defineComponent({
  setup() {
    const store = useCounterStore()
    return { store }
  }
})
</script>

<style scoped>
.fontSize {
  font-size: xx-large;
}
</style>
