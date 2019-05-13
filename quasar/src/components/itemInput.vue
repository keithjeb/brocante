<template>
  <q-form >
    <q-field dense>
    <q-input v-model="itemDesc"/>
    </q-field>
    <q-input v-model="itemPrice"/>
    <q-toggle v-model="largeItem" label="Is this a Large Item?" checked-icon="check" unchecked-icon="clear" left-label/>
  </q-form>
</template>

<script>
// this should take a set of default values, and then render a form input component.
export default {
  // name: 'ComponentName',
  data () {
    return {
      itemDesc: '',
      itemPrice: 0.0,
      itemCategories: null,
      itemSex: null,
      largeItem: false

    }
  }
}
</script>

<style>
</style>
