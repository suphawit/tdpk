import classNames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';

import { IArticleDetails } from '@models';
import { Container, ArticleCard } from '@components';

interface ArticleListProps {
  articles: IArticleDetails[];
  title?: string;
  extraClasses?: string;
  loadMore?();
  isLoadMore?: boolean;
}

const ArticleList = ({
  title,
  articles = [],
  extraClasses = '',
  loadMore = () => {},
  isLoadMore = false,
}: ArticleListProps) => {
  const { lang } = useTranslation();
  return (
    <Container extraClasses={extraClasses}>
      <h1 className="text-2xl font-extrabold mb-8">{title}</h1>
      <div className="grid gap-8 grid-cols-1 lg:grid-cols-3 lg:gap-10">
        {articles.map((article) => (
          <Link
            key={article.id}
            href={`/insights/articles/${article.id}/${article.slug}`}
            locale={lang}
          >
            <a>
              <ArticleCard
                title={article.title}
                imageUrl={article.featuredImage}
                category={(article.categories || [])
                  .map((c) => c.title)
                  .join(',')}
              />
            </a>
          </Link>
        ))}
      </div>
      <div
        onClick={() => loadMore()}
        className={classNames(
          { hidden: !isLoadMore },
          'cursor-pointer block bg-mid-gray w-max mt-8 px-4 py-3 font-bold'
        )}
      >
        Load More
      </div>
    </Container>
  );
};

export default ArticleList;
