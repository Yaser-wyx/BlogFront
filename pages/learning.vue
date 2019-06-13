<template>
  <div class="mb-5">
    <headerMain height="400" img="/img/header/star.jpg" need-slot>
      <div class="web-font-songti head-title">
        {{headTitle}}
      </div>
      <div class="web-font-kaiti head-subtext"> &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;{{headText}}</div>
      <div class="head-avatar2">
        <headerAvatar></headerAvatar>
      </div>
    </headerMain>
    <div class="classify">
      <div class="my-inline-block web-font-songti classify-title">分类：</div>
      <div class="my-inline-block ml-3" v-for="(item,index) in classifyCardConfig" :key="index">
        <classifyCard :need-blur="item.needBlur" @hover="hover" :is-select="index===nowSelect"
                      :img-src="item.imgSrc" :title="item.title" :index="index"></classifyCard>
      </div>
    </div>
    <div class="mt-4">
      <contentCard></contentCard>
    </div>
  </div>
</template>

<script>

  import headerMain from "../components/head/headerMain";
  import contentCard from "../components/content/contentList";
  import headerAvatar from "../components/head/headerAvatar";
  import classifyCard from "../components/content/classifyCard";

  export default {
    name: "learning",
    components: {headerMain, contentCard, headerAvatar, classifyCard},
    mounted() {

    },

    data: function () {
      return {
        headText: "古语云：“书山有路勤为径，学海无涯苦作舟”。对于这句的前半部分，我十分赞同，因为学习的确没有捷径可言，但对于后半句我并不十分认可，我认为学习不能一味地苦学，苦学是很难让人保持学习的积极性，相反我们应该从学习中找到乐趣，将书中的知识理解，弄明白应该是一件快乐的事情，所以乐学才是学习之道。",
        headTitle: "学海",
        nowSelect: 0,
        classifyCardConfig: [
          {
            needBlur: false,
            imgSrc: "/img/classifyCard/book.jpg",
            title: "读书笔记"
          },
          {
            needBlur: true,
            imgSrc: "/img/classifyCard/computer.jpg",
            title: "项目实践"
          },
          {
            needBlur: true,
            imgSrc: "/img/classifyCard/essay.jpg",
            title: "个人随笔"
          }]
      }
    },
    methods: {
      hover(index, value) {
        console.log(index, value)
        this.classifyCardConfig[index].needBlur = value
        console.log(this.classifyCardConfig[index])
        /*  let temp = this.$utils.clone(this.classifyCardConfig[index])
          temp.needBlur = value
          this.classifyCardConfig.splice(index, 1, temp)
          console.log(this.classifyCardConfig[index])*/
        // this.set(this.classifyCardConfig, index, temp)

      }
    }
  }
</script>
<style scoped>
  .head-title {
    width: 100%;
    color: white;
    font-size: 55px;
    text-align: center;
    margin-top: 70px;
  }

  .head-subtext {
    color: white;
    font-size: 20px;
    margin-top: 10px;
    padding-right: 150px;
    padding-left: 150px;
  }

  .classify {
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
    width: 135vh;
  }

  .head-avatar2 {
    position: absolute;
    bottom: -30px;
    right: 100px;
  }

  .classify-title {
    line-height: 90px;
    font-size: 40px;
  }
</style>
