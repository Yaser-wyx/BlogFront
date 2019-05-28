<template>
  <div class="my-head">
    <toolbar></toolbar>
    <div class="mask">
      <div class="content">
        <div class="header-text web-font-ST font-1">
          Yaser的个人博客
        </div>
        <div class=" sub-text header-text web-font-ST mt-3">
          Learning, thinking and reading.
        </div>
        <div class="header-icon">
          <v-hover>
            <v-icon  slot-scope="{ hover }" :color="hover?'white':'rgba(255,255,255,0.7)'">iconfont blog-github</v-icon>
          </v-hover>
          <v-icon class="mx-4" color="rgba(255,255,255,0.7)">iconfont blog-email</v-icon>
          <v-icon color="rgba(255,255,255,0.7)">iconfont blog-qq</v-icon>
        </div>
      </div>
      <slot></slot>
    </div>
    <v-parallax src="/img/header/snow-mountain.jpg"></v-parallax>
  </div>


</template>

<script>
  import toolbar from './toolbar'

  export default {
    name: "headerMain",
    components: {
      toolbar
    }
  }
</script>

<style scoped>
  .my-head {
    width: 100%;
    height: 500px;
    position: relative;
  }

  .mask {
    position: absolute;
    background-color: rgba(86, 101, 115, 0.34);
    width: 100%;
    height: 500px;
    top: 0;
    z-index: 1;
  }

  .content {
    width: 100%;
    height: 100%;
    padding-top: 150px;
  }

  .font-1 {
    font-size: 55px;
  }

  .header-text {
    color: white;
    width: 100%;
    text-align: center;
  }

  .header-icon {
    width: 100%;
    text-align: center;
    margin-top: 20px;
  }

  .sub-text {
    letter-spacing: 4px;
  }
</style>
