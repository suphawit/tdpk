import { IArticleDetails, PagingResponse } from '@models';
import MainFeatureArticle from './MainFeatureArticle';
import FeatureArticle from './FeatureArticle';
import { Container } from '@components/common';

interface FeatureArticlesProps {
  featuredArticles: PagingResponse<IArticleDetails>;
}

const FeaturedArticles = ({
  featuredArticles: { edges = [] },
}: FeatureArticlesProps) => {
  const [mainArticle, ...restArticles] = edges;
  return (
    <Container extraClasses="lg:py-10">
      <h1 className="text-2xl font-extrabold mb-8">Featured Articles</h1>
      <div className="grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <MainFeatureArticle article={mainArticle} />
        </div>
        <div className="space-y-7 lg:space-y-4 lg:col-span-5">
          {restArticles.map((article, index) => (
            <FeatureArticle key={index} article={article} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default FeaturedArticles;
