import * as React from 'react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';

import { IArticleDetails, LOCALES, PagingResponse } from '@models';
import { getArticleList } from '@services';
import {
  ArticleCategoryDetails,
  Breadcrumb,
  ContactForSpaces,
  GoogleMap,
  SeoContentArticles,
  SharedHead,
} from '@components';

interface ArticleResultsProps {
  articlesCategoryList: PagingResponse<IArticleDetails>;
}

const NUM_OF_LIMIT = 10;

const ArticleResults = ({
  articlesCategoryList: { edges = [] },
}: ArticleResultsProps) => {
  const [articles, setArticles] = React.useState<IArticleDetails[]>(edges);
  const categoryName = articles[0]?.categories[0]?.title;
  const category = articles[0]?.categories[0]?.id;
  const {
    query: { categoryId = '' },
    locale,
  } = useRouter();
  const { t } = useTranslation('common');

  const onLoadMore = () => {
    getArticleList(
      {
        categoryId: categoryId.toString(),
        offset: articles.length - 1,
      },
      locale as LOCALES
    ).then(({ edges: newArticles = [] }) => {
      setArticles([...articles, ...newArticles]);
    });
  };

  return (
    <>
      <SharedHead
        title={`${categoryName} Articles`}
        metaDescription={`TDPK ${categoryName} Articles`}
      />
      <Breadcrumb
        breadcrumbArray={[
          { name: t('article.other'), pathName: '/insights/articles' },
          {
            name: `${categoryName}`,
            pathName: `/insights/articles/results/?categoryId=${category}`,
          },
        ]}
      />
      <ArticleCategoryDetails items={articles} />
      {articles.length > NUM_OF_LIMIT && (
        <div className="text-center my-10">
          {/* <button
            className="bg-mid-gray text-lg font-bold px-8 py-3"
            onClick={onLoadMore}
          >
            Load more
          </button> */}
        </div>
      )}
      <SeoContentArticles />
      <ContactForSpaces />
      <GoogleMap />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { locale, query } = context;
  const { categoryId = '' } = query;
  const articlesCategoryList = await getArticleList(
    {
      featured: false,
      categoryId: categoryId.toString(),
    },
    locale as LOCALES
  );

  return {
    props: {
      articlesCategoryList,
    },
  };
};

export default ArticleResults;
