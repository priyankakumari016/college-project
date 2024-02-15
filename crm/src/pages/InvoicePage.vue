<template>
  <q-page  class="flex flex-center">
    <q-form>
      <q-card>
        <h4>Transition</h4>
      </q-card>
    <div>
    <q-input v-model="text" label="Customer Name"></q-input>
    <q-input v-model="text" label="Product Name"></q-input>
    <q-input v-model="text" label="Price"></q-input>
    <q-input v-model="text" label="Date"></q-input>
    <q-input v-model="text" label="Taxes"></q-input>
    <q-input v-model="text" label="Total Amount"></q-input>
    </div>
  </q-form>
  </q-page>

  </template>
  <script>
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'InvoicePage'
  })
  </script>
