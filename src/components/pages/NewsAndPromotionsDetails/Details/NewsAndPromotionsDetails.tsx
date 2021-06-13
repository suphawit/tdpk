import useTranslation from 'next-translate/useTranslation';

import { IArticleDetails } from '@models';
import { Breadcrumb } from '@components/common';
import ArticleDetailsHeader from './ArticleDetailsHeader';
import ArticleDetailsContent from './ArticleDetailsContent';

interface DetailsProps {
  article: IArticleDetails;
}

const Details = ({ article }: DetailsProps) => {
  const { t } = useTranslation('common');

  return (
    <>
      <Breadcrumb
        breadcrumbArray={[
          {
            name: 'News and Promotions',
            pathName: `/insights/news-and-promotions`,
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
