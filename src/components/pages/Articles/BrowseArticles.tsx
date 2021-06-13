import Link from 'next/link';
import { GrShare } from 'react-icons/gr';
import useTranslation from 'next-translate/useTranslation';

import { IArticleCategory, PagingResponse } from '@models';
import { Container } from '@components/common';

interface BrowseArticlesProps {
  articleCategories: PagingResponse<IArticleCategory>;
}

const NUM_OF_MAX_ARTICLES = 100;
const MAX_ARTICLE_LABEL = '99+';

const BrowseArticles = ({
  articleCategories: { edges = [] },
}: BrowseArticlesProps) => {
  const { t, lang } = useTranslation('common');
  return (
    <Container extraClasses="lg:py-10">
      <h1 className="text-2xl font-extrabold mb-8">
        Browse article by category
      </h1>
      <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
        {edges.map((category) => (
          <Link
            key={category.id}
            href={`/insights/articles/results/?categoryId=${category.id}`}
            locale={lang}
          >
            <a className="flex items-center justify-between border border-medium-gray px-4 py-3 cursor-pointer">
              <div>
                <p className="font-bold text-lg pb-2">{category.title}</p>
                <div className="flex items-center">
                  <div className="font-bold bg-bright-green px-3 py-1 mr-3">
                    {category.articlesCount < NUM_OF_MAX_ARTICLES
                      ? category.articlesCount
                      : MAX_ARTICLE_LABEL}
                  </div>
                  <p className="font-medium">
                    {t('article', { count: category.articlesCount })}
                  </p>
                </div>
              </div>
              <GrShare className="hidden sm:block" />
            </a>
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default BrowseArticles;
