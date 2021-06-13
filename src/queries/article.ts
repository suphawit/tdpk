import { IArticleListRequest, LOCALES } from '@models';
import { gql } from '@apollo/client';

export const ARTICLE_DETAILS_BY_ID = (id: number, locale = LOCALES.EN) => gql`
  query {
   getArticle(id: ${id} locale: ${locale}) {
     id
     title
     featuredImage
     excerpt
     featured
     content
     name
     postedAt
     createdAt
     updatedAt
     categories {
        id
        slug
        sort
        createdAt
        updatedAt
        title
        detail
     }
     tags {
        id
        slug
        sort
        createdAt
        updatedAt
        title
        detail
     }
     suggestedArticles {
       id
       title
       name
       slug
       featuredImage
       categories {
         title
       }
     }
   }
 }
`;

export const ARTICLE_LIST = (
  {
    featured = true,
    categoryId = '',
    tagId = '',
    term = '',
    offset = 0,
  }: IArticleListRequest,
  locale = LOCALES.EN
) => gql`
  query {
    getArticles(
      filters: {
        term: "${term}",
        featured: ${featured},
        ${categoryId ? `category: ${categoryId},` : ''}
        ${tagId ? `tag: ${tagId}` : ''}
      },
      sort: {term: posted_at, dir: desc},
      locale: ${locale},
      limit: 200,
      offset: ${offset}
    ) {
     total
     edges {
       id
       title
       featuredImage
       excerpt
       featured
       content
       name
       slug
       postedAt
       createdAt
       updatedAt
       categories {
        id
        slug
        sort
        createdAt
        updatedAt
        title
        detail
      }
      tags {
        id
        slug
        sort
        createdAt
        updatedAt
        title
        detail
      }
     }
     pageInfo {
       perPage
       hasPrevPage
       hasNextPage
     }
   }
 }
`;

export const ARTICLE_CATEGORIES = (term = '', locale = LOCALES.EN) => gql`
  query {
    getCategories(
      filters: { ${term ? `term: "${term},"` : ''} active: true }
      sort: { term: articles_count, dir: desc }
      locale: ${locale}
    ) {
      total
      edges {
        id
        slug
        sort
        createdAt
        updatedAt
        title
        detail
        articlesCount
      }
      pageInfo {
        perPage
        hasPrevPage
        hasNextPage
      }
    }
  }
`;

export const ARTICLE_TAGS = (term = '', locale = LOCALES.EN) => gql`
  query {
    getTags(
      filters:{
        term: "${term}",
        active: true
      }
      sort:{
        term: articles_count,
        dir: desc
      }
      locale: ${locale}
    ) {
      total
      edges {
        id
        slug
        sort
        createdAt
        updatedAt
        title
        detail
        titleTh
        titleEn
        detailTh
        detailEn
        articlesCount
      }
      pageInfo {
        perPage
        hasPrevPage
        hasNextPage
      }
    
    }
  }
`;
