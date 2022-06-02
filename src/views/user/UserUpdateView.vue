<template>
  <div class="home">
    <UserUpdate />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import UserUpdate from '@/components/UserUpdate.vue'
import StatusService from '@/services/status'

export default defineComponent({
  name: 'UserUpdateView',
  components: { UserUpdate },
  async mounted() {
    const data = await StatusService.check()
    console.log(data)
  }
})
</script>
