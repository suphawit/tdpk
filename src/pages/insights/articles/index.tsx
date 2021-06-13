import { GetServerSideProps } from 'next';
import useTranslation from 'next-translate/useTranslation';

import { getArticleCategoriesServer, getArticleList } from '@services';
import {
  IArticleCategory,
  IArticleDetails,
  LOCALES,
  PagingResponse,
} from '@models';
import {
  Breadcrumb,
  BrowseArticles,
  FeaturedArticles,
  RecentArticles,
  ContactForSpaces,
  GoogleMap,
  SeoContentArticles,
  SharedHead,
} from '@components';

interface ArticlesProps {
  featuredArticles: PagingResponse<IArticleDetails>;
  recentArticles: PagingResponse<IArticleDetails>;
  articleCategories: PagingResponse<IArticleCategory>;
}

const Articles = ({
  featuredArticles,
  recentArticles,
  articleCategories,
}: ArticlesProps) => {
  const { t } = useTranslation('common');

  return (
    <>
      <SharedHead title="Articles" metaDescription="TDPK Articles" />
      <Breadcrumb
        breadcrumbArray={[
          { name: t('article.other'), pathName: '/insights/articles' },
        ]}
      />
      <FeaturedArticles featuredArticles={featuredArticles} />
      <BrowseArticles articleCategories={articleCategories} />
      <RecentArticles recentArticles={recentArticles} />
      <SeoContentArticles />
      <ContactForSpaces />
      <GoogleMap />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { locale } = context;
  const featuredArticles = await getArticleList(
    {
      featured: true,
    },
    locale as LOCALES
  );
  const recentArticles = await getArticleList(
    {
      featured: false,
    },
    locale as LOCALES
  );
  const articleCategories = await getArticleCategoriesServer(locale as LOCALES);

  return {
    props: {
      featuredArticles,
      recentArticles,
      articleCategories,
    },
  };
};

export default Articles;
