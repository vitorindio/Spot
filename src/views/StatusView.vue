<template>
  <h1>Status do Servidor</h1>
  <h4>
    <strong>Status:</strong>
    {{ status }}
    <p>{{ time }}</p>
  </h4>
</template>

<script lang="ts">
import StatusService from '@/services/status'
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      status: null,
      time: new Date()
    }
  },
  async mounted() {
    const { status, time } = await StatusService.check()
    this.status = status || 'offline'
    this.time = new Date(time) || '-'
  }
})
</script>
