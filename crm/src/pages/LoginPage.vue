<template>
  <q-page class="flex flex-center">
    <q-form class="q-pa-md">
      <q-card><h4>CRM</h4>
      </q-card>
      <div>
      <q-input v-model="text" label="Email"></q-input>
      <q-input icon="password" v-model="password" label="Password"></q-input>
      <div>
        <q-btn class="full-width" color="primary" label="Login"></q-btn>
      </div>
    </div>
  </q-form>

  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LoginPage'
})
</script>
