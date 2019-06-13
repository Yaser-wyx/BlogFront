<template>
  <div class="my-card">
    <div class="background" :class="{'blur':needBlur}" :style="{'background-image':'url('+imgSrc+')'}"></div>
    <div class="mask web-font-kaiti" @mouseenter="hover(false)" @mouseleave="hover(true)">{{title}}</div>
  </div>
</template>

<script>
  export default {
    name: "classifyCard",
    props: {
      needBlur: {
        type: Boolean,
        default: true
      },
      imgSrc: {
        type: String,
      },
      title: {
        type: String,
      },
      index: {
        type: Number
      },
      isSelect:{
        type: Boolean,
        default: false
      }
    },
    methods: {
      hover(needBlur) {
        if (!this.isSelect) {
          this.$emit("hover", this.index, needBlur)
        }
      }
    },
    data: function () {
      return {}
    }
  }
</script>

<style scoped>
  .my-card {
    height: 90px;
    width: 150px;
    border-radius: 5px;
    position: relative;
    overflow: hidden;
    display: inline-block;
  }

  .blur {
    filter: blur(2px);
  }

  .background {
    position: absolute;
    height: 90px;
    width: 150px;
    border-radius: 5px;
    background-size: cover;
    transition: 0.5s;
  }

  .mask {
    position: absolute;
    height: 90px;
    width: 150px;
    border-radius: 5px;
    background-color: rgba(178, 186, 187, 0.4);
    color: white;
    text-align: center;
    line-height: 90px;
    font-size: 22px;
    cursor: pointer;
  }
</style>
