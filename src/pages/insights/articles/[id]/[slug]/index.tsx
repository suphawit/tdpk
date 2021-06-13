import { GetServerSideProps } from 'next';

import { getArticleById } from '@services';
import { IArticleDetails, LOCALES } from '@models';
import {
  ArticleList,
  Details,
  ContactForSpaces,
  GoogleMap,
  SharedHead,
} from '@components';

interface ArticleDetailsProps {
  article: IArticleDetails;
}

const ArticleDetails = ({ article }: ArticleDetailsProps) => {
  return (
    <>
      <SharedHead title={article.title} metaDescription={article.title} />
      <Details article={article} />
      <ArticleList
        extraClasses="lg:py-10 lg:pb-30"
        articles={article.suggestedArticles}
        title="You May Like"
        isLoadMore={false}
      />
      <ContactForSpaces />
      <GoogleMap />
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
