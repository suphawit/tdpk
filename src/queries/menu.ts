import { LOCALES } from '@models';
import { gql } from '@apollo/client';

export const MENU_QUERY = (locale = LOCALES.EN) => gql`
  query {
    getPagesHierarchy(locale: ${locale}) {
      id
      title
      slug
      linkTargetBlank
      subPages {
        id
        title
        slug
        linkTargetBlank
        subPages {
          id
          title
          slug
          linkTargetBlank
        }
      }
    }
  }
`;
