<template>
  <div class="toolbar" id="toolbar">
    <div class="back-mask" id="mask">
    </div>
    <div class="content">
      <div v-for="(item,index) in toolbar" @click="change(index)" :key="index" :id="index"
           class="hvr-underline-from-center mx-4 my-item">
        <v-icon size="20" color="white">{{item.icon}}</v-icon>
        <span class="item-text web-font-songti ml-2">{{item.text}}</span>
      </div>
    </div>
    <div class="right"></div>
  </div>
</template>

<script>
  export default {
    name: "toolbar",
    mounted() {
      const path = this.$route.path
      this.toolbar.forEach((item, index) => {
        if (item.to === path) {
          this.change(index)
          return;
        }
      })
    },
    methods: {
      change(index) {
        let el = document.getElementById(index)
        let mask = document.getElementById("mask")
        const width = el.offsetWidth + 32
        const left = el.offsetLeft - 16
        this.$velocity(mask, {width: width, left: left}, [0.17, 0.67, 0.83, 0.67], {duration: 500})
        this.$router.push(this.toolbar[index].to)
      }
    },
    data: function () {
      return {
        toolbar: [
          {icon: 'iconfont blog-home', text: "首页", to: '/'},
          {icon: 'iconfont blog-learning', text: "学海", to: '/learning/0'},
          {icon: 'iconfont blog-media', text: "影音", to: '/entertainment'},
          {icon: 'iconfont blog-file', text: "归档", to: '/file'},
        ]
      }
    }
  }
</script>

<style scoped>
  .toolbar {
    height: 55px;
    width: 100%;
    color: white;
    background-color: rgba(44, 62, 80, 0.5);
    padding-top: 12px;
    position: fixed;
    z-index: 5;
  }

  .my-item {
    display: inline-block;
  }

  .content {
    margin-left: 30vh;
  }

  .back-mask {
    position: absolute;
    background-color: rgba(178, 186, 187, .35);
    height: 35px;
    border-radius: 5px;
    top: 8px;
    width: 96px;
    left: 30vh;
  }

  .item-text {
    font-size: 16px;
  }

  .my-item:hover {
    cursor: pointer;
  }
</style>
