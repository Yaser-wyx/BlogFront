<template>
  <div class="mb-5">
    <headerMain img="/img/header/star.jpg" need-slot>
      123
    </headerMain>
    <contentCard></contentCard>
  </div>
</template>

<script>

  import headerMain from "../components/head/headerMain";
  import contentCard from "../components/content/contentList";

  export default {
    name:"learning",
    components: {headerMain, contentCard},
    mounted() {

    },
    methods: {}
  }
</script>
<style scoped>

</style>
