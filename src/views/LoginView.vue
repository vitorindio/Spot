<template>
  <section class="content-center items-center justify-center row window-height">
    <div :class="`col-xs-11 col-sm-9 col-md-7 col-lg-5 col-xl-4 q-ma-md ${isScreenBiggerThanMedium ? 'text-left' : 'text-center'}`">
      <img src="@/assets/logotipo.svg" :class="``" alt="Logotipo OWSE" />
      <h2 :class="`text-weight-medium ${isScreenBiggerThanMedium ? 'text-h4' : 'text-h5'}`">
        SPOT vai te ajudar a controlar suas horas de trabalho.
      </h2>
    </div>
    <div class="col-xs-11 col-sm-9 col-md-4 col-lg-3 col-xl-2 q-ma-md"><LoginForm /></div>
  </section>
</template>

<script lang="ts">
import LoginForm from '@/components/LoginForm.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: { LoginForm },
  methods: {
    isScreenBiggerThanMedium(): boolean {
      return this.$q.screen.width >= this.$q.screen.sizes.md
    }
  }
})
</script>
