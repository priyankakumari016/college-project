<template>
  <q-page class="flex flex-center">
    <q-table
    title="CONTACTS"
    :columns="
    [
      {
        label:'Name'
      },
      {
        label:'Job title'
      },
      {
        label:'Account Name'
      },
      {
        label:'Email'
      },
      {
        label:'Office Phone'
      },
      {
        label:'User'
      },
      {
        label:'Date Ceated'
      },

    ]"
    />


  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ContactTablePage'
})
</script>
