import { IArticleListRequest, LOCALES } from '@models';
import { gql } from '@apollo/client';

export const NEWS_AND_PROMOTIONS_LIST = (
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
        ${tagId ? `tag: ${tagId},` : ''}
        pressRelease: true
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
