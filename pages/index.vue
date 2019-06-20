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

  export default {
    data: function () {
      return {
        loading: 0
      }
    },
    components: {headerMain, contentCard},
    mounted() {
      // console.log(this.$apollo.queries.hello)
    },
    methods: {}
  }
</script>
<style scoped>

</style>
