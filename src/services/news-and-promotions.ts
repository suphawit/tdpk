import { clientQuery } from '@libs/apollo-client';
import { NEWS_AND_PROMOTIONS_LIST } from '@queries';
import {
  IArticleDetails,
  IArticleListRequest,
  LOCALES,
  PagingResponse,
} from '@models';

export async function getNewsAndPromotionsList(
  {
    featured = true,
    categoryId = '',
    tagId = '',
    term = '',
    offset = 0,
  }: Partial<IArticleListRequest>,
  locale = LOCALES.EN
): Promise<PagingResponse<IArticleDetails>> {
  const result = await clientQuery({
    query: NEWS_AND_PROMOTIONS_LIST(
      { tagId, categoryId, term, featured, offset },
      locale
    ),
  });
  return result.data.getArticles;
}
