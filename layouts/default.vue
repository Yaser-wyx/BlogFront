<template>
  <v-app>
    <toolbar></toolbar>
    <nuxt/>
  </v-app>
</template>

<script>
  import toolbar from '../components/head/toolbar'

  export default {
    components: {
      toolbar,
    },
  }
</script>
