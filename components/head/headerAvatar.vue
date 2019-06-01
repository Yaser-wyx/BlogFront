<template>
  <div class="header-avatar">
    <img src="/img/header/avatar.jpg" width="170" height="170" alt="">
  </div>
</template>

<script>
  export default {
    name: "headerAvatar"
  }
</script>

<style scoped>
  .header-avatar {
    width: 180px;
    height: 180px;
    padding: 5px;
    border-radius: 10px;
    background-color: white;
    box-shadow: 0 5px 25px 0 #AAAAAA;
  }
  .header-avatar img{
    border-radius: 10px;
  }
</style>
