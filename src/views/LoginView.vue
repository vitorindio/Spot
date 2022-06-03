<template>
  <section class="content-center items-center justify-center row window-height">
    <div :class="`col-xs-11 col-sm-9 col-md-7 q-ma-md ${$q.screen.md ? 'text-left' : 'text-center'}`">
      <img src="@/assets/logotipo.svg" :class="``" alt="Logotipo OWSE" />
      <h2 :class="`text-weight-medium ${$q.screen.md ? 'text-h4' : 'text-h5'}`">SPOT vai te ajudar a controlar suas horas de trabalho.</h2>
    </div>
    <div class="col-xs-11 col-sm-9 col-md-4 q-ma-md"><LoginForm /></div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LoginForm from '@/components/LoginForm.vue'
import StatusService from '@/services/status'

export default defineComponent({
  components: { LoginForm },
  async mounted() {
    const data = await StatusService.check()
    console.log(data)
  }
})
</script>
