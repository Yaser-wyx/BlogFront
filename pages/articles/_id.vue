<template>
  <div class="web-font-songti head-title" v-if="$apollo.queries.article.loading">
    loading...
    <!-- todo 加入载入动画-->
  </div>
  <div v-else>
    <headerMain height="400" need-slot img="/img/header/reading.jpg">
      <div class="web-font-songti head-title">
        {{article.title}}
      </div>
      <div class="head-avatar2">
        <headerAvatar></headerAvatar>
      </div>
    </headerMain>
    <!--    <articleToc :toc="toc"></articleToc>-->
    <div v-html="render" v-scroll="onScroll" id="render" class="mark-down web-font-pingfang-thin"></div>
    <div v-if="!$apollo.queries.articleNearby.loading" class="pre-next-div web-font-kaiti">
      <v-hover v-if="articleNearby.pre!==null">
        <div slot-scope="{ hover }" class="pre-next left"
             @click="goto(articleNearby.pre.id)">
          <v-icon :color="hover?'#2E4053':'#85929E'">iconfont blog-page-left</v-icon>
          <div class="my-inline-block">{{articleNearby.pre.title}}</div>
        </div>
      </v-hover>

      <v-hover v-if="articleNearby.next!==null">
        <div slot-scope="{ hover }" class="pre-next right"
             @click="goto(articleNearby.next.id)">
          <div class="my-inline-block">{{articleNearby.next.title}}</div>
          <v-icon :color="hover?'#2E4053':'#85929E'">iconfont blog-page-right</v-icon>
        </div>
      </v-hover>

    </div>
  </div>

</template>

<script>
  import {ARTICLE_BY_ID, ARTICLE_NEARBY} from "../../graphql";
  import headerMain from "../../components/head/headerMain";
  import headerAvatar from "../../components/head/headerAvatar";
  import {hash} from "../../utils";
  import articleToc from "../../components/article/articleToc";
  //todo 目录插件
  let marked = require('marked');
  let tocScroll = [];
  export default {
    name: "index",
    components: {headerMain, headerAvatar, articleToc},
    apollo: {
      $loadingKey: 'loading',
      article: {
        query: ARTICLE_BY_ID,
        variables() {
          return {
            articleId: this.$route.params.id
          }
        },
        fetchPolicy: 'network-only'
      },
      articleNearby: {
        query: ARTICLE_NEARBY,
        variables() {
          return {
            articleId: this.$route.params.id
          }
        }
      }
    },
    data: function () {
      return {
        loading: 0,
        render: "",
        tocIndex: 0,
        toc: [],
      }
    },
    watch: {
      article: function () {
        this.get()
      }
    },
    methods: {
      goto(articleId) {
        this.$router.push(`/articles/${articleId}`)
      },
      get() {
        // let lexer = marked.lexer(x)
        let toc = [];
        let render = new marked.Renderer();
        render.heading = (text, level) => {
          let id = hash(text);
          this.toc.push({text: text, level: level});
          let dom = `
          <h${level} id="${id}">
            <a  class="anchor" href="#${id}">
              <span class="header-link"></span>
            </a>
            ${text}
          </h${level}>`;
          toc.push(id);
          return dom;
        };
        this.render = marked(this.article.text, {renderer: render});

        toc.forEach(id => {
          setTimeout(() => {
            this.observeEl(id)
          }, 0)
        })
      },
      onScroll(e) {
        let index = 0;
        for (; index < tocScroll.length; index++) {
          if (tocScroll[index] > e.path[1].pageYOffset) {
            index--;
            break
          }
        }
        this.tocIndex = index < 0 ? 0 : index
      },
      observeEl(id) {
        let el = document.getElementById(id);
        tocScroll.push(el.offsetTop - 120)
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
    margin-top: 160px;
    font-weight: 600;
  }

  .head-avatar2 {
    position: absolute;
    bottom: -30px;
    left: 30vh;
  }

  .mark-down {
    width: 65%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 60px;
    color: #555;

  }

  .pre-next-div {
    width: 65%;
    margin-left: auto;
    margin-right: auto;
    /*color: #ccc;*/
  }

  .pre-next:hover {
    color: #2E4053 !important;
  }

  .pre-next {
    transition: linear 0.3s;
    color: #85929E !important;
    cursor: pointer;
  }

  .mark-down /deep/ p {
  }
</style>
