import { defineComponent } from 'vue'
import useValidate from '@vuelidate/core'
import { reactive, computed } from 'vue'
import { email, required, minLength, helpers } from '@vuelidate/validators'

export default defineComponent({
  name: 'LoginForm',
  setup() {
    const state = reactive({
      email: '',
      password: ''
    })

    //aqui ta obrigando a ser do tipo email : vitor@gmail.com ( pra poder submeter o form)
    const mustBeOwse = (value: string) => value.includes('owse.com.br')

    const rules = computed(() => {
      return {
        email: {
          required,
          email,
          mustBeOwse: helpers.withMessage('Use um email Owse', mustBeOwse)
        },
        password: { required, minLength: minLength(3) }
      }
    })

    const v$ = useValidate(rules, state)

    return {
      state,
      v$
    }
  },

  methods: {
    submitForm() {
      this.v$.$validate()
    }
  }
})
