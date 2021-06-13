import { MENU_QUERY } from '@queries';
import { clientQuery } from '@libs/apollo-client';
import { LOCALES } from '@models';

export const getMenu = (locale = LOCALES.EN) => {
  return clientQuery({
    query: MENU_QUERY(locale),
  }).then(({ data }) => data.getPagesHierarchy);
};
