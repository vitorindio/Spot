<template>
  <h1>Dashboard</h1>
  <router-link to="/about">About</router-link>
  |
  <router-link to="/login" @click="store.logout()">Logout</router-link>
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
