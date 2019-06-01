<template>
  <div class="content-list">
    <card v-for="(item,index) in card" :key="index" :card="item" :index="index"
          :color="colors[index%colors.length]"></card>
    <div class="page">
      <div class="page-num web-font-songti">
        Page {{pages.page}} / {{pages.total}}
      </div>
      <div class="page-btns right web-font-songti">
        <div class="page-btn my-inline-block hvr-underline-from-left" v-if="pages.page>1">
          <v-icon>iconfont blog-page-left</v-icon>
          上一页
        </div>
        <div class="ml-2 page-btn my-inline-block hvr-underline-from-right" v-if="pages.page<pages.total">
          下一页
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import card from "./card";

  export default {
    name: "contentCard",
    components: {card},
    data: function () {
      return {
        pages: {
          total: 5,
          page: 1
        },
        colors: [
          {
            circleColor: '#FE6061',
            lineColor: 'rgba(254, 96, 97, 0.15)'
          },
          {
            circleColor: '#D2A9FC',
            lineColor: 'rgba(210, 169, 252, 0.15)'
          },
          {
            circleColor: '#F8D86B',
            lineColor: 'rgba(248, 216, 107, 0.15)'
          },
          {
            circleColor: '#74CEE7',
            lineColor: 'rgba(116, 206, 231, 0.15)'
          }
        ],
        card: [{
          title: 'CSAPP第一章 数据表示',
          text: '曾经的《深入理解计算机系统》课程笔记重新启航出发，更清晰的知识结构，更细致的概念分析，更紧密的课程关联。从文字到图片完全原创，希望能给大家不一样的阅读体验。曾经的《深入理解计算机系统》课程笔记重新启航出发，更清晰的知识结构，更细致的概念分析，更紧密的课程关联。从文字到图片完全原创，希望能给大家不一样的...',
          createdAt: '2019-05-25',
          updateAt: '2019-05-25',
          classifyAt: '读书笔记',
          words: 345,

        },
          {
            title: 'CSAPP第一章 数据表示',
            text: '曾经的《深入理解计算机系统》课程笔记重新启航出发，更清晰的知识结构，更细致的概念分析，更紧密的课程关联。从文字到图片完全原创，希望能给大家不一样的阅读体验。曾经的《深入理解计算机系统》课程笔记重新启航出发，更清晰的知识结构，更细致的概念分析，更紧密的课程关联。从文字到图片完全原创，希望能给大家不一样的...',
            createdAt: '2019-05-25',
            updateAt: '2019-05-25',
            classifyAt: '读书笔记',
            words: 345,
          },
          {
            title: 'CSAPP第一章 数据表示',
            text: '曾经的《深入理解计算机系统》课程笔记重新启航出发，更清晰的知识结构，更细致的概念分析，更紧密的课程关联。从文字到图片完全原创，希望能给大家不一样的阅读体验。曾经的《深入理解计算机系统》课程笔记重新启航出发，更清晰的知识结构，更细致的概念分析，更紧密的课程关联。从文字到图片完全原创，希望能给大家不一样的...',
            createdAt: '2019-05-25',
            updateAt: '2019-05-25',
            classifyAt: '读书笔记',
            words: 345
          },
          {
            title: 'CSAPP第一章 数据表示',
            text: '曾经的《深入理解计算机系统》课程笔记重新启航出发，更清晰的知识结构，更细致的概念分析，更紧密的课程关联。从文字到图片完全原创，希望能给大家不一样的阅读体验。曾经的《深入理解计算机系统》课程笔记重新启航出发，更清晰的知识结构，更细致的概念分析，更紧密的课程关联。从文字到图片完全原创，希望能给大家不一样的...',
            createdAt: '2019-05-25',
            updateAt: '2019-05-25',
            classifyAt: '读书笔记',
            words: 345
          }]
      }

    }
  }
</script>

<style scoped>
  .page {
    width: 135vh;
    margin-right: auto;
    margin-left: auto;
    padding: 0 25px;
    color: #B2BABB;
  }

  .page-num {
    font-size: 22px;
    text-align: center;
  }

  .page-btn{
    transition: 0.3s;
  }
  .page-btn:hover {
    cursor: pointer;
    color: #808B96;
  }

  .content-list {
    width: 100%;
    padding-top: 80px;
  }

</style>
