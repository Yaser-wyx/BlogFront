import gql from 'graphql-tag'

export const ARTICLE_LIST = gql`
  query getArticleList($page: Int!,$classifyIndex:Int!){
      articles(page:{page:$page},classifyIndex:$classifyIndex){
        page{
          nowPage
          total
          totalPages
        }
        articleList{
          id
          classify
          createdAt
          updatedAt
          title
          summary
          words
          views
        }
      }
    }
  `;

export const ARTICLE_BY_ID = gql`
    query article($articleId: String!){
      article(articleId:$articleId){
        id
        classify
        text
        title
        summary
        words
        views
        createdAt
        updatedAt
      }
    }
  `;
export const ARTICLE_NEARBY = gql`
    query articleNearby($articleId: String!){
      articleNearby(articleId:$articleId){
        pre{
          id
          title
        }
        next{
          id
          title
        }
      }
    }
  `;
