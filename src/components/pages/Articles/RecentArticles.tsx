import * as React from 'react';

import { IArticleDetails, PagingResponse } from '@models';
import { ArticleList } from '@components';

interface RecentArticlesProps {
  recentArticles: PagingResponse<IArticleDetails>;
}

const RecentArticles = ({
  recentArticles: { edges = [] },
}: RecentArticlesProps) => {
  const [showedArticle, setShowedArticle] = React.useState<number>(5);
  const articles = edges.slice(0, showedArticle);
  return (
    <ArticleList
      title={'Recent articles'}
      articles={articles}
      extraClasses="lg:py-10"
      loadMore={() => setShowedArticle(showedArticle + 5)}
      isLoadMore={articles.length < edges.length}
    />
  );
};

export default RecentArticles;
