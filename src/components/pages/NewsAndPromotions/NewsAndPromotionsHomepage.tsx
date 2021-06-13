import * as React from 'react';

import { IArticleDetails, PagingResponse } from '@models';
import { useCheckBreakpointValues } from '@hooks';
import { NewsAndPromotionsList } from '@components';

interface NewsAndPromotionsHomepageProps {
  newsAndPromotions: PagingResponse<IArticleDetails>;
}

const NewsAndPromotionsHomepage = ({
  newsAndPromotions: { edges = [] },
}: NewsAndPromotionsHomepageProps) => {
  const { isMd } = useCheckBreakpointValues();

  const articles = React.useMemo(() => {
    return !isMd ? edges : edges.slice(0, 5);
  }, [isMd]);

  return (
    <NewsAndPromotionsList
      title={'News and Promotions'}
      articles={articles}
      extraClasses="lg:py-10"
    />
  );
};

export default NewsAndPromotionsHomepage;
