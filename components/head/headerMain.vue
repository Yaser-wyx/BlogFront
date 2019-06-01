<template>
  <div class="my-head">
    <div class="mask">

      <div class="content" v-if="!needSlot">
        <div class="header-text web-font-songti font-1">
          Yaser的个人博客
        </div>
        <div class=" sub-text header-text web-font-songti mt-3">
          Learning, thinking and reading.
        </div>
        <div class="header-icon">
          <v-hover v-for="(item,index) in icons" :key="index">
            <v-icon :class="{'mx-4':index===1}" slot-scope="{ hover }" :color="hover?'white':'rgba(255,255,255,0.7)'">
              iconfont {{item}}
            </v-icon>
          </v-hover>
        </div>
        <div class="head-avatar">
          <headerAvatar></headerAvatar>
        </div>
      </div>
      <slot v-else></slot>
    </div>
    <v-parallax :src="img"></v-parallax>
  </div>


</template>

<script>
  import headerAvatar from "./headerAvatar";

  export default {
    name: "headerMain",
    props: {
      img: {type: String},
      needSlot: {type: Boolean, default: false}
    },
    components: {
      headerAvatar,
    },
    data: function () {
      return {
        icons: ['blog-github', 'blog-email', 'blog-qq']
      }
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

  .head-avatar {
    margin-left: 20vh;
    margin-top: 50px;
  }
</style>
