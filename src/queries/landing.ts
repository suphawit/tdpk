import { gql } from '@apollo/client';

import { LOCALES } from '@models';

export const HOME_BANNER_QUERY = (locale = LOCALES.EN) => gql`
  query {
    getHomepageBanners(locale: ${locale}) {
      id
      contentType
      image
      title
      detail
      targetLabel
      target
      orientation
      createdAt
      updatedAt
    }
  }
`;

export const INTERCONNECTED_ECO_SYSTEM_QUERY = (locale = LOCALES.EN) => gql`
  query {
    getInterconnectedEcosystem(locale: ${locale}) {
      section01 {
        id
        contentType
        image
        createdAt
        updatedAt
      }
      section02 {
        id
        contentType
        title
        detail
        targetLabel
        target
        createdAt
        updatedAt
      }
      section03 {
        id
        contentType
        image
        createdAt
        updatedAt
      }
    }
  }
`;

export const TDPK_MEMBERSHIPS_QUERY = (locale = LOCALES.EN) => gql`
  query {
    getTdpkMembership(locale: ${locale}) {
      section01 {
        id
        contentType
        title
        detail
        createdAt
        updatedAt
      }
      section02 {
        id
        contentType
        image
        createdAt
        updatedAt
      }
      section03 {
        id
        contentType
        title
        createdAt
        updatedAt
      }
      section04 {
        id
        contentType
        title
        detail
        image
        createdAt
        updatedAt
      }
      section05 {
        id
        contentType
        targetLabel
        target
        createdAt
        updatedAt
      }
    }
  }
`;

export const HOME_PAGE_ARTICLES_QUERY = (locale = LOCALES.EN) => gql`
  query {
     getHomepageArticles(locale: ${locale}) {
       section01 {
         id
         contentType
         title
         detail
         targetLabel
         target
         createdAt
         updatedAt
       }
       articles {
         id
         title
         featuredImage
         featured
         excerpt
         content
         name
         slug
         postedAt
         featuredImage
         createdAt
         updatedAt,
         categories {
          id
          slug
          sort
          createdAt
          updatedAt
          title
          detail
         }
       }
     }
   }
`;
