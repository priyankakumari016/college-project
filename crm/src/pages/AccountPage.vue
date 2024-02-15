<template>
  <q-page class="bg-grey-2">
    <div class="row q-ma-md q-gutter-md items-center">
      <div class="text-h4">Accounts</div>
      <div>
        <q-btn rounded color="green" label="Add" size="lg" unelevated to="./add"/>
      </div>
    </div>
    <div class="row q-ma-md q-gutter-md">
      <q-card v-if="mode" class="q-pa-md" style="width:360px">
        <AccountForm />

      </q-card>
      <AccountTable class="col" />
    </div>

  </q-page>
</template>
<script>
import AccountForm from 'components/modules/accounts/AccountForm.vue'
import AccountTable from 'components/modules/accounts/AccountTable.vue'
export default {
  props: ['mode'],
  components: { AccountForm, AccountTable }
}
</script>
