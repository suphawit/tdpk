import useTranslation from 'next-translate/useTranslation';

import { IArticleDetails } from '@models';
import { Breadcrumb } from '@components/common';
import ArticleDetailsHeader from './ArticleDetailsHeader';
import ArticleDetailsContent from './ArticleDetailsContent';

interface DetailsProps {
  article: IArticleDetails;
}

const Details = ({ article }: DetailsProps) => {
  const categoryName = article?.categories[0]?.title;
  const categoryId = article?.categories[0]?.id;
  const { t } = useTranslation('common');

  return (
    <>
      <Breadcrumb
        breadcrumbArray={[
          { name: t('article.other'), pathName: '/insights/articles' },
          {
            name: `${categoryName}`,
            pathName: `/insights/articles/results/?categoryId=${categoryId}`,
          },
        ]}
      />
      <ArticleDetailsHeader
        title={article.title}
        category={(article.categories || []).map((c) => c.title).join(', ')}
        date={article.postedAt}
      />
      <ArticleDetailsContent article={article} />
    </>
  );
};

export default Details;
