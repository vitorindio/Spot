<template>
  <section class="content-center items-center justify-center row window-height">
    <div :class="`col-xs-11 col-sm-9 col-md-7 col-lg-5 col-xl-4 q-ma-md ${isScreenBiggerThanMedium ? 'text-left' : 'text-center'}`">
      <img src="@/assets/logotipo.svg" :class="``" alt="Logotipo OWSE" />
      <h2 :class="`text-weight-medium ${isScreenBiggerThanMedium ? 'text-h4' : 'text-h5'}`">
        Você receberá um e-mail com um link para redefinir sua senha.
      </h2>
    </div>
    <div class="col-xs-11 col-sm-9 col-md-4 col-lg-3 col-xl-2 q-ma-md"><ForgotPasswordForm /></div>
  </section>
</template>

<script lang="ts">
import ForgotPasswordForm from '@/components/ForgotPasswordForm.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: { ForgotPasswordForm },
  methods: {
    isScreenBiggerThanMedium(): boolean {
      return this.$q.screen.width >= this.$q.screen.sizes.md
    }
  }
})
</script>
