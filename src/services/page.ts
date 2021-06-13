import { clientQuery } from '@libs/apollo-client';
import { PAGE_QUERY, PAGE_LIST_QUERY } from '@queries';
import { IPageListRequest, LOCALES } from '@models';

export async function getPageInfo(page, locale = LOCALES.EN) {
  const result = await clientQuery({
    query: PAGE_QUERY(page, locale),
  });
  return result.data.getPage;
}

export async function getPageList(
  { term = '', offset = 0 }: Partial<IPageListRequest>,
  locale = LOCALES.EN
) {
  const result = await clientQuery({
    query: PAGE_LIST_QUERY({ term, offset }, locale),
  });
  return result.data.getPages;
}
