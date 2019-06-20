<template>
  <div class="mt-4">
    <contentCard :classifyIndex="classifyIndex"></contentCard>
  </div>
</template>

<script>
  import contentCard from "../../components/content/contentList";

  export default {
    name: "classify",
    components: {contentCard},
    computed: {
      classifyIndex: function () {
        return Number.parseInt(this.$route.params.classifyIndex)
      }
    },
  }
</script>

<style scoped>

</style>
