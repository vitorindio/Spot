<template>
  <div class="q-pa-md row justify-center">
    <q-table title="Últimos Registros" :rows="rows" :columns="columns" row-key="name" class="col-sm-12 col-md-10 col-lg-8 col-xl-7">
      <template v-slot:top-right>
        <q-btn outline flat round color="primary" icon="img:/xlsx.svg" clickable @click="exportMethod" />
        <q-btn outline flat round color="primary" icon="img:/csv.svg" clickable @click="exportMethod" />
      </template>
    </q-table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useQuasar } from 'quasar'

const columns = [
  { name: 'name', label: 'Nome', align: 'left', field: (row: { name: string }) => row.name, sortable: true },
  { name: 'date', align: 'center', label: 'Data', field: 'date', sortable: true },
  { name: 'workingTime', label: 'Tempo Total', field: 'workingTime', sortable: true },
  { name: 'company', label: 'Empresa', field: 'company', sortable: true },
  { name: 'project', label: 'Projeto', field: 'project' },
  { name: 'notes', label: 'Observações', field: 'notes' }
]

const rows = [
  { name: 'Carlos Eduardo', date: '03/06/2022', workingTime: '6h23min', company: 'OWSE', project: 'VPN', notes: 'Ajustes na Infra' },
  { name: 'Adriano Cahete', date: '02/06/2022', workingTime: '50min', company: 'KIP4You', project: '-', notes: 'Reunião com Ulisses' },
  { name: 'Carlos Eduardo', date: '02/06/2022', workingTime: '1h15min', company: 'OWSE', project: 'VPN', notes: 'Reunião com Teixeira' },
  { name: 'Peterson Ramos', date: '02/06/2022', workingTime: '1h20min', company: 'CWS', project: 'Landing', notes: 'Design da página' },
  { name: 'Carlos Eduardo', date: '01/06/2022', workingTime: '47min', company: 'OWSE', project: 'VPN', notes: 'Reunião com a Login' },
  { name: 'Carlos Teixeira', date: '01/06/2022', workingTime: '2h35min', company: 'OWSE', project: 'Infra', notes: '-' }
]

export default defineComponent({
  setup() {
    const $q = useQuasar()

    return {
      columns,
      rows,

      exportMethod() {
        $q.notify({
          message: 'Funcionalidade ainda não adicionada',
          color: 'negative',
          icon: 'warning'
        })
      }
    }
  }
})
</script>
