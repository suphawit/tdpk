import { IPageListRequest, LOCALES } from '@models';
import { gql } from '@apollo/client';

export const PAGE_QUERY = (page, locale = LOCALES.EN) => gql`
  query {
    getPage(
      locale: ${locale},
      slug: "${page}"
    ){
      id
      title
      detail
      titleTh
      detailTh
      titleEn
      detailEn
      keywords
      ready
      slug
      createdAt
      updatedAt
      layout
      layoutContents {
        contentType
        section
        type
        contents {
          id
          mainContent
          title
          titleTh
          titleEn
          subtitle
          subtitleTh
          subtitleEn
          detail
          detailTh
          detailEn
          target
          image
          subimages
          theme
          color
          embedVideo
          rendered
          createdAt
          updatedAt
          subdata {
            refId
            title
            titleTh
            titleEn
            subtitle
            subtitleTh
            subtitleEn
            detail
            detailTh
            detailEn
            jsonData
            target
            image
            dataType
            required
            choices {
              en
              th
            }
          }
        }
      }
      parentPage{
        id
        title
        detail
        titleTh
        detailTh
        titleEn
        detailEn
        keywords
        ready
        slug
      }
      subPages {
        id
        title
        detail
        titleTh
        detailTh
        titleEn
        detailEn
        keywords
        ready
        slug
      }
    }
  }`;

export const PAGE_LIST_QUERY = (
  { term = '', offset = 0 }: IPageListRequest,
  locale = LOCALES.EN
) => gql`
  query {
    getPages(
      locale: ${locale},
      filters: {
        term: "${term}",
      },
      sort: {
        term: created_at,
        dir:  desc,
      },
      limit:  200,
      offset: ${offset}
    ){
      total
      edges {
        id
        title
        detail
        titleTh
        detailTh
        titleEn
        detailEn
        keywords
        ready
        slug
        linkTargetBlank
        parentSlugs
        createdAt
        updatedAt
      }
      pageInfo {
        perPage
        hasPrevPage
        hasNextPage
      }
    }
  }
`;
