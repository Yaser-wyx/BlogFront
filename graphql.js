import gql from 'graphql-tag'

export const ARTICLE_LIST=gql`
  query getArticleList($page: Int!){
      articles(page:{page:$page}){
        page{
          nowPage
          total
          totalPages
        }
        articleList{
          id
          type
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
