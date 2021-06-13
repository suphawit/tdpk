import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';

import { HomepageArticleItem } from '@models';
import { ItemCard } from '@components/common';

interface ArticlesGridProps {
  articles: HomepageArticleItem[];
}

const ArticlesGrid = ({ articles = [] }: ArticlesGridProps) => {
  const { lang } = useTranslation();

  return (
    <>
      <div className="lg:mt-auto lg:pb-28">
        <Link
          href={`/insights/articles/${articles[0].id}/${articles[0].slug}`}
          locale={lang}
        >
          <a>
            <ItemCard
              title={articles[0].title}
              imageUrl={articles[0].featuredImage}
              category={articles[0].categories[0].title}
              minHeight="auto"
            />
          </a>
        </Link>
      </div>
      <div className="lg:mt-auto">
        <Link
          href={`/insights/articles/${articles[1].id}/${articles[1].slug}`}
          locale={lang}
        >
          <a>
            <ItemCard
              title={articles[1].title}
              imageUrl={articles[1].featuredImage}
              category={articles[1].categories[0].title}
              minHeight="auto"
              className="lg:mb-10"
            />
          </a>
        </Link>
        <Link
          href={`/insights/articles/${articles[2].id}/${articles[2].slug}`}
          locale={lang}
        >
          <a>
            <ItemCard
              title={articles[2].title}
              imageUrl={articles[2].featuredImage}
              category={articles[2].categories[0].title}
              minHeight="auto"
              className="hidden lg:block"
            />
          </a>
        </Link>
      </div>
      <div className="hidden lg:block lg:mt-auto lg:pb-16">
        <Link
          href={`/insights/articles/${articles[3].id}/${articles[3].slug}`}
          locale={lang}
        >
          <a>
            <ItemCard
              title={articles[3].title}
              imageUrl={articles[3].featuredImage}
              category={articles[3].categories[0].title}
              minHeight="auto"
              className="lg:mb-10"
            />
          </a>
        </Link>
        <Link
          href={`/insights/articles/${articles[4].id}/${articles[4].slug}`}
          locale={lang}
        >
          <a>
            <ItemCard
              title={articles[4].title}
              imageUrl={articles[4].featuredImage}
              category={articles[4].categories[0].title}
              minHeight="auto"
            />
          </a>
        </Link>
      </div>
    </>
  );
};

export default ArticlesGrid;
