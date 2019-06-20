<template>
  <div>
    <div v-for="(item,index) in toc" :key="index">{{item.text}}</div>
  </div>
</template>

<script>
  export default {
    name: "articleToc",
    props: {
      toc: {type: Array}
    }
  }
</script>

<style scoped>

</style>
