import { GetServerSideProps } from 'next';

import { getArticleById } from '@services';
import { IArticleDetails, LOCALES } from '@models';
import {
  NewsAndPromotionsList,
  NewsAndPromotionsDetails,
  SharedHead,
} from '@components';

interface ArticleDetailsProps {
  article: IArticleDetails;
}

const ArticleDetails = ({ article }: ArticleDetailsProps) => {
  return (
    <>
      <SharedHead title={article.title} metaDescription={article.title} />
      <NewsAndPromotionsDetails article={article} />
      <NewsAndPromotionsList
        extraClasses="lg:pt-0 lg:pb-14"
        articles={article.suggestedArticles}
        title="You May Like"
        isLoadMore={false}
      />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { locale, query } = context;

  const article = await getArticleById(Number(query.id), locale as LOCALES);

  return {
    props: {
      article,
    },
  };
};

export default ArticleDetails;
