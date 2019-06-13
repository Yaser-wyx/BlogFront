<template>
  <div class="mb-5">
    <headerMain img="/img/header/snow-mountain.jpg"></headerMain>
    <div class="mt-5">
      <contentCard></contentCard>
    </div>
  </div>
</template>

<script>

  import headerMain from "../components/head/headerMain";
  import contentCard from "../components/content/contentList";
  import gql from 'graphql-tag'

  export const hello = gql`
    query{
      hello
    }
  `
  export default {
    data: function () {
      return {
        loading: 0
      }
    },
    components: {headerMain, contentCard},
    /*apollo: {
      $loadingKey: 'loading',
      hello: {
        query: hello
      }
    },*/
    mounted() {
      // console.log(this.$apollo.queries.hello)
    },
    methods: {}
  }
</script>
<style scoped>

</style>
