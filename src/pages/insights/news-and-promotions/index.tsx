import { GetServerSideProps } from 'next';
import useTranslation from 'next-translate/useTranslation';

import { getNewsAndPromotionsList } from '@services';
import { IArticleDetails, LOCALES, PagingResponse } from '@models';
import { SharedHead, Breadcrumb, NewsAndPromotionsHomepage } from '@components';

interface NewsAndPromotionsProps {
  newsAndPromotions: PagingResponse<IArticleDetails>;
}

const NewsAndPromotions = ({ newsAndPromotions }: NewsAndPromotionsProps) => {
  const { t } = useTranslation('common');

  return (
    <>
      <SharedHead
        title="News And Promotions"
        metaDescription="TDPK News and Promotions"
      />
      <Breadcrumb
        breadcrumbArray={[
          {
            name: t('newsAndPromotions.other'),
            pathName: '/insights/news-and-promotion',
          },
        ]}
      />
      <NewsAndPromotionsHomepage newsAndPromotions={newsAndPromotions} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { locale } = context;
  const newsAndPromotions = await getNewsAndPromotionsList(
    {
      featured: false,
    },
    locale as LOCALES
  );

  return {
    props: {
      newsAndPromotions,
    },
  };
};

export default NewsAndPromotions;
