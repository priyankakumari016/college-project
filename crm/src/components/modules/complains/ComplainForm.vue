<template>
  <q-form>
    <q-card>
      <h4>
        Information
      </h4>
    </q-card>
    <div>
    <q-input v-model="text" label="Customer Name"></q-input>
   <q-input v-model="text" label="Contacts Number"></q-input>
   <q-input v-model="text" label="Query"></q-input>
   <q-input v-model="text" label="Product Name"></q-input>
   <q-input v-model="text" label="Purchasing Date"></q-input>
    <q-input v-model="text" label="Complaining Date"></q-input>
    </div>
    <div class="row q-gutter-sm">
      <q-btn label="Submit" ></q-btn>
    <q-btn label="Cancel" to="../"></q-btn>
    </div>

  </q-form>
  </template>

  <script>
  </script>
