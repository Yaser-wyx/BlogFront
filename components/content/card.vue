<template>
  <div class="card mb-5">
    <div class="card-left my-inline-block">
      <div class="card-index-circle web-font-songti"
           :style="{'background-color':color.circleColor}">
        {{index+1<10?'0':''}}{{index+1}}
      </div>
      <div class="card-index-line mt-3" :style="{'background-color':color.lineColor}"></div>
    </div>
    <div class="ml-5 card-right my-inline-block">
      <div class="card-title web-font-heiti">{{article.title}}</div>
      <div class="card-msg mt-2 web-font-heiti">
        <div class="my-inline-block">
          <v-icon size="16">iconfont blog-date</v-icon>
          发表于:<U class="ml-2">{{article.createdAt}}</U></div>
        <div class="my-inline-block ml-4">
          <v-icon size="16">iconfont blog-update</v-icon>
          更新于:<U class="ml-2">{{article.updatedAt}}</U></div>
        <div class="my-inline-block ml-4">
          <v-icon size="16">iconfont blog-folder</v-icon>
          分类于:<U class="ml-2">{{article.classify}}</U></div>
        <div class="my-inline-block ml-4">
          <v-icon size="16">iconfont blog-letter</v-icon>
          本文字数:<span class="ml-2">{{article.words}}</span></div>
      </div>
      <div class="card-text web-font-kaiti">
        <p>{{article.summary}}</p>
      </div>
      <div class="card-read-more web-font-heiti">
        <span class="hvr-underline-from-left" @click="read">阅读全文 ></span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "card",
    props: {
      article: {type: Object},
      color: {type: Object},
      index: {type: Number}
    },
    methods:{
      read(){
        this.$router.push(`/articles/${this.article.id}`)
      }
    }
  }
</script>

<style scoped>

  .card {
    width: 135vh;
    margin-right: auto;
    height: 250px;
    margin-left: auto;
  }

  .card-title {
    font-size: 24px;
    font-weight: 600;
    color: #555555;
  }

  .card-read-more {
    float: right;
    text-align: right;
    color: #99A3A4;
    font-size: 14px;
    margin-top: 10px;
  }

  .card-read-more:hover {
    cursor: pointer;
  }

  .card-left {
    width: 100px;
    height: 100%;
    text-align: center;
  }

  .card-msg {
    font-size: 13px;
    color: #99A3A4;
  }

  .card-right {
    transition: 0.3s;
    width: calc(135vh - 170px);
    height: 250px;
    background-color: white;
    border-radius: 5px;
    border: rgba(156, 202, 183, 0.27) 1px solid;
    box-shadow: 0 0 9px 0 rgba(156, 202, 183, 0.27);
    padding: 25px 25px 10px;

  }

  .card-index-circle {
    width: 100px;
    height: 100px;
    border-radius: 100px;
    line-height: 100px;
    text-align: center;
    color: white;
    font-size: 50px;
  }

  .card-text p {
    overflow: hidden;
    line-height: 25px;
    max-height: 75px;
    letter-spacing: 4px;
  }

  .card-text {
    font-size: 18px;
    color: #747E80;
    padding-top: 15px;
    position: relative;

  }

  .card-index-line {
    margin-top: 5px;
    width: 3px;
    height: calc(100% - 120px);
    margin-left: auto;
    margin-right: auto;
  }

  .card-right:hover {
    box-shadow: 0 0 30px 1px rgba(156, 202, 183, 0.35);
  }
</style>
