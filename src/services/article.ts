import { clientQuery } from '@libs/apollo-client';
import {
  ARTICLE_CATEGORIES,
  ARTICLE_DETAILS_BY_ID,
  ARTICLE_LIST,
  HOME_PAGE_ARTICLES_QUERY,
} from '@queries';
import {
  IArticleCategory,
  IArticleDetails,
  IArticleListRequest,
  IHomePageArticleResponse,
  LOCALES,
  PagingResponse,
} from '@models';

export function getHomepageArticles(
  locale = LOCALES.EN
): Promise<IHomePageArticleResponse> {
  return clientQuery({
      query: HOME_PAGE_ARTICLES_QUERY(locale),
    })
    .then(({ data }) => data.getHomepageArticles);
}

export async function getArticleById(
  id: number,
  locale = LOCALES.EN
): Promise<IArticleDetails> {
  const result = await clientQuery({
    query: ARTICLE_DETAILS_BY_ID(id, locale),
  });
  return result.data.getArticle;
}

export async function getArticleList(
  {
    featured = true,
    categoryId = '',
    tagId = '',
    term = '',
    offset = 0
  }: Partial<IArticleListRequest>,
  locale = LOCALES.EN
): Promise<PagingResponse<IArticleDetails>> {
  const result = await clientQuery({
    query: ARTICLE_LIST({ tagId, categoryId, term, featured, offset }, locale),
  });
  return result.data.getArticles;
}

export async function getArticleCategoriesServer(
  locale = LOCALES.EN,
  term = ''
): Promise<PagingResponse<IArticleCategory>> {
  const result = await clientQuery({
    query: ARTICLE_CATEGORIES(term, locale),
  });
  return result.data.getCategories;
}
