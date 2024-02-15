<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-transparent">
      <q-toolbar-title>
        CRM
      </q-toolbar-title>
    </q-header>
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
    <q-list>
      <q-list-label header></q-list-label>

      </q-list>
    </q-drawer>
  <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
  const linklist=[
{
  title:Dashboard,
  icon:"dashboard",
  link:
},
{
  title:Profile,
  icon:"profile",
  link:
},
{
  title:ViewTicket,
  icon:"ticket",
  link:
}
  ]
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'MainLayout',
})
</script>
