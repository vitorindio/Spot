<template>
  <section class="bg-grey-11">
    <div>
      <div class="content-left items-left justify-left row window-height/6">
        <img src="@/assets/logotipo.svg" alt="Logotipo OWSE" />
      </div>
      <div class="content-center items-center justify-center row window-height">
        <div class="col-xs-11 col-sm-9 col-md-4 q-ma-md"><UserCreate /></div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import UserCreate from '@/components/UserCreate.vue'
import StatusService from '@/services/status'

export default defineComponent({
  name: 'UserUpdateView',
  components: { UserCreate },
  async mounted() {
    const data = await StatusService.check()
    console.log(data)
  }
})
</script>
