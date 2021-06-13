import classNames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';

import { IArticleDetails } from '@models';
import { Container, NewsAndPromotionsCard } from '@components';

interface NewsAndPromotionsListProps {
  articles: IArticleDetails[];
  title?: string;
  extraClasses?: string;
  isLoadMore?: boolean;
}

const NewsAndPromotionsList = ({
  title,
  articles = [],
  extraClasses = '',
  isLoadMore = false,
}: NewsAndPromotionsListProps) => {
  const { lang } = useTranslation();
  return (
    <Container extraClasses={extraClasses}>
      <h1 className="text-2xl font-extrabold mb-8">{title}</h1>
      <div className="grid gap-8 grid-cols-1 lg:grid-cols-3 lg:gap-10">
        {articles.map((article) => (
          <Link
            key={article.id}
            href={`/insights/news-and-promotions/${article.id}/${article.slug}`}
            locale={lang}
          >
            <a>
              <NewsAndPromotionsCard
                title={article.title}
                imageUrl={article.featuredImage}
              />
            </a>
          </Link>
        ))}
      </div>
      <div
        className={classNames(
          { hidden: !isLoadMore },
          ' block bg-mid-gray w-max mt-8 px-4 py-3 font-bold'
        )}
      >
        Load More
      </div>
    </Container>
  );
};

export default NewsAndPromotionsList;
