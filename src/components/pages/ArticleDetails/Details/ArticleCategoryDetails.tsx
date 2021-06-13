import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

import { IArticleDetails } from '@models';
import { Container, ArticleCard } from '@components';

interface DetailsProps {
  items: IArticleDetails[];
}

const ArticleCategoryDetails = ({ items = [] }: DetailsProps) => {
  const { lang } = useTranslation();
  const categoryName = items[0]?.categories[0]?.title;

  return (
    <Container extraClasses="lg:py-10">
      <h1 className="font-extrabold text-3xl mb-8 lg:mb-10">
        {`${categoryName} Articles`}
      </h1>
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
        {items.map((item) => {
          return (
            <Link
              key={item.id}
              href={`/insights/articles/${item.id}/${item.slug}`}
              locale={lang}
            >
              <a>
                <ArticleCard
                  title={item.title}
                  imageUrl={item.featuredImage}
                  category={(item.categories || [])
                    .map((c) => c.title)
                    .join(',')}
                />
              </a>
            </Link>
          );
        })}
      </div>
    </Container>
  );
};

export default ArticleCategoryDetails;
