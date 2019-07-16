<template>
  <div v-if="$apollo.queries.articles.loading">
    loading...
    <!-- todo 加入载入动画-->
  </div>
  <div class="content-list" v-else>
    <card v-for="(item,index) in articles.articleList" :key="index" :article="item" :index="index"
          :color="colors[index%colors.length]"></card>

    <div class="page">
      <div class="page-num web-font-songti">
        Page {{articles.page.nowPage}} / {{articles.page.totalPages}}
      </div>
      <div class="page-btns right web-font-songti">
        <div class="page-btn my-inline-block hvr-underline-from-left" v-if="articles.page.nowPage>1"
             @click="page.page--">
          上一页
        </div>
        <div class="ml-2 page-btn my-inline-block hvr-underline-from-right"
             v-if="articles.page.nowPage<articles.page.totalPages" @click="page.page++">
          下一页
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import card from "./card";
  import {ARTICLE_LIST} from "../../graphql";


  export default {
    name: "contentCard",
    components: {card},
    apollo: {
      $loadingKey: 'loading',
      articles: {
        query: ARTICLE_LIST,
        variables() {
          return {
            page: this.page.page,
            classifyIndex: this.classifyIndex
          }
        },
        fetchPolicy: 'network-only'
      }
    },
    props: {
      classifyIndex: {default: -1}
    },
    data: function () {
      return {
        loading: 0,
        page: {page: 1},
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
        ]
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

  .page-btn {
    transition: 0.3s;
  }

  .page-btn:hover {
    cursor: pointer;
    color: #808B96;
  }

  .content-list {
    width: 100%;
    /*padding-top: 80px;*/
  }

</style>
