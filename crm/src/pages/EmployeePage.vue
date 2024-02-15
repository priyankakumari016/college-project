<template>
  <q-page class="flex flex-center">
  <q-form >
    <q-card>
      <h4>
        Employee details
      </h4>
    </q-card>
    <div>
    <q-input v-model="text" label="Name"></q-input>
    <q-input v-model="text" label="Title"></q-input>
    <q-input v-model="text" label="Contacts Number"></q-input>
    <q-input v-model="text" label="Aadhar Number"></q-input>
    <q-input v-model="text" label="Address"></q-input>
    <q-input v-model="text" label="Email-id"></q-input>
    </div>
    <div class="row q-gutter-sm">
      <q-btn label="Submit" ></q-btn>
    <q-btn label="Cancel"></q-btn>
    </div>

  </q-form>
</q-page>
  </template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EmployeePage'
})
</script>
